import React from 'react';
import { portfolioData } from '../data/mockData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            {personal.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
