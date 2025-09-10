import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
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