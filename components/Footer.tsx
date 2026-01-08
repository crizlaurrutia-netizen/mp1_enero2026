
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-slate-900">
          PORTFOLIO<span className="text-emerald-600">.</span>
        </div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Diseñado con Gemini. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors font-medium">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors font-medium">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors font-medium">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
