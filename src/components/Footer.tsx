import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import visualLogo from "/visual logo.png";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <Boxes />
      </div>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={visualLogo} alt="Privoxx" className="h-10 w-10" />
                <span className="text-2xl font-bold text-white">Privoxx</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Revolutionizing privacy solutions across India with innovative, accessible, and culturally sensitive design.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-blue-400 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-blue-400 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-pink-400 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-red-400 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Wall-Mounted Prive Box
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Stationary Prive Box
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Portable Prive Box
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Custom Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-4 w-4 text-white" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-4 w-4 text-white" />
                  <span>info@privoxx.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Newsletter</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/50"
                  />
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Privoxx Privacy Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};