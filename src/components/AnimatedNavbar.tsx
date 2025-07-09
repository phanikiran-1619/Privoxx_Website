import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import logoIP from "@/assets/logo-ip.png";
import Spline from '@splinetool/react-spline';

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
    const baseClasses = "transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden";
    
    switch (navState) {
      case 'bubble':
        return `${baseClasses} rounded-full w-16 h-16 flex items-center justify-center origin-center`;
      case 'expanded':
        return `${baseClasses} rounded-full px-8 py-4 flex items-center justify-between min-w-[680px] origin-center`;
      case 'bubble-right':
        return `${baseClasses} rounded-full w-16 h-16 flex items-center justify-center origin-right`;
      default:
        return baseClasses;
    }
  };

  const getSplineClasses = () => {
    switch (navState) {
      case 'bubble':
        return "absolute inset-0 w-16 h-16 rounded-full";
      case 'expanded':
        return "absolute inset-0 w-full h-16 rounded-full";
      case 'bubble-right':
        return "absolute inset-0 w-16 h-16 rounded-full";
      default:
        return "absolute inset-0";
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
        {/* Spline 3D Water Background */}
        <div className={getSplineClasses()}>
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-blue-300/15 to-cyan-400/20 animate-pulse rounded-full" />
          }>
            <Spline
              scene="https://prod.spline.design/EH2LyHAUq4X0Q431/scene.splinecode"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                pointerEvents: 'none'
              }}
            />
          </Suspense>
        </div>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] rounded-full"></div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer relative z-20">
          <div className="relative">
            <img 
              src={logoIP} 
              alt="Privoxx IP Logo" 
              className={`${getLogoClasses()} group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg`}
            />
            {/* Liquid glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-md transition-all duration-1000 ${
              navState === 'expanded' ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
            } group-hover:scale-200 group-hover:opacity-80 animate-pulse`}></div>
          </div>
          
          {/* Company name - only visible in expanded state */}
          {navState === 'expanded' && (
            <span className="font-bold text-white drop-shadow-lg transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10 text-xl group-hover:text-cyan-200">
              Privoxx
            </span>
          )}
        </div>

        {/* Navigation Menu - Only visible in expanded state */}
        <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-20 ${
          navState === 'expanded' 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute'
        }`}>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-5">
              <a 
                href="#products" 
                className="text-white/90 hover:text-cyan-200 transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-white/10 drop-shadow-sm"
              >
                Products
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-6"></div>
              </a>
              <a 
                href="#privacy-benefits-section" 
                className="text-white/90 hover:text-cyan-200 transition-all duration-300 hover:scale-105 font-medium text-sm relative group px-3 py-2 rounded-full hover:bg-white/10 drop-shadow-sm"
              >
                Reviews
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-6"></div>
              </a>
            </nav>
            
            {/* CTA Button */}
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] text-sm px-6 py-2 rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};