import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToVision = () => {
    document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-amber-950/30" aria-hidden="true"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">The Future of</span>
            <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-blue-400 bg-clip-text text-transparent">
              Crypto Energy
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary blockchain technology powering sustainable energy solutions. 
            <span className="block mt-2 text-amber-400 font-semibold">In CryptoEnergy We Trust</span>
          </p>

          {/* Key benefits */}
          <section className="flex flex-wrap justify-center gap-6 mt-12" aria-label="Key Features">
            <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30">
              <Zap className="text-amber-400" size={20} aria-hidden="true" />
              <span className="text-slate-300 font-medium">Energy Innovation</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
              <Shield className="text-blue-400" size={20} aria-hidden="true" />
              <span className="text-slate-300 font-medium">Blockchain Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30">
              <TrendingUp className="text-emerald-400" size={20} aria-hidden="true" />
              <span className="text-slate-300 font-medium">Market Growth</span>
            </div>
          </section>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={scrollToVision}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              aria-label="Explore our vision and learn more about Vectorium"
            >
              <span>Explore Our Vision</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </button>
          </div>
        </header>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;