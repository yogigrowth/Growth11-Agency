import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

// todo: replace with real phone number
const PHONE_NUMBER = "+919999999999";
const WHATSAPP_NUMBER = "919999999999";

export default function FloatingContactButtons() {
  const handleCall = () => {
    console.log('Call button clicked');
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  const handleWhatsApp = () => {
    console.log('WhatsApp button clicked');
    const message = encodeURIComponent("Hi Growth11! I'm interested in your services and would like to discuss my project.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="icon"
        onClick={handleWhatsApp}
        className="rounded-full bg-green-500 text-white shadow-lg"
        data-testid="button-floating-whatsapp"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      <Button
        size="icon"
        onClick={handleCall}
        className="rounded-full bg-blue-500 text-white shadow-lg"
        data-testid="button-floating-call"
        aria-label="Call us now"
        title="Call us now"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
}