import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import visualLogo from "@/assets/visual-logo.png";
import privoxxWordmark from "@/assets/privoxx-wordmark.png";
import { Menu } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerClose } from "@/components/ui/drawer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const wordmarkRef = useRef(null);
  const navLinksRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial navbar animation
      gsap.set(navRef.current, { y: -100, opacity: 0 });
      gsap.set([logoRef.current, wordmarkRef.current], { scale: 0, rotation: -180 });
      gsap.set(navLinksRef.current?.children || [], { y: -30, opacity: 0 });
      gsap.set(ctaButtonRef.current, { scale: 0, rotation: 180 });

      // Animate navbar entrance
      const tl = gsap.timeline();
      
      tl.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .to([logoRef.current, wordmarkRef.current], {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.4")
      .to(navLinksRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.3")
      .to(ctaButtonRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.2");

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: "body",
        start: "top -10",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress;
          setIsScrolled(progress > 0);
          
          // Animate navbar background and scale
          gsap.to(navRef.current, {
            backgroundColor: progress > 0 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.98)",
            backdropFilter: progress > 0 ? "blur(20px)" : "blur(16px)",
            scale: progress > 0 ? 0.98 : 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });

      // Logo hover animations
      const logoHover = () => {
        gsap.to([logoRef.current, wordmarkRef.current], {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const logoLeave = () => {
        gsap.to([logoRef.current, wordmarkRef.current], {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      logoRef.current?.addEventListener('mouseenter', logoHover);
      logoRef.current?.addEventListener('mouseleave', logoLeave);
      wordmarkRef.current?.addEventListener('mouseenter', logoHover);
      wordmarkRef.current?.addEventListener('mouseleave', logoLeave);

      // CTA button pulse animation
      gsap.to(ctaButtonRef.current, {
        boxShadow: "0 0 30px rgba(79, 130, 195, 0.6)",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={navRef}
      className={`sticky-header w-full transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8 min-h-[4rem]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 cursor-pointer">
          <img 
            ref={logoRef}
            src={visualLogo} 
            alt="Privoxx Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300" 
          />
          <img 
            ref={wordmarkRef}
            src={privoxxWordmark} 
            alt="Privoxx Wordmark" 
            className="h-10 md:h-12 object-contain transition-all duration-300" 
            style={{marginTop: '4px'}} 
          />
        </a>

        {/* Desktop Nav */}
        <div ref={navLinksRef} className="hidden md:flex items-center gap-6">
          <a href="#products" className="nav-link text-primary/80 hover:text-cyan-600 font-medium text-base transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Products</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="nav-link text-primary/80 hover:text-cyan-600 font-medium text-base transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Reviews</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#stay-connected" className="nav-link text-primary/80 hover:text-cyan-600 font-medium text-base transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button 
            ref={ctaButtonRef}
            size="sm" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-full border border-cyan-300/20 ml-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Open menu" className="hover:scale-110 transition-transform duration-200">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <div className="flex items-center justify-between w-full">
                  <img src={visualLogo} alt="Privoxx Logo" className="w-10 h-10 object-contain" />
                  <DrawerClose asChild>
                    <Button size="icon" variant="ghost" aria-label="Close menu">✕</Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <nav className="flex flex-col gap-4 px-6 py-4">
                <a href="#products" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2 transition-all duration-300 hover:translate-x-2" onClick={() => setDrawerOpen(false)}>Products</a>
                <a href="#testimonials" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2 transition-all duration-300 hover:translate-x-2" onClick={() => setDrawerOpen(false)}>Reviews</a>
                <a href="#stay-connected" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2 transition-all duration-300 hover:translate-x-2" onClick={() => setDrawerOpen(false)}>Contact</a>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-full border border-cyan-300/20 mt-4 hover:scale-105 transition-all duration-300"
                  onClick={() => { setDrawerOpen(false); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Book Demo
                </Button>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};