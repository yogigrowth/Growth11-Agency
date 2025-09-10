import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Users, TrendingUp, Award } from "lucide-react";
import founder1 from "@assets/generated_images/Professional_founder_portrait_one_9942288d.png";
import founder2 from "@assets/generated_images/Professional_founder_portrait_two_1db2bf91.png";

// todo: remove mock functionality - replace with real founder data
const founders = [
  {
    name: "Co-Founder 1",
    role: "CEO & Co-Founder",
    image: founder1,
    linkedin: "#",
    description: "Led Nojoto's growth strategy and business development"
  },
  {
    name: "Co-Founder 2", 
    role: "CTO & Co-Founder",
    image: founder2,
    linkedin: "#",
    description: "Architected Nojoto's tech infrastructure and product vision"
  }
];

export default function AboutSection() {
  const handleLinkedInClick = (founderName: string) => {
    console.log(`${founderName} LinkedIn clicked`);
  };

  const handleLearnMore = () => {
    console.log('Learn more about our journey clicked');
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-about">
            Who We Are
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            Entrepreneurs Building Growth Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
            We are entrepreneurs with a proven track record. As Co-Founders of Nojoto, we built and scaled the platform 
            from Bootstrap to 80 Lac Monthly Active Users and 12 Crore Annual Revenue, achieving a 100 Crore valuation in 8 years.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 border-2">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center" data-testid="metric-journey-mau">
                  <div className="flex justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">80L+</div>
                  <div className="text-sm text-muted-foreground">Monthly Active Users</div>
                </div>
                <div className="text-center" data-testid="metric-journey-revenue">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="text-3xl font-bold text-chart-2">₹12 Cr</div>
                  <div className="text-sm text-muted-foreground">Annual Revenue</div>
                </div>
                <div className="text-center" data-testid="metric-journey-valuation">
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">₹100 Cr</div>
                  <div className="text-sm text-muted-foreground">Company Valuation</div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-nojoto-story">The Nojoto Journey</h3>
                <p className="text-muted-foreground mb-6">
                  From a bootstrap startup to a unicorn-scale platform, we understand what it takes to build and scale businesses. 
                  Now we help other entrepreneurs and businesses achieve similar growth trajectories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleLearnMore}
                  data-testid="button-learn-more-journey"
                  className="hover-elevate"
                >
                  Learn More About Our Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={founder.name}
              className="hover-elevate transition-all duration-200"
              data-testid={`card-founder-${index + 1}`}
            >
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={founder.image} alt={founder.name} />
                  <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <h4 className="font-semibold text-lg mb-1" data-testid={`text-founder-${index + 1}-name`}>
                  {founder.name}
                </h4>
                <p className="text-primary font-medium mb-3" data-testid={`text-founder-${index + 1}-role`}>
                  {founder.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-founder-${index + 1}-description`}>
                  {founder.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleLinkedInClick(founder.name)}
                  data-testid={`button-founder-${index + 1}-linkedin`}
                  className="hover-elevate"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}