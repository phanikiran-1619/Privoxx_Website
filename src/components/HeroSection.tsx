import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";
import VariableProximity from "@/components/VariableProximity";
import { useRef, useEffect } from "react";
import { trackButtonClick, trackProductInterest } from "@/lib/analytics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      const particles = [];
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-white/20 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesRef.current?.appendChild(particle);
        particles.push(particle);
      }

      // Animate particles
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -100,
          x: Math.random() * 200 - 100,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          delay: i * 0.2,
          ease: "power2.out"
        });
      });

      // Initial setup
      gsap.set(titleRef.current, { y: 100, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 80, opacity: 0 });
      gsap.set(buttonsRef.current?.children || [], { y: 60, opacity: 0, scale: 0.8 });
      gsap.set(statsRef.current?.children || [], { y: 40, opacity: 0 });
      gsap.set(imageRef.current, { x: 100, opacity: 0, scale: 0.8, rotation: 10 });
      gsap.set(badgeRef.current, { scale: 0, rotation: -180 });

      // Main animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(buttonsRef.current?.children || [], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2
      }, "-=0.6")
      .to(statsRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.4")
      .to(imageRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1")
      .to(badgeRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Continuous animations
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(badgeRef.current, {
        rotation: 5,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Scroll-triggered parallax
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Stats counter animation
      const stats = statsRef.current?.children || [];
      Array.from(stats).forEach((stat) => {
        const numberElement = stat.querySelector('.stat-number');
        if (numberElement) {
          const finalNumber = numberElement.textContent;
          const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
          
          gsap.fromTo(numberElement, 
            { textContent: 0 },
            {
              textContent: numericValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                toggleActions: "play none none reverse"
              },
              onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent);
                numberElement.textContent = finalNumber.includes('+') ? current + '+' : current;
              }
            }
          );
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]" />
      
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Particle Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Animated Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary/20 to-transparent animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 section-container pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                <VariableProximity
                  label="Instant Privacy."
                  fromFontVariationSettings="'wght' 700"
                  toFontVariationSettings="'wght' 900"
                  containerRef={containerRef}
                  radius={100}
                  falloff="exponential"
                />
                <br />
                <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
                  <VariableProximity
                    label="Anytime. Anywhere."
                    fromFontVariationSettings="'wght' 700"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={100}
                    falloff="exponential"
                  />
                </span>
              </h1>
              <p ref={subtitleRef} className="text-base sm:text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Revolutionary foldable changing solutions for modern India - From homes to hostels, events to outdoor spaces
              </p>
            </div>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero group w-full sm:w-auto relative overflow-hidden"
                onClick={() => {
                  trackButtonClick('hero_demo_booking');
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Book Your Demo Today</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline group w-full sm:w-auto relative overflow-hidden"
                onClick={() => {
                  trackButtonClick('hero_product_demo');
                  trackProductInterest('wall_mounted_prive_box');
                }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Product Demo</span>
              </Button>
            </div>
            <div ref={statsRef} className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0 text-primary-foreground/70 justify-center lg:justify-start">
              <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="stat-number text-xl sm:text-2xl font-bold">500+</div>
                <div className="text-sm">Installations</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="stat-number text-xl sm:text-2xl font-bold">200+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="stat-number text-xl sm:text-2xl font-bold">25+</div>
                <div className="text-sm">Cities</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                ref={imageRef}
                src={heroImage} 
                alt="Privoxx Privacy Solutions - Three Product Variants"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto mx-auto lg:mx-0 rounded-2xl shadow-strong hover:shadow-glow transition-all duration-500 cursor-pointer"
              />
              <div 
                ref={badgeRef}
                className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-medium cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                Coming soon
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary-foreground/60 transition-colors duration-300">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};