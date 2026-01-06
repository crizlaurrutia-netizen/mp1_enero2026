
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter text-emerald-600">
          PORTFOLIO<span className="text-gray-900">.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">Home</a>
          <a href="#skills" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">Skills</a>
          <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">Get in Touch</a>
        </div>
        <button className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">
          Resume
        </button>
      </div>
    </nav>
  );
};
