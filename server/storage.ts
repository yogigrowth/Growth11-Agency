import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Comment, type InsertComment } from "@shared/schema";
import { MongoClient, Db, ObjectId } from "mongodb";

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

// MongoDB Database Storage
export class MongoDbStorage implements IStorage {
  private client: MongoClient;
  private db: Db | null = null;

  constructor() {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is required for MongoDbStorage");
    }
    
    this.client = new MongoClient(process.env.MONGODB_URI);
  }

  private async getDb(): Promise<Db> {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db();
    }
    return this.db;
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const db = await this.getDb();
    const result = await db.collection("users").findOne({ _id: new ObjectId(id) });
    if (!result) return undefined;
    
    return {
      _id: result._id.toString(),
      username: result.username,
      password: result.password,
    };
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await this.getDb();
    const result = await db.collection("users").findOne({ username });
    if (!result) return undefined;
    
    return {
      _id: result._id.toString(),
      username: result.username,
      password: result.password,
    };
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Enforce that passwords must be bcrypt hashed before storage
    const bcryptPattern = /^\$2[ayb]\$.{56}$/;
    if (!bcryptPattern.test(insertUser.password)) {
      throw new Error(
        "Password must be bcrypt hashed before storage. Use bcrypt.hash() before calling createUser."
      );
    }

    const db = await this.getDb();
    const result = await db.collection("users").insertOne(insertUser);
    
    return {
      _id: result.insertedId.toString(),
      ...insertUser,
    };
  }

  // Blog post methods
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const db = await this.getDb();
    const result = await db.collection("blogPosts").findOne({ _id: new ObjectId(id) });
    if (!result) return undefined;
    
    return {
      _id: result._id.toString(),
      title: result.title,
      content: result.content,
      category: result.category,
      media: result.media || null,
      published: result.published || false,
      likes: result.likes || 0,
      comments: result.comments || 0,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    const db = await this.getDb();
    const results = await db.collection("blogPosts")
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    
    return results.map(result => ({
      _id: result._id.toString(),
      title: result.title,
      content: result.content,
      category: result.category,
      media: result.media || null,
      published: result.published || false,
      likes: result.likes || 0,
      comments: result.comments || 0,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    }));
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const db = await this.getDb();
    const now = new Date();
    const doc = {
      ...insertPost,
      published: insertPost.published || false,
      likes: insertPost.likes || 0,
      comments: insertPost.comments || 0,
      createdAt: now,
      updatedAt: now,
    };
    
    const result = await db.collection("blogPosts").insertOne(doc);
    
    return {
      _id: result.insertedId.toString(),
      ...doc,
    };
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const db = await this.getDb();
    const result = await db.collection("blogPosts").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      },
      { returnDocument: 'after' }
    );
    
    if (!result) return undefined;
    
    return {
      _id: result._id.toString(),
      title: result.title,
      content: result.content,
      category: result.category,
      media: result.media || null,
      published: result.published || false,
      likes: result.likes || 0,
      comments: result.comments || 0,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const db = await this.getDb();
    const result = await db.collection("blogPosts").deleteOne({ _id: new ObjectId(id) });
    
    // Also delete all associated comments
    await db.collection("comments").deleteMany({ blogPostId: id });
    
    return result.deletedCount > 0;
  }

  // Comment methods
  async getCommentsByBlogPostId(blogPostId: string): Promise<Comment[]> {
    const db = await this.getDb();
    const results = await db.collection("comments")
      .find({ blogPostId })
      .sort({ createdAt: 1 })
      .toArray();
    
    return results.map(result => ({
      _id: result._id.toString(),
      blogPostId: result.blogPostId,
      authorName: result.authorName,
      content: result.content,
      createdAt: result.createdAt,
    }));
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const db = await this.getDb();
    
    // Check if blog post exists
    const blogPost = await db.collection("blogPosts").findOne({ _id: new ObjectId(insertComment.blogPostId) });
    if (!blogPost) {
      throw new Error(`Blog post with id ${insertComment.blogPostId} not found`);
    }

    const now = new Date();
    const doc = {
      ...insertComment,
      createdAt: now,
    };
    
    // Insert comment and increment blog post comment count atomically
    const result = await db.collection("comments").insertOne(doc);
    
    await db.collection("blogPosts").updateOne(
      { _id: new ObjectId(insertComment.blogPostId) },
      { 
        $inc: { comments: 1 },
        $set: { updatedAt: now }
      }
    );
    
    return {
      _id: result.insertedId.toString(),
      ...doc,
    };
  }
}

// Use MongoDB Database Storage by default
export const storage = new MongoDbStorage();
