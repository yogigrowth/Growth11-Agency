import { Link } from "wouter";
import logoImage from "@assets/Logo 6_1757575298583.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Case Studies", href: "/case-study" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  services: [
    { label: "Website Building", href: "/services#tech" },
    { label: "SEO", href: "/services#tech" },
    { label: "Social Media Marketing", href: "/services#marketing" },
    { label: "Performance Marketing", href: "/services#marketing" }
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Partner Brands", href: "/partners" },
    { label: "Contact", href: "/contact" }
  ]
};

export default function Footer() {
  const handleLinkClick = (href: string) => {
    console.log(`Footer link clicked: ${href}`);
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage} 
                alt="Growth11 Digital Marketing Agency" 
                className="h-8 w-auto"
                data-testid="logo-footer"
              />
            </Link>
            <p className="text-muted-foreground mb-6" data-testid="text-footer-description">
              Entrepreneurs helping businesses scale revenue through proven growth strategies. 
              Built Nojoto from zero to 100 crore valuation.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleLinkClick('linkedin')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                LinkedIn
              </button>
              <button 
                onClick={() => handleLinkClick('twitter')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-twitter"
              >
                Twitter
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={() => handleLinkClick(link.href)}
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-services">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>
                    <span 
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={() => handleLinkClick(link.href)}
                      data-testid={`link-footer-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-resources">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={() => handleLinkClick(link.href)}
                      data-testid={`link-footer-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0" data-testid="text-footer-copyright">
            © 2024 Growth11. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => handleLinkClick('/privacy')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('/terms')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}