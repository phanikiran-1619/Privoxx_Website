import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIP from "@/assets/logo-ip.png";

export const AnimatedNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navState, setNavState] = useState<'bubble' | 'expanded' | 'bubble-right'>('bubble');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Hero section height (assuming full viewport)
      const heroHeight = window.innerHeight;
      
      // Leadership section - assuming it's towards the bottom
      const leadershipSection = document.getElementById('company');
      const leadershipTop = leadershipSection?.offsetTop || 0;
      
      if (currentScrollY < heroHeight * 0.2) {
        setNavState('bubble');
      } else if (currentScrollY < leadershipTop - 200) {
        setNavState('expanded');
      } else {
        setNavState('bubble-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarClasses = () => {
    const baseClasses = "fixed top-6 z-50 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]";
    
    switch (navState) {
      case 'bubble':
        return `${baseClasses} left-1/2 transform -translate-x-1/2`;
      case 'expanded':
        return `${baseClasses} left-1/2 transform -translate-x-1/2`;
      case 'bubble-right':
        return `${baseClasses} right-6`;
      default:
        return baseClasses;
    }
  };

  const getContainerClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-md shadow-strong";
    
    switch (navState) {
      case 'bubble':
        return `${baseClasses} bg-primary-foreground/90 rounded-full p-3 w-16 h-16 flex items-center justify-center`;
      case 'expanded':
        return `${baseClasses} bg-primary-foreground/95 border border-border/20 rounded-full px-8 py-4 flex items-center justify-between min-w-[600px]`;
      case 'bubble-right':
        return `${baseClasses} bg-primary-foreground/90 rounded-full p-3 w-16 h-16 flex items-center justify-center`;
      default:
        return baseClasses;
    }
  };

  const getLogoClasses = () => {
    switch (navState) {
      case 'bubble':
        return "h-10 w-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]";
      case 'expanded':
        return "h-12 w-12 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]";
      case 'bubble-right':
        return "h-10 w-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]";
      default:
        return "h-10 w-10";
    }
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className={getContainerClasses()}>
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={logoIP} 
              alt="Privoxx IP Logo" 
              className={`${getLogoClasses()} group-hover:scale-110 transition-transform duration-300`}
            />
            {/* Liquid glow effect */}
            <div className={`absolute inset-0 bg-secondary/30 rounded-full blur-md transition-all duration-1000 ${
              navState === 'expanded' ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
            } group-hover:scale-200 group-hover:opacity-80`}></div>
          </div>
          
          {/* Company name - visible in expanded state */}
          <span className={`font-bold text-primary transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            navState === 'expanded' 
              ? 'text-xl opacity-100 translate-x-0' 
              : 'text-xl opacity-0 -translate-x-4 absolute'
          } group-hover:text-secondary`}>
            Privoxx
          </span>
        </div>

        {/* Navigation Menu - Only visible in expanded state */}
        <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          navState === 'expanded' 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute'
        }`}>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-5">
              <a 
                href="#products" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-accent"
              >
                Products
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-6"></div>
              </a>
              <a 
                href="#privacy-benefits-section" 
                className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-accent"
              >
                Reviews
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-6"></div>
              </a>
            </nav>
            
            {/* CTA Button */}
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-glow text-sm px-6 py-2 rounded-full"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Water ripple effect on hover */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
        navState === 'bubble' || navState === 'bubble-right'
          ? 'bg-gradient-to-r from-secondary/10 to-primary/10 scale-100'
          : 'bg-transparent scale-110'
      } group-hover:scale-125 group-hover:opacity-50`}></div>
    </nav>
  );
};