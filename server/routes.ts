import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertCommentSchema } from "../shared/schema";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// Authentication middleware
function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.adminToken;
  
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }
  
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET environment variable is required");
      process.exit(1);
    }
    
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Add cookie parser middleware
  app.use(cookieParser());
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

  // Blog post routes
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog-posts", requireAuth, async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Failed to create blog post:", error);
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.issues 
        });
      }
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  app.patch("/api/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      // For updates, validate partial data
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(req.params.id, validatedData);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Failed to update blog post:", error);
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.issues 
        });
      }
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deleteBlogPost(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // Admin authentication endpoints
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const adminUsername = process.env.ADMIN_USERNAME;
      const adminPassword = process.env.ADMIN_PASSWORD;
      const jwtSecret = process.env.JWT_SECRET;
      
      if (!adminUsername || !adminPassword || !jwtSecret) {
        console.error("Required environment variables missing: ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET");
        return res.status(500).json({ success: false, error: "Server configuration error" });
      }
      
      if (username === adminUsername && password === adminPassword) {
        const token = jwt.sign(
          { admin: true },
          jwtSecret,
          { expiresIn: '24h' }
        );
        
        res.cookie('adminToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    res.clearCookie('adminToken');
    res.json({ success: true });
  });

  // Admin status check endpoint
  app.get("/api/admin/status", requireAuth, (req, res) => {
    res.json({ authenticated: true });
  });

  // Comment routes
  app.get("/api/blog-posts/:id/comments", async (req, res) => {
    try {
      const comments = await storage.getCommentsByBlogPostId(req.params.id);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  app.post("/api/blog-posts/:id/comments", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertCommentSchema.parse({
        ...req.body,
        blogPostId: req.params.id
      });
      const comment = await storage.createComment(validatedData);
      res.status(201).json(comment);
    } catch (error) {
      console.error("Failed to create comment:", error);
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.issues 
        });
      }
      res.status(500).json({ error: "Failed to create comment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
