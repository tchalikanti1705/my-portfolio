import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Built with <Heart size={16} className="text-red-500 fill-current" /> by Teja Chalikanti
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
