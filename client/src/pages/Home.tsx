import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerBrands from "@/components/PartnerBrands";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";

export default function Home() {
  useSEO({
    title: "Growth11 Ajmer - Digital Marketing Agency | Expert Growth Solutions in Ajmer, Rajasthan",
    description: "Leading digital marketing agency in Ajmer, Rajasthan. Growth11 helps businesses scale revenue through expert SEO, social media marketing, and tech services in Ajmer.",
    ogTitle: "Growth11 Ajmer - #1 Digital Marketing Agency in Ajmer, Rajasthan",
    ogDescription: "Expert digital marketing and growth solutions in Ajmer. Proven track record scaling businesses with SEO, social media, and tech services in Rajasthan."
  });

  return (
    <div className="min-h-screen">
      <LocalBusinessSchema
        name="Growth11"
        description="Leading digital marketing agency in Ajmer, Rajasthan providing SEO, social media marketing, web development, and business growth solutions."
        url="https://growth11.in"
        telephone="+91-70144-31277"
        email="Satya.yogigrowth@gmail.com"
        address={{
          streetAddress: "Ajmer",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          postalCode: "305001",
          addressCountry: "India"
        }}
        services={[
          "Search Engine Optimization (SEO)",
          "Social Media Marketing",
          "Website Development",
          "Performance Marketing",
          "Influencer Marketing",
          "AI Video Creation",
          "E-commerce Conversion Optimization",
          "Product Growth Management"
        ]}
        foundingDate="2020"
        priceRange="₹₹"
      />
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