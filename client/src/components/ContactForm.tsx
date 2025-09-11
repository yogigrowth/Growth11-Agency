import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const handleWhatsApp = () => {
    console.log('WhatsApp button clicked');
    const message = encodeURIComponent("Hi Growth11! I'm interested in your services and would like to discuss my project.");
    window.open(`https://wa.me/917014431277?text=${message}`, '_blank');
  };

  const handleCall = () => {
    console.log('Call button clicked');
    window.open(`tel:+917014431277`, '_self');
  };

  const handleEmail = () => {
    console.log('Email button clicked');
    window.open(`mailto:Satya.yogigrowth@gmail.com?subject=Growth11 Services Inquiry&body=Hi Growth11 Team,%0D%0A%0D%0AI'm interested in your services and would like to discuss my project.%0D%0A%0D%0ABest regards`, '_self');
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
                <CardTitle data-testid="text-contact-methods-title">Contact Us Directly</CardTitle>
                <CardDescription data-testid="text-contact-methods-description">
                  Choose your preferred way to reach us. We'll respond immediately!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* WhatsApp Button */}
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full h-16 bg-[#25d366] hover:bg-[#128c7e] text-white text-lg font-semibold border-0 no-default-hover-elevate"
                    data-testid="button-contact-whatsapp"
                  >
                    <MessageCircle className="h-6 w-6 mr-3" />
                    Message us on WhatsApp
                  </Button>
                  
                  {/* Call Button */}
                  <Button 
                    onClick={handleCall}
                    className="w-full h-16 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold border-0 no-default-hover-elevate"
                    data-testid="button-contact-call"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    Call us at +91 70144 31277
                  </Button>
                  
                  {/* Email Button */}
                  <Button 
                    onClick={handleEmail}
                    className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold border-0 no-default-hover-elevate"
                    data-testid="button-contact-email"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    Email Satya.yogigrowth@gmail.com
                  </Button>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                      Available Monday to Saturday, 9 AM - 7 PM IST
                    </p>
                  </div>
                </div>
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