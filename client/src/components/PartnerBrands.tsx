// Import client logos
import stageLogoPath from "@assets/images (7)_1758001852502.png";
import tattvaLogoPath from "@assets/logo_1_png_1758001852502.png";
import marutiSuzukiLogoPath from "@assets/310ad406ebb942f4e7d39d9961a7366d_1758001852503.jpg";
import districtLogoPath from "@assets/images (6)_1758001852503.png";
import bookmyshowLogoPath from "@assets/images (5)_1758001852503.png";
import lavellaLogoPath from "@assets/images (4)_1758001852503.png";
import nurtureFarmLogoPath from "@assets/Nurture-social-icons-master_Medium_1758001852504.png";
import greenfortuneLogoPath from "@assets/images (3)_1758001852504.png";
import indiamartLogoPath from "@assets/indiamart-logo_1758001852504.png";
import skypeLogoPath from "@assets/Skype_Logo_1758001852504.png";
import nexaLogoPath from "@assets/Maruti_Suzuki_NEXA_1758001852504.jpg";
import hpLogoPath from "@assets/HP_logo_2025.svg_1758001852504.png";
import microsoftLogoPath from "@assets/images (2)_1758001852504.png";
import withLogoPath from "@assets/with-logo-text_1758001852504.webp";
import akisoLogoPath from "@assets/Akiso_LOGO_PnG_1758001852504.webp";
import LazyImage from "@/components/LazyImage";

// Partner brands with real client logos
const partners = [
  {
    name: "Stage",
    id: "stage",
    logoSrc: stageLogoPath
  },
  {
    name: "Tattva Wellness", 
    id: "tattva-wellness",
    logoSrc: tattvaLogoPath
  },
  {
    name: "Maruti Suzuki",
    id: "maruti-suzuki", 
    logoSrc: marutiSuzukiLogoPath
  },
  {
    name: "District by Zomato",
    id: "district-zomato",
    logoSrc: districtLogoPath
  },
  {
    name: "BookMyShow",
    id: "bookmyshow",
    logoSrc: bookmyshowLogoPath
  },
  {
    name: "Lavella Wellness",
    id: "lavella-wellness", 
    logoSrc: lavellaLogoPath
  },
  {
    name: "Nurture Farm",
    id: "nurture-farm",
    logoSrc: nurtureFarmLogoPath
  },
  {
    name: "Greenfortune",
    id: "greenfortune",
    logoSrc: greenfortuneLogoPath
  },
  {
    name: "IndiaMART",
    id: "indiamart",
    logoSrc: indiamartLogoPath
  },
  {
    name: "Skype",
    id: "skype",
    logoSrc: skypeLogoPath
  },
  {
    name: "NEXA",
    id: "nexa",
    logoSrc: nexaLogoPath
  },
  {
    name: "HP",
    id: "hp",
    logoSrc: hpLogoPath
  },
  {
    name: "Microsoft",
    id: "microsoft",
    logoSrc: microsoftLogoPath
  },
  {
    name: "With",
    id: "with-women-hood",
    logoSrc: withLogoPath
  },
  {
    name: "Akiso",
    id: "akiso",
    logoSrc: akisoLogoPath
  }
];

export default function PartnerBrands() {
  const handlePartnerClick = (partner: typeof partners[0]) => {
    console.log(`${partner.name} clicked`);
    // Add specific partner website URLs if needed
    if (partner.id === 'with-women-hood') {
      window.open('https://womeninthehood.in/', '_blank');
    } else if (partner.id === 'bookmyshow') {
      window.open('https://in.bookmyshow.com/', '_blank');
    } else if (partner.id === 'skype') {
      window.open('https://www.skype.com/', '_blank');
    } else if (partner.id === 'microsoft') {
      window.open('https://www.microsoft.com/', '_blank');
    } else if (partner.id === 'hp') {
      window.open('https://www.hp.com/', '_blank');
    } else if (partner.id === 'indiamart') {
      window.open('https://www.indiamart.com/', '_blank');
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Leading Brands
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with industry leaders across various sectors to drive their digital growth and achieve remarkable results.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => handlePartnerClick(partner)}
              data-testid={`logo-partner-${partner.id}`}
            >
              <div className="flex items-center justify-center h-32 md:h-40">
                <LazyImage 
                  src={partner.logoSrc}
                  alt={`${partner.name} - Trusted client of Growth11 digital marketing agency`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  data-testid={`logo-partner-${partner.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}