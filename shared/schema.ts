import { z } from "zod";

export const userSchema = z.object({
  _id: z.string(),
  username: z.string(),
  password: z.string(),
});

export const blogPostSchema = z.object({
  _id: z.string(),
  title: z.string(),
  content: z.string(),
  category: z.string(),
  media: z.string().optional().nullable(),
  published: z.boolean().default(false),
  likes: z.number().default(0),
  comments: z.number().default(0),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const commentSchema = z.object({
  _id: z.string(),
  blogPostId: z.string(),
  authorName: z.string(),
  content: z.string(),
  createdAt: z.date(),
});

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const insertBlogPostSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  media: z.string().optional().nullable(),
  published: z.boolean().optional().default(false),
  likes: z.number().optional().default(0),
  comments: z.number().optional().default(0),
});

export const insertCommentSchema = z.object({
  blogPostId: z.string(),
  authorName: z.string(),
  content: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type Comment = z.infer<typeof commentSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertComment = z.infer<typeof insertCommentSchema>;
