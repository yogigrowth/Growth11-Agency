import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Users,
  Code,
  Target,
  TrendingUp,
  Mail,
  Star,
  CheckCircle,
  Zap,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const jobOpportunities = [
  // Engineering Opportunities
  {
    title: "Full Stack Developer Intern",
    department: "Engineering",
    location: "Ajmer, Rajasthan",
    type: "Internship",
    duration: "3-6 months",
    icon: Code,
    description:
      "Build cutting-edge websites and web applications for clients across Rajasthan. Learn React, Node.js, and modern development practices.",
    requirements: [
      "React/JavaScript knowledge",
      "Basic understanding of web development",
      "Passionate about coding",
      "Located in/around Ajmer",
    ],
    perks: [
      "Mentorship from senior developers",
      "Real client project experience",
      "Potential for full-time offer",
      "Flexible timing",
    ],
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Ajmer, Rajasthan",
    type: "Full-time",
    duration: "Permanent",
    icon: Code,
    description:
      "Create beautiful, responsive websites that convert visitors into customers. Work with latest technologies and design systems.",
    requirements: [
      "2+ years React experience",
      "Strong HTML/CSS/JavaScript",
      "UI/UX design understanding",
      "Portfolio of projects",
    ],
    perks: [
      "Competitive salary package",
      "Growth opportunities",
      "Work-life balance",
      "Learning & development budget",
    ],
  },
  // Marketing Opportunities
  {
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Ajmer, Rajasthan",
    type: "Internship",
    duration: "3-6 months",
    icon: Target,
    description:
      "Learn hands-on digital marketing strategies including social media, SEO, and performance marketing for real client campaigns.",
    requirements: [
      "Basic digital marketing knowledge",
      "Social media savvy",
      "Creative mindset",
      "English communication skills",
    ],
    perks: [
      "Real campaign experience",
      "Google Ads & Facebook Ads training",
      "Content creation skills",
      "Industry certifications",
    ],
  },
  {
    title: "Performance Marketing Specialist",
    department: "Marketing",
    location: "Ajmer, Rajasthan",
    type: "Full-time",
    duration: "Permanent",
    icon: Target,
    description:
      "Manage high-budget ad campaigns for D2C and e-commerce clients. Drive ROI and scale successful campaigns across platforms.",
    requirements: [
      "2+ years performance marketing",
      "Google Ads & Facebook Ads certified",
      "Analytics and data-driven",
      "Proven track record",
    ],
    perks: [
      "Performance bonuses",
      "Client success sharing",
      "Advanced training programs",
      "Career advancement path",
    ],
  },
  // Sales Opportunities
  {
    title: "Business Development Intern",
    department: "Sales",
    location: "Ajmer, Rajasthan",
    type: "Internship",
    duration: "3-6 months",
    icon: TrendingUp,
    description:
      "Learn the art of business development and client relationships. Help local Ajmer businesses discover Growth11's services.",
    requirements: [
      "Excellent communication",
      "Local Ajmer market knowledge",
      "Relationship building skills",
      "Target-oriented mindset",
    ],
    perks: [
      "Sales training program",
      "Commission on successful deals",
      "Client relationship experience",
      "Professional development",
    ],
  },
  {
    title: "Sales Manager",
    department: "Sales",
    location: "Ajmer, Rajasthan",
    type: "Full-time",
    duration: "Permanent",
    icon: TrendingUp,
    description:
      "Lead our sales efforts across Rajasthan. Build relationships with businesses and help them achieve growth through our services.",
    requirements: [
      "3+ years B2B sales experience",
      "Strong negotiation skills",
      "Market knowledge of Rajasthan",
      "Leadership abilities",
    ],
    perks: [
      "Attractive commission structure",
      "Team leadership opportunities",
      "Market expansion role",
      "Results-based rewards",
    ],
  },
];

const departments = [
  {
    name: "Engineering",
    icon: Code,
    description:
      "Build the digital infrastructure that powers growth for businesses across Rajasthan",
    opportunities: [
      "Full Stack Development",
      "Frontend Development",
      "Web Development",
      "Technical Architecture",
    ],
  },
  {
    name: "Marketing",
    icon: Target,
    description:
      "Create and execute marketing strategies that drive real business results for our clients",
    opportunities: [
      "Digital Marketing",
      "Performance Marketing",
      "Social Media Marketing",
      "Content Strategy",
    ],
  },
  {
    name: "Sales",
    icon: TrendingUp,
    description:
      "Connect with businesses and help them discover how Growth11 can accelerate their success",
    opportunities: [
      "Business Development",
      "Client Relations",
      "Market Expansion",
      "Strategic Partnerships",
    ],
  },
];

export default function Career() {
  useSEO({
    title:
      "Internships and Jobs for Engineering, Marketing, and Sales in Ajmer | Growth11 Careers",
    description:
      "Join Growth11 Ajmer! Exciting internships and full-time jobs in Engineering, Marketing, and Sales in Ajmer, Rajasthan. Build your career with Rajasthan's leading digital marketing agency.",
    ogTitle:
      "Internships and Jobs for Engineering, Marketing, and Sales in Ajmer",
    ogDescription:
      "Career opportunities in Engineering, Marketing, and Sales at Growth11 Ajmer. Internships and jobs available in Rajasthan's top digital marketing agency.",
  });

  const handleEmailResume = () => {
    console.log("Email resume clicked");
    const subject = encodeURIComponent(
      "Resume for Growth11 Career Opportunity",
    );
    const body = encodeURIComponent(
      "Dear Growth11 Team,\n\nI am interested in joining your team in Ajmer. Please find my resume attached.\n\nBest regards",
    );
    window.open(
      `mailto:satya.yogigrowth@gmail.com?subject=${subject}&body=${body}`,
      "_self",
    );
  };

  const handleApplyForRole = (jobTitle: string) => {
    const subject = encodeURIComponent(
      `Application for ${jobTitle} - Growth11 Ajmer`,
    );
    const body = encodeURIComponent(
      `Dear Growth11 Team,\n\nI am interested in applying for the ${jobTitle} position at your Ajmer office. Please find my resume attached.\n\nBest regards`,
    );
    window.open(
      `mailto:satya.yogigrowth@gmail.com?subject=${subject}&body=${body}`,
      "_self",
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-6"
                data-testid="badge-career-hero"
              >
                Join Growth11 Ajmer Team
              </Badge>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                data-testid="text-career-hero-title"
              >
                Internships and Jobs for{" "}
                <span className="text-primary">
                  Engineering, Marketing, and Sales
                </span>{" "}
                in Ajmer
              </h1>
              <p
                className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8"
                data-testid="text-career-hero-description"
              >
                Launch or advance your career with Growth11 in Ajmer, Rajasthan.
                We offer exciting opportunities for fresh graduates and
                experienced professionals in Engineering, Marketing, and Sales.
                Join the team that's transforming businesses across Rajasthan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => handleEmailResume()}
                  data-testid="button-email-resume"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Your Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() =>
                    document
                      .getElementById("opportunities")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  data-testid="button-view-openings"
                >
                  View Openings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Overview */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-testid="text-departments-title"
              >
                Career Opportunities in 3 Key Departments
              </h2>
              <p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                data-testid="text-departments-description"
              >
                Growth11 offers career paths in Engineering, Marketing, and
                Sales. Each department plays a crucial role in driving success
                for our clients across Rajasthan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((department, index) => (
                <Card
                  key={department.name}
                  className="text-center p-6 hover-elevate"
                  data-testid={`card-department-${index}`}
                >
                  <CardContent className="pt-6">
                    <department.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3
                      className="text-xl font-semibold mb-3"
                      data-testid={`text-department-name-${index}`}
                    >
                      {department.name}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4"
                      data-testid={`text-department-description-${index}`}
                    >
                      {department.description}
                    </p>
                    <div className="space-y-2">
                      {department.opportunities.map((opportunity, opIndex) => (
                        <Badge
                          key={opIndex}
                          variant="secondary"
                          className="mr-2 mb-2"
                          data-testid={`badge-opportunity-${index}-${opIndex}`}
                        >
                          {opportunity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16" id="opportunities">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-testid="text-openings-title"
              >
                Current Openings in Ajmer
              </h2>
              <p
                className="text-lg text-muted-foreground"
                data-testid="text-openings-description"
              >
                Ready to start your career journey? Check out our current
                internship and job opportunities.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid gap-6">
              {jobOpportunities.map((job, index) => (
                <Card
                  key={job.title}
                  className="hover-elevate transition-all duration-200"
                  data-testid={`card-job-${index}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <job.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle
                              className="text-xl"
                              data-testid={`text-job-title-${index}`}
                            >
                              {job.title}
                            </CardTitle>
                            <Badge
                              variant={
                                job.type === "Internship"
                                  ? "secondary"
                                  : "default"
                              }
                              data-testid={`badge-job-type-${index}`}
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <CardDescription
                            className="text-base"
                            data-testid={`text-job-department-${index}`}
                          >
                            {job.department} Department • {job.duration}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleApplyForRole(job.title)}
                        data-testid={`button-apply-${index}`}
                        className="hover-elevate"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-muted-foreground mb-6"
                      data-testid={`text-job-description-${index}`}
                    >
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Requirements
                        </h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                              data-testid={`text-requirement-${index}-${reqIndex}`}
                            >
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          Perks & Benefits
                        </h4>
                        <ul className="space-y-1">
                          {job.perks.map((perk, perkIndex) => (
                            <li
                              key={perkIndex}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                              data-testid={`text-perk-${index}-${perkIndex}`}
                            >
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {perk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div
                        className="flex items-center gap-1"
                        data-testid={`text-job-location-${index}`}
                      >
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-testid={`text-job-duration-${index}`}
                      >
                        <Clock className="h-4 w-4" />
                        {job.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Growth11 */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                data-testid="text-why-join-title"
              >
                Why Join Growth11 Ajmer?
              </h2>
              <p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                data-testid="text-why-join-description"
              >
                Be part of a growing team that's making a real impact on
                businesses across Rajasthan
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6" data-testid="card-benefit-1">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fast-Growing Company</h3>
                  <p className="text-sm text-muted-foreground">
                    Join a rapidly expanding agency with unlimited growth
                    potential
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6" data-testid="card-benefit-2">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Real Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Work on projects that directly affect client success and
                    business growth
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6" data-testid="card-benefit-3">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Learning Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous learning opportunities with industry experts and
                    mentors
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6" data-testid="card-benefit-4">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Ajmer Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Work from our modern office in the heart of Ajmer, Rajasthan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center">
              <CardContent className="p-12">
                <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2
                  className="text-3xl font-bold mb-4"
                  data-testid="text-contact-title"
                >
                  Ready to Join Our Team?
                </h2>
                <p
                  className="text-lg text-muted-foreground mb-6"
                  data-testid="text-contact-description"
                >
                  Whether you're a fresh graduate looking for internships or an
                  experienced professional seeking new challenges, we'd love to
                  hear from you.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Send your resume to:
                  </p>
                  <p
                    className="text-lg font-semibold text-primary"
                    data-testid="text-email-address"
                  >
                    satya.yogigrowth@gmail.com
                  </p>
                </div>
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                  onClick={handleEmailResume}
                  data-testid="button-final-apply"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Your Resume Now
                </Button>
                <p
                  className="text-sm text-muted-foreground mt-4"
                  data-testid="text-response-time"
                >
                  We'll get back to you within 2-3 business days
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
