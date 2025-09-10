import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-about-page">
                About Growth11
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-page-title">
                The Entrepreneurs Behind Your Growth
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-page-intro">
                We built Nojoto from nothing to a 100 crore valuation. Now we help businesses like yours achieve similar growth trajectories through proven strategies and entrepreneurial expertise.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}