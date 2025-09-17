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
    logoSrc: stageLogoPath,
    website: "https://stage.in/"
  },
  {
    name: "Tattva Wellness", 
    id: "tattva-wellness",
    logoSrc: tattvaLogoPath,
    website: "https://www.tattvawellness.com/"
  },
  {
    name: "Maruti Suzuki",
    id: "maruti-suzuki", 
    logoSrc: marutiSuzukiLogoPath,
    website: "https://www.marutisuzuki.com/"
  },
  {
    name: "District by Zomato",
    id: "district-zomato",
    logoSrc: districtLogoPath,
    website: "https://www.zomato.com/"
  },
  {
    name: "BookMyShow",
    id: "bookmyshow",
    logoSrc: bookmyshowLogoPath,
    website: "https://in.bookmyshow.com/"
  },
  {
    name: "Lavella Wellness",
    id: "lavella-wellness", 
    logoSrc: lavellaLogoPath,
    website: "https://lavellagroup.com/"
  },
  {
    name: "Nurture Farm",
    id: "nurture-farm",
    logoSrc: nurtureFarmLogoPath,
    website: "https://nurturefarm.in/"
  },
  {
    name: "Greenfortune",
    id: "greenfortune",
    logoSrc: greenfortuneLogoPath,
    website: "https://greenfortune.in/"
  },
  {
    name: "IndiaMART",
    id: "indiamart",
    logoSrc: indiamartLogoPath,
    website: "https://www.indiamart.com/"
  },
  {
    name: "Skype",
    id: "skype",
    logoSrc: skypeLogoPath,
    website: "https://www.skype.com/"
  },
  {
    name: "NEXA",
    id: "nexa",
    logoSrc: nexaLogoPath,
    website: "https://www.nexaexperience.com/"
  },
  {
    name: "HP",
    id: "hp",
    logoSrc: hpLogoPath,
    website: "https://www.hp.com/"
  },
  {
    name: "Microsoft",
    id: "microsoft",
    logoSrc: microsoftLogoPath,
    website: "https://www.microsoft.com/"
  },
  {
    name: "With",
    id: "with-women-hood",
    logoSrc: withLogoPath,
    website: "https://womeninthehood.in/"
  },
  {
    name: "Akiso",
    id: "akiso",
    logoSrc: akisoLogoPath,
    website: "https://akiso.in/"
  }
];

export default function PartnerBrands() {
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
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
              data-testid={`link-client-${partner.id}`}
            >
              <div className="flex items-center justify-center h-32 md:h-40">
                <LazyImage 
                  src={partner.logoSrc}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  data-testid={`img-client-${partner.id}`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}