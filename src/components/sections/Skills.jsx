import React from 'react';
import { Server, Code2, Cloud, Wrench } from 'lucide-react';

export default function Skills({ t, commonData }) {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Server className="text-blue-600 dark:text-blue-400" size={32} />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.sections.skillsTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-blue-500 dark:text-blue-400" size={20} />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Frontend</h3>
          </div>
          <ul className="space-y-2">
            {commonData.skills.frontend.map((skill, i) => (
              <li key={i} className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-emerald-500 dark:text-emerald-400" size={20} />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Backend</h3>
          </div>
          <ul className="space-y-2">
            {commonData.skills.backend.map((skill, i) => (
              <li key={i} className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-cyan-500 dark:text-cyan-400" size={20} />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Cloud & DevOps</h3>
          </div>
          <ul className="space-y-2">
            {commonData.skills.cloud.map((skill, i) => (
              <li key={i} className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>{skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-orange-500 dark:text-orange-400" size={20} />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{t.sections.toolsTitle}</h3>
          </div>
          <ul className="space-y-2">
            {commonData.skills.tools.map((skill, i) => (
              <li key={i} className="text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>{skill}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}