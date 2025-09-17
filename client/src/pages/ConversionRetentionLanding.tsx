import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  TrendingUp, 
  RotateCcw, 
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
  BarChart3,
  Heart
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: ShoppingCart,
    title: "E-commerce Funnel Optimization",
    description: "Optimize every step of your sales funnel"
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Analysis",
    description: "Deep analytics to identify conversion bottlenecks"
  },
  {
    icon: Heart,
    title: "Customer Retention Strategies",
    description: "Keep customers coming back with proven tactics"
  },
  {
    icon: RotateCcw,
    title: "A/B Testing & Optimization",
    description: "Continuous testing for maximum performance"
  },
  {
    icon: Target,
    title: "Cart Abandonment Recovery",
    description: "Recover lost sales with smart automation"
  },
  {
    icon: TrendingUp,
    title: "Lifetime Value Optimization",
    description: "Increase customer lifetime value significantly"
  }
];

const whyChooseUs = [
  {
    icon: BarChart3,
    title: "Data-Driven Optimization",
    description: "Every optimization is backed by comprehensive analytics and user behavior data to ensure measurable improvements in conversions."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Expertise",
    description: "Specialized in e-commerce conversion optimization with deep understanding of online shopping behavior and psychology."
  },
  {
    icon: Target,
    title: "Holistic Funnel Approach",
    description: "We optimize your entire customer journey from first visit to repeat purchase, not just individual pages or elements."
  },
  {
    icon: Clock,
    title: "Rapid Implementation",
    description: "Quick implementation of conversion optimization strategies with measurable results typically seen within 30-45 days."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Helped 100+ e-commerce businesses improve conversion rates by 150% and customer retention by 200% on average."
  },
  {
    icon: Shield,
    title: "Risk-Free Testing",
    description: "All optimizations are tested thoroughly before full implementation to ensure we never negatively impact your current performance."
  }
];

const testimonials = [
  {
    name: "Neha Gupta",
    rating: 5,
    review: "Growth11 increased our e-commerce conversion rate from 1.2% to 4.8%! Cart abandonment recovery alone brought back ₹15L in lost sales. Outstanding results!"
  },
  {
    name: "Sanjay Malhotra",
    rating: 5,
    review: "Best conversion optimization agency! Our customer retention improved by 250% and average order value increased by 85%. Revenue growth has been phenomenal."
  },
  {
    name: "Ritu Sharma",
    rating: 5,
    review: "Professional team with incredible results. Our repeat purchase rate went from 15% to 45% in just 4 months. Customer lifetime value doubled!"
  }
];

const faqs = [
  {
    question: "What is conversion rate optimization (CRO)?",
    answer: "CRO is the process of improving your website to increase the percentage of visitors who complete desired actions like purchases, sign-ups, or inquiries. We optimize every touchpoint in your customer journey."
  },
  {
    question: "How long does it take to see CRO results?",
    answer: "Initial improvements are typically seen within 30-45 days. Significant conversion rate improvements usually occur within 60-90 days as we test and optimize based on data."
  },
  {
    question: "What tools do you use for conversion optimization?",
    answer: "We use advanced tools like Google Analytics, Hotjar, Crazy Egg, Optimizely, and proprietary tracking systems to analyze user behavior and optimize conversions."
  },
  {
    question: "Do you work with all types of e-commerce platforms?",
    answer: "Yes! We work with Shopify, WooCommerce, Magento, custom platforms, and all major e-commerce solutions to optimize conversions and retention."
  },
  {
    question: "How do you improve customer retention rates?",
    answer: "We implement email marketing automation, personalized recommendations, loyalty programs, retargeting campaigns, and customer experience optimization strategies."
  },
  {
    question: "What's included in your conversion optimization package?",
    answer: "Complete funnel analysis, A/B testing, cart abandonment recovery, checkout optimization, user experience improvements, and retention strategy implementation."
  }
];

export default function ConversionRetentionLanding() {
  useSEO({
    title: "E-commerce Conversion Optimization & Customer Retention Services | Growth11 Ajmer Rajasthan",
    description: "Boost e-commerce sales with Growth11's conversion optimization and customer retention services in Ajmer. Increase conversion rates, reduce cart abandonment, improve customer lifetime value.",
    ogTitle: "E-commerce Conversion & Retention Optimization - Growth11",
    ogDescription: "Maximize e-commerce revenue with Growth11's proven conversion optimization and customer retention strategies in Rajasthan."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your Conversion & Retention optimization services to increase my e-commerce sales and customer retention. Please share package details and pricing.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Conversion & Retention Optimization Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your Conversion & Retention optimization services to improve my e-commerce performance. Please share details about your packages and pricing.%0D%0A%0D%0ABest regards`, '_self');
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
                E-commerce Optimization Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Boost Conversions & Customer Retention to{" "}
                <span className="text-primary">MAXIMIZE E-COMMERCE REVENUE!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Transform your e-commerce performance with our proven conversion optimization and retention strategies. 
                We've helped 100+ online stores increase conversion rates by 150% and customer lifetime value by 200%!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">E-commerce Optimization Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 45,999</div>
                <div className="text-lg mt-2">per month - Results guaranteed!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Optimize Now
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
              <div data-testid="stat-stores">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">E-commerce Stores Optimized</div>
              </div>
              <div data-testid="stat-conversion">
                <div className="text-4xl font-bold text-primary mb-2">150%</div>
                <div className="text-muted-foreground">Avg Conversion Increase</div>
              </div>
              <div data-testid="stat-retention">
                <div className="text-4xl font-bold text-primary mb-2">200%</div>
                <div className="text-muted-foreground">Customer Retention Boost</div>
              </div>
              <div data-testid="stat-revenue">
                <div className="text-4xl font-bold text-primary mb-2">₹25Cr+</div>
                <div className="text-muted-foreground">Additional Revenue Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Growth11 CRO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                India's Premier E-commerce Optimization Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We don't just increase traffic - we transform your visitors into buyers and buyers into loyal customers 
                through scientifically proven optimization strategies that maximize your revenue potential.
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
                E-commerce Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                Conversion Optimization Results
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
                CRO FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Conversion Optimization Questions
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Common questions about conversion rate optimization and retention strategies.
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
              Ready to Boost Your E-commerce Revenue?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 100+ successful e-commerce stores maximizing conversions with Growth11
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
                Start Optimizing
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
              <p>Free e-commerce audit available - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}