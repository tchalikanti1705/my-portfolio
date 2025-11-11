import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';
import { Code, Database, Cloud, Brain, Wrench, BookOpen } from 'lucide-react';

const categoryIcons = {
  "Programming Languages": Code,
  "Backend & APIs": Database,
  "Frontend & UI": Code,
  "Databases & Storage": Database,
  "Cloud & DevOps": Cloud,
  "AI/LLM": Brain,
  "CS Fundamentals": BookOpen
};

const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="skills" className="py-20 px-6 lg:pl-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = categoryIcons[category] || Wrench;
            const isSelected = selectedCategory === category;
            
            return (
              <div 
                key={category}
                onMouseEnter={() => setSelectedCategory(category)}
                onMouseLeave={() => setSelectedCategory(null)}
                className={`bg-zinc-950 border rounded-lg p-6 transition-all duration-300 cursor-pointer transform ${
                  isSelected 
                    ? 'border-cyan-500 scale-105 shadow-lg shadow-cyan-500/20' 
                    : 'border-zinc-800 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    isSelected ? 'bg-cyan-500/20' : 'bg-zinc-900'
                  }`}>
                    <Icon size={20} className={`transition-colors ${
                      isSelected ? 'text-cyan-400' : 'text-gray-500'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${
                    isSelected ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`transition-all duration-200 ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 scale-105'
                          : 'bg-zinc-800 text-gray-300 border-zinc-700 hover:border-cyan-400 hover:text-cyan-400'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
