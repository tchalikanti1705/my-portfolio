import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={exp.id}
              className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mt-2 md:mt-0">
                  {exp.duration}
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
