import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    category: "Tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    description: "Modern tech solutions that scale your business. From responsive websites to SEO optimization, we build the digital foundation that drives sustainable growth and converts visitors into loyal customers."
  },
  {
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
    description: "Comprehensive marketing strategies that deliver results. Our team specializes in social media, influencer partnerships, AI video creation, performance marketing, and brand building that resonates with your target audience."
  },
  {
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    description: "Strategic product management that drives growth. We optimize conversion funnels, implement retention strategies, and build growth loops that create sustainable scaling for E-Commerce and D2C businesses."
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.category}
              className="hover-elevate cursor-pointer transition-all duration-200 overflow-hidden"
              onClick={() => handleServiceClick(service.category)}
              data-testid={`card-service-${service.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`text-service-${service.category.toLowerCase().replace(/\s+/g, '-')}-title`}>
                  {service.category}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-${service.category.toLowerCase().replace(/\s+/g, '-')}-description`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}