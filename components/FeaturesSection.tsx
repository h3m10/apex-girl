
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-rajdhani text-purple-400">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
