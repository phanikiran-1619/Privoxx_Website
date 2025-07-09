import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, ChevronLeft, ChevronRight, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import stationaryImage from "@/assets/stationary.jpg";

const productImages = [wallMountedImage, stationaryImage];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
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

        {/* Single Product - Compact Layout */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover group overflow-hidden ring-2 ring-secondary">
            <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-semibold">
              Most Popular - Flagship Solution
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 p-6">
              {/* Left - Image Gallery */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={wallMountedProduct.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Image Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-4 w-4 text-primary" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <Home className="h-6 w-6" />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-secondary font-medium uppercase tracking-wide">
                    {wallMountedProduct.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-3">
                    {wallMountedProduct.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {wallMountedProduct.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-bold text-primary mb-3 text-base">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {wallMountedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-bold text-primary mb-3 text-base">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {wallMountedProduct.useCases.map((useCase, idx) => (
                      <span 
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="btn-hero group w-full">
                  Book Demo Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-6 text-primary-foreground mt-12 max-w-3xl mx-auto">
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