import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Hotel Owner",
    company: "Hotel Blue Diamond",
    location: "Mumbai, Maharashtra",
    rating: 5,
    quote: "Privoxx solved our guest privacy concerns instantly. Easy installation and guests love the convenience. Our customer satisfaction scores have improved significantly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "PG Owner",
    company: "Star PG Accommodations",
    location: "Bangalore, Karnataka",
    rating: 5,
    quote: "Game-changer for our shared accommodation business. Privacy without compromising space. Our occupancy rates increased by 30% after installation.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Event Organizer",
    company: "EventCraft Solutions",
    location: "Delhi, NCR",
    rating: 5,
    quote: "Portable version is perfect for outdoor events. Clients appreciate the thoughtful privacy solution. It's become a standard part of our event setup.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What Our Customers Say
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Hear from business owners and individuals who have transformed their spaces with Privoxx privacy solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="card-hover overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-secondary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};