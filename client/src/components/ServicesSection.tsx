import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Search,
  Users,
  Video,
  Target,
  Megaphone,
  ShoppingCart,
  Repeat,
} from "lucide-react";
import { useLocation } from "wouter";
import websiteBuildingImg from "@assets/generated_images/Website_building_workspace_6f5bce90.png";
import seoImg from "@assets/generated_images/SEO_analytics_dashboard_be8c4a6f.png";
import socialMediaImg from "@assets/generated_images/Social_media_marketing_setup_3a484532.png";
import influencerImg from "@assets/generated_images/Influencer_marketing_studio_308a274f.png";
import videoCreationImg from "@assets/generated_images/AI_video_creation_setup_18eeaf60.png";
import performanceMarketingImg from "@assets/generated_images/Performance_marketing_dashboard_d850e09d.png";
import brandingImg from "@assets/generated_images/Branding_and_PR_studio_cf71a773.png";
import conversionImg from "@assets/generated_images/E-commerce_conversion_optimization_add4237c.png";
import productGrowthImg from "@assets/generated_images/Product_growth_strategy_727ddc51.png";

const services = [
  {
    category: "Tech",
    icon: Globe,
    services: [
      {
        name: "Website Building",
        icon: Globe,
        image: websiteBuildingImg,
        description:
          "Modern, responsive websites that convert visitors into customers with cutting-edge design and functionality.",
      },
      {
        name: "SEO",
        icon: Search,
        image: seoImg,
        description:
          "Strategic search optimization to increase organic visibility, drive quality traffic, and boost your rankings.",
      },
    ],
  },
  {
    category: "Marketing",
    icon: Target,
    services: [
      {
        name: "Social Media & PR",
        icon: Megaphone,
        image: socialMediaImg,
        description:
          "Comprehensive social media strategies and PR campaigns that build brand presence and drive meaningful engagement.",
      },
      {
        name: "Influencer Marketing",
        icon: Users,
        image: influencerImg,
        description:
          "Connect with authentic influencers who represent your brand values and reach your target audience.",
      },
      {
        name: "AI Video Creation",
        icon: Video,
        image: videoCreationImg,
        description:
          "Cutting-edge AI-powered video content that maximizes engagement and storytelling impact.",
      },
      {
        name: "Performance Marketing",
        icon: Target,
        image: performanceMarketingImg,
        description:
          "Data-driven campaigns optimized for ROI with proven results for D2C and e-commerce clients.",
      },
    ],
  },
  {
    category: "Product Management",
    icon: ShoppingCart,
    services: [
      {
        name: "Conversion & Retention",
        icon: ShoppingCart,
        image: conversionImg,
        description:
          "Optimize your e-commerce funnel for maximum ROI with proven conversion and retention strategies.",
      },
      {
        name: "Product Driven Growth",
        icon: Repeat,
        image: productGrowthImg,
        description:
          "Implement smart referral systems and growth loops for sustainable, exponential scaling.",
      },
    ],
  },
];

export default function ServicesSection() {
  const [, navigate] = useLocation();

  const handleServiceClick = (serviceName: string) => {
    console.log(`${serviceName} service clicked`);

    if (serviceName === "Website Building") {
      navigate("/website-9999");
    } else if (serviceName === "SEO") {
      navigate("/seo-landing");
    } else if (serviceName === "Social Media & PR") {
      navigate("/social-media-pr-landing");
    } else if (serviceName === "Influencer Marketing") {
      navigate("/influencer-marketing-landing");
    } else if (serviceName === "Performance Marketing") {
      navigate("/performance-marketing-landing");
    } else if (serviceName === "Conversion & Retention") {
      navigate("/conversion-retention-landing");
    } else if (serviceName === "Product Driven Growth") {
      navigate("/product-growth-landing");
    } else if (serviceName === "AI Video Creation") {
      // window.open("https://replit.com/@nandiniupadhya5/Growth11Agency", "_blank");
      navigate("/ai-videos-10000");
    }
  };

  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 6% 94% / 0.3) 0%, hsl(220 6% 94% / 0.5) 50%, hsl(220 6% 94% / 0.3) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 animate-pulse-glow"
            data-testid="badge-services"
          >
            Our Services
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up"
            data-testid="text-services-title"
          >
            Comprehensive Growth Solutions
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            data-testid="text-services-description"
          >
            From tech infrastructure to marketing excellence, we provide
            end-to-end solutions for sustainable business growth.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {services.map((category, categoryIndex) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-8 animate-fade-in">
                <h3
                  className="text-3xl font-bold animate-fade-in"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(347, 84%, 48%) 0%, hsl(347, 84%, 58%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  data-testid={`text-category-${category.category.toLowerCase()}`}
                >
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={service.name}
                    className="cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl animate-scale-in"
                    onClick={() => handleServiceClick(service.name)}
                    data-testid={`card-service-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.name} - Growth11 Ajmer digital marketing service featuring modern tools and professional setup`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
