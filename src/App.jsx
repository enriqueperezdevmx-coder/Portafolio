import React, { useState } from 'react';
import { dictionary, commonData } from './data/dictionary';
import { useScroll } from './hooks/useScroll';

// Componentes estructurales y modulares
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('es');
  
  // Custom Hook
  const { showScrollTop, scrollToTop } = useScroll();

  // Selección automática de textos por idioma activo
  const t = dictionary[lang];

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        
        <Navbar 
          t={t} 
          lang={lang} 
          setLang={setLang} 
          isDark={isDark} 
          setIsDark={setIsDark} 
        />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
          <Hero t={t} commonData={commonData} />
          <Projects t={t} />
          <Skills t={t} commonData={commonData} />
          <Certifications t={t} />
        </main>

        <Footer t={t} commonData={commonData} />

        <ScrollToTop 
          show={showScrollTop} 
          onScrollTop={scrollToTop} 
        />

      </div>
    </div>
  );
}