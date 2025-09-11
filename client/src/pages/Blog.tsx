import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

// todo: remove mock functionality - replace with real blog posts
const blogPosts = [
  {
    title: "How We Scaled Nojoto to 80L MAU: Lessons in Product-Led Growth",
    excerpt: "The complete story of how we built and scaled Nojoto from a bootstrap startup to 80 lakh monthly active users.",
    category: "Growth Strategy",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Performance Marketing for D2C Brands: A Complete Guide",
    excerpt: "Learn how to create high-converting campaigns that deliver 4X ROAS and drive sustainable growth.",
    category: "Marketing",
    date: "Dec 10, 2024", 
    readTime: "12 min read",
    featured: false
  },
  {
    title: "Building Conversion Funnels That Actually Convert",
    excerpt: "Practical strategies for optimizing your e-commerce funnel to maximize revenue and retention.",
    category: "Conversion",
    date: "Dec 5, 2024",
    readTime: "10 min read", 
    featured: false
  },
  {
    title: "The Future of AI in Digital Marketing",
    excerpt: "How AI-powered tools are revolutionizing content creation, targeting, and campaign optimization.",
    category: "Technology",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false
  }
];

export default function Blog() {
  useSEO({
    title: "Digital Marketing Blog - Growth11 Ajmer | Marketing Insights & Strategies for Rajasthan",
    description: "Growth11 Ajmer blog - Digital marketing insights, growth strategies, and business tips for entrepreneurs in Ajmer, Rajasthan. Learn from expert marketers.",
    ogTitle: "Digital Marketing Blog - Growth11 Ajmer, Rajasthan",
    ogDescription: "Expert digital marketing insights and growth strategies from Growth11 Ajmer. Business tips and lessons for entrepreneurs in Rajasthan."
  });

  const handleReadMore = (postTitle: string) => {
    console.log(`Read more clicked for: ${postTitle}`);
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-blog-page">
                Growth Insights from Ajmer
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-blog-page-title">
                Learn from Growth11 Ajmer's Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-blog-page-intro">
                Digital marketing insights, strategies, and lessons from Growth11 Ajmer team for scaling businesses in Rajasthan.
              </p>
            </div>

            {featuredPost && (
              <div className="max-w-4xl mx-auto mb-16">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <Badge className="mb-4" data-testid="badge-featured">Featured Post</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-featured-title">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6" data-testid="text-featured-excerpt">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1" data-testid="text-featured-date">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1" data-testid="text-featured-read-time">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                      <Badge variant="outline" data-testid="badge-featured-category">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <Button 
                      onClick={() => handleReadMore(featuredPost.title)}
                      data-testid="button-featured-read-more"
                      className="hover-elevate"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8" data-testid="text-recent-posts">Recent Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post, index) => (
                  <Card 
                    key={post.title}
                    className="hover-elevate cursor-pointer transition-all duration-200"
                    onClick={() => handleReadMore(post.title)}
                    data-testid={`card-blog-post-${index}`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" data-testid={`badge-post-category-${index}`}>
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight" data-testid={`text-post-title-${index}`}>
                        {post.title}
                      </CardTitle>
                      <CardDescription data-testid={`text-post-excerpt-${index}`}>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1" data-testid={`text-post-date-${index}`}>
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1" data-testid={`text-post-read-time-${index}`}>
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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