import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertCommentSchema } from "../shared/schema";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";
import { ObjectPermission } from "./objectAcl";

// Dynamic sitemap generation function
async function generateSitemap(): Promise<string> {
  // Use configurable base URL with fallback
  const baseUrl = process.env.BASE_URL || "https://growth11.in";
  
  // Fixed date for static pages (when they were last updated)
  const staticPageDate = "2025-09-17";
  
  // Current date for dynamic content only
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: "/", lastmod: staticPageDate, changefreq: "weekly", priority: "1.0" },
    { url: "/about", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/services", lastmod: staticPageDate, changefreq: "weekly", priority: "0.9" },
    { url: "/partners", lastmod: staticPageDate, changefreq: "monthly", priority: "0.7" },
    { url: "/case-study", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/contact", lastmod: staticPageDate, changefreq: "monthly", priority: "0.6" },
    { url: "/career", lastmod: staticPageDate, changefreq: "monthly", priority: "0.5" },
    { url: "/our-diary", lastmod: staticPageDate, changefreq: "weekly", priority: "0.6" },
    { url: "/privacy", lastmod: staticPageDate, changefreq: "yearly", priority: "0.3" },
    { url: "/terms", lastmod: staticPageDate, changefreq: "yearly", priority: "0.3" }
  ];
  
  // Service landing pages with higher priority
  const serviceLandingPages = [
    { url: "/website-9999", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/ai-videos-10000", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/seo-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/social-media-pr-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/influencer-marketing-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/performance-marketing-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/conversion-retention-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" },
    { url: "/product-growth-landing", lastmod: staticPageDate, changefreq: "monthly", priority: "0.8" }
  ];
  
  // Get all published blog posts
  const allBlogPosts = await storage.getAllBlogPosts();
  const publishedBlogPosts = allBlogPosts.filter(post => post.published);
  
  // Create blog post URLs
  const blogPostPages = publishedBlogPosts.map(post => ({
    url: `/our-diary/${post._id}`,
    lastmod: (post.updatedAt || post.createdAt || new Date()).toISOString().split('T')[0],
    changefreq: "weekly",
    priority: "0.7"
  }));
  
  // Combine all pages
  const allPages = [...staticPages, ...serviceLandingPages, ...blogPostPages];
  
  // Generate XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;
  
  // Add each page to the sitemap
  allPages.forEach(page => {
    sitemap += `  <url>
`;
    sitemap += `    <loc>${baseUrl}${page.url}</loc>
`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>
`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>
`;
    sitemap += `    <priority>${page.priority}</priority>
`;
    sitemap += `  </url>
`;
  });
  
  sitemap += `</urlset>`;
  
  return sitemap;
}

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
  // Generate dynamic sitemap.xml
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const sitemap = await generateSitemap();
      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error("Error generating sitemap:", error);
      res.status(500).send('Error generating sitemap');
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

  // Like/unlike blog post endpoint
  app.post("/api/blog-posts/:id/like", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }

      const updatedPost = await storage.updateBlogPost(req.params.id, {
        likes: (post.likes || 0) + 1
      });
      
      if (!updatedPost) {
        return res.status(500).json({ error: "Failed to update likes" });
      }
      
      res.json({ likes: updatedPost.likes });
    } catch (error) {
      console.error("Failed to like blog post:", error);
      res.status(500).json({ error: "Failed to like blog post" });
    }
  });

  // Admin authentication endpoints
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const adminUsername = process.env.ADMIN_USERNAME?.trim();
      const adminPassword = process.env.ADMIN_PASSWORD?.trim();
      const jwtSecret = process.env.JWT_SECRET?.trim();
      
      
      if (!adminUsername || !adminPassword || !jwtSecret) {
        console.error("Required environment variables missing: ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET");
        return res.status(500).json({ success: false, error: "Server configuration error" });
      }
      
      // Check if we have a valid username match first
      if (username !== adminUsername) {
        return res.status(401).json({ success: false, error: "Invalid credentials" });
      }
      
      // Use bcrypt to compare password with hashed version
      const isPasswordValid = await bcrypt.compare(password, adminPassword);
      
      if (isPasswordValid) {
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

  // Utility endpoint to generate hashed password (only in development)
  app.post("/api/admin/hash-password", (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({ error: "Not available in production" });
    }
    
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: "Failed to hash password" });
      }
      res.json({ hash });
    });
  });

  // File upload endpoints for admin
  app.post("/api/objects/upload", requireAuth, async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  app.put("/api/media/upload", requireAuth, async (req, res) => {
    try {
      if (!req.body.mediaURL) {
        return res.status(400).json({ error: "mediaURL is required" });
      }

      const objectStorageService = new ObjectStorageService();
      const objectPath = objectStorageService.normalizeObjectEntityPath(
        req.body.mediaURL,
      );

      // Set ACL policy for uploaded media (public since it's for blog posts)
      if (objectPath.startsWith("/objects/")) {
        const objectFile = await objectStorageService.getObjectEntityFile(objectPath);
        const objectPath2 = await objectStorageService.trySetObjectEntityAclPolicy(req.body.mediaURL, {
          owner: "admin",
          visibility: "public",
        });
        console.log("ACL policy set for object:", objectPath2);
      }

      res.status(200).json({
        objectPath: objectPath,
      });
    } catch (error) {
      console.error("Error processing uploaded media:", error);
      res.status(500).json({ error: "Failed to process uploaded media" });
    }
  });

  // Serve uploaded objects with proper ACL enforcement
  app.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(
        req.path,
      );
      
      // Check if user can access this object
      const canAccess = await objectStorageService.canAccessObjectEntity({
        objectFile,
        requestedPermission: ObjectPermission.READ,
      });
      
      if (!canAccess) {
        return res.sendStatus(403);
      }
      
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error accessing object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
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
      // Handle blog post not found error
      if (error instanceof Error && error.message.includes("not found")) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.status(500).json({ error: "Failed to create comment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
