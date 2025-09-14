import React from 'react';
import { TrendingUp, DollarSign, Globe2, BarChart3 } from 'lucide-react';

const Market = () => {
  const marketData = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      value: '$2.8T',
      description: 'Global renewable energy market size by 2030',
      color: 'text-emerald-400',
    },
    {
      icon: DollarSign,
      title: 'Investment Potential',
      value: '15-25%',
      description: 'Expected annual returns for early investors',
      color: 'text-amber-400',
    },
    {
      icon: Globe2,
      title: 'Market Reach',
      value: '190+',
      description: 'Countries transitioning to renewable energy',
      color: 'text-blue-400',
    },
    {
      icon: BarChart3,
      title: 'Sector Growth',
      value: '8.4%',
      description: 'CAGR in crypto-energy solutions market',
      color: 'text-purple-400',
    },
  ];

  const opportunities = [
    'Renewable Energy Tokenization',
    'Decentralized Energy Trading',
    'Carbon Credit Marketplace',
    'Energy Storage Solutions',
    'Smart Grid Integration',
    'Micro-Investment Platforms',
  ];

  return (
    <section id="market" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Market Opportunity
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The global renewable energy market is experiencing explosive growth, projected to reach $2.8 trillion 
            by 2030. Combined with the rapidly expanding cryptocurrency market and the emergence of AI-powered 
            financial technologies, Vectorium is positioned at the intersection of three major growth sectors, 
            creating an unprecedented investment opportunity.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketData.map((data, index) => {
            const IconComponent = data.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-2xl mb-6 group-hover:bg-slate-600 transition-all duration-300">
                  <IconComponent className={data.color} size={28} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${data.color}`}>
                  {data.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {data.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Market Opportunities */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-amber-500/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-emerald-500/20 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Key Market Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-800/30 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">{opportunity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Invest Now?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Early</div>
              <div className="text-slate-300">Market Entry Advantage</div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold text-amber-400 mb-2">High</div>
              <div className="text-slate-300">Growth Potential</div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">Strong</div>
              <div className="text-slate-300">Technology Foundation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;