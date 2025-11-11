import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 lg:pl-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                    <GraduationCap size={18} />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {edu.duration}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
                    <span className="text-cyan-400 font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
