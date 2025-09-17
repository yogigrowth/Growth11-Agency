import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Heart, 
  Star, 
  CheckCircle, 
  Globe, 
  Target,
  Clock,
  Award,
  MessageCircle,
  Phone,
  Mail,
  Zap,
  Shield,
  UserCheck,
  BarChart3
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Users,
    title: "Influencer Discovery & Vetting",
    description: "Find the perfect influencers for your brand"
  },
  {
    icon: UserCheck,
    title: "Campaign Strategy & Planning",
    description: "Comprehensive campaign planning and execution"
  },
  {
    icon: Target,
    title: "Brand-Influencer Matching",
    description: "Precise alignment with your target audience"
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time analytics and ROI measurement"
  },
  {
    icon: Shield,
    title: "Contract & Legal Management",
    description: "Secure partnerships with proper agreements"
  },
  {
    icon: TrendingUp,
    title: "Viral Content Strategy",
    description: "Create content that drives maximum engagement"
  }
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Extensive Influencer Network",
    description: "Access to 500+ verified micro and macro influencers across Rajasthan and India, vetted for authenticity and engagement quality."
  },
  {
    icon: Target,
    title: "Perfect Brand-Influencer Matching",
    description: "Our AI-powered matching system ensures perfect alignment between influencer audience and your target customers."
  },
  {
    icon: BarChart3,
    title: "Performance-Driven Campaigns",
    description: "Every campaign is optimized for specific KPIs - brand awareness, engagement, conversions, or sales, with guaranteed ROI."
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "We work only with genuine influencers who have real engagement, ensuring authentic brand advocacy and trust."
  },
  {
    icon: Clock,
    title: "End-to-End Management",
    description: "From influencer outreach to content approval to campaign reporting - we handle everything for seamless execution."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "100+ successful influencer campaigns with average 300% increase in brand awareness and 150% boost in sales."
  }
];

const testimonials = [
  {
    name: "Riya Agarwal",
    rating: 5,
    review: "Growth11's influencer campaigns doubled our sales in 3 months! They found perfect micro-influencers who genuinely love our products. Amazing results!"
  },
  {
    name: "Karan Malhotra",
    rating: 5,
    review: "Best influencer marketing agency in India! Their campaign reached 2M+ people and generated 500+ leads. ROI was incredible - 400% return!"
  },
  {
    name: "Sneha Joshi",
    rating: 5,
    review: "Professional team with excellent influencer connections. Our brand awareness increased by 250% and we gained 10K+ new followers across platforms."
  }
];

const faqs = [
  {
    question: "How do you find the right influencers for my brand?",
    answer: "We use advanced analytics to match influencers based on audience demographics, engagement rates, content style, and brand alignment. Each influencer is manually vetted for authenticity."
  },
  {
    question: "What types of influencers do you work with?",
    answer: "We work with nano (1K-10K), micro (10K-100K), and macro influencers (100K+) across all platforms including Instagram, YouTube, Facebook, and emerging platforms relevant to your target audience."
  },
  {
    question: "How do you measure campaign success?",
    answer: "We track reach, impressions, engagement rates, clicks, conversions, and sales. You get detailed reports with ROI analysis and performance insights for every campaign."
  },
  {
    question: "Do you handle content creation or just influencer outreach?",
    answer: "We provide end-to-end service including content briefing, creative guidelines, content approval, posting schedules, and performance optimization throughout the campaign."
  },
  {
    question: "What's the minimum budget for influencer marketing?",
    answer: "Our campaigns start from ₹50,000 depending on campaign goals, influencer tier, and scope. We create custom packages to fit your budget and maximize impact."
  },
  {
    question: "How do you ensure influencer authenticity?",
    answer: "We use advanced tools to verify follower authenticity, engagement quality, and audience demographics. We only work with influencers who have genuine, engaged audiences."
  }
];

export default function InfluencerMarketingLanding() {
  useSEO({
    title: "Influencer Marketing Agency Ajmer | Growth11 Digital Marketing Rajasthan India",
    description: "Top influencer marketing agency in Ajmer by Growth11. Connect with authentic influencers, boost brand awareness, and drive sales with proven influencer campaigns in Rajasthan.",
    ogTitle: "Influencer Marketing Services Ajmer - Growth11",
    ogDescription: "Drive authentic brand advocacy with Growth11's expert influencer marketing campaigns. 500+ verified influencers, proven ROI results."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your Influencer Marketing services to boost my brand visibility. Please share campaign packages and pricing details.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Influencer Marketing Campaign Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your Influencer Marketing services to increase brand awareness and reach. Please share details about campaign packages and pricing.%0D%0A%0D%0ABest regards`, '_self');
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
                Influencer Marketing Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Connect with Authentic Influencers and{" "}
                <span className="text-primary">AMPLIFY YOUR BRAND REACH!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Partner with 500+ verified influencers to boost brand awareness and drive sales. Our proven campaigns 
                have generated 2M+ impressions and delivered 400% average ROI for brands across India!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Influencer Campaign Package</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 75,999</div>
                <div className="text-lg mt-2">per campaign - Guaranteed results!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Campaign
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
              <div data-testid="stat-influencers">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Verified Influencers</div>
              </div>
              <div data-testid="stat-campaigns">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Successful Campaigns</div>
              </div>
              <div data-testid="stat-reach">
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">Total Reach Generated</div>
              </div>
              <div data-testid="stat-roi">
                <div className="text-4xl font-bold text-primary mb-2">400%</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-why-choose">
                Why Growth11 Influencer Marketing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                India's Most Trusted Influencer Agency
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We don't just connect you with influencers - we create authentic partnerships that build genuine brand love 
                and drive measurable business results that matter to your bottom line.
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
                Campaign Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                Influencer Marketing Success Stories
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
                Influencer Marketing FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Influencer Marketing Questions
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Everything you need to know about our influencer marketing services.
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
              Ready to Partner with Influencers?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Join 100+ successful brands amplifying their reach with Growth11
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
                Launch Campaign
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
              <p>Free campaign strategy session - Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}