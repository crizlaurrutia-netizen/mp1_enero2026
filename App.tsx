
import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Section 1: Hero - Dark Slate Theme */}
        <section id="home">
          <Hero />
        </section>

        {/* Section 2: Skills & Experience - Pure White Theme */}
        <section id="skills">
          <Skills />
        </section>

        {/* Section 3: Contact & Projects - Deep Indigo/Primary Theme */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
