import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// todo: remove mock functionality - replace with real partner brand logos
const partners = [
  "ADLD Toyota",
  "VakeelSaab",
  "Snapdeal", 
  "Network18",
  "Akiso Fashion",
  "Satyam Ayurveda"
];

export default function PartnerBrands() {
  const handlePartnerClick = (partner: string) => {
    console.log(`${partner} clicked`);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-partners">
            Trusted By Leading Brands
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-partners-title">
            Partner Brands We've Worked With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-partners-description">
            We've helped diverse brands across industries achieve remarkable growth and scale their revenue effectively.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={partner}
              className="hover-elevate cursor-pointer transition-all duration-200 border-2"
              onClick={() => handlePartnerClick(partner)}
              data-testid={`card-partner-${partner.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="flex items-center justify-center h-24 p-4">
                <div className="text-center">
                  <div className="font-semibold text-sm text-foreground">
                    {partner}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to join our success stories?
          </p>
          <button 
            className="text-primary font-semibold hover:underline"
            onClick={() => console.log('View all case studies clicked')}
            data-testid="link-view-case-studies"
          >
            View All Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
}