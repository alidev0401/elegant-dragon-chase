import React from 'react';
import { Mic, Music, Coffee, Users } from "lucide-react";

const features = [
  {
    title: "Premium Sound",
    description: "Studio-grade acoustics and high-fidelity JBL sound systems in every room.",
    icon: Music,
  },
  {
    title: "Artisan Cafe",
    description: "Specially sourced coffee beans and a curated menu of gourmet snacks.",
    icon: Coffee,
  },
  {
    title: "Private Suites",
    description: "Luxury private rooms designed for comfort and the perfect singing experience.",
    icon: Mic,
  },
  {
    title: "Group Events",
    description: "Ideal for birthdays, corporate retreats, and unforgettable celebrations.",
    icon: Users,
  },
];

const FeatureSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[22px] border border-lightest-gray bg-[#fafafa] hover:border-interaction-blue/20 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-lightest-gray group-hover:bg-interaction-blue group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4 leading-tight">{feature.title}</h3>
              <p className="text-muted-slate leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
