import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerBrands from "@/components/PartnerBrands";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PartnerBrands />
        <CaseStudySection />
      </main>
      <Footer />
    </div>
  );
}