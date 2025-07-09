import { Shield, Sparkles, Heart, Maximize } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Instant Privacy",
    description: "No more searching for changing rooms or compromising on privacy",
    stat: "100%",
    statLabel: "Privacy Guaranteed"
  },
  {
    icon: Sparkles,
    title: "Hygiene First",
    description: "Clean, personal space every time with antimicrobial materials",
    stat: "99.9%",
    statLabel: "Germ Protection"
  },
  {
    icon: Heart,
    title: "Dignity Preserved",
    description: "Comfortable changing without compromise in any environment",
    stat: "500+",
    statLabel: "Happy Users"
  },
  {
    icon: Maximize,
    title: "Space Efficient",
    description: "Minimal footprint, maximum utility with smart design",
    stat: "75%",
    statLabel: "Space Saved"
  }
];

export const PrivacyBenefits = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Scrolling Content */}
          <div className="space-y-16">
            <div>
              <h2 className="section-heading">
                Why Privacy Matters in Modern India
              </h2>
              <p className="section-subheading">
                Addressing the gap in privacy infrastructure across diverse spaces with innovative, culturally sensitive solutions.
              </p>
            </div>

            {/* Benefits - Show 2 at a time */}
            {[
              [benefits[0], benefits[1]], 
              [benefits[2], benefits[3]]
            ].map((benefitPair, pairIndex) => (
              <div key={pairIndex} className="min-h-screen flex items-center">
                <div className="grid sm:grid-cols-2 gap-8 w-full">
                  {benefitPair.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div 
                        key={benefit.title}
                        className="card-hover text-center group"
                      >
                        <div className="mb-4">
                          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <IconComponent className="h-10 w-10 text-primary-foreground" />
                          </div>
                          <div className="text-4xl font-bold text-primary mb-1">{benefit.stat}</div>
                          <div className="text-sm text-secondary font-medium">{benefit.statLabel}</div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Enlarged Key Points Section */}
            <div className="min-h-screen flex items-center">
              <div className="bg-gradient-card rounded-2xl p-12 w-full shadow-strong">
                <h3 className="text-3xl font-bold text-primary mb-8 text-center">The Privoxx Difference</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-secondary rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Cultural Sensitivity</h4>
                        <p className="text-muted-foreground">Designed specifically for Indian living conditions and cultural needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-secondary rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Easy Installation</h4>
                        <p className="text-muted-foreground">No permanent modifications required to existing spaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-secondary rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Affordable Solutions</h4>
                        <p className="text-muted-foreground">Cost-effective privacy for homes, businesses, and public spaces</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-secondary rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Eco-Friendly</h4>
                        <p className="text-muted-foreground">Environmentally conscious with sustainable materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Stats */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-strong">
                <h3 className="text-2xl font-bold mb-8 text-center">Privacy Gap in India</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Homes without dedicated changing areas</span>
                    <span className="font-bold">60%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-3/5"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>PGs lacking privacy infrastructure</span>
                    <span className="font-bold">75%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-3/4"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Public spaces needing privacy solutions</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="text-3xl font-bold mb-2">2.5M+</div>
                  <div className="text-sm opacity-90">People need better privacy solutions daily</div>
                </div>
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