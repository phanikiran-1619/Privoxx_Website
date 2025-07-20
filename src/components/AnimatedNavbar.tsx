import { useState } from "react";
import { Button } from "@/components/ui/button";
import visualLogo from "@/assets/visual-logo.png";
import privoxxWordmark from "@/assets/privoxx-wordmark.png";
import { Menu } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerClose } from "@/components/ui/drawer";

export const AnimatedNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
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
