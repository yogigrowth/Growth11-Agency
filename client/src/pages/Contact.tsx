import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactForm />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}