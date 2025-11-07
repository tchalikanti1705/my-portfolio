import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mockData';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-4">
            {personal.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {personal.tagline}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400">
              <Github size={20} />
            </Button>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400">
              <Linkedin size={20} />
            </Button>
          </a>
          <a href={`mailto:${personal.email}`}>
            <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400">
              <Mail size={20} />
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown size={24} className="mx-auto text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
