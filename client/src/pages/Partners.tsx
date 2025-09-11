import Navigation from "@/components/Navigation";
import PartnerBrands from "@/components/PartnerBrands";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

export default function Partners() {
  useSEO({
    title: "Our Clients & Partners - Growth11 Ajmer | Digital Marketing Success Stories in Rajasthan",
    description: "Meet Growth11 Ajmer's successful clients and partners in Rajasthan. Leading digital marketing agency with proven results for businesses across Ajmer and Rajasthan.",
    ogTitle: "Growth11 Ajmer Clients & Partners - Success Stories in Rajasthan",
    ogDescription: "Successful digital marketing partnerships in Ajmer. Growth11's client portfolio includes major brands and businesses across Rajasthan."
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PartnerBrands />
      </main>
      <Footer />
    </div>
  );
}