import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerBrands from "@/components/PartnerBrands";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Growth11 Ajmer - Digital Marketing Agency | Expert Growth Solutions in Ajmer, Rajasthan",
    description: "Leading digital marketing agency in Ajmer, Rajasthan. Growth11 helps businesses scale revenue through expert SEO, social media marketing, and tech services in Ajmer.",
    ogTitle: "Growth11 Ajmer - #1 Digital Marketing Agency in Ajmer, Rajasthan",
    ogDescription: "Expert digital marketing and growth solutions in Ajmer. Proven track record scaling businesses with SEO, social media, and tech services in Rajasthan."
  });

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