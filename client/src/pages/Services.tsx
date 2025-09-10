import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
  const handleGetQuote = () => {
    console.log('Get quote clicked');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-services-page">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-services-page-title">
                Complete Growth Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-services-page-intro">
                From technical infrastructure to marketing excellence, we provide comprehensive solutions that drive sustainable growth and measurable results.
              </p>
              <Button 
                size="lg"
                onClick={handleGetQuote}
                data-testid="button-services-get-quote"
                className="hover-elevate"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}