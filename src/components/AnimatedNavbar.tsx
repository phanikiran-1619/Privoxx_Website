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
    const baseClasses = "transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-xl relative overflow-hidden";
    
    switch (navState) {
      case 'bubble':
        return `${baseClasses} bg-gradient-to-br from-cyan-300/20 via-blue-300/15 to-cyan-400/20 border border-cyan-200/30 rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.2)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)]`;
      case 'expanded':
        return `${baseClasses} bg-gradient-to-r from-cyan-300/15 via-blue-200/10 to-cyan-300/15 border border-cyan-200/25 rounded-full px-8 py-4 flex items-center justify-between min-w-[600px] shadow-[0_12px_48px_rgba(6,182,212,0.15)] hover:shadow-[0_16px_56px_rgba(6,182,212,0.25)]`;
      case 'bubble-right':
        return `${baseClasses} bg-gradient-to-br from-cyan-300/20 via-blue-300/15 to-cyan-400/20 border border-cyan-200/30 rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.2)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)]`;
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
        {/* Animated water background layers */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Primary water layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 animate-[wave_4s_ease-in-out_infinite]"></div>
          
          {/* Secondary water layer */}
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/8 via-blue-200/5 to-cyan-400/8 animate-[wave_6s_ease-in-out_infinite_reverse] delay-1000"></div>
          
          {/* Flowing water particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-300/20 rounded-full animate-[float_3s_ease-in-out_infinite] blur-sm"></div>
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-300/15 rounded-full animate-[float_4s_ease-in-out_infinite_reverse] delay-500 blur-sm"></div>
            <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/25 rounded-full animate-[float_5s_ease-in-out_infinite] delay-1500 blur-sm"></div>
          </div>
          
          {/* Water surface shimmer */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] ${
            navState === 'expanded' ? 'opacity-100' : 'opacity-70'
          }`}></div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer relative z-10">
          <div className="relative">
            <img 
              src={logoIP} 
              alt="Privoxx IP Logo" 
              className={`${getLogoClasses()} group-hover:scale-110 transition-transform duration-300 relative z-10`}
            />
            {/* Liquid glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-md transition-all duration-1000 ${
              navState === 'expanded' ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
            } group-hover:scale-200 group-hover:opacity-80 animate-pulse`}></div>
          </div>
          
          {/* Company name - visible in expanded state */}
          <span className={`font-bold text-primary transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10 ${
            navState === 'expanded' 
              ? 'text-xl opacity-100 translate-x-0' 
              : 'text-xl opacity-0 -translate-x-4 absolute'
          } group-hover:text-cyan-600`}>
            Privoxx
          </span>
        </div>

        {/* Navigation Menu - Only visible in expanded state */}
        <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10 ${
          navState === 'expanded' 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute'
        }`}>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-5">
              <a 
                href="#products" 
                className="text-primary/80 hover:text-cyan-600 transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-cyan-50/20"
              >
                Products
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6"></div>
              </a>
              <a 
                href="#privacy-benefits-section" 
                className="text-primary/80 hover:text-cyan-600 transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-cyan-50/20"
              >
                Reviews
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6"></div>
              </a>
            </nav>
            
            {/* CTA Button */}
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] text-sm px-6 py-2 rounded-full border border-cyan-300/20"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced water ripple effect on hover */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
        navState === 'bubble' || navState === 'bubble-right'
          ? 'bg-gradient-to-r from-cyan-400/5 via-blue-300/8 to-cyan-400/5 scale-100'
          : 'bg-gradient-to-r from-cyan-300/3 via-blue-200/5 to-cyan-300/3 scale-110'
      } group-hover:scale-125 group-hover:from-cyan-400/15 group-hover:via-blue-300/20 group-hover:to-cyan-400/15 animate-[ripple_2s_ease-out_infinite]`}></div>
    </nav>
  );
};