import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import visualLogo from "/visual logo.png";

export const Footer = () => {
  return (
    <footer className="relative min-h-[600px] bg-slate-900 text-white overflow-hidden">
      {/* Animated Background - Higher z-index and proper positioning */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Boxes className="opacity-70" />
      </div>
      
      {/* Mask overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-slate-900/60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)`
        }}
      />
      
      {/* Content - Allow pointer events and higher z-index */}
      <div className="relative z-30 pointer-events-auto">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={visualLogo} alt="Privoxx" className="h-10 w-10" />
                <span className="text-2xl font-bold text-white">Privoxx</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Revolutionizing privacy solutions across India with innovative, accessible, and culturally sensitive design.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-blue-400 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-blue-400 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-pink-400 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-pink-400/50"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-red-400 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-red-400/50"
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
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Wall-Mounted Prive Box
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Stationary Prive Box
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Portable Prive Box
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Custom Solutions
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Accessories
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      About Us
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Leadership Team
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Careers
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Press & Media
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group">
                    <span className="relative">
                      Investor Relations
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group">
                  <Phone className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group">
                  <Mail className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                  <span>info@privoxx.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group">
                  <MapPin className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Newsletter</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/60 backdrop-blur-sm"
                  />
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="hover:scale-105 hover:shadow-lg transition-all duration-200 whitespace-nowrap bg-white/20 text-white hover:bg-white/30 border border-white/30"
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
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};