import { TrendingUp, Users, MapPin, Clock } from "lucide-react";

export const PrivacyStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Growth in Privacy Demand",
      description: "Increased awareness about personal privacy spaces in urban India"
    },
    {
      icon: Users,
      value: "15M+",
      label: "Young Professionals",
      description: "Living in shared accommodations without adequate privacy"
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Major Cities",
      description: "Face acute shortage of private changing spaces"
    },
    {
      icon: Clock,
      value: "Daily",
      label: "Privacy Compromises",
      description: "Millions forced to compromise on dignity due to lack of facilities"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-primary mb-8 text-center">Privacy Crisis Statistics</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-background rounded-xl p-6 shadow-medium border border-border/50 hover:shadow-strong transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <h4 className="font-semibold text-foreground mb-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};