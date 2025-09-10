import Navigation from "@/components/Navigation";
import PartnerBrands from "@/components/PartnerBrands";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-partners-page">
                Partner Brands
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-partners-page-title">
                Trusted by Industry Leaders
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-partners-page-intro">
                We've partnered with diverse brands across industries, helping them achieve remarkable growth and scale their revenue effectively through our proven methodologies.
              </p>
            </div>
          </div>
        </section>
        <PartnerBrands />
      </main>
      <Footer />
    </div>
  );
}