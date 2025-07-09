import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Backpack, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import stationaryImage from "@/assets/stationary.jpg";
import portableImage from "@/assets/portable.jpg";

const product = {
  id: 'wall-mounted',
  title: 'Wall-Mounted Prive Box',
  subtitle: 'Flagship Solution',
  description: 'Transform any wall into instant privacy space with our innovative foldable design',
  image: wallMountedImage,
  icon: Home,
  features: [
    'Pull-down mechanism for instant setup',
    'Minimal space required - fits any wall',
    'No renovation needed - easy installation',
    'Premium antimicrobial materials',
    'Weather-resistant construction',
    'Compact storage when not in use'
  ],
  useCases: ['Homes', 'PGs', 'Hostels', 'Hotels', 'Offices', 'Studios'],
  price: '₹24,999',
  specifications: [
    'Dimensions: 180cm (H) x 90cm (W) x 15cm (D)',
    'Weight: 12kg',
    'Material: High-grade polymer with steel frame',
    'Installation: Wall-mounted with minimal hardware'
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

        {/* Product Showcase - Horizontal Layout */}
        <div className="bg-white rounded-2xl shadow-strong overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground p-4 rounded-full shadow-medium">
                <Home className="h-8 w-8" />
              </div>
              <div className="absolute top-6 right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Flagship Product
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary font-medium text-lg">{product.subtitle}</span>
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">{product.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Features Grid */}
              <div className="mb-6">
                <h4 className="font-bold text-primary mb-4 text-xl">Key Features:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h4 className="font-bold text-primary mb-4 text-xl">Specifications:</h4>
                <div className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-xl">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((useCase, idx) => (
                    <span 
                      key={idx}
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <Button size="lg" className="btn-hero group w-fit">
                Get Detailed Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We can customize our products to meet your specific requirements and space constraints.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-outline text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};