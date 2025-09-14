import React from 'react';
import { Brain, TrendingUp, Shield, Zap, Database, BarChart3 } from 'lucide-react';

const AIAssetManager = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Algorithms',
      description: 'Proprietary machine learning models that analyze market patterns, energy consumption data, and blockchain metrics to optimize investment decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Real-time forecasting of energy market trends, cryptocurrency volatility, and renewable energy asset performance using deep learning.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated risk assessment algorithms that automatically adjust portfolio allocation based on market conditions and regulatory changes.',
    },
    {
      icon: Zap,
      title: 'Energy Asset Optimization',
      description: 'AI-driven optimization of renewable energy assets including solar farms, wind turbines, and energy storage systems.',
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with multiple data sources including energy markets, weather patterns, and blockchain networks.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics dashboard providing real-time insights into portfolio performance and market opportunities.',
    },
  ];

  const benefits = [
    'Automated portfolio rebalancing based on AI predictions',
    'Real-time monitoring of energy asset performance',
    'Predictive maintenance for renewable energy infrastructure',
    'Dynamic pricing optimization for energy trading',
    'Regulatory compliance monitoring and reporting',
    'Carbon credit optimization and trading',
  ];

  return (
    <section id="ai-asset-manager" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Vectorium AI Asset Manager
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our revolutionary AI-powered asset management platform combines artificial intelligence with blockchain technology 
            to optimize investments in renewable energy and cryptocurrency markets. The system provides automated portfolio 
            management, predictive analytics, and real-time optimization for maximum returns.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-500 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-blue-500/20 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Key Benefits & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-800/30 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            AI Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-slate-300">Prediction Accuracy</div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-300">Market Monitoring</div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">0.1s</div>
              <div className="text-slate-300">Response Time</div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-300">Data Sources</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssetManager;