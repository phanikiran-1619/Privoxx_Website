import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import visualLogo from "@/assets/visual-logo.png";

export const AnimatedNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navState, setNavState] = useState<'bubble' | 'expanded' | 'bubble-right'>('bubble');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Hero section height (assuming full viewport)
      const heroHeight = window.innerHeight;
      
      // Leadership section - assuming it's towards the bottom
      const leadershipSection = document.getElementById('company');
      const leadershipTop = leadershipSection?.offsetTop || 0;
      
      // Never expand on mobile - always stay as bubble or bubble-right
      if (isMobile) {
        if (currentScrollY < heroHeight * 0.2) {
          setNavState('bubble-right');
        } else {
          setNavState('bubble-right');
        }
      } else {
        // Desktop behavior
        if (currentScrollY < heroHeight * 0.2) {
          setNavState('bubble-right');
        } else if (currentScrollY < leadershipTop - 200) {
          setNavState('expanded');
        } else {
          setNavState('bubble-right');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const getNavbarClasses = () => {
    const baseClasses = "fixed top-6 z-50 transition-all duration-[2000ms] ease-out";
    
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
    const baseClasses = "transition-all duration-[2000ms] ease-out backdrop-blur-xl relative overflow-hidden";
    
    switch (navState) {
      case 'bubble':
         return `${baseClasses} bg-gradient-to-br from-cyan-300/35 via-blue-300/30 to-cyan-400/35 border border-cyan-200/50 rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)]`;
      case 'expanded':
         return `${baseClasses} bg-gradient-to-r from-cyan-300/30 via-blue-200/25 to-cyan-300/30 border border-cyan-200/40 rounded-full px-8 py-2 flex items-center justify-between min-w-[720px] shadow-[0_12px_48px_rgba(6,182,212,0.25)] hover:shadow-[0_16px_56px_rgba(6,182,212,0.35)]`;
      case 'bubble-right':
         return `${baseClasses} bg-gradient-to-br from-cyan-300/35 via-blue-300/30 to-cyan-400/35 border border-cyan-200/50 rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)]`;
      default:
        return baseClasses;
    }
  };

  const getLogoClasses = () => {
    switch (navState) {
      case 'bubble':
         return "w-10 h-10 object-contain transition-all duration-1000 ease-out filter drop-shadow-lg";
      case 'expanded':
         return "w-10 h-10 object-contain transition-all duration-1000 ease-out filter drop-shadow-lg";
      case 'bubble-right':
         return "w-10 h-10 object-contain transition-all duration-1000 ease-out filter drop-shadow-lg";
      default:
        return "w-16 h-16 object-contain filter drop-shadow-lg";
    }
  };

  const getTextClasses = () => {
    switch (navState) {
      case 'expanded':
        return "text-2xl font-bold text-primary transition-all duration-1500 ease-out opacity-100 scale-100 translate-x-0 delay-500";
      default:
        return "text-2xl font-bold text-primary transition-all duration-1000 ease-out opacity-0 scale-90 translate-x-4 absolute pointer-events-none";
    }
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className={getContainerClasses()}>
        {/* Animated background effects */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/8 via-blue-200/5 to-cyan-400/8 animate-pulse delay-1000"></div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer relative z-10">
          {/* Visual Logo - Always visible in bubble states */}
          {(navState === 'bubble' || navState === 'bubble-right') && (
            <div className="relative flex items-center justify-center w-full h-full">
              <img 
                src={visualLogo} 
                alt="Privoxx Visual Logo" 
                className={`${getLogoClasses()} group-hover:scale-110 transition-transform duration-500 relative z-20 brightness-110 contrast-125`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-lg transition-all duration-1000 scale-100 opacity-60 group-hover:scale-150 group-hover:opacity-80"></div>
            </div>
          )}
          
          {/* Expanded state content - Only on desktop */}
          {navState === 'expanded' && !isMobile && (
            <>
              {/* Logo in expanded state */}
              <div className="relative">
                <img 
                  src={visualLogo} 
                  alt="Privoxx Visual Logo" 
                  className={getLogoClasses()}
                />
              </div>
              
              {/* Brand Text */}
              <span className={getTextClasses()}>
                Privoxx
              </span>
            </>
          )}
        </div>

        {/* Navigation Menu - Only visible in expanded state and on desktop */}
        {navState === 'expanded' && !isMobile && (
          <div className="transition-all duration-1800 ease-out relative z-10 opacity-100 translate-x-0 scale-100 delay-700">
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-5">
                <a 
                  href="#products" 
                  className="text-primary/80 hover:text-cyan-600 transition-all duration-800 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-cyan-50/20 transform translate-y-0 opacity-100 delay-900"
                >
                  Products
                  <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6"></div>
                </a>
                <a 
                  href="#privacy-benefits-section" 
                  className="text-primary/80 hover:text-cyan-600 transition-all duration-800 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-cyan-50/20 transform translate-y-0 opacity-100 delay-1100"
                >
                  Reviews
                  <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6"></div>
                </a>
              </nav>
              
              {/* CTA Button */}
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-800 hover:scale-105 hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] text-sm px-6 py-2 rounded-full border border-cyan-300/20 transform translate-y-0 opacity-100 scale-100 delay-1300"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Enhanced ripple effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
        navState === 'bubble' || navState === 'bubble-right'
          ? 'bg-gradient-to-r from-cyan-400/5 via-blue-300/8 to-cyan-400/5 scale-100'
          : 'bg-gradient-to-r from-cyan-300/3 via-blue-200/5 to-cyan-300/3 scale-110'
      } group-hover:scale-125 group-hover:from-cyan-400/15 group-hover:via-blue-300/20 group-hover:to-cyan-400/15`}></div>
    </nav>
  );
};
