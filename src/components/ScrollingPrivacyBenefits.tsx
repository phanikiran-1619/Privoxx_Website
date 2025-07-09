import { useState, useEffect } from "react";
import { Shield, Sparkles, Heart, Maximize } from "lucide-react";
import { PrivacyStats } from "./PrivacyStats";
import { SolutionShowcase } from "./SolutionShowcase";

const benefits = [
  {
    icon: Shield,
    title: "Instant Privacy",
    description: "No more searching for changing rooms or compromising on privacy",
    stat: "100%",
    statLabel: "Privacy Guaranteed"
  },
  {
    icon: Maximize,
    title: "Space Efficient",
    description: "Minimal footprint, maximum utility with smart design",
    stat: "75%",
    statLabel: "Space Saved"
  }
];

export const ScrollingPrivacyBenefits = () => {
  const [visibleBenefits, setVisibleBenefits] = useState([0, 1]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('privacy-benefits-section');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const startOffset = rect.top;
      const progress = Math.max(0, Math.min(1, (windowHeight - startOffset) / elementHeight));
      
      setScrollProgress(progress);
      
      // Show only the two remaining benefits without auto-swapping
      setVisibleBenefits([0, 1]);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="privacy-benefits-section" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <h2 className="section-heading">
                Why Privacy Matters in Modern India
              </h2>
              <p className="section-subheading">
                Addressing the gap in privacy infrastructure across diverse spaces with innovative, culturally sensitive solutions.
              </p>
            </div>

            {/* Scrolling Benefits - Only 2 at a time */}
            <div className="space-y-8 min-h-[400px]">
              {visibleBenefits.map((benefitIndex, displayIndex) => {
                const benefit = benefits[benefitIndex];
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={`${benefitIndex}-${displayIndex}`}
                    className="card-hover text-center group transform transition-all duration-500 ease-in-out"
                    style={{
                      animationDelay: `${displayIndex * 0.2}s`,
                      opacity: 1,
                      transform: 'translateY(0)'
                    }}
                  >
                    <div className="mb-4">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                      <div className="text-base text-secondary font-medium">{benefit.statLabel}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Additional Privacy Benefits */}
            <div className="space-y-8">
              <div className="card-hover text-center group transform transition-all duration-500 ease-in-out">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="h-10 w-10 text-primary-foreground flex items-center justify-center">🛡️</div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-base text-secondary font-medium">Security Assurance</div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Complete Protection</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Round-the-clock privacy protection with advanced security features and tamper-proof design for ultimate peace of mind.</p>
              </div>

              <div className="card-hover text-center group transform transition-all duration-500 ease-in-out">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="h-10 w-10 text-primary-foreground flex items-center justify-center">⚡</div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">5min</div>
                  <div className="text-base text-secondary font-medium">Setup Time</div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Ultra-quick installation process that transforms any space into a private sanctuary in just minutes without any tools required.</p>
              </div>
            </div>
            
            {/* Expanded Privoxx Difference Section */}
            <div className="bg-accent rounded-2xl p-8 w-full">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">The Privoxx Difference:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Cultural Sensitivity</h4>
                      <p className="text-muted-foreground text-sm">Designed specifically for Indian living conditions and cultural needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">No Permanent Changes</h4>
                      <p className="text-muted-foreground text-sm">Easy installation without permanent modifications to spaces</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Affordable Solutions</h4>
                      <p className="text-muted-foreground text-sm">Cost-effective privacy solutions for homes, businesses, and public spaces</p>
                    </div>
                  </div>
                  <div className="flex items-start">
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

          {/* Right Column - Static Privacy Gap Box */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-strong">
              <h3 className="text-3xl font-bold mb-8 text-center">Privacy Gap in India</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Homes without dedicated changing areas</span>
                  <span className="font-bold text-xl">60%</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full w-3/5 transition-all duration-1000"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg">PGs lacking privacy infrastructure</span>
                  <span className="font-bold text-xl">75%</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full w-3/4 transition-all duration-1000"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg">Public spaces needing privacy solutions</span>
                  <span className="font-bold text-xl">85%</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full w-4/5 transition-all duration-1000"></div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-lg opacity-90">People need better privacy solutions daily</div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-strong animate-float">
                Market Research 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};