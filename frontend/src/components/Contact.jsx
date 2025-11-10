import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import CoffeeCup from './CoffeeCup';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <Mail size={20} className="text-gray-300 group-hover:text-cyan-400" />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400">{personal.email}</span>
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <Linkedin size={20} className="text-gray-300 group-hover:text-cyan-400" />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400">LinkedIn Profile</span>
              </a>
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <Github size={20} className="text-gray-300 group-hover:text-cyan-400" />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400">GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Buy Me a Coffee */}
          <CoffeeCup />
        </div>
      </div>
    </section>
  );
};

export default Contact;
