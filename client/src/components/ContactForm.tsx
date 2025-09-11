import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`${field} changed to:`, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - implement real form submission
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-contact">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Let's discuss how we can help you achieve sustainable growth and scale your revenue like we did with Nojoto and our other clients.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle data-testid="text-form-title">Send us a message</CardTitle>
                <CardDescription data-testid="text-form-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Ltd."
                      data-testid="input-company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website-building">Website Building</SelectItem>
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="social-media">Social Media Marketing</SelectItem>
                          <SelectItem value="influencer">Influencer Marketing</SelectItem>
                          <SelectItem value="ai-video">AI Video Creation</SelectItem>
                          <SelectItem value="performance">Performance Marketing</SelectItem>
                          <SelectItem value="branding">Branding & PR</SelectItem>
                          <SelectItem value="conversion">Conversion & Retention</SelectItem>
                          <SelectItem value="growth">Product Driven Growth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger data-testid="select-budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                          <SelectItem value="1l-5l">₹1-5 Lakhs</SelectItem>
                          <SelectItem value="5l-10l">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10l-25l">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="25l-plus">₹25+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, current challenges, and growth goals..."
                      rows={5}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full hover-elevate"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3" data-testid="contact-email">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">Satya.yogigrowth@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3" data-testid="contact-phone">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 70144 31277</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3" data-testid="contact-location">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">India</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3" data-testid="text-response-time">Response Time</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <h4 className="font-semibold mb-3" data-testid="text-consultation">Free Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Book a free 30-minute consultation to discuss your growth strategy and see how we can help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}