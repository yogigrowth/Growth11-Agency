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
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 text-primary mb-6">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold" data-testid="text-badge">PROVEN GROWTH EXPERTS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-title">
            Scale Your Revenue with 
            <span className="text-primary"> Expert Growth Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
            We are entrepreneurs who built & scaled Nojoto from Bootstrap to 80 Lac Monthly Active Users & 12 Crore Annual Revenue. 
            Now we help businesses achieve long-term revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              data-testid="button-hero-get-started"
              className="hover-elevate"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleLearnMore}
              data-testid="button-hero-learn-more"
              className="hover-elevate"
            >
              View Case Studies
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center sm:text-left" data-testid="metric-users">
              <div className="text-2xl md:text-3xl font-bold text-primary">80L+</div>
              <div className="text-sm text-muted-foreground">Monthly Active Users</div>
            </div>
            <div className="text-center sm:text-left" data-testid="metric-revenue">
              <div className="text-2xl md:text-3xl font-bold text-chart-2">₹12 Cr</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
            </div>
            <div className="text-center sm:text-left" data-testid="metric-valuation">
              <div className="text-2xl md:text-3xl font-bold text-primary">₹100 Cr</div>
              <div className="text-sm text-muted-foreground">Company Valuation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}