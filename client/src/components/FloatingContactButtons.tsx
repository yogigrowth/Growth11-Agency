import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import whatsappIcon from "@assets/image_1757579425669.png";

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
          {/* Multiple concentric rings for sophisticated effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-[#25d366] opacity-10 scale-150"></div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-[#25d366] opacity-15 scale-125" style={{animationDuration: '2s'}}></div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-[#25d366] opacity-20 scale-110" style={{animationDuration: '1.5s'}}></div>
          <div className="absolute inset-0 rounded-full bg-[#25d366] opacity-25 blur-sm"></div>
          
          {/* Main WhatsApp Button */}
          <Button
            size="icon"
            onClick={handleWhatsApp}
            className="relative w-16 h-16 rounded-full text-white transform hover:scale-110 transition-all duration-300 ease-in-out border-0 no-default-hover-elevate"
            style={{
              backgroundColor: '#25d366',
              boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4), 0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(37, 211, 102, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128c7e'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25d366'}
            data-testid="button-floating-whatsapp"
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
          >
            <img 
              src={whatsappIcon} 
              alt="WhatsApp" 
              className="h-9 w-9"
            />
          </Button>
        </div>
      </div>

      {/* Phone Button */}
      <div className="fixed bottom-28 right-6 z-50">
        <div className="relative">
          {/* Multiple concentric rings with blue theme */}
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-10 scale-150"></div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-blue-500 opacity-15 scale-125" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-blue-500 opacity-20 scale-110" style={{animationDuration: '2s'}}></div>
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-25 blur-sm"></div>
          
          {/* Main Phone Button */}
          <Button
            size="icon"
            onClick={handleCall}
            className="relative w-14 h-14 rounded-full text-white transform hover:scale-105 transition-all duration-300 ease-in-out border-0 no-default-hover-elevate"
            style={{
              backgroundColor: 'rgb(59, 130, 246)',
              boxShadow: '0 6px 24px rgba(59, 130, 246, 0.4), 0 3px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(37, 99, 235)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(59, 130, 246)'}
            data-testid="button-floating-call"
            data-tel="+917014431277"
            aria-label="Call us now"
            title="Call us now"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
}