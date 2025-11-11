import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mockData';

const Hero = () => {
  const { personal } = portfolioData;
  const [displayedName, setDisplayedName] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < personal.name.length) {
        setDisplayedName(personal.name.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        setTimeout(() => setShowTitle(true), 300);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, [personal.name]);

  useEffect(() => {
    if (showTitle) {
      setTimeout(() => setShowTagline(true), 800);
    }
  }, [showTitle]);

  useEffect(() => {
    if (showTagline) {
      setTimeout(() => setShowWelcome(true), 800);
    }
  }, [showTagline]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight min-h-[4rem] md:min-h-[5rem]">
            {displayedName}
            {displayedName.length < personal.name.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>
          
          {showTitle && (
            <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
              {personal.title}
            </h2>
          )}
          
          {showTagline && (
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700">
              {personal.tagline}
            </p>
          )}

          {showWelcome && (
            <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-bold mb-2">
                Welcome to My Virtual World
              </p>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                Full-stack developer passionate about building intelligent, scalable solutions that make a difference.
              </p>
            </div>
          )}
        </div>

        {showTitle && (
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300">
                <Github size={20} />
              </Button>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300">
                <Linkedin size={20} />
              </Button>
            </a>
            <a href={`mailto:${personal.email}`}>
              <Button variant="outline" size="icon" className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300">
                <Mail size={20} />
              </Button>
            </a>
          </div>
        )}

        {showTagline && (
          <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              className="border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 text-gray-300"
            >
              Learn More
            </Button>
          </div>
        )}

        {showWelcome && (
          <div className="mt-16 animate-bounce">
            <ArrowDown size={24} className="mx-auto text-gray-600" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
