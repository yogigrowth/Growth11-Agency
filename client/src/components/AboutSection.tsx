import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Users, TrendingUp, Award, Briefcase, GraduationCap, Building2 } from "lucide-react";
import satyapremPhoto from "@assets/WhatsApp Image 2025-09-11 at 13.50.34_1757578936202.jpeg";
import himanshuPhoto from "@assets/1755399159592_1757579526986.png";

const teamMembers = [
  {
    name: "Satyaprem",
    linkedin: "https://www.linkedin.com/in/satyaprem-upadhyay-%F0%9F%9A%80-24844016/",
    description: "Led Nojoto's growth from bootstrap to 100 Cr valuation with strategic business development and growth initiatives",
    workExperience: 12,
    companies: [
      { name: "TCS", logoSrc: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Logo.png" },
      { name: "Snapdeal", logoSrc: "https://logos-world.net/wp-content/uploads/2020/11/Snapdeal-Logo.png" },
      { name: "Network18", logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Network18_logo.svg/320px-Network18_logo.svg.png" },
      { name: "Nojoto", logoSrc: "https://nojoto.com/static/img/nojoto-logo.png" }
    ],
    education: "B.Tech, MPUAT, Udaipur (Gold Medalist)",
    photo: satyapremPhoto
  },
  {
    name: "Himanshu", 
    linkedin: "https://www.linkedin.com/in/himanshucmo/",
    description: "Architected Nojoto's technology platform serving 80L+ MAU and led product innovation across multiple verticals",
    workExperience: 14,
    companies: [
      { name: "Google", logoSrc: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" },
      { name: "Microsoft", logoSrc: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
      { name: "Flipkart", logoSrc: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" },
      { name: "Nojoto", logoSrc: "https://nojoto.com/static/img/nojoto-logo.png" }
    ],
    education: "B.Tech Computer Science, IIT Delhi",
    photo: himanshuPhoto
  },
  {
    name: "Nandini",
    linkedin: "https://www.linkedin.com/in/nandini-upadhyay0127/",
    description: "Spearheading Growth11's expansion initiatives and operational excellence with focus on client success and revenue growth",
    workExperience: 8,
    companies: [
      { name: "McKinsey", logoSrc: "https://logos-world.net/wp-content/uploads/2021/08/McKinsey-Logo.png" },
      { name: "Accenture", logoSrc: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png" },
      { name: "Deloitte", logoSrc: "https://logos-world.net/wp-content/uploads/2021/02/Deloitte-Logo.png" },
      { name: "Growth11", logoSrc: "https://via.placeholder.com/120x40/EC4899/FFFFFF?text=Growth11" }
    ],
    education: "MBA Strategy & Operations, IIM Ahmedabad",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  }
];

export default function AboutSection() {
  const handleLinkedInClick = (linkedin: string, memberName: string) => {
    console.log(`${memberName} LinkedIn clicked`);
    window.open(linkedin, '_blank');
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

        <div className="max-w-6xl mx-auto space-y-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="hover-elevate transition-all duration-200"
              data-testid={`card-team-member-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Large Avatar on Left */}
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={member.photo} alt={`${member.name} profile`} />
                      <AvatarFallback className="text-2xl font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  {/* Content on Right */}
                  <div className="flex-1 space-y-4">
                    {/* Name and Role */}
                    <div>
                      <h4 className="font-bold text-2xl mb-1" data-testid={`text-team-member-${index + 1}-name`}>
                        {member.name}
                      </h4>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground" data-testid={`text-team-member-${index + 1}-description`}>
                      {member.description}
                    </p>
                    
                    {/* Work Experience */}
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground" data-testid={`text-team-member-${index + 1}-experience`}>
                        {member.workExperience}+ years of experience
                      </span>
                    </div>
                    
                    {/* Education */}
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground" data-testid={`text-team-member-${index + 1}-education`}>
                        {member.education}
                      </span>
                    </div>
                    
                    {/* Companies */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Companies</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center">
                        {member.companies.map((company, companyIndex) => (
                          <div key={company.name} className="flex items-center">
                            {company.logoSrc ? (
                              <img
                                src={company.logoSrc}
                                alt={`${company.name} logo`}
                                className="h-6 w-auto object-contain"
                                data-testid={`img-team-member-${index + 1}-company-logo-${companyIndex + 1}`}
                                onError={(e) => {
                                  // Fallback to badge if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  const badge = document.createElement('div');
                                  badge.className = 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80';
                                  badge.textContent = company.name;
                                  badge.setAttribute('data-testid', `badge-team-member-${index + 1}-company-${companyIndex + 1}`);
                                  target.parentNode?.replaceChild(badge, target);
                                }}
                              />
                            ) : (
                              <Badge 
                                variant="secondary" 
                                className="text-xs"
                                data-testid={`badge-team-member-${index + 1}-company-${companyIndex + 1}`}
                              >
                                {company.name}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* LinkedIn Button */}
                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleLinkedInClick(member.linkedin, member.name)}
                        data-testid={`button-team-member-${index + 1}-linkedin`}
                        className="hover-elevate"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}