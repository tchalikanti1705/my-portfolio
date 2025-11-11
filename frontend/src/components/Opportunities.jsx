import React from 'react';
import { Sparkles, Rocket, Code } from 'lucide-react';
import { Button } from './ui/button';

const Opportunities = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 lg:pl-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-cyan-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-full">
                  <Rocket size={32} className="text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for the Next Challenge
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-cyan-400 mb-6 font-semibold">
              Actively Exploring Software Engineering Opportunities
            </p>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                I'm on the lookout for roles where I can leverage my experience in <span className="text-cyan-400 font-semibold">full-stack development</span>, 
                <span className="text-cyan-400 font-semibold"> AI/ML integration</span>, and <span className="text-cyan-400 font-semibold">cloud infrastructure</span> to 
                build products that make a real impact.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Whether it's architecting scalable backends, optimizing system performance, or integrating intelligent features—I thrive on 
                solving complex problems and delivering measurable results. If you're building something ambitious and need an engineer 
                who brings both technical depth and business-focused thinking, let's talk!
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <Code className="text-cyan-400 mb-2 mx-auto" size={24} />
                <h3 className="text-white font-semibold mb-1">Full-Stack Pro</h3>
                <p className="text-gray-400 text-sm">React, FastAPI, PostgreSQL, AWS</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <Sparkles className="text-cyan-400 mb-2 mx-auto" size={24} />
                <h3 className="text-white font-semibold mb-1">AI/ML Integration</h3>
                <p className="text-gray-400 text-sm">LangChain, OpenAI, RAG Systems</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <Rocket className="text-cyan-400 mb-2 mx-auto" size={24} />
                <h3 className="text-white font-semibold mb-1">Impact Driven</h3>
                <p className="text-gray-400 text-sm">30% cost reduction, 12% efficiency gain</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
              >
                Let's Connect
              </Button>
              <a 
                href="mailto:chalikantiteja@gmail.com"
                className="inline-block"
              >
                <Button 
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg w-full"
                >
                  Email Me Directly
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
