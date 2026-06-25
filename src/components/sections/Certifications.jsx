import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications({ t }) {
  return (
    <section id="certifications" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Award className="text-blue-600 dark:text-blue-400" size={32} />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.sections.certsTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.certifications.map((cert, index) => (
          <div key={index} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 p-5 rounded-xl">
            <div className="bg-blue-100 dark:bg-slate-800 p-3 rounded-lg text-blue-600 dark:text-blue-400">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{cert.issuer}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                  cert.status === 'Completado' || cert.status === 'Completed'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' 
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20'
                }`}>
                  {cert.status}
                </span>
                <span className="text-slate-500 text-sm font-medium">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}