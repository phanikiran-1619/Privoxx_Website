import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, Users, Target, TrendingUp } from "lucide-react";

const executives = [
  {
    name: "John Smith",
    title: "Chief Executive Officer",
    experience: "15+ years in innovative product development",
    vision: "Leading India's privacy revolution through accessible design solutions",
    linkedin: "#",
    email: "john@privoxx.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Led 3 successful product launches",
      "20+ patents in privacy technology",
      "Former VP at leading tech company"
    ]
  },
  {
    name: "Sarah Johnson",
    title: "Chief Operating Officer",
    experience: "12+ years in manufacturing and operations excellence",
    vision: "Scaling production while maintaining the highest quality standards",
    linkedin: "#",
    email: "sarah@privoxx.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    achievements: [
      "Optimized production by 40%",
      "Built supply chain across India",
      "Quality management expert"
    ]
  }
];

const companyStats = [
  { icon: TrendingUp, label: "Years in Business", value: "2+", color: "text-primary" },
  { icon: Award, label: "Products Installed", value: "500+", color: "text-secondary" },
  { icon: Users, label: "Happy Customers", value: "200+", color: "text-primary" },
  { icon: Target, label: "Cities Served", value: "25+", color: "text-secondary" }
];

export const CompanyLeadership = () => {
  return (
    <section id="company" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Meet Our Leadership Team
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Our experienced leadership team is dedicated to revolutionizing privacy solutions across India with innovative design and operational excellence.
          </p>
        </div>

        {/* Executives */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {executives.map((executive, index) => (
            <Card 
              key={executive.name}
              className="card-hover overflow-hidden animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="md:flex">
                  {/* Photo */}
                  <div className="md:w-1/3">
                    <img 
                      src={executive.avatar} 
                      alt={executive.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-primary mb-1">{executive.name}</h3>
                      <p className="text-secondary font-medium mb-2">{executive.title}</p>
                      <p className="text-sm text-muted-foreground">{executive.experience}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Vision:</h4>
                      <p className="text-sm text-muted-foreground italic">"{executive.vision}"</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {executive.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="card-hover text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-primary mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously developing cutting-edge privacy solutions for modern India
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-primary mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Uncompromising commitment to premium materials and construction
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-primary mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Every solution designed with our customers' needs and privacy in mind
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};