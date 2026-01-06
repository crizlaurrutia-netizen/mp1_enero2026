
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Expertise & <span className="text-emerald-600">Skills</span></h2>
          <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg">
            A comprehensive set of tools and technologies I've mastered to deliver top-tier digital products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            icon="⚡"
            title="Frontend Magic"
            desc="Expert in React, TypeScript, and modern CSS frameworks like Tailwind. Creating fast, responsive interfaces is my passion."
          />
          <SkillCard 
            icon="🛠️"
            title="System Architecture"
            desc="Designing scalable frontend architectures that are easy to maintain and extend as business requirements grow."
          />
          <SkillCard 
            icon="🎨"
            title="UI/UX Design"
            desc="Fusing aesthetics with functionality. I build interfaces that don't just look good, but feel intuitive to use."
          />
          <SkillCard 
            icon="📱"
            title="Mobile First"
            desc="Every line of code is written with a mobile-first approach, ensuring seamless experiences across all devices."
          />
          <SkillCard 
            icon="📦"
            title="Modern Tooling"
            desc="Proficient in Vite, Webpack, Git, and CI/CD pipelines to ensure rapid and reliable software delivery."
          />
          <SkillCard 
            icon="🚀"
            title="Performance"
            desc="Optimizing for core web vitals and ensuring lightning-fast load times for the best possible user experience."
          />
        </div>
      </div>
    </div>
  );
};
