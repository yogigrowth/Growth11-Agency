import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

// todo: remove mock functionality - replace with real job postings
const jobPostings = [
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Join our marketing team to help scale client campaigns and drive growth."
  },
  {
    title: "Growth Product Manager", 
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead product initiatives focused on conversion optimization and user retention."
  },
  {
    title: "Full Stack Developer",
    department: "Tech",
    location: "Remote", 
    type: "Full-time",
    description: "Build and maintain client websites and internal growth tools."
  }
];

export default function Career() {
  const handleApply = (jobTitle: string) => {
    console.log(`Apply clicked for ${jobTitle}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4" data-testid="badge-career-page">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-career-page-title">
                Build the Future of Growth with Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-career-page-intro">
                Join a team of entrepreneurs and growth experts. Help businesses scale while growing your own career in a fast-paced, results-driven environment.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 mb-12">
                {jobPostings.map((job, index) => (
                  <Card 
                    key={job.title}
                    className="hover-elevate transition-all duration-200"
                    data-testid={`card-job-${index}`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2" data-testid={`text-job-title-${index}`}>
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-base" data-testid={`text-job-department-${index}`}>
                            {job.department} Department
                          </CardDescription>
                        </div>
                        <Button 
                          onClick={() => handleApply(job.title)}
                          data-testid={`button-apply-${index}`}
                          className="hover-elevate"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4" data-testid={`text-job-description-${index}`}>
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1" data-testid={`text-job-location-${index}`}>
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1" data-testid={`text-job-type-${index}`}>
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2" data-testid="text-no-openings">
                    Don't see the right role?
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid="text-general-inquiry">
                    We're always looking for talented people. Send us your resume and tell us how you can contribute to our growth.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => console.log('General inquiry clicked')}
                    data-testid="button-general-inquiry"
                    className="hover-elevate"
                  >
                    Send General Inquiry
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}