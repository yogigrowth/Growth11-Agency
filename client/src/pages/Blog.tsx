import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Import generated blog images
import growthWorkspaceImg from "@assets/generated_images/Digital_marketing_workspace_setup_7653e34b.png";
import performanceMarketingImg from "@assets/generated_images/Performance_marketing_results_display_301089da.png";
import conversionFunnelImg from "@assets/generated_images/Conversion_funnel_optimization_charts_a2d062d6.png";
import aiMarketingImg from "@assets/generated_images/AI_marketing_tools_interface_49f50fcd.png";

// Blog: Digital World Schema Markup Component
function BlogDigitalWorldSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Growth11 Blog: Digital World",
    "description": "Growth stories, insights and behind-the-scenes moments from Growth11 Ajmer team",
    "url": "https://growth11.in/our-diary",
    "publisher": {
      "@type": "Organization",
      "name": "Growth11",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growth11.in/logo.png"
      }
    },
    "inLanguage": "en-IN",
    "about": {
      "@type": "Thing",
      "name": "Digital Marketing"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type PostPreview = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  likes: number;
};

const initialBlogPosts: PostPreview[] = [
  {
    id: "1",
    title: "How We Scaled Nojoto to 80L MAU: Lessons in Product-Led Growth",
    category: "Growth Strategy",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    mediaType: "image",
    mediaUrl: growthWorkspaceImg,
    likes: 127
  },
  {
    id: "2",
    title: "Performance Marketing for D2C Brands: A Complete Guide",
    category: "Marketing",
    date: "Dec 10, 2024", 
    readTime: "12 min read",
    mediaType: "image",
    mediaUrl: performanceMarketingImg,
    likes: 143
  },
  {
    id: "3",
    title: "Building Conversion Funnels That Actually Convert",
    category: "Conversion",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    mediaType: "image",
    mediaUrl: conversionFunnelImg,
    likes: 118
  },
  {
    id: "4",
    title: "The Future of AI in Digital Marketing",
    category: "Technology",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    mediaType: "image",
    mediaUrl: aiMarketingImg,
    likes: 135
  }
];

export default function Blog() {
  const [location, navigate] = useLocation();
  const [likingPosts, setLikingPosts] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  // Fetch blog posts from API instead of using static data
  const { 
    data: blogPosts = [], 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ["/api/blog-posts"],
    select: (posts: any[]) => posts.map(post => ({
      id: post.id,
      title: post.title,
      category: post.category,
      date: new Date(post.createdAt).toLocaleDateString("en-US", { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      readTime: "5 min read", // Default read time
      mediaType: "image" as const,
      mediaUrl: post.media || growthWorkspaceImg, // Fallback to default image
      likes: post.likes || 0
    }))
  });

  useSEO({
    title: "Blog: Digital World - Growth11 Ajmer | Growth Stories & Insights from Rajasthan",
    description: "Growth11 Ajmer Blog: Digital World - Growth stories, insights and behind-the-scenes moments from our team in Ajmer, Rajasthan. Real lessons from real growth.",
    ogTitle: "Blog: Digital World - Growth11 Ajmer, Rajasthan",
    ogDescription: "Growth stories and insights from Growth11 Ajmer. Behind-the-scenes moments and lessons from entrepreneurs in Rajasthan."
  });


  const handleLike = async (postId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Prevent multiple likes for the same post
    if (likingPosts.has(postId)) return;
    
    // Fix state mutation - create new Set without mutating prev
    setLikingPosts(prev => {
      const newSet = new Set(prev);
      newSet.add(postId);
      return newSet;
    });

    try {
      const response = await apiRequest("POST", `/api/blog-posts/${postId}/like`);
      const data = await response.json();
      
      toast({
        title: "Liked!",
        description: "Thank you for liking this post.",
      });
      
      // Refetch data to get updated likes from server
      refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to like post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLikingPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(postId);
        return newSet;
      });
    }
  };

  return (
    <div className="min-h-screen">
      <BlogDigitalWorldSchema />
      <Navigation />
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-blog-page">
                Blog: Digital World
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-page-title">
                News about Digital World
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-page-intro">
                Behind-the-scenes moments and growth lessons from Growth11 Ajmer
              </p>
            </div>

            {/* Instagram-style 2x2 Grid */}
            <div className="max-w-4xl mx-auto">
              {isLoading ? (
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="aspect-square bg-muted rounded-lg" />
                      <div className="p-4 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-3 bg-muted rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                  {blogPosts.map((post, index) => (
                  <Link 
                    key={post.title}
                    href={`/our-diary/${post.id}`}
                    className="block bg-background rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02] cursor-pointer hover-elevate"
                    data-testid={`post-instagram-${index}`}
                  >
                    {/* Image/Video Container */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      {post.mediaType === "video" ? (
                        <video
                          src={post.mediaUrl}
                          className="w-full h-full object-cover"
                          controls={false}
                          muted
                          loop
                          playsInline
                          data-testid={`video-post-${index}`}
                        />
                      ) : (
                        <img 
                          src={post.mediaUrl}
                          alt={`${post.title} - Growth11 digital marketing visual story`}
                          className="w-full h-full object-cover"
                          data-testid={`img-post-${index}`}
                        />
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-background/80 backdrop-blur-sm text-xs"
                          data-testid={`badge-category-${index}`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Below Image */}
                    <div className="p-4">
                      {/* Instagram-style interaction icons */}
                      <div className="flex items-center gap-4 mb-3">
                        <button 
                          onClick={(e) => handleLike(post.id, e)}
                          className="hover:scale-110 transition-transform"
                          disabled={likingPosts.has(post.id)}
                          data-testid={`button-like-${index}`}
                        >
                          <Heart className={`h-5 w-5 transition-colors ${
                            likingPosts.has(post.id) 
                              ? 'text-red-500 animate-pulse' 
                              : 'hover:text-red-500'
                          }`} />
                        </button>
                        <MessageCircle className="h-5 w-5 text-muted-foreground" />
                        {/* Likes count inline with buttons */}
                        <span className="text-sm font-medium ml-auto" data-testid={`text-likes-${index}`}>
                          {post.likes} likes
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-sm leading-tight mb-3" data-testid={`text-title-${index}`}>
                        {post.title}
                      </h3>

                      {/* Meta info */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1" data-testid={`text-date-${index}`}>
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1" data-testid={`text-read-time-${index}`}>
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Click anywhere on card to read story */}
                      <div className="text-xs text-muted-foreground text-center p-2 border border-dashed border-muted-foreground/30 rounded" data-testid={`text-click-hint-${index}`}>
                        Click anywhere to read story
                      </div>
                    </div>
                  </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}