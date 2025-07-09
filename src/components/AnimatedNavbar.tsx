import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIP from "@/assets/logo-ip.png";

export const AnimatedNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navState, setNavState] = useState<'icon-center' | 'full-nav' | 'icon-right'>('icon-center');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Hero section height (assuming full viewport)
      const heroHeight = window.innerHeight;
      
      // Leadership section - assuming it's towards the bottom
      const leadershipSection = document.getElementById('company');
      const leadershipTop = leadershipSection?.offsetTop || 0;
      
      if (currentScrollY < heroHeight * 0.8) {
        setNavState('icon-center');
      } else if (currentScrollY < leadershipTop - 200) {
        setNavState('full-nav');
      } else {
        setNavState('icon-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarClasses = () => {
    const baseClasses = "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out";
    
    switch (navState) {
      case 'icon-center':
        return `${baseClasses} bg-transparent backdrop-blur-sm`;
      case 'full-nav':
        return `${baseClasses} bg-primary-foreground/95 backdrop-blur-md shadow-medium border-b border-border`;
      case 'icon-right':
        return `${baseClasses} bg-transparent backdrop-blur-sm`;
      default:
        return baseClasses;
    }
  };

  const getContentClasses = () => {
    switch (navState) {
      case 'icon-center':
        return "flex justify-center items-center py-4 px-8";
      case 'full-nav':
        return "section-container flex items-center justify-between py-4";
      case 'icon-right':
        return "flex justify-end items-center py-4 px-8";
      default:
        return "flex justify-center items-center py-4 px-8";
    }
  };

  const getLiquidMorphClasses = () => {
    const baseClasses = "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]";
    
    switch (navState) {
      case 'icon-center':
        return `${baseClasses} transform scale-100 opacity-100`;
      case 'full-nav':
        return `${baseClasses} transform scale-110 opacity-100`;
      case 'icon-right':
        return `${baseClasses} transform scale-95 opacity-90`;
      default:
        return baseClasses;
    }
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className={getContentClasses()}>
        {/* Logo/Icon - Always present */}
        <div className={getLiquidMorphClasses()}>
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src={logoIP} 
                alt="Privoxx IP Logo" 
                className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  navState === 'full-nav' ? 'h-10 w-10' : 'h-12 w-12'
                } group-hover:scale-110`}
              />
              {/* Liquid glow effect */}
              <div className={`absolute inset-0 bg-secondary/20 rounded-full blur-lg transition-all duration-700 ${
                navState === 'full-nav' ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
              } group-hover:scale-200 group-hover:opacity-80`}></div>
            </div>
            
            {/* Company name with liquid animation */}
            <span className={`font-bold transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              navState === 'full-nav' 
                ? 'text-2xl text-primary opacity-100 translate-x-0' 
                : navState === 'icon-center'
                ? 'text-2xl text-primary-foreground opacity-100 translate-x-0'
                : 'text-xl text-primary-foreground opacity-80 translate-x-0'
            } group-hover:text-secondary`}>
              Privoxx
            </span>
          </div>
        </div>

        {/* Full Navigation - Only visible in full-nav state */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          navState === 'full-nav' 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
        }`}>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="#products" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Products
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a 
                href="#privacy-benefits-section" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Reviews
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a 
                href="#company" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Company
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></div>
              </a>
            </nav>
            
            {/* CTA Button with liquid morph */}
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Liquid background morphing effect */}
      <div className={`absolute inset-0 -z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        navState === 'full-nav'
          ? 'bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground opacity-95'
          : 'bg-transparent opacity-0'
      }`}></div>
    </nav>
  );
};