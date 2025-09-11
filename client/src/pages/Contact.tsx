import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Growth11 Ajmer - Digital Marketing Agency | Get Quote in Ajmer, Rajasthan",
    description: "Contact Growth11 Ajmer for digital marketing services. Get free consultation and quote for SEO, social media, web development in Ajmer, Rajasthan. Call +91-70144-31277",
    ogTitle: "Contact Growth11 Ajmer - Digital Marketing Consultation",
    ogDescription: "Get in touch with Growth11 Ajmer for expert digital marketing services in Rajasthan. Free consultation available for businesses in Ajmer."
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}