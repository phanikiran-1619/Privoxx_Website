import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, ChevronLeft, ChevronRight, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import stationaryImage from "@/assets/stationary.jpg";

const productImages = [wallMountedImage];
const productVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Sample video - replace with actual product video

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

  const toggleContent = () => {
    setIsShowingVideo(!isShowingVideo);
  };

  return (
    <section id="products" className="py-16 bg-gradient-subtle">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Privacy Solutions for Every Need
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Experience our innovative privacy solution designed for maximum convenience and privacy.
          </p>
        </div>

        {/* Single Product - Expanded Layout */}
        <div className="max-w-6xl mx-auto">
          <Card className="card-hover group overflow-hidden ring-2 ring-secondary">
            <div className="bg-secondary text-secondary-foreground text-center py-3 text-base font-semibold">
              Most Popular - Flagship Solution
            </div>
            
            <div className="grid lg:grid-cols-5 gap-10 p-10">
              {/* Left - Media Gallery */}
              <div className="lg:col-span-2 relative overflow-hidden rounded-xl h-96">
                <div className="relative h-full">
                  {!isShowingVideo ? (
                    <img 
                      src={productImages[0]} 
                      alt={wallMountedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {isShowingVideo ? 'Show Image' : 'Play Video'}
                  </button>
                </div>
                
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <Home className="h-6 w-6" />
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 space-y-6 flex flex-col justify-center">
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
                  <div className="grid grid-cols-1 gap-3">
                    {wallMountedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="btn-hero group w-full mt-auto">
                  Coming Soon
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-3">
            Ready to Transform Your Space?
          </h3>
          <p className="text-base mb-4 opacity-90">
            Experience the Wall-Mounted Prive Box with a personalized demonstration.
          </p>
          <Button 
            size="lg" 
            className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Demo Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};