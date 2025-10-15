-- Enable pgcrypto extension for gen_random_uuid() function
CREATE EXTENSION IF NOT EXISTS pgcrypto;
--> statement-breakpoint
CREATE TABLE "blog_posts" (
"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
"title" text NOT NULL,
"content" text NOT NULL,
"category" text NOT NULL,
"media" text,
"published" boolean DEFAULT false,
"likes" integer DEFAULT 0,
"comments" integer DEFAULT 0,
"created_at" timestamp DEFAULT now(),
"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "comments" (
"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
"blog_post_id" varchar NOT NULL,
"author_name" text NOT NULL,
"content" text NOT NULL,
"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
"username" text NOT NULL,
"password" text NOT NULL,
CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_blog_post_id_blog_posts_id_fk" FOREIGN KEY ("blog_post_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
