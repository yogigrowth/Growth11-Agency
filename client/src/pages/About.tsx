import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Growth11 Ajmer - Digital Marketing Agency Team | Experts in Ajmer, Rajasthan",
    description: "Meet the Growth11 Ajmer team - experienced digital marketing experts who scaled Nojoto to 100 CR valuation. Leading digital marketing agency in Ajmer, Rajasthan.",
    ogTitle: "About Growth11 Ajmer - Digital Marketing Experts in Ajmer",
    ogDescription: "Expert digital marketing team in Ajmer with proven track record. Entrepreneurs who built Nojoto from bootstrap to 80L MAU in Rajasthan."
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-about-page">
                About Growth11 Ajmer
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-page-title">
                About Growth11 Ajmer
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-page-intro">
                Your trusted digital marketing and technology partner in Ajmer, Rajasthan for sustainable business growth.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}