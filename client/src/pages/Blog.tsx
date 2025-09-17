import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

// Import generated blog images
import growthWorkspaceImg from "@assets/generated_images/Digital_marketing_workspace_setup_7653e34b.png";
import performanceMarketingImg from "@assets/generated_images/Performance_marketing_results_display_301089da.png";
import conversionFunnelImg from "@assets/generated_images/Conversion_funnel_optimization_charts_a2d062d6.png";
import aiMarketingImg from "@assets/generated_images/AI_marketing_tools_interface_49f50fcd.png";

// Blog Schema Markup Component
function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Growth11 Digital Marketing Blog",
    "description": "Digital marketing insights, growth strategies, and business tips from Growth11 Ajmer team",
    "url": "https://growth11.in/blog",
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
  const [blogPosts, setBlogPosts] = useState<PostPreview[]>(initialBlogPosts);

  useSEO({
    title: "Digital Marketing Blog - Growth11 Ajmer | Marketing Insights & Strategies for Rajasthan",
    description: "Growth11 Ajmer blog - Digital marketing insights, growth strategies, and business tips for entrepreneurs in Ajmer, Rajasthan. Learn from expert marketers.",
    ogTitle: "Digital Marketing Blog - Growth11 Ajmer, Rajasthan",
    ogDescription: "Expert digital marketing insights and growth strategies from Growth11 Ajmer. Business tips and lessons for entrepreneurs in Rajasthan."
  });

  const handleReadStory = (postTitle: string) => {
    console.log(`Read story clicked for: ${postTitle}`);
  };

  const handleLike = (postId: string) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen">
      <BlogSchema />
      <Navigation />
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-blog-page">
                Growth Stories from Ajmer
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-page-title">
                Visual Stories & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-page-intro">
                Behind-the-scenes moments and growth lessons from Growth11 Ajmer
              </p>
            </div>

            {/* Instagram-style 2x2 Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.title}
                    className="bg-background rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
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
                          onClick={() => handleLike(post.id)}
                          className="hover:scale-110 transition-transform"
                          data-testid={`button-like-${index}`}
                        >
                          <Heart className="h-5 w-5 hover:text-red-500 transition-colors" />
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

                      {/* Read Story CTA */}
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleReadStory(post.title)}
                        className="w-full text-xs hover-elevate"
                        data-testid={`button-read-story-${index}`}
                      >
                        Read Story
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}