/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-zinc-900/70 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 cursor-pointer flex flex-col h-[380px] sm:h-[420px]"
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white font-heading group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>{project.techStack}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
