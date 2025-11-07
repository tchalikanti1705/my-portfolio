import React from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category}
              className="bg-zinc-950 border border-zinc-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className="bg-zinc-800 text-gray-300 border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
