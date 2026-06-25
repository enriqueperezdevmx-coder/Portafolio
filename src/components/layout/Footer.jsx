import React from 'react';
import { Mail } from 'lucide-react';
import WhatsappIcon from '../ui/WhatsappIcon';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'; 

export default function Footer({ t, commonData }) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
        </p>
        <div className="flex gap-4">
          <a href={commonData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={commonData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href={commonData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">
            <WhatsappIcon size={20} />
          </a>
          <a href={`mailto:${commonData.email}`} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}