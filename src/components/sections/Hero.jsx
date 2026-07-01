import React from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'; 
import WhatsappIcon from '../ui/WhatsappIcon'; 

export default function Hero({ t, commonData }) {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-start text-left">
      
      {/* Etiqueta de "Disponible" */}
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-sm font-semibold shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        {t.hero.badge}
      </div>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
        {t.hero.greeting} <span className="text-blue-600">{t.hero.name}</span>
      </h1>

      {/* Rol */}
      <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-semibold mb-6">
        {t.hero.role}
      </h2>

      {/* Descripción */}
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
        {t.hero.description}
      </p>

      {/* Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a 
          href="#projects" 
          className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
        >
          {t.hero.cta}
          <ArrowRight size={20} />
        </a>
        
        <a 
          href={commonData.cvLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          <FileText size={20} />
          {t.nav.downloadCV}
        </a>
      </div>

      {/* Redes Sociales */}
      <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
        <a href={commonData.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
          <GithubIcon size={24} />
        </a>
        <a href={commonData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <LinkedinIcon size={24} />
        </a>
        <a href={commonData.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
          <WhatsappIcon size={24} />
        </a>
        <a href={`mailto:${commonData.email}`} className="hover:text-red-500 transition-colors">
          <Mail size={24} />
        </a>
      </div>

    </section>
  );
}