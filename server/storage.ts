import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Comment, type InsertComment, users, blogPosts, comments } from "@shared/schema";
import { randomUUID } from "crypto";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq, desc, asc, sql } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog post methods
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Comment methods
  getCommentsByBlogPostId(blogPostId: string): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
}

// PostgreSQL Database Storage using Drizzle ORM
export class DbStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required for DbStorage");
    }
    
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    this.db = drizzle(pool);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Enforce that passwords must be bcrypt hashed before storage
    // Bcrypt hashes start with $2a$, $2b$, or $2y$ and are 60 characters long
    const bcryptPattern = /^\$2[ayb]\$.{56}$/;
    if (!bcryptPattern.test(insertUser.password)) {
      throw new Error(
        "Password must be bcrypt hashed before storage. Use bcrypt.hash() before calling createUser."
      );
    }

    const result = await this.db
      .insert(users)
      .values(insertUser)
      .returning();
    
    return result[0];
  }

  // Blog post methods
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .limit(1);
    
    return result[0];
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    const result = await this.db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.createdAt));
    
    return result;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db
      .insert(blogPosts)
      .values(insertPost)
      .returning();
    
    return result[0];
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const result = await this.db
      .update(blogPosts)
      .set({
        ...updateData,
        updatedAt: new Date()
      })
      .where(eq(blogPosts.id, id))
      .returning();
    
    return result[0];
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await this.db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id))
      .returning();
    
    return result.length > 0;
  }

  // Comment methods
  async getCommentsByBlogPostId(blogPostId: string): Promise<Comment[]> {
    const result = await this.db
      .select()
      .from(comments)
      .where(eq(comments.blogPostId, blogPostId))
      .orderBy(asc(comments.createdAt));
    
    return result;
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    // Use transaction to ensure atomic comment creation and count update
    return await this.db.transaction(async (tx) => {
      // Create the comment first (will fail with FK constraint if blog post doesn't exist)
      const result = await tx
        .insert(comments)
        .values(insertComment)
        .returning();
      
      // Atomically increment blog post comment count using SQL expression
      // This prevents race conditions by computing the increment at the database level
      // Note: Using snake_case column names as they appear in the actual database
      await tx.execute(
        sql`UPDATE blog_posts 
            SET comments = COALESCE(comments, 0) + 1, 
                updated_at = NOW() 
            WHERE id = ${insertComment.blogPostId}`
      );
      
      return result[0];
    });
  }
}

// In-Memory Storage (for development/testing)
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private comments: Map<string, Comment>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.comments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Blog post methods
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost,
      published: insertPost.published || false,
      likes: insertPost.likes || 0,
      comments: insertPost.comments || 0,
      media: insertPost.media || null,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) {
      return undefined;
    }

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date()
    };
    
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  // Comment methods
  async getCommentsByBlogPostId(blogPostId: string): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.blogPostId === blogPostId)
      .sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime());
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    // Validate that the blog post exists before creating comment
    const blogPost = this.blogPosts.get(insertComment.blogPostId);
    if (!blogPost) {
      throw new Error(`Blog post with id ${insertComment.blogPostId} not found`);
    }

    const id = randomUUID();
    const now = new Date();
    const comment: Comment = {
      ...insertComment,
      id,
      createdAt: now
    };
    this.comments.set(id, comment);
    
    // Update blog post comment count
    const updatedPost: BlogPost = {
      ...blogPost,
      comments: (blogPost.comments || 0) + 1,
      updatedAt: now
    };
    this.blogPosts.set(insertComment.blogPostId, updatedPost);
    
    return comment;
  }
}

// Use PostgreSQL Database Storage by default
export const storage = new DbStorage();
