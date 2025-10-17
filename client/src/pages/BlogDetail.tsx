import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Heart, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import type { BlogPost as BlogPostSchema } from "@shared/schema";

// Import generated blog images
import growthWorkspaceImg from "@assets/generated_images/Digital_marketing_workspace_setup_7653e34b.png";
import performanceMarketingImg from "@assets/generated_images/Performance_marketing_results_display_301089da.png";
import conversionFunnelImg from "@assets/generated_images/Conversion_funnel_optimization_charts_a2d062d6.png";
import aiMarketingImg from "@assets/generated_images/AI_marketing_tools_interface_49f50fcd.png";

// Extend the database BlogPost type with display fields
type BlogPost = BlogPostSchema & {
  date?: string;
  readTime?: string;
};

// Blog Detail Schema Markup Component  
function BlogPostSchemaMarkup({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.content.substring(0, 160),
    "image": post.media,
    "author": {
      "@type": "Organization",
      "name": "Growth11"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Growth11",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growth11.in/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper functions for blog post display
const getReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

const formatDisplayDate = (dateString: string | Date): string => {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Static blog post images mapping (since they're imported statically)
const imageMap: Record<string, string> = {
  "1": growthWorkspaceImg,
  "2": performanceMarketingImg,
  "3": conversionFunnelImg,
  "4": aiMarketingImg,
};

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [location, navigate] = useLocation();
  const [likes, setLikes] = useState(0);

  // Fetch blog post from API
  const {
    data: post,
    isLoading,
    error,
  } = useQuery<BlogPost>({
    queryKey: ["/api/blog-posts", id],
    enabled: !!id,
  });

  // Derive display values
  const heroUrl = post?.media || (id ? imageMap[id] : undefined);
  const readTime = post ? getReadTime(post.content) : "";
  const displayDate = post?.createdAt ? formatDisplayDate(post.createdAt) : "";

  useEffect(() => {
    if (post?.likes != null) {
      setLikes(post.likes);
    }
  }, [post?.likes]);

  useSEO({
    title: post ? `${post.title} - Growth11 Ajmer Blog` : "Blog Post - Growth11 Ajmer",
    description: post ? post.content.substring(0, 160) : "Growth stories and insights from Growth11 Ajmer",
    ogTitle: post?.title || "Blog Post - Growth11 Ajmer",
    ogDescription: post ? post.content.substring(0, 160) : "Growth stories and insights from Growth11 Ajmer"
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-8"></div>
              <div className="h-64 bg-muted rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/our-diary")} data-testid="button-back-to-blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Extend post with display fields for schema markup
  const postWithDisplayFields = {
    ...post,
    date: displayDate,
    readTime: readTime,
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleBackToBlog = () => {
    navigate("/our-diary");
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mb-4 mt-8">{trimmedLine.substring(3)}</h2>;
      }
      
      if (trimmedLine.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mb-3 mt-6">{trimmedLine.substring(4)}</h3>;
      }
      
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        return <p key={index} className="font-semibold mb-2">{trimmedLine.slice(2, -2)}</p>;
      }
      
      if (trimmedLine.startsWith('- ')) {
        return <li key={index} className="mb-1">{trimmedLine.substring(2)}</li>;
      }
      
      if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && !trimmedLine.includes('**')) {
        return <p key={index} className="italic text-center text-muted-foreground mb-4">{trimmedLine.slice(1, -1)}</p>;
      }
      
      if (trimmedLine === '---') {
        return <hr key={index} className="my-8 border-border" />;
      }
      
      if (trimmedLine === '') {
        return <div key={index} className="h-4"></div>;
      }
      
      return <p key={index} className="mb-4 leading-relaxed">{trimmedLine}</p>;
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {post && <BlogPostSchemaMarkup post={postWithDisplayFields} />}
      
      <main>
        <article className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back to blog link */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToBlog}
                className="hover-elevate p-0 h-auto text-muted-foreground hover:text-foreground"
                data-testid="button-back-to-blog-top"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm">{post.category}</Badge>
            </div>

            {/* Hero Image */}
            {heroUrl && (
              <div className="mb-8">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={heroUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-testid="img-blog-detail-hero"
                  />
                </div>
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-detail-title">
                {post.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                {displayDate && (
                  <div className="flex items-center gap-2" data-testid="text-blog-detail-date">
                    <Calendar className="h-4 w-4" />
                    {displayDate}
                  </div>
                )}
                {readTime && (
                  <div className="flex items-center gap-2" data-testid="text-blog-detail-read-time">
                    <Clock className="h-4 w-4" />
                    {readTime}
                  </div>
                )}
              </div>

              {/* Social Interactions */}
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <button 
                  onClick={handleLike}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                  data-testid="button-blog-detail-like"
                >
                  <Heart className="h-5 w-5 hover:text-red-500 transition-colors" />
                  <span className="font-medium">{likes}</span>
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments || 0} Comments</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12" data-testid="content-blog-detail-body">
              {renderContent(post.content)}
            </div>

            {/* Comments Section */}
            <div className="border-t border-border pt-8">
              <Comments blogPostId={post._id} />
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg border">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to grow your business?</h3>
                <p className="text-muted-foreground mb-4">
                  Get expert growth strategies and digital marketing solutions from Growth11 Ajmer.
                </p>
                <Button 
                  onClick={() => navigate("/contact")}
                  data-testid="button-blog-detail-cta"
                  className="hover-elevate"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8 text-center">
              <Button 
                variant="outline"
                onClick={handleBackToBlog}
                className="hover-elevate"
                data-testid="button-back-to-blog-bottom"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
