import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIP from "@/assets/logo-ip.png";

export const AnimatedNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Get hero section height (roughly full viewport)
      const heroHeight = window.innerHeight;
      // Get leadership section position
      const leadershipSection = document.getElementById('company');
      const leadershipTop = leadershipSection?.offsetTop || Infinity;
      
      // Expand after hero section, collapse before leadership section
      if (currentScrollY > heroHeight - 100 && currentScrollY < leadershipTop - 200) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
        isExpanded 
          ? 'w-auto' 
          : 'w-16'
      }`}
    >
      <div 
        className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-strong transition-all duration-700 ease-out ${
          isExpanded 
            ? 'px-8 py-3' 
            : 'p-3'
        }`}
        style={{
          background: isExpanded 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))' 
            : 'rgba(255,255,255,0.1)'
        }}
      >
        <div className="flex items-center justify-center">
          {/* Logo - Always Visible */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoIP} 
              alt="Privoxx IP Logo" 
              className={`transition-all duration-500 ${
                isExpanded ? 'h-8 w-8' : 'h-10 w-10'
              }`} 
            />
            
            {/* Brand Name - Appears when expanded */}
            <div 
              className={`overflow-hidden transition-all duration-700 ease-out ${
                isExpanded 
                  ? 'opacity-100 max-w-xs' 
                  : 'opacity-0 max-w-0'
              }`}
            >
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Privoxx
              </span>
            </div>
          </div>

          {/* Navigation Links - Appears when expanded */}
          <div 
            className={`flex items-center space-x-6 transition-all duration-700 ease-out ${
              isExpanded 
                ? 'opacity-100 max-w-2xl ml-8' 
                : 'opacity-0 max-w-0 ml-0'
            }`}
          >
            <a 
              href="#products" 
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Products
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Reviews
            </a>
            <a 
              href="#booking" 
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              Book Demo
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/30 text-white hover:bg-white/20 hover:text-white whitespace-nowrap"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Liquid Animation Effects */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-1000 ease-out pointer-events-none ${
          isExpanded 
            ? 'bg-gradient-to-r from-primary/20 to-secondary/20 scale-110' 
            : 'bg-transparent scale-100'
        }`}
        style={{
          filter: 'blur(20px)',
          zIndex: -1
        }}
      />
    </nav>
  );
};