import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6 lg:pl-32">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
          Made with <Heart size={16} className="text-red-500 fill-current animate-pulse" /> by Teja Chalikanti
        </p>
        <p className="text-gray-500 text-sm">
          © {currentYear} Teja Chalikanti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
