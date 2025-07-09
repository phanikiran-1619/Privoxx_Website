import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productType: '',
    name: '',
    phone: '',
    email: '',
    organization: '',
    location: '',
    quantity: '',
    requirements: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demo Booked Successfully!",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });

    setIsLoading(false);
    setFormData({
      productType: '',
      name: '',
      phone: '',
      email: '',
      organization: '',
      location: '',
      quantity: '',
      requirements: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="section-padding bg-gradient-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Book a personalized demo and experience our Wall-Mounted Prive Box solution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Book Your Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Selection */}
                  <div>
                    <Label htmlFor="productType" className="text-base font-medium">
                      Product Type *
                    </Label>
                    <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose your preferred product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wall-mounted">Wall-Mounted Prive Box</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Business Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization" className="text-base font-medium">
                        Organization/Business Type
                      </Label>
                      <Input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className="mt-2"
                        placeholder="Hotel, PG, Individual, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-base font-medium">
                        Location (City/State)
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="mt-2"
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quantity" className="text-base font-medium">
                      Quantity Required
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      className="mt-2"
                      placeholder="Number of units needed"
                      min="1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements" className="text-base font-medium">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                      className="mt-2"
                      placeholder="Tell us about your specific needs, space constraints, or special requirements..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="btn-hero w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Booking Demo..." : "Book Demo Now"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-primary">Phone</div>
                  <div className="text-muted-foreground">+91 98765 43210</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Email</div>
                  <div className="text-muted-foreground">info@privoxx.com</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Response Time</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
              </CardContent>
            </Card>


            {/* Demo Benefits */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">What You'll Get:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Personalized product demonstration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Installation guidance and requirements
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Custom pricing based on your needs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Technical specifications and warranty
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};