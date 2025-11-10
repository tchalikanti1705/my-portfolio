import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, FolderGit2, Mail } from 'lucide-react';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = sectionId === 'hero' 
          ? document.querySelector('.min-h-screen') 
          : document.querySelector(`#${sectionId}`);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href, id) => {
    e.preventDefault();
    
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.id)}
              className={`group flex items-center gap-4 transition-all duration-300 ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
            >
              {/* Icon with glow effect */}
              <div className={`relative p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
                  : 'bg-zinc-800 text-gray-400 group-hover:bg-zinc-700 group-hover:text-cyan-400'
              }`}>
                <Icon 
                  size={20} 
                  className={`transition-transform duration-300 ${
                    isActive ? 'animate-pulse' : 'group-hover:scale-110'
                  }`}
                />
                
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -right-1 -top-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                )}
              </div>
              
              {/* Label that appears on hover or when active */}
              <span className={`absolute left-full ml-4 whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'opacity-100 translate-x-0 text-cyan-400' 
                  : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'
              }`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNavigation;
