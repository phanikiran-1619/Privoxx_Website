import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackDemoBooking } from "@/lib/analytics";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const sidebarRef = useRef(null);
  const fieldsRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(headerRef.current, { y: 80, opacity: 0 });
      gsap.set(formRef.current, { x: -100, opacity: 0, rotationY: -10 });
      gsap.set(sidebarRef.current, { x: 100, opacity: 0, rotationY: 10 });
      gsap.set(fieldsRef.current?.children || [], { y: 30, opacity: 0 });
      gsap.set(submitButtonRef.current, { y: 50, opacity: 0, scale: 0.8 });

      // Scroll-triggered animation
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
          .to([formRef.current, sidebarRef.current], {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2
          }, "-=0.4")
          .to(fieldsRef.current?.children || [], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1
          }, "-=0.6")
          .to(submitButtonRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, "-=0.2");
        }
      });

      // Form field focus animations
      const formFields = fieldsRef.current?.querySelectorAll('input, select, textarea') || [];
      Array.from(formFields).forEach((field) => {
        const fieldFocus = () => {
          gsap.to(field.parentElement, {
            scale: 1.02,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const fieldBlur = () => {
          gsap.to(field.parentElement, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        field.addEventListener('focus', fieldFocus);
        field.addEventListener('blur', fieldBlur);
      });

      // Submit button hover animation
      const buttonHover = () => {
        gsap.to(submitButtonRef.current, {
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(79, 130, 195, 0.4)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const buttonLeave = () => {
        gsap.to(submitButtonRef.current, {
          scale: 1,
          boxShadow: "0 4px 16px rgba(39, 50, 110, 0.12)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      submitButtonRef.current?.addEventListener('mouseenter', buttonHover);
      submitButtonRef.current?.addEventListener('mouseleave', buttonLeave);

      // Continuous pulse animation for submit button
      gsap.to(submitButtonRef.current, {
        boxShadow: "0 0 20px rgba(79, 130, 195, 0.3)",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Animate submit button
    gsap.to(submitButtonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1
    });

    // Track form submission
    trackFormSubmission('demo_booking');
    trackDemoBooking();

    try {
      const response = await fetch('http://localhost:3001/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Product Type: ${formData.productType}\nOrganization: ${formData.organization}\nLocation: ${formData.location}\nQuantity: ${formData.quantity}\nRequirements: ${formData.requirements}`
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        
        // Success animation
        gsap.to(formRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        });
        
        toast({
          title: "Demo Booked Successfully!",
          description: result.message || "Our team will contact you within 24 hours to schedule your personalized demo.",
        });
        
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
      } else {
        toast({
          title: "Failed to book demo.",
          description: "There was an error sending your request. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please ensure the backend is running on port 3001.",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={sectionRef} id="booking" className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
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
            <Card ref={formRef} className="shadow-strong backdrop-blur-sm bg-white/95">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Book Your Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div ref={fieldsRef} className="space-y-6">
                    {/* Product Selection */}
                    <div className="form-field">
                      <Label htmlFor="productType" className="text-base font-medium">
                        Product Type *
                      </Label>
                      <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)}>
                        <SelectTrigger className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary">
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
                      <div className="form-field">
                        <Label htmlFor="name" className="text-base font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <Label htmlFor="phone" className="text-base font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    {/* Email - Major Field */}
                    <div className="form-field">
                      <Label htmlFor="email" className="text-base font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                        placeholder="privoxx.connect@gmail.com"
                        required
                      />
                    </div>

                    {/* Business Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-field">
                        <Label htmlFor="organization" className="text-base font-medium">
                          Organization/Business Type
                        </Label>
                        <Input
                          id="organization"
                          type="text"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                          placeholder="Hotel, PG, Individual, etc."
                        />
                      </div>
                      <div className="form-field">
                        <Label htmlFor="location" className="text-base font-medium">
                          Location (City/State) *
                        </Label>
                        <Input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                          placeholder="Mumbai, Maharashtra"
                          required
                        />
                      </div>
                    </div>

                    {/* Quantity - Major Field */}
                    <div className="form-field">
                      <Label htmlFor="quantity" className="text-base font-medium">
                        Quantity Required *
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                        placeholder="Number of units needed"
                        min="1"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <Label htmlFor="requirements" className="text-base font-medium">
                        Additional Requirements
                      </Label>
                      <Textarea
                        id="requirements"
                        value={formData.requirements}
                        onChange={(e) => handleInputChange('requirements', e.target.value)}
                        className="mt-2 transition-all duration-300 hover:border-secondary focus:border-secondary"
                        placeholder="Tell us about your specific needs, space constraints, or special requirements..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      ref={submitButtonRef}
                      type="submit" 
                      size="lg" 
                      className="btn-hero w-full relative overflow-hidden"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <LoadingSpinner size="sm" />
                          <span className="ml-2">Booking Demo...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Book Demo Now</span>
                          <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-medium backdrop-blur-sm bg-white/95">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="contact-item">
                  <div className="font-medium text-primary">Phone</div>
                  <div className="text-muted-foreground">+91 98765 43210</div>
                </div>
                <div className="contact-item">
                  <div className="font-medium text-primary">Email</div>
                  <div className="text-muted-foreground">privoxx.connect@gmail.com</div>
                </div>
                <div className="contact-item">
                  <div className="font-medium text-primary">Response Time</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
              </CardContent>
            </Card>

            {/* Demo Benefits */}
            <Card className="shadow-medium backdrop-blur-sm bg-white/95">
              <CardHeader>
                <CardTitle className="text-lg">What You'll Get:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {[
                    'Personalized product demonstration',
                    'Installation guidance and requirements',
                    'Custom pricing based on your needs',
                    'Technical specifications and warranty'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center benefit-item">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};