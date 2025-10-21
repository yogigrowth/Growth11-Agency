import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";
import { nanoid } from "nanoid";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Dynamically import Vite and the vite config to avoid requiring dev-only
  // packages at runtime (production image doesn't install devDependencies).
  const { createServer: createViteServer, createLogger } = await import("vite");
  const viteLogger = createLogger();

  const viteConfigModule = await import("../vite.config");
  const viteConfig = (viteConfigModule && (viteConfigModule.default || viteConfigModule)) || {};

  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // In production the built client is copied to ./public by the Dockerfile.
  // In development the client build lives next to the source ../client/dist.
  const prodPublicCandidates = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "public"),
  ];
  const prodPublic = prodPublicCandidates.find((p) => fs.existsSync(p)) || prodPublicCandidates[0];

  // import.meta.dirname may be undefined in the bundled runtime; guard it.
  const metaDir = (typeof import.meta !== "undefined" && (import.meta as any).dirname) || process.cwd();

  let distPath: string;
  if (process.env.NODE_ENV === "production") {
    distPath = prodPublic;
  } else {
    distPath = path.resolve(metaDir, "../client/dist");
    // fallback to prodPublic if developer built into a different location
    if (!fs.existsSync(distPath) && fs.existsSync(prodPublic)) distPath = prodPublic;
  }

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
