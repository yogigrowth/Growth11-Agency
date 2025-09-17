import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  CheckCircle, 
  Star, 
  Globe, 
  Users,
  Clock,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Zap,
  Shield
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    description: "In-depth analysis to target high-converting keywords"
  },
  {
    icon: TrendingUp,
    title: "Rank Tracking & Reporting",
    description: "Monitor your progress with detailed monthly reports"
  },
  {
    icon: Target,
    title: "On-Page Optimization",
    description: "Technical SEO improvements for better rankings"
  },
  {
    icon: BarChart3,
    title: "Competitor Analysis",
    description: "Stay ahead with comprehensive competitor insights"
  },
  {
    icon: Globe,
    title: "Local SEO Mastery",
    description: "Dominate local search results in Ajmer & Rajasthan"
  },
  {
    icon: Users,
    title: "Content Marketing Strategy",
    description: "SEO-optimized content that drives organic traffic"
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 200+ businesses in Rajasthan have achieved first-page rankings with our SEO strategies."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "We use advanced analytics and industry tools to make informed decisions that deliver measurable results."
  },
  {
    icon: Target,
    title: "Local SEO Expertise",
    description: "Deep understanding of Rajasthan market helps your business dominate local search results."
  },
  {
    icon: Clock,
    title: "Transparent Reporting",
    description: "Monthly detailed reports showing keyword rankings, traffic growth, and ROI improvements."
  },
  {
    icon: TrendingUp,
    title: "White Hat Techniques",
    description: "We follow Google guidelines strictly, ensuring long-term, sustainable SEO success for your business."
  },
  {
    icon: Shield,
    title: "Dedicated SEO Manager",
    description: "Your personal SEO expert who understands your business goals and works to achieve them consistently."
  }
];

const testimonials = [
  {
    name: "Vikram Agarwal",
    rating: 5,
    review: "Growth11's SEO services helped our manufacturing business in Ajmer reach #1 on Google. Our online inquiries increased by 300% in just 6 months."
  },
  {
    name: "Sunita Sharma",
    rating: 5,
    review: "Best SEO agency in Rajasthan! They improved our local rankings and we now get 10+ customer calls daily. ROI has been incredible."
  },
  {
    name: "Rohit Jain",
    rating: 5,
    review: "Professional SEO team with excellent results. Our e-commerce site traffic grew from 1000 to 15000+ monthly visitors. Highly recommended!"
  }
];

const faqs = [
  {
    question: "What's included in the SEO package?",
    answer: "Complete keyword research, on-page optimization, technical SEO audit, content strategy, local SEO setup, monthly reporting, and dedicated SEO manager support."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "You'll typically see initial improvements in 2-3 months, with significant ranking improvements in 4-6 months. SEO is a long-term strategy for sustainable growth."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we can't guarantee specific positions due to Google's algorithm changes, 95% of our clients achieve first-page rankings for their target keywords within 6 months."
  },
  {
    question: "Will you work on local SEO for Ajmer/Rajasthan?",
    answer: "Absolutely! We specialize in local SEO for Rajasthan businesses. We'll optimize your Google My Business, local citations, and location-based keywords."
  },
  {
    question: "How do you track and report SEO progress?",
    answer: "We provide monthly detailed reports showing keyword rankings, organic traffic growth, conversion improvements, and competitive analysis with actionable insights."
  },
  {
    question: "What makes your SEO different from other agencies?",
    answer: "We combine local market expertise with advanced SEO techniques, provide transparent reporting, use only white-hat methods, and offer dedicated account management."
  }
];

export default function SEOLanding() {
  useSEO({
    title: "SEO Services Ajmer - Rank #1 on Google | Growth11 Digital Marketing Agency Rajasthan",
    description: "Professional SEO services in Ajmer, Rajasthan by Growth11. Get your business to rank #1 on Google with our proven SEO strategies. Local SEO experts with 200+ success stories.",
    ogTitle: "Best SEO Services in Ajmer - Growth11",
    ogDescription: "Dominate Google search results with Growth11's expert SEO services in Ajmer. Proven track record of 200+ businesses achieving first-page rankings."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your SEO services to improve my website rankings. Please share more details about your SEO packages.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=SEO Services Inquiry - Ajmer Business&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your SEO services to improve my website's Google rankings. Please share details about your SEO packages and pricing.%0D%0A%0D%0ABest regards`, '_self');
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
                SEO Experts Ajmer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Rank #1 on Google and{" "}
                <span className="text-primary">DOMINATE YOUR COMPETITION!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Our proven SEO strategies have helped 200+ businesses in Rajasthan achieve first-page Google rankings. 
                Get more customers with higher search visibility and organic traffic growth!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Complete SEO Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 15,999</div>
                <div className="text-lg mt-2">per month - Results in 90 days!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get SEO Quote
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
              <div data-testid="stat-clients">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Websites Ranked #1</div>
              </div>
              <div data-testid="stat-traffic">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-muted-foreground">Average Traffic Growth</div>
              </div>
              <div data-testid="stat-keywords">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Keywords Ranked</div>
              </div>
              <div data-testid="stat-satisfaction">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Choose Growth11 SEO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                Rajasthan's #1 SEO Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We combine deep local market knowledge with advanced SEO techniques to deliver results that matter. 
                Your success is our priority, and we have the track record to prove it.
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
                SEO Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                What Our SEO Clients Say
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
                SEO FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                SEO Questions Answered
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Common questions about our SEO services in Ajmer and Rajasthan.
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
              Ready to Dominate Google Search?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 200+ successful businesses who rank #1 with Growth11 SEO
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
                Start SEO Now
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
              <p>Free SEO consultation available - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}