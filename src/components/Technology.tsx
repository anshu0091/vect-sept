import React from 'react';
import { Cpu, Database, Shield, Zap, Network, Lock } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: Cpu,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms optimize energy distribution and predict market trends.',
    },
    {
      icon: Database,
      title: 'Blockchain Infrastructure',
      description: 'Secure, transparent, and immutable ledger system for all energy transactions.',
    },
    {
      icon: Shield,
      title: 'Smart Contracts',
      description: 'Automated contract execution ensuring trust and efficiency in energy trading.',
    },
    {
      icon: Zap,
      title: 'Energy Tokenization',
      description: 'Revolutionary tokenization of renewable energy assets for fractional ownership.',
    },
    {
      icon: Network,
      title: 'Decentralized Grid',
      description: 'Peer-to-peer energy trading network enabling direct consumer-to-consumer transactions.',
    },
    {
      icon: Lock,
      title: 'Quantum Security',
      description: 'Next-generation cryptographic security protecting all network operations.',
    },
  ];

  return (
    <section id="technology" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our proprietary technology stack combines advanced artificial intelligence, blockchain innovation, 
            and energy sector expertise to deliver the world's first comprehensive AI-powered asset management 
            platform for the crypto-energy sector. Built on cutting-edge machine learning algorithms and 
            distributed ledger technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-blue-500/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Platform Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-300">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">10k+</div>
              <div className="text-slate-300">Transactions/Second</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">256-bit</div>
              <div className="text-slate-300">Security Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;