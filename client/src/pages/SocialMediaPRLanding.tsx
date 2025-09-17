import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  TrendingUp, 
  Heart, 
  Users, 
  CheckCircle, 
  Star, 
  Globe, 
  Target,
  Clock,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Zap,
  Shield,
  Camera,
  BarChart3
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Complete management of all social platforms"
  },
  {
    icon: Camera,
    title: "Content Creation & Design",
    description: "Professional posts, stories, and video content"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Engage and grow your social media following"
  },
  {
    icon: TrendingUp,
    title: "PR Campaign Management",
    description: "Strategic PR campaigns for brand awareness"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed insights and growth tracking"
  },
  {
    icon: Target,
    title: "Brand Reputation Management",
    description: "Maintain positive brand image across channels"
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Creative Excellence",
    description: "Award-winning creative team that produces engaging content that resonates with your target audience across all platforms."
  },
  {
    icon: Users,
    title: "Community Experts",
    description: "We specialize in building engaged communities around your brand, turning followers into loyal customers and brand advocates."
  },
  {
    icon: Megaphone,
    title: "PR Network Access",
    description: "Extensive network of media contacts and influencers in Rajasthan ensures maximum coverage for your brand stories."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description: "Every campaign is backed by comprehensive analytics and insights to optimize performance and maximize ROI."
  },
  {
    icon: Clock,
    title: "24/7 Management",
    description: "Round-the-clock social media monitoring and management ensures your brand never misses an opportunity to engage."
  },
  {
    icon: Shield,
    title: "Crisis Management",
    description: "Proactive reputation management and crisis response strategies to protect and enhance your brand image."
  }
];

const testimonials = [
  {
    name: "Meera Rajput",
    rating: 5,
    review: "Growth11 transformed our social media presence! Our Instagram followers grew from 2K to 50K in 8 months. Their content strategy is outstanding!"
  },
  {
    name: "Arjun Singhania",
    rating: 5,
    review: "Best social media agency in Rajasthan! Their PR campaigns got us featured in 15+ publications. Brand awareness increased tremendously."
  },
  {
    name: "Kavya Sharma",
    rating: 5,
    review: "Professional team with amazing results. Our social media engagement rates increased by 400% and we're getting daily inquiries through social channels."
  }
];

const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer: "We manage all major platforms including Instagram, Facebook, Twitter, LinkedIn, YouTube, and emerging platforms relevant to your business and target audience."
  },
  {
    question: "Do you create original content or use stock images?",
    answer: "We create 100% original, custom content tailored to your brand. This includes graphics, photos, videos, reels, and written content that aligns with your brand voice."
  },
  {
    question: "How often will you post on my social media accounts?",
    answer: "Posting frequency depends on your package, typically 4-7 posts per week per platform. We create a content calendar and maintain consistent, strategic posting schedules."
  },
  {
    question: "Can you help with PR and media coverage?",
    answer: "Yes! We have established relationships with media outlets, journalists, and publications across Rajasthan and India to secure valuable PR coverage for your brand."
  },
  {
    question: "How do you measure social media success?",
    answer: "We track engagement rates, follower growth, reach, website traffic from social media, lead generation, and conversions. Monthly reports show detailed analytics and insights."
  },
  {
    question: "Do you handle negative comments and reviews?",
    answer: "Absolutely. We provide comprehensive reputation management including responding to negative feedback professionally and implementing strategies to maintain positive brand perception."
  }
];

export default function SocialMediaPRLanding() {
  useSEO({
    title: "Social Media Marketing & PR Agency Ajmer | Growth11 Digital Marketing Rajasthan",
    description: "Expert social media management and PR services in Ajmer by Growth11. Build brand awareness, grow followers, and manage reputation with professional social media marketing in Rajasthan.",
    ogTitle: "Social Media & PR Services Ajmer - Growth11",
    ogDescription: "Transform your brand's social presence with Growth11's expert social media management and PR services in Ajmer, Rajasthan."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your Social Media Marketing and PR services to grow my brand presence. Please share package details and pricing.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Social Media & PR Services Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your Social Media Marketing and PR services to enhance my brand presence. Please share details about your packages and pricing.%0D%0A%0D%0ABest regards`, '_self');
    }
  };

  return (
    <div className="min-h-screen">
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6" data-testid="badge-hero">
                Social Media & PR Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Build Your Brand and{" "}
                <span className="text-primary">DOMINATE SOCIAL MEDIA!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Transform your social media presence with our expert management and PR strategies. We've helped 150+ brands in Rajasthan 
                build engaged communities and achieve viral growth across all platforms!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Complete Social Media Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 25,999</div>
                <div className="text-lg mt-2">per month - All platforms included!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Social Strategy
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('call')}
                  data-testid="button-hero-call"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +91 70144 31277
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6" data-testid={`card-feature-${index}`}>
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-brands">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Brands Managed</div>
              </div>
              <div data-testid="stat-followers">
                <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Followers Generated</div>
              </div>
              <div data-testid="stat-engagement">
                <div className="text-4xl font-bold text-primary mb-2">500%</div>
                <div className="text-muted-foreground">Avg Engagement Growth</div>
              </div>
              <div data-testid="stat-campaigns">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">PR Campaigns</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Growth11 Social Media
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                Rajasthan's Premier Social Media Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We don't just post content - we build communities, create viral moments, and turn your social media 
                into a powerful business growth engine that drives real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-6" data-testid={`card-why-choose-${index}`}>
                  <CardContent className="pt-6">
                    <item.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-testimonials">
                Client Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                Social Media Success Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-faq">
                Social Media FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Social Media Questions Answered
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Everything you need to know about our social media management services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-final-cta-title">
              Ready to Go Viral?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 150+ successful brands dominating social media with Growth11
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto w-full"
                onClick={() => handleContactClick('whatsapp')}
                data-testid="button-final-whatsapp"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Campaign
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => handleContactClick('call')}
                data-testid="button-final-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Expert
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-75">
              <p>Free social media audit available - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}