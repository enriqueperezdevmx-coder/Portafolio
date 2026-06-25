import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons'; 

export default function Projects({ t }) {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Code2 className="text-blue-600 dark:text-blue-400" size={32} />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.sections.projectsTitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors flex flex-col shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 dark:bg-slate-700/50 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-md border border-blue-100 dark:border-transparent">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <a href={project.repoLink} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors font-medium">
                <GithubIcon size={16} /> {t.sections.code}
              </a>
              {project.demoLink !== "#" && (
                <a href={project.demoLink} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium">
                  <ExternalLink size={16} /> {t.sections.liveDemo}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}