import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Repeat, 
  TrendingUp, 
  Users, 
  Rocket, 
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
  BarChart3,
  Layers
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Repeat,
    title: "Growth Loop Engineering",
    description: "Build self-reinforcing growth systems"
  },
  {
    icon: Users,
    title: "Referral System Design",
    description: "Word-of-mouth marketing automation"
  },
  {
    icon: Rocket,
    title: "Viral Coefficient Optimization",
    description: "Maximize organic user acquisition"
  },
  {
    icon: BarChart3,
    title: "Product Analytics Setup",
    description: "Data-driven growth decision making"
  },
  {
    icon: Target,
    title: "User Activation Funnels",
    description: "Convert signups into active users"
  },
  {
    icon: Layers,
    title: "Feature Launch Strategy",
    description: "Growth-focused product development"
  }
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: "Product-Led Growth Experts",
    description: "Deep expertise in building products that grow themselves through user value, viral mechanics, and network effects."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Growth Engineering",
    description: "Every growth strategy backed by comprehensive analytics, user behavior tracking, and growth metrics optimization."
  },
  {
    icon: Repeat,
    title: "Sustainable Growth Systems",
    description: "We build long-term growth loops and referral systems that scale exponentially without proportional marketing spend increases."
  },
  {
    icon: Users,
    title: "User-Centric Approach",
    description: "Focus on delivering exceptional user value first, then engineering growth mechanisms around that core value proposition."
  },
  {
    icon: Clock,
    title: "Rapid Experimentation",
    description: "Fast-paced growth experimentation with weekly testing cycles to quickly identify and scale winning growth tactics."
  },
  {
    icon: Award,
    title: "Proven Growth Results",
    description: "Helped 50+ products achieve sustainable growth with average 400% increase in organic user acquisition and 300% retention boost."
  }
];

const testimonials = [
  {
    name: "Ankit Sharma",
    rating: 5,
    review: "Growth11 built incredible growth loops for our SaaS product! User acquisition increased 500% organically and our viral coefficient hit 1.8. Amazing results!"
  },
  {
    name: "Priyanka Singh",
    rating: 5,
    review: "Best product growth team in India! Their referral system generated 60% of our new users. Product-led growth strategy was game-changing for our startup."
  },
  {
    name: "Rahul Gupta",
    rating: 5,
    review: "Outstanding product growth expertise! They optimized our onboarding funnel and activation rates improved by 250%. User retention doubled in just 4 months."
  }
];

const faqs = [
  {
    question: "What is Product-Led Growth (PLG)?",
    answer: "PLG is a strategy where the product itself drives user acquisition, retention, and expansion. Instead of relying solely on marketing and sales, the product delivers value that encourages users to organically share and upgrade."
  },
  {
    question: "How do you build effective growth loops?",
    answer: "We identify key user actions that can trigger new user acquisition, then design systems where satisfied users naturally bring in more users through referrals, content sharing, or network effects."
  },
  {
    question: "What types of products benefit from PLG strategies?",
    answer: "SaaS products, mobile apps, marketplaces, social platforms, and any product with network effects or user-generated content. We customize strategies based on your specific product and user behavior."
  },
  {
    question: "How do you measure product growth success?",
    answer: "We track viral coefficient, organic acquisition rates, user activation metrics, retention cohorts, and expansion revenue. We focus on sustainable growth metrics, not just vanity metrics."
  },
  {
    question: "Do you help with product development or just growth strategy?",
    answer: "We provide both growth strategy and work with your product team to implement growth features, optimize user flows, and build viral mechanics directly into your product experience."
  },
  {
    question: "How long does it take to see product-led growth results?",
    answer: "Initial improvements in user activation typically show within 30-60 days. Significant viral growth and referral system results usually manifest within 90-120 days as systems mature."
  }
];

export default function ProductGrowthLanding() {
  useSEO({
    title: "Product-Led Growth Strategy & Viral Marketing Services | Growth11 Digital Agency Ajmer Rajasthan",
    description: "Expert Product-Led Growth services in Ajmer by Growth11. Build viral growth loops, referral systems, and product-driven acquisition strategies for sustainable business growth in Rajasthan.",
    ogTitle: "Product-Led Growth Services Ajmer - Growth11",
    ogDescription: "Scale your product with Growth11's expert product-led growth strategies. Build viral loops and referral systems that drive organic user acquisition."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your Product-Led Growth services to build viral growth loops and referral systems for my product. Please share package details and pricing.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Product-Led Growth Strategy Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your Product-Led Growth services to build sustainable growth systems for my product. Please share details about your strategies and pricing.%0D%0A%0D%0ABest regards`, '_self');
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
                Product Growth Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Build Viral Growth Loops and{" "}
                <span className="text-primary">SCALE YOUR PRODUCT EXPONENTIALLY!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Transform your product into a growth engine with our proven product-led growth strategies. We've helped 50+ products 
                achieve 400% organic user acquisition growth through viral loops and referral systems!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Product Growth Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 85,999</div>
                <div className="text-lg mt-2">per month - Exponential growth guaranteed!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Build Growth Loops
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
              <div data-testid="stat-products">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Products Scaled</div>
              </div>
              <div data-testid="stat-growth">
                <div className="text-4xl font-bold text-primary mb-2">400%</div>
                <div className="text-muted-foreground">Avg Organic Growth</div>
              </div>
              <div data-testid="stat-users">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Users Acquired Organically</div>
              </div>
              <div data-testid="stat-viral">
                <div className="text-4xl font-bold text-primary mb-2">2.5x</div>
                <div className="text-muted-foreground">Average Viral Coefficient</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Growth11 PLG
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                India's Leading Product Growth Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We don't just optimize marketing campaigns - we engineer your product itself to become a growth machine 
                that scales exponentially through user value and viral mechanics built into the core experience.
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
                Growth Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                Product-Led Growth Results
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
                Product Growth FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Product-Led Growth Questions
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Everything you need to know about product-led growth and viral marketing.
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
              Ready to Engineer Exponential Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 50+ successful products scaling with Growth11's PLG strategies
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
                Start Growing
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
              <p>Free product growth audit available - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}