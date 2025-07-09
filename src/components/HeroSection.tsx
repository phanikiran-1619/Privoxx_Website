import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";
import logoIP from "@/assets/logo-ip.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary-foreground/15 rounded-full animate-[float_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-secondary/25 rounded-full animate-[float_9s_ease-in-out_infinite_reverse]" />
      </div>
      
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
      <div className="relative z-10 section-container pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="hero-heading animate-fade-in-up">
                Instant Privacy.
                <br />
                <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
                  Anytime. Anywhere.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
                Revolutionary foldable changing solutions for modern India - From homes to hostels, events to outdoor spaces
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.6s]">
              <Button 
                size="lg" 
                className="btn-hero group"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Demo Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Product Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-primary-foreground/70 animate-fade-in-up [animation-delay:0.9s]">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in-up [animation-delay:0.4s]">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Privoxx Privacy Solutions - Three Product Variants"
                className="w-full h-auto rounded-2xl shadow-strong animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-float [animation-delay:0.5s]">
                New Launch!
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-foreground text-primary px-6 py-3 rounded-xl shadow-medium animate-float [animation-delay:1s]">
                <div className="text-sm font-medium">Starting from</div>
                <div className="text-lg font-bold">₹19,999</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};