import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Linkedin, 
  Mail, 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Star,
  Quote,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

const executives = [
  {
    name: "Rajesh Mehta",
    title: "Chief Executive Officer & Founder",
    experience: "15+ years in innovative product development",
    vision: "Leading India's privacy revolution through accessible design solutions that respect cultural values and modern needs",
    linkedin: "#",
    email: "rajesh@privoxx.com",
    location: "Mumbai, Maharashtra",
    joinedYear: "2022",
    education: "IIT Mumbai, Stanford MBA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    achievements: [
      "Led 3 successful product launches generating ₹50M+ revenue",
      "20+ patents in privacy technology and smart infrastructure", 
      "Former VP at Tata Digital, scaled teams from 10 to 200+",
      "Featured in Forbes India 30 Under 30 (2019)"
    ],
    specialties: ["Product Strategy", "Innovation", "Market Expansion"],
    quote: "Privacy is not a luxury—it's a fundamental right that should be accessible to every Indian family."
  },
  {
    name: "Priya Sharma",
    title: "Chief Operating Officer",
    experience: "12+ years in manufacturing and operations excellence",
    vision: "Scaling production while maintaining the highest quality standards and sustainable practices",
    linkedin: "#",
    email: "priya@privoxx.com",
    location: "Pune, Maharashtra", 
    joinedYear: "2022",
    education: "NIT Warangal, Wharton Executive Program",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    achievements: [
      "Optimized production efficiency by 40% while reducing costs",
      "Built supply chain network across 25+ Indian cities",
      "ISO 9001 & Quality management expert with 99.8% satisfaction",
      "Led sustainability initiatives reducing carbon footprint by 30%"
    ],
    specialties: ["Operations", "Supply Chain", "Quality Management"],
    quote: "Excellence in operations means every customer receives a product that exceeds their expectations."
  },
  {
    name: "Dr. Amit Patel",
    title: "Chief Technology Officer",
    experience: "18+ years in engineering and technology innovation",
    vision: "Pioneering next-generation privacy solutions through cutting-edge technology and AI integration",
    linkedin: "#",
    email: "amit@privoxx.com",
    location: "Bangalore, Karnataka",
    joinedYear: "2023", 
    education: "IIT Delhi, PhD Stanford, MIT Research Fellow",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    achievements: [
      "35+ patents in IoT, smart materials, and privacy technology",
      "Led R&D teams at Google and Microsoft for 8+ years", 
      "Published 50+ research papers in top-tier journals",
      "Winner of National Technology Award 2021"
    ],
    specialties: ["AI & ML", "IoT", "Smart Materials", "R&D"],
    quote: "Technology should enhance human dignity and privacy, not compromise it."
  }
];

const companyStats = [
  { icon: TrendingUp, label: "Years in Business", value: "2+", color: "from-blue-500 to-purple-600", description: "Rapid growth and innovation" },
  { icon: Award, label: "Products Installed", value: "500+", color: "from-green-500 to-blue-500", description: "Across India and growing" },
  { icon: Users, label: "Happy Customers", value: "200+", color: "from-purple-500 to-pink-500", description: "5-star average rating" },
  { icon: Target, label: "Cities Served", value: "25+", color: "from-orange-500 to-red-500", description: "Pan-India presence" }
];

const companyValues = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Continuously developing cutting-edge privacy solutions that blend traditional values with modern technology.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award, 
    title: "Uncompromising Quality",
    description: "Premium materials, rigorous testing, and attention to detail in every product we create.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Customer Obsession", 
    description: "Every solution designed with deep understanding of our customers' needs and cultural context.",
    color: "from-green-500 to-emerald-500"
  }
];

export const CompanyLeadership = () => {
  return (
    <section id="company" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L61.8 38.2H95L68.1 59.8L79.9 93L50 71.4L20.1 93L31.9 59.8L5 38.2H38.2L50 5Z' fill='%234F46E5' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            Leadership Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Meet Our Visionary Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team is dedicated to revolutionizing privacy solutions across India with innovative design, operational excellence, and deep cultural understanding.
          </p>
        </motion.div>

        {/* Executive Profiles */}
        <div className="space-y-16 mb-20">
          {executives.map((executive, index) => (
            <motion.div
              key={executive.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <div className="md:flex">
                  {/* Profile Image Section */}
                  <div className="md:w-2/5 relative">
                    <div className="relative h-80 md:h-full overflow-hidden">
                      <img 
                        src={executive.coverImage} 
                        alt={`${executive.name} background`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Avatar and Quick Info */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-end gap-4">
                          <Avatar className="h-20 w-20 border-4 border-white shadow-xl">
                            <AvatarImage src={executive.avatar} alt={executive.name} />
                            <AvatarFallback className="text-xl font-bold">
                              {executive.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-white">
                            <h3 className="text-2xl font-bold mb-1">{executive.name}</h3>
                            <p className="text-white/90 font-medium">{executive.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-3/5 p-8">
                    <div className="space-y-6">
                      {/* Quote */}
                      <div className="relative">
                        <Quote className="h-8 w-8 text-blue-500/20 absolute -top-2 -left-2" />
                        <p className="text-lg text-slate-700 italic leading-relaxed pl-6">
                          "{executive.quote}"
                        </p>
                      </div>

                      {/* Vision */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-500" />
                          Vision
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{executive.vision}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <div className="text-sm font-medium text-slate-900">Joined</div>
                          <div className="text-xs text-slate-600">{executive.joinedYear}</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <div className="text-sm font-medium text-slate-900">Based</div>
                          <div className="text-xs text-slate-600">{executive.location}</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg col-span-2 md:col-span-1">
                          <GraduationCap className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                          <div className="text-sm font-medium text-slate-900">Education</div>
                          <div className="text-xs text-slate-600">{executive.education}</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-500" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {executive.specialties.map((specialty, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-colors"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {executive.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-slate-600 leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button 
                          variant="outline" 
                          className="flex-1 group hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                        >
                          <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          LinkedIn
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 group hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
                        >
                          <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Impact Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Growing Impact</h3>
              <p className="text-xl text-white/90">Making privacy accessible across India</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-lg font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-white/80">{stat.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
          <p className="text-xl text-slate-600">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {companyValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"></div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};