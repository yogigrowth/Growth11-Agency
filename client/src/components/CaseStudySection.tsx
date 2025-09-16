import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Target, Globe } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudySection() {
  const handleViewCaseStudies = () => {
    console.log('View case studies clicked');
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-case-study">
            Featured Case Study
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-case-study-title">
            Akiso Fashion Success Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-case-study-description">
            How we scaled Akiso Fashion's revenue to 12L+ monthly with a 4X ROAS and high gross margins from the US market.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-chart-2/10">
                  <TrendingUp className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <CardTitle className="text-2xl" data-testid="text-client-name">Akiso Fashion</CardTitle>
              <CardDescription className="text-lg">D2C Fashion Brand - US Market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center" data-testid="metric-monthly-revenue">
                  <div className="flex justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="text-3xl font-bold text-chart-2">₹12L+</div>
                  <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                </div>
                <div className="text-center" data-testid="metric-roas">
                  <div className="flex justify-center mb-2">
                    <Target className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="text-3xl font-bold text-chart-2">4X</div>
                  <div className="text-sm text-muted-foreground">ROAS Achieved</div>
                </div>
                <div className="text-center" data-testid="metric-market">
                  <div className="flex justify-center mb-2">
                    <Globe className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="text-3xl font-bold text-chart-2">US</div>
                  <div className="text-sm text-muted-foreground">Market Expansion</div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border mb-6">
                <h4 className="font-semibold mb-3" data-testid="text-strategy-title">Our Strategy</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-primary mb-1">Performance Marketing</div>
                    <div className="text-muted-foreground">Optimized ad campaigns for D2C conversion</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">Brand Positioning</div>
                    <div className="text-muted-foreground">Strategic brand positioning in US market</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">Conversion Optimization</div>
                    <div className="text-muted-foreground">Enhanced user experience and checkout flow</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-1">High Margin Focus</div>
                    <div className="text-muted-foreground">Maintained profitability while scaling</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/case-study">
                  <Button 
                    onClick={handleViewCaseStudies}
                    data-testid="button-view-case-study"
                    className="hover-elevate"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}