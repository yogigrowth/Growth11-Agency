import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Search, Users, Video, Target, Megaphone, ShoppingCart, Repeat } from "lucide-react";

const services = [
  {
    category: "Tech",
    icon: Globe,
    services: [
      { name: "Website Building", icon: Globe, description: "Modern, responsive websites that convert visitors into customers" },
      { name: "SEO", icon: Search, description: "Strategic search optimization to increase organic visibility and traffic" }
    ]
  },
  {
    category: "Marketing",
    icon: Target,
    services: [
      { name: "Social Media Marketing", icon: Users, description: "Engaging social strategies that build community and drive sales" },
      { name: "Influencer Marketing", icon: Users, description: "Connect with influencers who authentically represent your brand" },
      { name: "AI Video Creation", icon: Video, description: "Cutting-edge AI-powered video content for maximum engagement" },
      { name: "Performance Marketing", icon: Target, description: "Data-driven campaigns optimized for D2C client success" },
      { name: "Branding & PR", icon: Megaphone, description: "Build a compelling brand story that resonates with your audience" }
    ]
  },
  {
    category: "Product Management",
    icon: ShoppingCart,
    services: [
      { name: "Conversion & Retention", icon: ShoppingCart, description: "Optimize your E-Commerce & D2C funnel for maximum ROI" },
      { name: "Product Driven Growth", icon: Repeat, description: "Implement referral systems and growth loops for sustainable scaling" }
    ]
  }
];

export default function ServicesSection() {
  const handleServiceClick = (serviceName: string) => {
    console.log(`${serviceName} service clicked`);
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-services">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
            Comprehensive Growth Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            From tech infrastructure to marketing excellence, we provide end-to-end solutions for sustainable business growth.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {services.map((category, categoryIndex) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" data-testid={`text-category-${category.category.toLowerCase()}`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={service.name}
                    className="hover-elevate cursor-pointer transition-all duration-200"
                    onClick={() => handleServiceClick(service.name)}
                    data-testid={`card-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
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