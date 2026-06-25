import React from 'react';
import { Mail, ChevronRight, FileText } from 'lucide-react'; 
import WhatsappIcon from '../ui/WhatsappIcon';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'; 

export default function Hero({ t, commonData }) {
  return (
    <section id="about" className="pt-12 md:pt-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          {t.hero.greeting} <span className="text-blue-600 dark:text-blue-400">{t.hero.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6">
          {t.hero.role}
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          {t.hero.about}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-md shadow-blue-500/20">
            {t.hero.viewProjects} <ChevronRight size={18} />
          </a>
          <a href={commonData.cvLink} target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <FileText size={18} /> {t.hero.downloadCV}
          </a>
        </div>
        <div className="flex gap-4 mt-8">
          <a href={commonData.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <GithubIcon size={28} />
          </a>
          <a href={commonData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#0A66C2] transition-colors">
            <LinkedinIcon size={28} />
          </a>
          <a href={commonData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#25D366] transition-colors">
            <WhatsappIcon size={28} />
          </a>
          <a href={`mailto:${commonData.email}`} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}