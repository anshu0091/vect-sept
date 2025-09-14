import React from 'react';
import { Globe, Lightbulb, Target, Users } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: 'Global Energy Revolution',
      description: 'Transforming the global energy landscape through blockchain technology and sustainable practices.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Leading the charge in crypto-energy solutions with cutting-edge technology and forward-thinking approaches.',
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Focused on creating scalable, efficient, and environmentally responsible energy solutions.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a global community of energy innovators, investors, and sustainability advocates.',
    },
  ];

  return (
    <section id="vision" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Vectorium envisions a revolutionary transformation of the global energy landscape through the convergence 
            of artificial intelligence, blockchain technology, and sustainable energy solutions. We are pioneering 
            the future where intelligent systems optimize renewable energy investments, creating unprecedented 
            opportunities for both financial returns and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                    <IconComponent className="text-slate-950" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-amber-500/20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            To pioneer the integration of blockchain technology with sustainable energy solutions, 
            creating a decentralized ecosystem that empowers individuals and organizations to 
            participate in the global energy transformation while generating sustainable returns 
            for our investors and stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;