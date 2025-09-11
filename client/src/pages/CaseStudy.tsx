import Navigation from "@/components/Navigation";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

export default function CaseStudy() {
  useSEO({
    title: "Digital Marketing Case Study - Akiso Fashion Success | Growth11 Ajmer, Rajasthan",
    description: "See how Growth11 Ajmer scaled Akiso Fashion to 12L+ monthly revenue with 4X ROAS. Digital marketing success story from leading agency in Rajasthan.",
    ogTitle: "Akiso Fashion Case Study - Growth11 Ajmer Success Story",
    ogDescription: "Digital marketing case study: How Growth11 Ajmer scaled e-commerce revenue to 12L+ monthly with proven strategies in Rajasthan."
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CaseStudySection />
      </main>
      <Footer />
    </div>
  );
}