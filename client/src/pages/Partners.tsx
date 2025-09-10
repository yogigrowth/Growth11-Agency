import Navigation from "@/components/Navigation";
import PartnerBrands from "@/components/PartnerBrands";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function Partners() {
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