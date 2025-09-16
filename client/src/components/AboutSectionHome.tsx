import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import satyapremPhoto from "@assets/WhatsApp Image 2025-09-11 at 13.50.34_1757578936202.jpeg";
import himanshuPhoto from "@assets/1755399159592_1757579526986.png";

const founders = [
  {
    name: "Satyaprem",
    title: "Founding Partner, Growth11",
    linkedin: "https://www.linkedin.com/in/satyaprem-upadhyay-%F0%9F%9A%80-24844016/",
    shortBio: "Led Nojoto's journey from bootstrap to ₹100 Cr valuation. 12+ years experience in digital marketing, business strategy, and AI-driven growth systems.",
    highlights: ["B.Tech Gold Medalist", "8M+ MAUs at Nojoto", "TCS, Snapdeal, Network18"],
    photo: satyapremPhoto
  },
  {
    name: "Himanshu",
    title: "Founding Partner, Growth11",
    linkedin: "https://www.linkedin.com/in/himanshucmo/",
    shortBio: "Marketing leader with 10+ years experience. Co-founded Nojoto in 2017, building scalable campaigns across performance ads, content, and social media.",
    highlights: ["10+ Years Marketing", "Nojoto Co-founder", "User Growth Expert"],
    photo: himanshuPhoto
  }
];

export default function AboutSectionHome() {
  const handleLinkedInClick = (linkedin: string, memberName: string) => {
    console.log(`${memberName} LinkedIn clicked`);
    window.open(linkedin, '_blank');
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-about-us">
            Meet Our Founders
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            The Visionaries Behind Growth11
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-description">
            Entrepreneurs who scaled Nojoto from bootstrap to 100 crore valuation, now helping businesses achieve exponential growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {founders.map((founder, index) => (
            <Card key={founder.name} className="border-2 hover-elevate transition-all duration-300" data-testid={`card-founder-${founder.name.toLowerCase()}`}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="w-24 h-24 mb-4 ring-2 ring-primary/10">
                    <AvatarImage src={founder.photo} alt={founder.name} />
                    <AvatarFallback className="text-lg font-semibold">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold mb-1" data-testid={`text-founder-name-${founder.name.toLowerCase()}`}>
                      {founder.name}
                    </h3>
                    <p className="text-primary font-medium mb-2" data-testid={`text-founder-title-${founder.name.toLowerCase()}`}>
                      {founder.title}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLinkedInClick(founder.linkedin, founder.name)}
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                      data-testid={`button-linkedin-${founder.name.toLowerCase()}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-founder-bio-${founder.name.toLowerCase()}`}>
                    {founder.shortBio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-highlight-${founder.name.toLowerCase()}-${idx}`}
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about">
            <Button 
              size="lg"
              className="hover-elevate"
              data-testid="button-know-more-about"
            >
              Know More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}