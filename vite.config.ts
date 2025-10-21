import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Some environments (bundled runtime) may not provide import.meta.dirname.
// Use a safe fallback so the config can be evaluated without throwing.
const metaDir = (typeof import.meta !== "undefined" && (import.meta as any).dirname) || process.cwd();

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
    resolve: {
      alias: {
        "@": path.resolve(metaDir, "client", "src"),
        "@shared": path.resolve(metaDir, "shared"),
        "@assets": path.resolve(metaDir, "attached_assets"),
      },
    },
    root: path.resolve(metaDir, "client"),
    build: {
      outDir: path.resolve(metaDir, "dist/public"),
      emptyOutDir: true,
    },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
