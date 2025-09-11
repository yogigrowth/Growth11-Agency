import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  Star, 
  Smartphone, 
  Search,
  Clock,
  Award,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";

const features = [
  {
    icon: Globe,
    title: "Premium Layout",
    description: "Modern, professional design that converts"
  },
  {
    icon: Clock,
    title: "Free 6 Month Maintenance",
    description: "No extra costs for updates and fixes"
  },
  {
    icon: Search,
    title: "SEO Friendly Website",
    description: "Optimized for Google rankings"
  },
  {
    icon: Zap,
    title: "Fast Loading Speed",
    description: "Lightning fast performance"
  },
  {
    icon: Award,
    title: "Lifetime Access",
    description: "Own your website forever"
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    description: "Transparent pricing, no surprises"
  }
];

const whyChooseUs = [
  {
    icon: Globe,
    title: "Custom Solutions",
    description: "We tailor every website to align with your unique business goals and brand identity."
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description: "Using the latest web development frameworks, we ensure your site is fast, secure, and scalable."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Our designs are optimized for all devices, delivering seamless experience across platforms."
  },
  {
    icon: Search,
    title: "SEO-Optimized",
    description: "We build with search engines in mind to help your site rank better and reach wider audience."
  },
  {
    icon: Users,
    title: "User-Centric Approach",
    description: "From layout to functionality, we prioritize intuitive user experience to keep visitors engaged."
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description: "Our team supports you throughout the process and beyond, ensuring your website remains effective."
  }
];

const testimonials = [
  {
    name: "Raj Sharma",
    rating: 5,
    review: "Growth11 delivered an amazing website in just 7 days! The design is professional and our sales have increased by 40% since launch."
  },
  {
    name: "Priya Patel",
    rating: 5,
    review: "Best value for money! ₹9999 for such a quality website was unbelievable. Highly recommend Growth11 for web development."
  },
  {
    name: "Amit Kumar",
    rating: 5,
    review: "Professional team, quick delivery, and excellent support. Our e-commerce site is performing beyond expectations."
  }
];

const faqs = [
  {
    question: "What's included in the ₹9999 package?",
    answer: "You get a complete responsive website with up to 5 pages, contact forms, SEO optimization, 6 months free maintenance, and lifetime access."
  },
  {
    question: "How long does it take to build the website?",
    answer: "We deliver your complete website within 7 days from the project kickoff and approval of design mockups."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes! All our websites are fully responsive and optimized for mobile phones, tablets, and desktop computers."
  },
  {
    question: "Do I get ongoing support after launch?",
    answer: "Absolutely! We provide 6 months of free maintenance and ongoing support for any technical issues or updates needed."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes, we build on user-friendly platforms that allow you to easily update text, images, and content without technical knowledge."
  },
  {
    question: "Is the website SEO optimized?",
    answer: "Yes! We follow all SEO best practices to help your website rank higher on Google and attract more organic traffic."
  }
];

export default function WebsiteLanding() {
  useSEO({
    title: "₹9999 Website Package Ajmer - Professional Websites | Growth11 Ajmer, Rajasthan",
    description: "Get professional website in just ₹9999 by Growth11 Ajmer! Complete website development in 7 days for businesses in Ajmer, Rajasthan. SEO optimized & mobile-friendly.",
    ogTitle: "₹9999 Website Package - Growth11 Ajmer",
    ogDescription: "Professional website development in Ajmer starting at ₹9999. Complete web solutions for businesses in Rajasthan with 7-day delivery."
  });

  const handleContactClick = (method: string) => {
    console.log(`${method} contact clicked`);
    if (method === 'whatsapp') {
      const message = encodeURIComponent("Hi Growth11! I'm interested in your ₹9999 website package. Please share more details.");
      window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
    } else if (method === 'call') {
      window.open(`tel:+917014431277`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Website Package Inquiry - ₹9999&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your ₹9999 website package. Please share more details.%0D%0A%0D%0ABest regards`, '_self');
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
                Limited Time Offer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Drive More Leads and Grow Your Business with a{" "}
                <span className="text-primary">HIGH-PERFORMANCE WEBSITE!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Our expert development team creates user-friendly, conversion-focused websites that drive 
                real results. Transform clicks into loyal customers and watch your business grow!
              </p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl mb-8 inline-block">
                <div className="text-2xl font-semibold mb-2">Get Your Website in Just</div>
                <div className="text-5xl md:text-6xl font-bold">₹ 9,999</div>
                <div className="text-lg mt-2">within 7 days!</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleContactClick('whatsapp')}
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Now
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
              <div data-testid="stat-experience">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div data-testid="stat-projects">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div data-testid="stat-security">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Security & Safety</div>
              </div>
              <div data-testid="stat-clients">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
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
                Why Choose Growth11
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We have a deep understanding of user habits and behaviors. We are committed to using 
                fact-based knowledge and our unique brand of innovation to help you dominate the competition.
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
                Client Reviews
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
                Have questions about our ₹9999 website package? Find answers here.
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
              Ready to Launch Your Website?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta-description">
              Get your professional website in just 7 days for only ₹9999
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
                Start Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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