import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Star } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";
import VariableProximity from "@/components/VariableProximity";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

// Interactive Click Effect Component
const ClickEffect = ({ x, y, id }: { x: number; y: number; id: string }) => {
  return (
    <motion.div
      key={id}
      className="absolute pointer-events-none z-50"
      style={{ left: x - 25, top: y - 25 }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [1, 0.8, 0],
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <Sparkles className="w-12 h-12 text-yellow-400" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 2, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Floating Geometric Shapes
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Triangles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400/30 to-purple-400/30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-400/20 to-blue-400/20 backdrop-blur-sm"
          style={{
            right: `${10 + i * 12}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            x: [-15, 15, -15],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Hexagons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute w-8 h-8 bg-gradient-to-r from-green-400/25 to-teal-400/25"
          style={{
            left: `${60 + i * 10}%`,
            bottom: `${20 + i * 15}%`,
            clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
          }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Interactive Grid Background
const InteractiveGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20zM0 0l20 20-20 20V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clickEffects, setClickEffects] = useState<Array<{ x: number; y: number; id: string }>>([]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now().toString();
      
      setClickEffects(prev => [...prev, { x, y, id }]);
      
      // Remove effect after animation completes
      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== id));
      }, 600);
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" onClick={handleClick}>
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900"
        animate={{
          background: [
            "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
            "linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%)",
            "linear-gradient(135deg, #0f172a 0%, #3730a3 50%, #0f172a 100%)",
            "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Geometric Shapes */}
      <FloatingShapes />

      {/* Interactive Grid Pattern */}
      <InteractiveGrid />

      {/* Dynamic Light Rays */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: '0%',
              right: '0%',
              top: `${20 + i * 15}%`,
              transformOrigin: 'center',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Click Effects Container */}
      <div className="absolute inset-0 pointer-events-none">
        {clickEffects.map(effect => (
          <ClickEffect key={effect.id} x={effect.x} y={effect.y} id={effect.id} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 section-container pt-16" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="hero-heading animate-fade-in-up"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <VariableProximity
                  label="Instant Privacy."
                  fromFontVariationSettings="'wght' 700"
                  toFontVariationSettings="'wght' 900"
                  containerRef={containerRef}
                  radius={100}
                  falloff="exponential"
                />
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  <VariableProximity
                    label="Anytime. Anywhere."
                    fromFontVariationSettings="'wght' 700"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={100}
                    falloff="exponential"
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Revolutionary foldable changing solutions for modern India - From homes to hostels, events to outdoor spaces
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="btn-hero group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Your Demo Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Product Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { number: "500+", label: "Installations", icon: Zap },
                { number: "200+", label: "Happy Customers", icon: Star },
                { number: "25+", label: "Cities", icon: Sparkles },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-cyan-400 mr-2 group-hover:text-purple-400 transition-colors" />
                    <div className="text-2xl font-bold text-white">{item.number}</div>
                  </div>
                  <div className="text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.img 
                src={heroImage} 
                alt="Privoxx Privacy Solutions - Three Product Variants"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              />
              
              {/* Enhanced Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                ✨ Coming Soon
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};