import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/Tech_office_hero_background_0b520503.png";

export default function HeroSection() {
  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="flex items-center space-x-2 text-primary mb-6 animate-slide-up">
            <TrendingUp className="h-5 w-5 animate-float" />
            <span className="text-sm font-semibold" data-testid="text-badge">PROVEN GROWTH EXPERTS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up" data-testid="text-hero-title">
            Scale Your Revenue with 
            <span className="text-gradient"> Expert Growth Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
            We are entrepreneurs who built & scaled Nojoto from Bootstrap to 80 Lac Monthly Active Users & 12 Crore Annual Revenue. 
            Now we help businesses achieve long-term revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              data-testid="button-hero-get-started"
              className="btn-gradient shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleLearnMore}
              data-testid="button-hero-learn-more"
              className="hover-elevate backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}