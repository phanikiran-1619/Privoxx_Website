import { CheckCircle, Zap, Shield, Wrench } from "lucide-react";

export const SolutionShowcase = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Instant Deployment",
      features: ["5-minute setup", "No tools required", "Plug & play design"]
    },
    {
      icon: Shield,
      title: "Maximum Privacy",
      features: ["360° coverage", "Light-blocking fabric", "Sound dampening"]
    },
    {
      icon: Wrench,
      title: "Versatile Installation",
      features: ["Wall-mounted", "Portable option", "Custom sizing"]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Solution Approach</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((solution, index) => {
          const IconComponent = solution.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-primary mb-3">{solution.title}</h4>
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-accent rounded-xl p-6">
          <h4 className="font-bold text-primary mb-2">Result: Complete Privacy Transformation</h4>
          <p className="text-muted-foreground">From compromise to comfort in minutes, not months</p>
        </div>
      </div>
    </div>
  );
};