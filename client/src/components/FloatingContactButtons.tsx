import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+917014431277";
const WHATSAPP_NUMBER = "917014431277";

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
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full animate-ping bg-[#25d366] opacity-20"></div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-[#25d366] opacity-30"></div>
          
          {/* Main WhatsApp Button */}
          <Button
            size="icon"
            onClick={handleWhatsApp}
            className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#128c7e] text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 ease-in-out border-0 no-default-hover-elevate"
            data-testid="button-floating-whatsapp"
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </div>
      </div>

      {/* Phone Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-sm"></div>
          
          {/* Main Phone Button */}
          <Button
            size="icon"
            onClick={handleCall}
            className="relative w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-0 no-default-hover-elevate"
            data-testid="button-floating-call"
            aria-label="Call us now"
            title="Call us now"
          >
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
}