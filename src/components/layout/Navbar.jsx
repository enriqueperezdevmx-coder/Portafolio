import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';

export default function Navbar({ t, lang, setLang, isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            {t.hero.name}.dev
          </span>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">{t.nav.about}</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">{t.nav.skills}</a>
            <a href="#certifications" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">{t.nav.certs}</a>
            
            <div className="flex items-center space-x-3 border-l border-slate-300 dark:border-slate-700 pl-6">
              <button onClick={toggleLang} className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Languages size={20} />
                <span className="text-sm font-bold">{lang.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <span className="text-xs font-bold">{lang.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-slate-600 dark:text-slate-300 ml-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-2 pt-2 pb-4 space-y-1">
          <a href="#about" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium">{t.nav.about}</a>
          <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium">{t.nav.projects}</a>
          <a href="#skills" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium">{t.nav.skills}</a>
          <a href="#certifications" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium">{t.nav.certs}</a>
        </div>
      )}
    </nav>
  );
}