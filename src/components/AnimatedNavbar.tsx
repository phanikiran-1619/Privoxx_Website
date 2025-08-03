import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import visualLogo from "@/assets/visual-logo.png";
import privoxxWordmark from "@/assets/privoxx-wordmark.png";
import { Menu } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerClose } from "@/components/ui/drawer";

export const AnimatedNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only change background opacity, don't move the header
      setIsScrolled(window.scrollY > 10);
    };

    // Prevent mobile browser address bar from affecting header position
    const preventHeaderMovement = () => {
      const header = document.querySelector('.sticky-header') as HTMLElement;
      if (header) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.right = '0';
        header.style.zIndex = '9999';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', preventHeaderMovement);
    window.addEventListener('orientationchange', preventHeaderMovement);
    
    // Initial call
    preventHeaderMovement();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', preventHeaderMovement);
      window.removeEventListener('orientationchange', preventHeaderMovement);
    };
  }, []);

  return (
    <header className={`sticky-header w-full transition-colors duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8 min-h-[4rem]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <img src={visualLogo} alt="Privoxx Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <img src={privoxxWordmark} alt="Privoxx Wordmark" className="h-10 md:h-12 object-contain" style={{marginTop: '4px'}} />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-primary/80 hover:text-cyan-600 font-medium text-base transition-colors">Products</a>
          <a href="#testimonials" className="text-primary/80 hover:text-cyan-600 font-medium text-base transition-colors">Reviews</a>
          <a href="#stay-connected" className="text-primary/80 hover:text-cyan-600 font-medium text-base transition-colors">Contact</a>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-full border border-cyan-300/20 ml-2"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Open menu">
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
                <a href="#products" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2" onClick={() => setDrawerOpen(false)}>Products</a>
                <a href="#testimonials" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2" onClick={() => setDrawerOpen(false)}>Reviews</a>
                <a href="#stay-connected" className="text-primary/80 hover:text-cyan-600 font-medium text-base py-2" onClick={() => setDrawerOpen(false)}>Contact</a>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-full border border-cyan-300/20 mt-4"
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
