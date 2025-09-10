import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

// todo: replace with real phone number
const PHONE_NUMBER = "+919999999999";
const WHATSAPP_NUMBER = "+919999999999";

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
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover-elevate"
        data-testid="button-floating-whatsapp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      <Button
        size="icon"
        onClick={handleCall}
        className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover-elevate"
        data-testid="button-floating-call"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
}