import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  Globe, 
  Users,
  Clock,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Shield,
  MousePointer,
  DollarSign
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Target,
    title: "Google Ads Management",
    description: "Expert Google Ads campaigns with maximum ROI"
  },
  {
    icon: MousePointer,
    title: "Facebook & Instagram Ads",
    description: "Social media advertising that converts"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Tracking",
    description: "Detailed performance insights and optimization"
  },
  {
    icon: DollarSign,
    title: "Conversion Rate Optimization",
    description: "Improve landing pages for higher conversions"
  },
  {
    icon: TrendingUp,
    title: "Retargeting Campaigns",
    description: "Re-engage visitors and boost conversion rates"
  },
  {
    icon: Zap,
    title: "Real-time Campaign Optimization",
    description: "Continuous optimization for peak performance"
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Marketing Experts",
    description: "Google Ads and Facebook Blueprint certified team with 5+ years of experience managing high-performing campaigns."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Every campaign decision backed by comprehensive analytics, A/B testing, and performance data to maximize your ROI."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Advanced audience segmentation and targeting strategies that reach your ideal customers at the perfect moment."
  },
  {
    icon: DollarSign,
    title: "ROI-Focused Approach",
    description: "We optimize campaigns for profit, not just clicks. Average client sees 300% ROI improvement within 90 days."
  },
  {
    icon: Clock,
    title: "24/7 Campaign Monitoring",
    description: "Continuous campaign monitoring and optimization ensures your ads perform at peak efficiency round the clock."
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Weekly detailed reports with clear metrics, insights, and actionable recommendations for business growth."
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Growth11's performance marketing doubled our online sales! Their Google Ads expertise is outstanding - ROI increased by 350% in just 3 months."
  },
  {
    name: "Priyanka Sharma",
    rating: 5,
    review: "Best performance marketing agency in India! Their Facebook ads generated 1000+ qualified leads for our business. Conversion rates improved dramatically."
  },
  {
    name: "Amit Agarwal",
    rating: 5,
    review: "Professional team with excellent results. Cost per acquisition reduced by 60% while sales volume increased 4x. Highly recommend their services!"
  }
];

const faqs = [
  {
    question: "What platforms do you run performance marketing campaigns on?",
    answer: "We specialize in Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram Ads, LinkedIn Ads, and emerging platforms like Pinterest and Twitter based on your target audience."
  },
  {
    question: "How quickly can I expect to see results from campaigns?",
    answer: "Initial data and insights are available within 7-14 days. Significant performance improvements typically show within 30-60 days as we optimize based on conversion data."
  },
  {
    question: "What's the minimum budget required for performance marketing?",
    answer: "We recommend minimum ₹50,000/month for Google Ads and ₹30,000/month for social media ads to generate meaningful data and achieve optimal performance."
  },
  {
    question: "How do you measure and report campaign performance?",
    answer: "We track key metrics like ROAS, CPA, conversion rates, lifetime value, and provide weekly detailed reports with insights and optimization recommendations."
  },
  {
    question: "Do you provide landing page optimization services?",
    answer: "Yes! We analyze and optimize landing pages for higher conversion rates, including A/B testing different elements to maximize your campaign performance."
  },
  {
    question: "What makes your performance marketing different?",
    answer: "Our data-driven approach, advanced targeting techniques, continuous optimization, and transparent reporting. We focus on profit generation, not just traffic volume."
  }
];

export default function PerformanceMarketingLanding() {
  useSEO({
    title: "Performance Marketing Agency Ajmer | Google Ads & Facebook Ads Expert | Growth11 Rajasthan",
    description: "Top performance marketing agency in Ajmer by Growth11. Expert Google Ads, Facebook Ads, and conversion optimization services. Drive sales with data-driven campaigns in Rajasthan.",
    ogTitle: "Performance Marketing Services Ajmer - Growth11",
    ogDescription: "Maximize ROI with Growth11's expert performance marketing campaigns. Google Ads & Facebook Ads specialists with proven results."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your Performance Marketing services to drive more sales and leads. Please share campaign packages and pricing details.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Performance Marketing Campaign Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your Performance Marketing services to increase sales and generate quality leads. Please share details about campaign packages and pricing.%0D%0A%0D%0ABest regards`, '_self');
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
                Performance Marketing Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Drive Sales with Data-Driven Campaigns and{" "}
                <span className="text-primary">MAXIMIZE YOUR ROI!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Our performance marketing campaigns have generated ₹50 Cr+ revenue for clients with average 350% ROI improvement. 
                Get more qualified leads and sales with expert Google Ads and Facebook advertising!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Performance Marketing Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 35,999</div>
                <div className="text-lg mt-2">per month + ad spend - Guaranteed ROI!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Campaign Strategy
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
              <div data-testid="stat-revenue">
                <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
                <div className="text-muted-foreground">Revenue Generated</div>
              </div>
              <div data-testid="stat-campaigns">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Campaigns Managed</div>
              </div>
              <div data-testid="stat-roi">
                <div className="text-4xl font-bold text-primary mb-2">350%</div>
                <div className="text-muted-foreground">Average ROI Improvement</div>
              </div>
              <div data-testid="stat-clients">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Growth11 Performance Marketing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                India's #1 Performance Marketing Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We don't just run ads - we engineer profit-generating systems that consistently deliver qualified leads 
                and sales while continuously optimizing for maximum return on your investment.
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
                Performance Marketing Success
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                ROI-Driven Success Stories
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
                Performance Marketing FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Performance Marketing Questions
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Common questions about our performance marketing and advertising services.
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
              Ready to Scale Your Sales?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 200+ successful businesses maximizing ROI with Growth11
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
                Start Campaigns
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
              <p>Free campaign audit available - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}