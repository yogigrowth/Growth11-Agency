import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerBrands from "@/components/PartnerBrands";
import CaseStudySection from "@/components/CaseStudySection";
import AboutSectionHome from "@/components/AboutSectionHome";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";

export default function Home() {
  useSEO({
    title: "Digital Marketing Agency | SEO, Website, App & Social Media–Growth11",
    description: "Growth11 offers SEO, social media marketing, website design, app development, performance marketing to help businesses grow revenue, leads, and sales",
    ogTitle: "Digital Marketing Agency | SEO, Website, App & Social Media–Growth11",
    ogDescription: "Growth11 offers SEO, social media marketing, website design, app development, performance marketing to help businesses grow revenue, leads, and sales"
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
        <AboutSectionHome />
      </main>
      <Footer />
    </div>
  );
}