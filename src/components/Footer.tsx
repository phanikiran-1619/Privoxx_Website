"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import visualLogo from "@/assets/visual-logo.png";

// Background Boxes Component with enhanced hover effects
const BackgroundBoxes = () => {
  const rows = new Array(120).fill(1);
  const cols = new Array(80).fill(1);
  
  const colors = [
    "rgb(125 211 252)", // sky-300
    "rgb(249 168 212)", // pink-300
    "rgb(134 239 172)", // green-300
    "rgb(253 224 71)",  // yellow-300
    "rgb(252 165 165)", // red-300
    "rgb(216 180 254)", // purple-300
    "rgb(147 197 253)", // blue-300
    "rgb(165 180 252)", // indigo-300
    "rgb(196 181 253)", // violet-300
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="w-16 h-8 border-l border-slate-700/50 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className="w-16 h-8 border-r border-t border-slate-700/50 relative cursor-pointer"
              whileHover={{
                backgroundColor: getRandomColor(),
                scale: 1.05,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              animate={{
                backgroundColor: "transparent",
                scale: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
            >
              {j % 3 === 0 && i % 3 === 0 && (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-600/40 stroke-[0.5px] pointer-events-none"
                  whileHover={{
                    scale: 1.2,
                    rotate: 45,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </motion.svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      {/* Animated Background with proper z-index */}
      <div className="absolute inset-0 w-full h-full z-0">
        <BackgroundBoxes />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.85) 100%)"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info Section */}
            <motion.div 
              className="space-y-6 text-left min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <motion.img 
                  src={visualLogo} 
                  alt="Privoxx" 
                  className="h-12 w-12"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 } 
                  }}
                />
                <span className="text-2xl font-bold text-white">Privoxx</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Revolutionizing privacy solutions across India with innovative, accessible, and culturally sensitive design.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 sm:space-x-4 mt-4 sm:mt-0">
                {[
                  { Icon: Linkedin, color: "hover:text-blue-400", bg: "hover:bg-blue-400/10" },
                  { Icon: Twitter, color: "hover:text-blue-400", bg: "hover:bg-blue-400/10" },
                  { Icon: Instagram, color: "hover:text-pink-400", bg: "hover:bg-pink-400/10" },
                  { Icon: Youtube, color: "hover:text-red-400", bg: "hover:bg-red-400/10" },
                ].map(({ Icon, color, bg }, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={cn(
                        "text-white transition-all duration-300",
                        color,
                        bg
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Products Section */}
            <motion.div 
              className="space-y-6 text-left min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white">Products</h3>
              <ul className="space-y-3">
                {[
                  "Wall-Mounted Prive Box",
                  "Stationary Prive Box", 
                  "Portable Prive Box",
                  "Custom Solutions",
                  "Accessories"
                ].map((item, index) => (
                  <motion.li key={index}>
                    <motion.a 
                      href="#" 
                      className="text-white/80 hover:text-white transition-all duration-300 inline-block relative group"
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Section */}
            <motion.div 
              className="space-y-6 text-left min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Leadership Team",
                  "Careers", 
                  "Press & Media",
                  "Investor Relations"
                ].map((item, index) => (
                  <motion.li key={index}>
                    <motion.a 
                      href="#" 
                      className="text-white/80 hover:text-white transition-all duration-300 inline-block relative group"
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter Section */}
            <motion.div 
              id="stay-connected"
              className="space-y-6 text-left min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { Icon: Phone, text: "+91 98765 43210" },
                  { Icon: Mail, text: "privoxx.connect@gmail.com" },
                  { Icon: MapPin, text: "Mumbai, Maharashtra" }
                ].map(({ Icon, text }, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 text-white/80"
                    whileHover={{ 
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Icon className="h-4 w-4 text-cyan-400" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <Input 
                    placeholder="Your email" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-cyan-400/50 transition-all duration-300 w-full"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="whitespace-nowrap bg-cyan-500 hover:bg-cyan-600 text-white border-0 transition-colors duration-300 w-full sm:w-auto"
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Privoxx Privacy Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-white/80 hover:text-white transition-all duration-300 relative group"
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
