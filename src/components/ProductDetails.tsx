import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Backpack, Check } from "lucide-react";
import wallMountedImage from "@/assets/wall-mounted.jpg";
import stationaryImage from "@/assets/stationary.jpg";
import portableImage from "@/assets/portable.jpg";

const products = [
  {
    id: 'wall-mounted',
    title: 'Wall-Mounted Prive Box',
    subtitle: 'Flagship Solution',
    description: 'Transform any wall into instant privacy space',
    image: wallMountedImage,
    icon: Home,
    features: [
      'Pull-down mechanism',
      'Minimal space required',
      'No renovation needed',
      'Premium materials'
    ],
    useCases: ['Homes', 'PGs', 'Hostels', 'Hotels'],
    price: '₹24,999',
    popular: true
  },
  {
    id: 'stationary',
    title: 'Stationary Prive Box',
    subtitle: 'Permanent Solution',
    description: 'Permanent privacy solution for high-traffic areas',
    image: stationaryImage,
    icon: Building,
    features: [
      'Weather-resistant',
      'Durable construction',
      'Gender-neutral design',
      'Easy maintenance'
    ],
    useCases: ['Swimming pools', 'Temples', 'Events', 'Public spaces'],
    price: '₹34,999'
  },
  {
    id: 'portable',
    title: 'Portable Prive Box',
    subtitle: 'Travel Solution',
    description: 'Carry privacy wherever you go',
    image: portableImage,
    icon: Backpack,
    features: [
      'Lightweight design',
      'Instant setup',
      'Travel-friendly',
      'Compact storage'
    ],
    useCases: ['Trekking', 'Field work', 'Outdoor events', 'Camping'],
    price: '₹19,999'
  }
];

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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className={`card-hover group overflow-hidden ${product.popular ? 'ring-2 ring-secondary' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {product.popular && (
                  <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-secondary font-medium">{product.subtitle}</span>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, idx) => (
                        <span 
                          key={idx}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full group" variant={product.popular ? "default" : "outline"}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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