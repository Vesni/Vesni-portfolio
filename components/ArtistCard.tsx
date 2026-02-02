
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
      className="group relative h-[450px] md:h-[550px] w-full overflow-hidden border border-white/5 bg-black cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      {/* Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover filter contrast-125 brightness-50"
          variants={{
            rest: { scale: 1, filter: 'grayscale(100%) blur(2px)', opacity: 0.4 },
            hover: { scale: 1.1, filter: 'grayscale(0%) blur(0px)', opacity: 0.6 }
          }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Scanner Line Overlay */}
      <motion.div 
        className="scanner-line" 
        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.4 } }} 
      />

      {/* UI Elements */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500">
           <div className="flex flex-col gap-1">
             <span className="text-[10px] font-mono text-[#00ffaa] tracking-widest opacity-60 uppercase">System.ID: {project.id}</span>
             <div className="flex gap-2">
               {project.tags.slice(0, 2).map(tag => (
                 <span key={tag} className="text-[9px] font-mono border border-[#00ffaa]/30 px-2 py-0.5 uppercase bg-[#00ffaa]/5 text-[#00ffaa]">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
           <div className="bg-[#00ffaa] text-black p-2 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_15px_rgba(0,255,170,0.5)]">
             <ArrowUpRight className="w-5 h-5" />
           </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute -top-8 left-0 h-px w-0 bg-[#00ffaa]"
            variants={{ rest: { w: 0 }, hover: { width: '100%' } }}
          />
          
          <h3 className="font-heading text-3xl md:text-4xl font-black text-white leading-none mb-3 drop-shadow-2xl">
            {project.title}
          </h3>
          
          <motion.div 
            className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40"
            variants={{
              rest: { y: 10, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
          >
             <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-[#00ffaa]" /> {project.techStack}</span>
             <span className="text-white/20">|</span>
             <span>YEAR: {project.year}</span>
          </motion.div>
        </div>
      </div>

      {/* Corner Bracket */}
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/20 group-hover:border-[#00ffaa] transition-colors"></div>
    </motion.div>
  );
};

export default ProjectCard;