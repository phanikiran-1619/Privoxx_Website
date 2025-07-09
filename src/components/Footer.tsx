import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import logoIP from "@/assets/logo-ip.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoIP} alt="Privoxx" className="h-10 w-10" />
              <span className="text-2xl font-bold">Privoxx</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Revolutionizing privacy solutions across India with innovative, accessible, and culturally sensitive design.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Wall-Mounted Prive Box</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Stationary Prive Box</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portable Prive Box</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Leadership Team</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">info@privoxx.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="section-container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Privoxx Privacy Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};