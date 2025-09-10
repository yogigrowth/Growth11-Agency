import Navigation from "@/components/Navigation";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-case-study-page">
                Case Studies
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-case-study-page-title">
                Proven Results That Speak for Themselves
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-case-study-page-intro">
                Discover how we've helped businesses like Akiso Fashion achieve remarkable growth with our strategic approach and proven methodologies.
              </p>
            </div>
          </div>
        </section>
        <CaseStudySection />
      </main>
      <Footer />
    </div>
  );
}