
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Shield, Cpu, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative h-[450px] md:h-[600px] w-full overflow-hidden border-tactical bg-[#080808] cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover filter brightness-50"
          variants={{
            rest: { scale: 1, filter: 'grayscale(100%) brightness(0.4)', opacity: 0.5 },
            hover: { scale: 1.05, filter: 'grayscale(0%) brightness(0.6)', opacity: 0.8 }
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Scanning Line Overlay */}
      <motion.div 
        className="scanner-line" 
        variants={{ rest: { opacity: 0, height: '0px' }, hover: { opacity: 0.3, height: '2px' } }} 
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
           <div className="flex flex-col gap-2">
             <span className="text-[10px] font-mono text-[#00ffaa] tracking-[0.5em] font-black uppercase">UID_{project.id}</span>
             <div className="flex gap-3">
               {project.tags.slice(0, 2).map(tag => (
                 <span key={tag} className="text-[9px] font-mono border border-[#00ffaa]/20 px-3 py-1 uppercase bg-[#00ffaa]/10 text-[#00ffaa] font-bold">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
           <div className="bg-[#00ffaa] text-black p-3 shadow-[0_0_25px_rgba(0,255,170,0.4)] border-tactical">
             <ArrowUpRight className="w-6 h-6" />
           </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute -top-6 left-0 h-px bg-[#00ffaa]/50"
            variants={{ rest: { width: 0 }, hover: { width: '60px' } }}
          />
          
          <h3 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,1)] uppercase tracking-tighter">
            {project.title}
          </h3>
          
          <motion.div 
            className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 font-bold"
            variants={{
              rest: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
          >
             <span className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[#00ffaa]" /> {project.techStack}</span>
             <span className="hidden md:inline">YEAR: {project.year}</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative ID Corner */}
      <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/10 rotate-90 origin-top-right translate-x-1 uppercase tracking-widest">
        SECURED_SYSTEM_READ_ONLY
      </div>
    </motion.div>
  );
};

export default ProjectCard;
