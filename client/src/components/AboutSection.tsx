import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";
import satyapremPhoto from "@assets/WhatsApp Image 2025-09-11 at 13.50.34_1757578936202.jpeg";
import himanshuPhoto from "@assets/1755399159592_1757579526986.png";
import tcsLogo from "@assets/TCS_Logo_(cropped)_1758000142373.jpg";
import snapdealLogo from "@assets/Snapdeal_logo_new_1758000142373.png";
import network18Logo from "@assets/Network18_1758000142373.webp";
import nojotoLogo from "@assets/Nojoto_1758000142372.jpg";
import grapesDigitalLogo from "@assets/images_1758000353752.png";
import autumnWorldwideLogo from "@assets/images (1)_1758000353752.png";
import internshalaLogo from "@assets/internshala_og_image_1758000353751.jpg";
import himanshuNojotoLogo from "@assets/Nojoto_1758000353752.jpg";
import micaLogo from "@assets/upload__1668751152376_1758000489126.jpeg";
import LazyImage from "@/components/LazyImage";
import nainaPhoto from "@assets/WhatsApp Image 2025-10-13 at 11.38.17 PM.jpeg";
import growth11Logo from "@assets/Logo 6_1757575298583.png";

const teamMembers = [
  {
    name: "Satyaprem",
    title: "Founding Partner, Growth11",
    linkedin:
      "https://www.linkedin.com/in/satyaprem-upadhyay-%F0%9F%9A%80-24844016/",
    description:
      "Led Nojoto's journey from bootstrap to a ₹100 Cr valuation, scaling it to 8M+ MAUs with strategic business development, growth marketing, and product innovation.\n\nWith 12+ years of experience, Satyaprem brings expertise in digital marketing, business strategy, and AI-driven growth systems, having worked with top companies like TCS, Snapdeal, and Network18.\n\nA B.Tech Gold Medalist from MPUAT, Udaipur, Satyaprem blends technical expertise with entrepreneurial vision.\n\nAt Growth11, he helps businesses unlock exponential growth through performance marketing, brand strategy, and data-driven campaigns, focusing on D2C brands, SaaS, and high-growth startups.",
    workExperience: 12,
    companies: [
      { name: "TCS", logoSrc: tcsLogo, website: "https://www.tcs.com" },
      {
        name: "Snapdeal",
        logoSrc: snapdealLogo,
        website: "https://www.snapdeal.com",
      },
      {
        name: "Network18",
        logoSrc: network18Logo,
        website: "https://www.network18.com",
      },
      {
        name: "Nojoto",
        logoSrc: nojotoLogo,
        website: "https://www.nojoto.com",
      },
      {
        name: "MICA",
        logoSrc: micaLogo,
        website: "https://www.micaahmedabad.edu.in",
      },
    ],
    education: "MBA, MICA Ahmedabad | B.Tech, MPUAT, Udaipur (Gold Medalist)",
    photo: satyapremPhoto,
  },
  {
    name: "Himanshu",
    title: "Founding Partner, Growth11",
    linkedin: "https://www.linkedin.com/in/himanshucmo/",
    description:
      "A marketing leader with 10+ years of experience in digital growth, user acquisition, and branding, Himanshu co-founded Nojoto in 2017 and has since been instrumental in its rise as one of India's premier storytelling platforms. He leads all marketing, user growth, community building, and brand strategy efforts, having built scalable campaigns across performance ads, content, social, and product-led marketing.\n\nBefore Nojoto, Himanshu sharpened his skills at companies like Grapes Digital (digital account planning), Autumn Worldwide (social media marketing), and Internshala. His early exposure includes work in community building and even radio, which contributes to his deep understanding of audience, content, and engagement.\n\nHe holds a B.Tech in Electrical & Electronics Engineering from Bhagwant University. Passionate about creative storytelling & data-driven strategies, Himanshu believes in empowering creators, fostering authentic communities, and scaling brands through measurable growth.",
    workExperience: 10,
    companies: [
      {
        name: "Grapes Digital",
        logoSrc: grapesDigitalLogo,
        website: "https://grapesdigital.com",
      },
      {
        name: "Autumn Worldwide",
        logoSrc: autumnWorldwideLogo,
        website: "https://autumnworldwide.com",
      },
      {
        name: "Internshala",
        logoSrc: internshalaLogo,
        website: "https://internshala.com",
      },
      {
        name: "Nojoto",
        logoSrc: himanshuNojotoLogo,
        website: "https://www.nojoto.com",
      },
    ],
    education:
      "B.Tech in Electrical & Electronics Engineering, Bhagwant University",
    photo: himanshuPhoto,
  },
  {
    name: "Nandini",
    linkedin: "https://www.linkedin.com/in/nandini-upadhyay0127/",
    description:
      "Passionate full-stack developer with a focus on building real-world solutions using the MERN stack.\n\n I’ve worked on diverse projects—from e-commerce platforms and AI-driven apps to automation tools for schools—gaining hands-on experience in both frontend and backend development.",
    workExperience: 1,
    companies: [
      {
        name: "Growth11",
        logoSrc: growth11Logo,
        website: "https://growth11.in",
      },
    ],
    education: "Bachelor of Computer Applications, MDS University",
    photo: nainaPhoto,
  },
];

// Calculate company test IDs ahead of time
const getCompanyTestIds = () => {
  let globalIndex = 0;
  const testIdMap = new Map();

  teamMembers.forEach((member) => {
    member.companies.forEach((company) => {
      globalIndex++;
      testIdMap.set(`${member.name}-${company.name}`, globalIndex);
    });
  });

  return testIdMap;
};

export default function AboutSection() {
  const companyTestIds = getCompanyTestIds();

  const handleLinkedInClick = (linkedin: string, memberName: string) => {
    console.log(`${memberName} LinkedIn clicked`);
    window.open(linkedin, "_blank");
  };

  const handleLearnMore = () => {
    console.log("Learn more about our journey clicked");
  };

  const handleCompanyLogoError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    company: { name: string },
    testId: number,
  ) => {
    const target = e.target as HTMLImageElement;
    const linkElement = target.parentNode as HTMLAnchorElement;
    const badge = document.createElement("span");
    badge.className =
      "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
    badge.textContent = company.name;
    badge.setAttribute("data-testid", `badge-company-${testId}`);
    linkElement.replaceChild(badge, target);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-about">
            Who We Are
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-about-title"
          >
            Entrepreneurs Building Growth Solutions
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-about-description"
          >
            We are entrepreneurs with a proven track record. As Co-Founders of
            Nojoto, we built and scaled the platform from Bootstrap to 80 Lac
            Monthly Active Users and 12 Crore Annual Revenue, achieving a 100
            Crore valuation in 8 years.
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
                  <div className="text-sm text-muted-foreground">
                    Monthly Active Users
                  </div>
                </div>
                <div
                  className="text-center"
                  data-testid="metric-journey-revenue"
                >
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="text-3xl font-bold text-chart-2">₹12 Cr</div>
                  <div className="text-sm text-muted-foreground">
                    Annual Revenue
                  </div>
                </div>
                <div
                  className="text-center"
                  data-testid="metric-journey-valuation"
                >
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">₹100 Cr</div>
                  <div className="text-sm text-muted-foreground">
                    Company Valuation
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3
                  className="text-xl font-semibold mb-4"
                  data-testid="text-nojoto-story"
                >
                  The Nojoto Journey
                </h3>
                <p className="text-muted-foreground mb-6">
                  From a bootstrap startup to a unicorn-scale platform, we
                  understand what it takes to build and scale businesses. Now we
                  help other entrepreneurs and businesses achieve similar growth
                  trajectories.
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
                      <AvatarImage
                        src={member.photo}
                        alt={`${member.name}, Co-Founder of Growth11 Ajmer digital marketing agency`}
                      />
                      <AvatarFallback className="text-2xl font-semibold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Content on Right */}
                  <div className="flex-1 space-y-4">
                    {/* Name and Role */}
                    <div>
                      <h4
                        className="font-bold text-2xl mb-1"
                        data-testid={`text-team-member-${index + 1}-name`}
                      >
                        {member.name}
                      </h4>
                      {member.title && (
                        <p
                          className="text-lg text-primary font-semibold mb-2"
                          data-testid={`text-team-member-${index + 1}-title`}
                        >
                          {member.title}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div
                      className="text-muted-foreground space-y-3"
                      data-testid={`text-team-member-${index + 1}-description`}
                    >
                      {member.description
                        .split("\n\n")
                        .map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Work Experience */}
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span
                        className="text-sm text-muted-foreground"
                        data-testid={`text-team-member-${index + 1}-experience`}
                      >
                        {member.workExperience}+ years of experience
                      </span>
                    </div>

                    {/* Education */}
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span
                        className="text-sm text-muted-foreground"
                        data-testid={`text-team-member-${index + 1}-education`}
                      >
                        {member.education}
                      </span>
                    </div>

                    {/* Companies */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Companies
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center">
                        {member.companies.map((company) => {
                          const testId = companyTestIds.get(
                            `${member.name}-${company.name}`,
                          );
                          return (
                            <div
                              key={company.name}
                              className="flex items-center"
                            >
                              {company.logoSrc ? (
                                <a
                                  href={company.website || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:opacity-75 transition-opacity"
                                  data-testid={`link-company-${testId}`}
                                >
                                  <LazyImage
                                    src={company.logoSrc}
                                    alt={`Visit ${company.name} official website - ${company.name} company logo`}
                                    className="h-9 w-auto object-contain hover-elevate"
                                    data-testid={`img-company-${testId}`}
                                    onError={(e) =>
                                      handleCompanyLogoError(
                                        e,
                                        company,
                                        testId!,
                                      )
                                    }
                                  />
                                </a>
                              ) : (
                                <a
                                  href={company.website || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:opacity-75 transition-opacity"
                                  data-testid={`link-company-${testId}`}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="text-xs hover-elevate"
                                    data-testid={`badge-company-${testId}`}
                                  >
                                    {company.name}
                                  </Badge>
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleLinkedInClick(member.linkedin, member.name)
                        }
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
