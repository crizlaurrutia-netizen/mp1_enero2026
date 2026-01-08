
import React from 'react';

const SkillCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm border border-gray-100">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-emerald-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Experiencia y <span className="text-emerald-600">Habilidades</span></h2>
          <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg">
            Un conjunto completo de herramientas y tecnologías que he dominado para entregar productos digitales de primer nivel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            icon="⚡"
            title="Magia Frontend"
            desc="Experto en React, TypeScript y frameworks CSS modernos como Tailwind. Crear interfaces rápidas y responsivas es mi pasión."
          />
          <SkillCard 
            icon="🛠️"
            title="Arquitectura de Sistemas"
            desc="Diseño de arquitecturas frontend escalables que son fáciles de mantener y extender a medida que crecen los requisitos del negocio."
          />
          <SkillCard 
            icon="🎨"
            title="Diseño UI/UX"
            desc="Fusionando estética con funcionalidad. Construyo interfaces que no solo se ven bien, sino que son intuitivas de usar."
          />
          <SkillCard 
            icon="📱"
            title="Primero Móvil"
            desc="Cada línea de código se escribe con un enfoque centrado en móviles, asegurando experiencias fluidas en todos los dispositivos."
          />
          <SkillCard 
            icon="📦"
            title="Herramientas Modernas"
            desc="Competente en Vite, Webpack, Git y pipelines de CI/CD para asegurar una entrega de software rápida y confiable."
          />
          <SkillCard 
            icon="🚀"
            title="Rendimiento"
            desc="Optimización para web vitals y garantía de tiempos de carga ultrarrápidos para la mejor experiencia de usuario posible."
          />
        </div>
      </div>
    </div>
  );
};
