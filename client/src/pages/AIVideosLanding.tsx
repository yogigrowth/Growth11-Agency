import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Video, 
  Zap, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  Smartphone, 
  Target,
  Award,
  MessageCircle,
  Phone,
  Mail,
  TrendingUp,
  Eye,
  Share2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aiVideoImage from "@assets/generated_images/AI_video_creation_setup_18eeaf60.png";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

// Sample video imports
import sampleVideo1 from "@assets/WhatsApp Video 2025-09-06 at 13.21.34_1757577539991.mp4";
import sampleVideo2 from "@assets/WhatsApp Video 2025-09-06 at 13.37.45_1757577539991.mp4";
import sampleVideo3 from "@assets/WhatsApp Video 2025-09-06 at 15.02.13_1757577539992.mp4";
import sampleVideo4 from "@assets/WhatsApp Video 2025-09-06 at 15.02.14_1757577539992.mp4";

const features = [
  {
    icon: Video,
    title: "10 Custom AI Videos",
    description: "Professional AI-generated videos tailored to your brand"
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Get all 10 videos within 7 working days"
  },
  {
    icon: Target,
    title: "Business Focused Content",
    description: "Videos optimized for marketing and engagement"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Ready",
    description: "Perfect for social media, websites, and ads"
  },
  {
    icon: Award,
    title: "HD Quality Output",
    description: "High-definition videos with professional editing"
  },
  {
    icon: CheckCircle,
    title: "No Hidden Costs",
    description: "Complete package with revisions included"
  }
];

const videoTypes = [
  {
    icon: TrendingUp,
    title: "Product Demos",
    description: "Showcase your products with engaging AI-generated demonstrations"
  },
  {
    icon: Users,
    title: "Brand Stories",
    description: "Tell your company story with compelling visual narratives"
  },
  {
    icon: Eye,
    title: "Social Media Ads",
    description: "Eye-catching videos perfect for Facebook, Instagram, and YouTube"
  },
  {
    icon: Share2,
    title: "Promotional Content",
    description: "Marketing videos that drive conversions and engagement"
  },
  {
    icon: Play,
    title: "Educational Videos",
    description: "Explain complex concepts with clear, engaging visuals"
  },
  {
    icon: Video,
    title: "Testimonial Videos",
    description: "AI-generated customer testimonials and case studies"
  }
];

const benefits = [
  "Save 90% compared to traditional video production",
  "No need for expensive equipment or studio setup",
  "Consistent brand messaging across all videos",
  "Quick turnaround time for urgent campaigns",
  "Multiple formats for different platforms",
  "Professional voiceovers and music included"
];

const testimonials = [
  {
    name: "Rohit Mehta",
    company: "TechStart Solutions",
    rating: 5,
    review: "The AI videos transformed our marketing! Got 10 professional videos for just ₹10,000. Our engagement increased by 300% within the first month."
  },
  {
    name: "Priya Singh",
    company: "Fashion Forward",
    rating: 5,
    review: "Amazing quality and super fast delivery. These AI videos helped us showcase our products beautifully. Worth every penny!"
  },
  {
    name: "Arjun Kumar",
    company: "EduTech India",
    rating: 5,
    review: "Growth11's AI video package is incredible value. Professional quality videos that would have cost us lakhs otherwise. Highly recommend!"
  }
];

const faqs = [
  {
    question: "What's included in the ₹10,000 AI video package?",
    answer: "You get 10 professionally created AI videos (30-60 seconds each), background music, voiceovers, custom branding, and 2 revisions per video."
  },
  {
    question: "How long does it take to create the videos?",
    answer: "We deliver all 10 AI videos within 7 working days from the project brief and content approval."
  },
  {
    question: "Can I specify the content and style for each video?",
    answer: "Absolutely! You can provide scripts, preferred styles, brand colors, and specific requirements for each video."
  },
  {
    question: "What video formats will I receive?",
    answer: "You'll receive videos in multiple formats: MP4 (HD), optimized for social media, web use, and presentations."
  },
  {
    question: "Do you provide revisions if I'm not satisfied?",
    answer: "Yes! We include 2 revisions per video to ensure you're completely satisfied with the final output."
  },
  {
    question: "Can these videos be used for commercial purposes?",
    answer: "Yes, all videos come with full commercial usage rights. You can use them for marketing, advertising, and business promotion."
  }
];

const sampleVideos = [
  {
    title: "Product Demo Video",
    description: "Professional product showcase with engaging visuals",
    videoSrc: sampleVideo1
  },
  {
    title: "Brand Story Video",
    description: "Compelling brand narrative with emotional connection",
    videoSrc: sampleVideo2
  },
  {
    title: "Social Media Ad",
    description: "Eye-catching content perfect for social platforms",
    videoSrc: sampleVideo3
  },
  {
    title: "Promotional Content",
    description: "Marketing video designed to drive conversions",
    videoSrc: sampleVideo4
  }
];

export default function AIVideosLanding() {
  useSEO({
    title: "₹10,000 AI Videos Package Ajmer - Professional AI Video Creation | Growth11 Rajasthan",
    description: "Get 10 professional AI videos for just ₹10,000 by Growth11 Ajmer! AI video creation services for businesses in Ajmer, Rajasthan. Perfect for marketing & social media.",
    ogTitle: "₹10,000 AI Videos Package - Growth11 Ajmer",
    ogDescription: "Professional AI video creation services in Ajmer starting at ₹10,000. Get 10 custom AI videos for your business in Rajasthan with fast delivery."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your ₹10,000 AI Videos package. Please share more details.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=AI Videos Package Inquiry - ₹10,000&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your ₹10,000 AI Videos package. Please share more details.%0D%0A%0D%0ABest regards`, '_self');
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6" data-testid="badge-hero">
                  AI Video Creation Service
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                  Get <span className="text-primary">10 AI Videos</span> for Your Business
                </h1>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                  Transform your marketing with professional AI-generated videos. Perfect for social media, 
                  websites, and advertising campaigns.
                </p>
                
                <div className="bg-primary text-primary-foreground p-6 rounded-xl mb-8 inline-block">
                  <div className="text-lg font-semibold mb-2">Complete Package</div>
                  <div className="text-4xl md:text-5xl font-bold">₹ 10,000</div>
                  <div className="text-sm mt-1">10 Professional AI Videos</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="text-lg"
                    onClick={() => handleContactClick('whatsapp')}
                    data-testid="button-hero-whatsapp"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Order Now on WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg"
                    onClick={() => handleContactClick('call')}
                    data-testid="button-hero-call"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call +91 70144 31277
                  </Button>
                </div>
              </div>
              
              <div className="lg:order-last">
                <div className="relative">
                  <img 
                    src={aiVideoImage} 
                    alt="AI Video Creation Setup" 
                    className="w-full h-auto rounded-lg shadow-lg"
                    data-testid="img-hero-ai-video"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground rounded-full p-4 hover-elevate">
                      <Play className="h-8 w-8" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Videos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-sample-videos">
                Sample Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sample-videos-title">
                See Our AI Videos in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-sample-videos-description">
                Watch these sample AI-generated videos to understand the quality and style of work we deliver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sampleVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`card-sample-video-${index}`}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <video 
                        className="w-full aspect-video object-cover"
                        controls
                        preload="metadata"
                        data-testid={`video-sample-${index}`}
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2" data-testid={`text-video-title-${index}`}>
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid={`text-video-description-${index}`}>
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Ready to get similar videos for your business?
              </p>
              <Button 
                size="lg" 
                onClick={() => handleContactClick('whatsapp')}
                data-testid="button-sample-videos-cta"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-features">
                Package Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
                What You Get
              </h2>
            </div>

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

        {/* Video Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-video-types">
                Video Types
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-video-types-title">
                Types of AI Videos We Create
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-video-types-description">
                From product demos to brand stories, we create AI videos that drive results for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTypes.map((type, index) => (
                <Card key={index} className="p-6" data-testid={`card-video-type-${index}`}>
                  <CardContent className="pt-6">
                    <type.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4" data-testid="badge-benefits">
                Why Choose AI Videos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-benefits-title">
                Benefits of AI Video Creation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`benefit-${index}`}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
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
                What Our Clients Say
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
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
                Everything you need to know about our AI video package
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Get 10 professional AI videos for your business - Only ₹10,000
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg w-full"
                onClick={() => handleContactClick('whatsapp')}
                data-testid="button-final-whatsapp"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => handleContactClick('call')}
                data-testid="button-final-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="mt-8 text-sm opacity-75">
              <p>Available Monday to Saturday, 9 AM - 7 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}