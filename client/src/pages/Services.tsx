import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  useSEO({
    title: "Digital Marketing Services Ajmer - SEO, Social Media, Web Development | Growth11 Ajmer",
    description: "Complete digital marketing services in Ajmer, Rajasthan. SEO, social media marketing, web development, and performance marketing by Growth11 Ajmer experts.",
    ogTitle: "Digital Marketing Services in Ajmer - Growth11 Rajasthan",
    ogDescription: "Expert digital marketing services in Ajmer: SEO, social media, web development, performance marketing. Leading agency in Rajasthan with proven results."
  });

  const handleGetQuote = () => {
    console.log('Get quote clicked');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}