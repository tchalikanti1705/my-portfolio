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
    <section className="min-h-screen flex items-center justify-center px-6 lg:pl-32 pt-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left lg:text-left lg:pl-12">
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
                <p className="text-lg md:text-xl text-gray-400 animate-in fade-in slide-in-from-top-4 duration-700">
                  {personal.tagline}
                </p>
              )}

              {showWelcome && (
                <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-700">
                  <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-bold mb-2">
                    Welcome to My Virtual World
                  </p>
                  <p className="text-gray-400 text-base">
                    Full-stack developer passionate about building intelligent, scalable solutions that make a difference.
                  </p>
                </div>
              )}
            </div>

            {showTitle && (
              <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
          </div>

          {/* Right Side - Photo with Frame */}
          {showTitle && (
            <div className="flex items-center justify-center lg:justify-end lg:pr-12 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                
                {/* Outer frame with gradient border */}
                <div className="relative p-1 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-full">
                  {/* Inner frame */}
                  <div className="relative p-2 bg-zinc-900 rounded-full">
                    {/* Image container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_classic-dev-folio/artifacts/yxr0mwwu_TejaPic2.png"
                        alt="Teja Chalikanti"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          )}
        </div>
        
        {showWelcome && (
          <div className="mt-16 animate-bounce flex justify-center">
            <ArrowDown size={24} className="text-gray-600" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
