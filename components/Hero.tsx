
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            Ingeniero Frontend y Diseñador
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Construyendo <span className="text-emerald-400">Experiencias</span> Digitales que Importan.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Me especializo en crear aplicaciones web de alto rendimiento con un enfoque en código limpio, UX excepcional y estética moderna.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-500/25">
              Colaboremos
            </a>
            <a href="#skills" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all">
              Ver Mi Trabajo
            </a>
          </div>
        </div>
        <div className="relative group hidden md:block">
          <div className="absolute inset-0 bg-emerald-500 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          <img 
            src="https://picsum.photos/id/1/600/600" 
            alt="Foto de perfil" 
            className="relative z-10 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
          />
        </div>
      </div>
    </div>
  );
};
