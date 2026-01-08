
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-emerald-600 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              ¿Listo para empezar tu próximo <span className="text-emerald-600">proyecto?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Actualmente estoy disponible para trabajos freelance y oportunidades a tiempo completo. Si tienes un proyecto que necesita un toque experto, me encantaría saber de ti.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-emerald-900 font-semibold">
                <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">📧</span>
                hola@tuportafolio.com
              </div>
              <div className="flex items-center gap-4 text-emerald-900 font-semibold">
                <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">📍</span>
                Remoto / Global
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Breve del Proyecto</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all resize-none text-slate-800 placeholder-slate-400"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
