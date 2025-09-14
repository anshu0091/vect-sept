import React from 'react';
import { Building2, Users, Target, Briefcase, Globe, TrendingUp } from 'lucide-react';

const ExecutiveStructure = () => {
  const departments = [
    {
      icon: Building2,
      title: 'Corporate Governance',
      description: 'Board of Directors overseeing strategic direction and ensuring compliance with international regulations.',
      responsibilities: [
        'Strategic planning and oversight',
        'Risk management and compliance',
        'Stakeholder relations',
        'Corporate governance standards'
      ]
    },
    {
      icon: Users,
      title: 'Operations Management',
      description: 'Dedicated teams managing day-to-day operations, technology development, and market expansion.',
      responsibilities: [
        'Technology development and maintenance',
        'Market operations and trading',
        'Customer relationship management',
        'Quality assurance and testing'
      ]
    },
    {
      icon: Target,
      title: 'Strategic Development',
      description: 'Focus on long-term growth strategies, partnerships, and market positioning in the crypto-energy sector.',
      responsibilities: [
        'Market analysis and research',
        'Partnership development',
        'Product roadmap planning',
        'Competitive intelligence'
      ]
    },
    {
      icon: Briefcase,
      title: 'Financial Management',
      description: 'Comprehensive financial oversight including investment management, treasury operations, and investor relations.',
      responsibilities: [
        'Financial planning and analysis',
        'Investment portfolio management',
        'Treasury and cash management',
        'Investor relations and reporting'
      ]
    }
  ];

  const organizationalPrinciples = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'International outlook with operations spanning multiple jurisdictions and regulatory frameworks.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Driven',
      description: 'Results-oriented culture focused on delivering exceptional returns for investors and stakeholders.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Cross-functional teams working together to achieve common goals and maximize synergies.'
    }
  ];

  return (
    <section id="executive-structure" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              Executive Structure & Vision
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Vectorium operates with a sophisticated organizational structure designed to maximize efficiency, 
            ensure regulatory compliance, and drive innovation in the crypto-energy sector. Our executive 
            framework combines traditional corporate governance with agile operational methodologies.
          </p>
        </div>

        {/* Organizational Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {dept.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {dept.description}
                    </p>
                    <div className="space-y-2">
                      {dept.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                          <span className="text-slate-400 text-sm">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organizational Principles */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Organizational Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizationalPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-slate-800/30 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-amber-500 rounded-xl mb-4">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Vision */}
        <div className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Strategic Vision for 2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-amber-400 mb-4">Immediate Objectives</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                  <span>Launch AI Asset Manager platform with full functionality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                  <span>Establish strategic partnerships with major energy companies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                  <span>Secure Series A funding of $50M for global expansion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                  <span>Achieve regulatory compliance in key markets</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Long-term Goals</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  <span>Become the leading AI-powered crypto-energy platform globally</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  <span>Manage over $1B in renewable energy assets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  <span>Expand operations to 25+ countries worldwide</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                  <span>IPO preparation and public market entry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveStructure;