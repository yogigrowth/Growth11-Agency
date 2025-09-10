import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Services() {
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