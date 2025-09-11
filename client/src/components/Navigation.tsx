import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Logo 6_1757575298583.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Clients" },
  { href: "/case-study", label: "Case Study" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Growth11 Digital Marketing Agency" 
              className="h-14 w-auto"
              data-testid="logo-navigation"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-lg font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/contact">
              <Button data-testid="button-contact-us">
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`block px-3 py-2 text-xl font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full" data-testid="button-mobile-contact-us">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}