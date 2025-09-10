import Navigation from "@/components/Navigation";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function CaseStudy() {
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