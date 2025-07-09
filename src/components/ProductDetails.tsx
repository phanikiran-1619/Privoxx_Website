import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Backpack, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import stationaryImage from "@/assets/stationary.jpg";
import portableImage from "@/assets/portable.jpg";

const wallMountedProduct = {
  id: 'wall-mounted',
  title: 'Wall-Mounted Prive Box',
  subtitle: 'Flagship Solution',
  description: 'Transform any wall into instant privacy space with our revolutionary pull-down mechanism',
  image: wallMountedImage,
  icon: Home,
  features: [
    'Pull-down mechanism',
    'Minimal space required',
    'No renovation needed',
    'Premium materials',
    'Easy installation',
    'Antimicrobial coating'
  ],
  useCases: ['Homes', 'PGs', 'Hostels', 'Hotels', 'Offices', 'Clinics'],
  price: '₹24,999',
  specifications: [
    'Dimensions: 180cm x 80cm when deployed',
    'Weight: 12kg',
    'Material: High-grade polymer',
    'Installation: Wall-mounted bracket system',
    'Warranty: 3 years comprehensive'
  ]
};

export const ProductDetails = () => {
  return (
    <section id="products" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Privacy Solutions for Every Need
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Choose from our three innovative privacy solutions designed for different environments and use cases. Each product is engineered for maximum convenience and privacy.
          </p>
        </div>

        {/* Single Product - Horizontal Layout */}
        <div className="mb-16">
          <Card className="card-hover group overflow-hidden ring-2 ring-secondary">
            <div className="bg-secondary text-secondary-foreground text-center py-3 text-sm font-semibold">
              Most Popular - Flagship Solution
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left - Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={wallMountedProduct.image} 
                  alt={wallMountedProduct.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-4 rounded-full">
                  <Home className="h-8 w-8" />
                </div>
                <div className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  {wallMountedProduct.price}
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
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

                {/* Features Grid */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-lg">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {wallMountedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-lg">Specifications:</h4>
                  <div className="space-y-2">
                    {wallMountedProduct.specifications.map((spec, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground bg-accent rounded-lg px-4 py-2">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-lg">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {wallMountedProduct.useCases.map((useCase, idx) => (
                      <span 
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="btn-hero group w-full sm:w-auto">
                  Book Demo Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Experience the Wall-Mounted Prive Box with a personalized demonstration at your location.
          </p>
          <Button 
            size="lg" 
            className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Demo Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};