import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Comment, type InsertComment } from "@shared/schema";
import { randomUUID } from "crypto";

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

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private comments: Map<string, Comment>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.comments = new Map();
    
    // Add seed blog posts to match frontend expectations
    this.initializeSeedData();
  }
  
  private initializeSeedData() {
    const seedPosts: BlogPost[] = [
      {
        id: "1",
        title: "How We Scaled Nojoto to 80L MAU: Lessons in Product-Led Growth",
        content: "Product-led growth has become the cornerstone of successful scaling strategies. In our journey with Nojoto, we discovered that the key to reaching 80 lakh Monthly Active Users lies in creating a product that sells itself through exceptional user experience and organic growth mechanics.",
        excerpt: "Learn how we scaled Nojoto to 80 lakh MAU through product-led growth strategies and user-centric design principles.",
        category: "Growth Strategy",
        author: "Growth11 Team",
        slug: "nojoto-scaling-product-led-growth",
        published: true,
        mediaType: "image" as const,
        mediaUrl: null,
        likes: 127,
        comments: 0,
        createdAt: new Date("2024-12-15"),
        updatedAt: new Date("2024-12-15")
      },
      {
        id: "2",
        title: "Performance Marketing for D2C Brands: A Complete Guide",
        content: "Performance marketing has become the backbone of successful D2C brands. In our experience helping businesses scale at Growth11 Ajmer, we've seen how the right performance marketing strategy can transform a small business into a market leader.",
        excerpt: "A comprehensive guide to performance marketing strategies that help D2C brands achieve measurable growth and ROI.",
        category: "Marketing",
        author: "Growth11 Team",
        slug: "performance-marketing-d2c-brands-guide",
        published: true,
        mediaType: "image" as const,
        mediaUrl: null,
        likes: 143,
        comments: 0,
        createdAt: new Date("2024-12-10"),
        updatedAt: new Date("2024-12-10")
      },
      {
        id: "3",
        title: "Building Conversion Funnels That Actually Convert",
        content: "Conversion funnels are the backbone of any successful digital marketing strategy. At Growth11, we've helped dozens of companies optimize their funnels to achieve conversion rates that seemed impossible before our intervention.",
        excerpt: "Learn the proven strategies for building high-converting funnels that turn visitors into customers.",
        category: "Conversion",
        author: "Growth11 Team",
        slug: "building-high-converting-funnels",
        published: true,
        mediaType: "image" as const,
        mediaUrl: null,
        likes: 118,
        comments: 0,
        createdAt: new Date("2024-12-05"),
        updatedAt: new Date("2024-12-05")
      },
      {
        id: "4",
        title: "The Future of AI in Digital Marketing",
        content: "Artificial Intelligence is revolutionizing digital marketing in ways we couldn't imagine just a few years ago. From personalized content creation to predictive analytics, AI is helping businesses connect with their customers more effectively than ever before.",
        excerpt: "Explore how AI is transforming digital marketing and what it means for the future of customer engagement.",
        category: "Technology",
        author: "Growth11 Team",
        slug: "future-ai-digital-marketing",
        published: true,
        mediaType: "image" as const,
        mediaUrl: null,
        likes: 135,
        comments: 0,
        createdAt: new Date("2024-11-28"),
        updatedAt: new Date("2024-11-28")
      }
    ];
    
    // Add seed posts to the storage
    seedPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
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
      mediaType: insertPost.mediaType || "image",
      mediaUrl: insertPost.mediaUrl || null,
      published: insertPost.published || false,
      likes: insertPost.likes || 0,
      comments: insertPost.comments || 0,
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

export const storage = new MemStorage();
