import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideNavigation from './components/SideNavigation';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App bg-zinc-950">
      <SideNavigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
