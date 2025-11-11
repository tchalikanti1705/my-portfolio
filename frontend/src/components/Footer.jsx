import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6 lg:pl-32">
      <div className="max-w-7xl mx-auto">
        {/* Thank you message */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Thanks for Stopping By! 🙏
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            You made it all the way to the bottom—I really appreciate you taking the time to explore my journey. 
            Whether you're a recruiter, fellow developer, or just someone curious about tech, I'd love to hear from you. 
            Drop me a message and let's create something amazing together!
          </p>
        </div>

        {/* Footer info */}
        <div className="text-center pt-6 border-t border-zinc-800">
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
            Crafted with <Heart size={16} className="text-red-500 fill-current animate-pulse" /> and 
            <Code size={16} className="text-cyan-400" /> by Teja Chalikanti
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-3">
            Powered by <Coffee size={16} className="text-amber-500" /> and countless hours of learning
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Teja Chalikanti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
