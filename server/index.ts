import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

// Local logger (kept minimal and safe for production). We avoid importing
// from ./vite here to prevent the bundler from including dev-only modules.
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// A small serveStatic implementation mirroring server/vite. This avoids a
// top-level import from ./vite which could pull dev-only code into the
// production bundle.
import fs from "fs";
import path from "path";

export function serveStatic(app: express.Express) {
  // common production build locations
  const prodPublicCandidates = [
    path.resolve(process.cwd(), "dist", "public"), // used by our build (dist/public)
    path.resolve(process.cwd(), "public"), // other setups
  ];
  const prodPublic = prodPublicCandidates.find((p) => fs.existsSync(p)) || prodPublicCandidates[0];
  const metaDir = (typeof import.meta !== "undefined" && (import.meta as any).dirname) || process.cwd();

  let distPath: string;
  if (process.env.NODE_ENV === "production") {
    distPath = prodPublic;
  } else {
    distPath = path.resolve(metaDir, "../client/dist");
    if (!fs.existsSync(distPath) && fs.existsSync(prodPublic)) distPath = prodPublic;
  }

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // only setup Vite when running in a development environment. Use the
  // explicit NODE_ENV value rather than Express's `app.get('env')` because
  // Docker/containers sometimes run with the default ("development") even
  // when you intend production. Guarding on NODE_ENV prevents importing
  // dev-only files (like vite.config.ts) inside a production container.
  if (process.env.NODE_ENV !== "production") {
    // dynamically import setupVite so production builds don't pull dev-only
    // packages (like 'vite') into the server bundle
    const { setupVite } = await import("./vite");
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  // choose reusePort only on platforms that support it
  const isProduction = process.env.NODE_ENV === "production";

  server.listen({
    port,
    host: isProduction ? "0.0.0.0" : "127.0.0.1",
    reusePort: true,
  }, () => {
    log(`Serving on port ${port}`);
  });
  const supportsReusePort = ['linux', 'darwin'].includes(process.platform);
  const listenOpts: any = { port, host: isProduction ? "0.0.0.0" : "127.0.0.1" };
  if (supportsReusePort) listenOpts.reusePort = true;

  server.listen(listenOpts, () => {
    log(`Serving on port ${port}`);
  });
   
  server.on('error', (err: any) => {
    log('server error:', err);
    // exit non-zero so a supervisor/container can restart if desired
    process.exit(1);
  });
})();
