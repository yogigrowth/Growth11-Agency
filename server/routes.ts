import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml from public directory
  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.resolve(import.meta.dirname, "..", "public", "sitemap.xml");
    
    if (fs.existsSync(sitemapPath)) {
      res.set('Content-Type', 'application/xml');
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send('Sitemap not found');
    }
  });

  // Serve robots.txt from public directory
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.resolve(import.meta.dirname, "..", "public", "robots.txt");
    
    if (fs.existsSync(robotsPath)) {
      res.set('Content-Type', 'text/plain');
      res.sendFile(robotsPath);
    } else {
      res.status(404).send('Robots.txt not found');
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
