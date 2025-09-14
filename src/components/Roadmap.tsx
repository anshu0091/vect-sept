import React from 'react';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Platform Development & Launch',
      quarter: 'Q4 2024 - Q1 2025',
      status: 'completed',
      items: [
        'AI Asset Manager platform development',
        'Core algorithm implementation',
        'Security audits and compliance',
        'Beta testing with select partners',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Market Entry & Partnerships',
      quarter: 'Q2 2025',
      status: 'active',
      items: [
        'Public platform launch',
        'Strategic energy partnerships',
        'Series A funding completion',
        'Regulatory approvals in key markets',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Global Expansion',
      quarter: 'Q3-Q4 2025',
      status: 'upcoming',
      items: [
        'International market expansion',
        'Advanced AI features rollout',
        'Institutional client onboarding',
        'Carbon credit marketplace launch',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Scale & Innovation',
      quarter: 'Q1-Q2 2026',
      status: 'upcoming',
      items: [
        'AI model enhancement and optimization',
        'Blockchain infrastructure scaling',
        'Enterprise solutions development',
        'Strategic acquisitions and mergers',
      ],
    },
    {
      phase: 'Phase 5',
      title: 'Market Leadership',
      quarter: 'Q3-Q4 2026',
      status: 'upcoming',
      items: [
        'Industry standard establishment',
        'Global market leadership position',
        'Next-generation AI capabilities',
        'IPO preparation',
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-emerald-400" size={24} />;
      case 'active':
        return <Clock className="text-amber-400" size={24} />;
      case 'upcoming':
        return <Circle className="text-slate-400" size={24} />;
      default:
        return <Circle className="text-slate-400" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-emerald-500/50 bg-emerald-500/10';
      case 'active':
        return 'border-amber-500/50 bg-amber-500/10';
      case 'upcoming':
        return 'border-slate-500/50 bg-slate-500/10';
      default:
        return 'border-slate-500/50 bg-slate-500/10';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              Development Roadmap
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive development roadmap outlines the strategic milestones that will establish 
            Vectorium as the global leader in AI-powered crypto-energy asset management. Each phase 
            builds upon previous achievements while expanding our market presence and technological capabilities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-6 h-6 rounded-full bg-slate-950 border-2 border-current hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>

                <div className="md:ml-20">
                  <div className={`p-8 rounded-2xl border backdrop-blur-sm ${getStatusColor(item.status)} transition-all duration-300 hover:scale-105`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          {getStatusIcon(item.status)}
                          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                            {item.phase}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="text-slate-400 font-medium">
                          {item.quarter}
                        </div>
                      </div>
                      {item.status === 'active' && (
                        <div className="flex items-center space-x-1">
                          <Rocket className="text-amber-400" size={20} />
                          <span className="text-amber-400 text-sm font-medium">In Progress</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.items.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="flex items-center space-x-3 text-slate-300"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            item.status === 'completed' ? 'bg-emerald-400' :
                            item.status === 'active' ? 'bg-amber-400' :
                            'bg-slate-400'
                          }`}></div>
                          <span className="font-medium">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-amber-500/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Journey
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Be part of the revolutionary transformation in crypto-energy solutions. 
              Early investors and partners will play a crucial role in shaping the future of sustainable energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;