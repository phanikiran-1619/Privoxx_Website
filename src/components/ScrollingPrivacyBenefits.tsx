import { useState, useEffect, useRef } from "react";
import { Shield, Sparkles, Heart, Maximize } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Shield,
    title: "Instant Privacy",
    description: "No more searching for changing rooms or compromising on privacy",
    stat: "100%",
    statLabel: "Privacy Guaranteed",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Maximize,
    title: "Space Efficient",
    description: "Minimal footprint, maximum utility with smart design",
    stat: "75%",
    statLabel: "Space Saved",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Complete Protection",
    description: "Round-the-clock privacy protection with advanced security features and tamper-proof design for ultimate peace of mind.",
    stat: "24/7",
    statLabel: "Security Assurance",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Lightning Fast",
    description: "Ultra-quick installation process that transforms any space into a private sanctuary in just minutes without any tools required.",
    stat: "5min",
    statLabel: "Setup Time",
    color: "from-orange-500 to-red-500"
  }
];

export const ScrollingPrivacyBenefits = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const benefitsRef = useRef(null);
  const statsBoxRef = useRef(null);
  const differenceBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(headerRef.current, { y: 100, opacity: 0 });
      gsap.set(leftColumnRef.current, { x: -100, opacity: 0 });
      gsap.set(rightColumnRef.current, { x: 100, opacity: 0 });
      gsap.set(benefitsRef.current?.children || [], { y: 80, opacity: 0, scale: 0.8 });
      gsap.set(statsBoxRef.current, { scale: 0.8, opacity: 0, rotationY: -15 });
      gsap.set(differenceBoxRef.current, { y: 50, opacity: 0 });

      // Main scroll trigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          })
          .to([leftColumnRef.current, rightColumnRef.current], {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2
          }, "-=0.4")
          .to(benefitsRef.current?.children || [], {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2
          }, "-=0.6")
          .to(statsBoxRef.current, {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.7)"
          }, "-=0.4")
          .to(differenceBoxRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.2");
        }
      });

      // Individual benefit animations
      const benefitElements = benefitsRef.current?.children || [];
      Array.from(benefitElements).forEach((benefit, index) => {
        const icon = benefit.querySelector('.benefit-icon');
        const stat = benefit.querySelector('.benefit-stat');
        
        // Continuous floating animation
        gsap.to(benefit, {
          y: -10,
          duration: 2 + index * 0.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        });

        // Hover effects
        const benefitHover = () => {
          gsap.to(benefit, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(icon, {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        };

        const benefitLeave = () => {
          gsap.to(benefit, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        benefit.addEventListener('mouseenter', benefitHover);
        benefit.addEventListener('mouseleave', benefitLeave);
      });

      // Stats box animations
      const progressBars = statsBoxRef.current?.querySelectorAll('.progress-bar') || [];
      progressBars.forEach((bar, index) => {
        const width = bar.style.width || bar.getAttribute('data-width');
        gsap.set(bar, { width: '0%' });
        
        ScrollTrigger.create({
          trigger: bar,
          start: "top 80%",
          onEnter: () => {
            gsap.to(bar, {
              width: width,
              duration: 1.5,
              ease: "power2.out",
              delay: index * 0.2
            });
          }
        });
      });

      // Floating badge animation
      const badge = statsBoxRef.current?.querySelector('.floating-badge');
      if (badge) {
        gsap.to(badge, {
          y: -5,
          rotation: 3,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Difference box items animation
      const differenceItems = differenceBoxRef.current?.querySelectorAll('.difference-item') || [];
      Array.from(differenceItems).forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(item, 
              { x: -30, opacity: 0 },
              { 
                x: 0, 
                opacity: 1, 
                duration: 0.6, 
                ease: "power2.out",
                delay: index * 0.1
              }
            );
          }
        });

        // Hover effect
        const itemHover = () => {
          gsap.to(item, {
            x: 10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const itemLeave = () => {
          gsap.to(item, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        item.addEventListener('mouseenter', itemHover);
        item.addEventListener('mouseleave', itemLeave);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="privacy-benefits-section" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="section-heading">
            Why Privacy Matters in Modern India
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Addressing the gap in privacy infrastructure across diverse spaces with innovative, culturally sensitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div ref={leftColumnRef} className="space-y-8 lg:sticky lg:top-24">
            {/* Benefits Grid */}
            <div ref={benefitsRef} className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={benefit.title}
                    className="card-hover text-center group cursor-pointer relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="mb-4">
                        <div className={`benefit-icon w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <div className="benefit-stat text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                        <div className="text-base text-secondary font-medium">{benefit.statLabel}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Expanded Privoxx Difference Section */}
            <div ref={differenceBoxRef} className="bg-accent rounded-2xl p-8 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">The Privoxx Difference:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="difference-item flex items-start">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Cultural Sensitivity</h4>
                        <p className="text-muted-foreground text-sm">Designed specifically for Indian living conditions and cultural needs</p>
                      </div>
                    </div>
                    <div className="difference-item flex items-start">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">No Permanent Changes</h4>
                        <p className="text-muted-foreground text-sm">Easy installation without permanent modifications to spaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="difference-item flex items-start">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Affordable Solutions</h4>
                        <p className="text-muted-foreground text-sm">Cost-effective privacy solutions for homes, businesses, and public spaces</p>
                      </div>
                    </div>
                    <div className="difference-item flex items-start">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Eco-Friendly</h4>
                        <p className="text-muted-foreground text-sm">Environmentally conscious with sustainable materials and manufacturing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Static Privacy Gap Box */}
          <div ref={rightColumnRef} className="lg:sticky lg:top-24">
            <div ref={statsBoxRef} className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-strong relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center">Privacy Gap in India</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Homes without dedicated changing areas</span>
                    <span className="font-bold text-xl">60%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-3 overflow-hidden">
                    <div className="progress-bar bg-secondary h-3 rounded-full transition-all duration-1000" style={{width: '60%'}} data-width="60%"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg">PGs lacking privacy infrastructure</span>
                    <span className="font-bold text-xl">75%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-3 overflow-hidden">
                    <div className="progress-bar bg-secondary h-3 rounded-full transition-all duration-1000" style={{width: '75%'}} data-width="75%"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg">Public spaces needing privacy solutions</span>
                    <span className="font-bold text-xl">85%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-3 overflow-hidden">
                    <div className="progress-bar bg-secondary h-3 rounded-full transition-all duration-1000" style={{width: '85%'}} data-width="85%"></div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="text-4xl font-bold mb-2">2.5M+</div>
                  <div className="text-lg opacity-90">People need better privacy solutions daily</div>
                </div>

                {/* Floating Badge */}
                <div className="floating-badge absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-strong">
                  Market Research 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};