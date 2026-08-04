import React, { useState } from 'react';
import { Code2, ExternalLink, Play, X } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons'; 

export default function Projects({ t }) {
  // Estado para controlar qué video se muestra en la pantalla flotante (modal)
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Code2 className="text-blue-600 dark:text-blue-400" size={32} />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t.sections.projectsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.map((project, index) => {
          // Detecta si la propiedad demoLink es un archivo de video .mp4
          const isVideo = project.demoLink?.endsWith('.mp4');

          return (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors flex flex-col shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {/* Lista de Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-50 text-blue-700 dark:bg-slate-700/50 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-md border border-blue-100 dark:border-transparent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors font-medium"
                  >
                    <GithubIcon size={16} /> {t.sections.code}
                  </a>
                )}

                {project.demoLink !== "#" && (
                  isVideo ? (
                    /* Botón Visitar que abre el reproductor de video */
                    <button
                      onClick={() => setSelectedVideo(project.demoLink)}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium cursor-pointer"
                    >
                      <Play size={16} /> Visitar
                    </button>
                  ) : (
                    /* Enlace externo tradicional si no es video */
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      <ExternalLink size={16} /> Visitar
                    </a>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- REPRODUCTOR EN VENTANA MODAL --- */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón para cerrar el modal (X) */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Reproductor HTML5 */}
            <div className="aspect-video w-full">
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                <source src={selectedVideo} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}