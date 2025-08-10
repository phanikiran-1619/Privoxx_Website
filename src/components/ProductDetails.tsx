import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productImages = [wallMountedImage];
const productVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

const wallMountedProduct = {
  id: 'wall-mounted',
  title: 'Wall-Mounted Prive Box',
  subtitle: 'Flagship Solution',
  description: 'Transform any wall into instant privacy space with our revolutionary pull-down mechanism',
  icon: Home,
  features: [
    'Pull-down mechanism',
    'Minimal space required', 
    'No renovation needed',
    'Premium materials'
  ],
  useCases: ['Homes', 'PGs', 'Hostels', 'Hotels', 'Offices', 'Clinics']
};

export const ProductDetails = () => {
  const [isShowingVideo, setIsShowingVideo] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(headerRef.current, { y: 80, opacity: 0 });
      gsap.set(cardRef.current, { y: 100, opacity: 0, scale: 0.9 });
      gsap.set(mediaRef.current, { x: -100, opacity: 0, rotationY: -15 });
      gsap.set(contentRef.current, { x: 100, opacity: 0 });
      gsap.set(featuresRef.current?.children || [], { x: 50, opacity: 0 });
      gsap.set(ctaRef.current, { y: 50, opacity: 0, scale: 0.8 });

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          })
          .to(cardRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)"
          }, "-=0.4")
          .to(mediaRef.current, {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.6")
          .to(contentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.6")
          .to(featuresRef.current?.children || [], {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1
          }, "-=0.4")
          .to(ctaRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, "-=0.2");
        }
      });

      // Continuous hover effects
      const cardHover = () => {
        gsap.to(cardRef.current, {
          y: -10,
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const cardLeave = () => {
        gsap.to(cardRef.current, {
          y: 0,
          boxShadow: "0 8px 32px rgba(39, 50, 110, 0.16)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      cardRef.current?.addEventListener('mouseenter', cardHover);
      cardRef.current?.addEventListener('mouseleave', cardLeave);

      // Media toggle animation
      const mediaToggle = () => {
        gsap.to(mediaRef.current, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        });
      };

      // Feature items hover
      const features = featuresRef.current?.children || [];
      Array.from(features).forEach((feature) => {
        const featureHover = () => {
          gsap.to(feature, {
            x: 10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const featureLeave = () => {
          gsap.to(feature, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        feature.addEventListener('mouseenter', featureHover);
        feature.addEventListener('mouseleave', featureLeave);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleContent = () => {
    setIsShowingVideo(!isShowingVideo);
    
    // Animate the toggle
    gsap.to(mediaRef.current, {
      scale: 0.9,
      opacity: 0.7,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(mediaRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      }
    });
  };

  return (
    <section ref={sectionRef} id="products" className="py-16 bg-gradient-subtle">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="section-heading">
            Privacy Solutions for Every Need
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Experience our innovative privacy solution designed for maximum convenience and privacy.
          </p>
        </div>

        {/* Single Product - Expanded Layout */}
        <div className="max-w-6xl mx-auto">
          <Card ref={cardRef} className="card-hover group overflow-hidden ring-2 ring-secondary">
            <div className="bg-secondary text-secondary-foreground text-center py-3 text-base font-semibold">
              Most Popular - Flagship Solution
            </div>
            
            <div className="grid lg:grid-cols-5 gap-10 p-10">
              {/* Left - Media Gallery */}
              <div className="lg:col-span-2 relative overflow-hidden rounded-xl h-96">
                <div ref={mediaRef} className="relative h-full">
                  {!isShowingVideo ? (
                    <img 
                      src={productImages[0]} 
                      alt={wallMountedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  ) : (
                    <video 
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      poster={productImages[0]}
                    >
                      <source src={productVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                  {/* Media Toggle Button */}
                  <button
                    onClick={toggleContent}
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    {isShowingVideo ? 'Show Image' : 'Play Video'}
                  </button>
                </div>
                
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <Home className="h-6 w-6" />
                </div>
              </div>

              {/* Right - Content */}
              <div ref={contentRef} className="lg:col-span-3 space-y-6 flex flex-col justify-center">
                <div>
                  <span className="text-sm text-secondary font-medium uppercase tracking-wide">
                    {wallMountedProduct.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-primary mt-2 mb-4">
                    {wallMountedProduct.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {wallMountedProduct.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-lg">Key Features:</h4>
                  <div ref={featuresRef} className="grid grid-cols-1 gap-3">
                    {wallMountedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center cursor-pointer group">
                        <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button ref={ctaRef} size="lg" className="btn-hero group w-full mt-auto relative overflow-hidden">
                  <span className="relative z-10">Coming Soon</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground mt-12 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">
              Ready to Transform Your Space?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Experience the Wall-Mounted Prive Box with a personalized demonstration.
            </p>
            <Button 
              size="lg" 
              className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Demo Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};