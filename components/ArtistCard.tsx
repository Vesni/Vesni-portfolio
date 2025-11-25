/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Code, Shield } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative h-[400px] md:h-[500px] w-full overflow-hidden border-b md:border-r border-white/10 bg-black cursor-pointer"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      {/* Image Background with Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover grayscale will-change-transform opacity-60"
          variants={{
            rest: { scale: 1, opacity: 0.6, filter: 'grayscale(100%)' },
            hover: { scale: 1.05, opacity: 0.4, filter: 'grayscale(0%)' }
          }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-[#31326f]/40 transition-colors duration-500" />
      </div>

      {/* Overlay Info */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
           <div className="flex gap-2">
             {project.tags.slice(0, 2).map(tag => (
               <span key={tag} className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full backdrop-blur-md bg-black/40">
                 {tag}
               </span>
             ))}
           </div>
           <motion.div
             variants={{
               rest: { opacity: 0, x: 20, y: -20 },
               hover: { opacity: 1, x: 0, y: 0 }
             }}
             className="bg-white text-black rounded-full p-2 will-change-transform"
           >
             <ArrowUpRight className="w-6 h-6" />
           </motion.div>
        </div>

        <div>
          <div className="overflow-hidden mb-2">
            <motion.h3 
              className="font-heading text-2xl md:text-3xl font-bold uppercase text-white will-change-transform"
              variants={{
                rest: { y: 0 },
                hover: { y: -5 }
              }}
              transition={{ duration: 0.4 }}
            >
              {project.title}
            </motion.h3>
          </div>
          <motion.div 
            className="text-sm font-medium text-[#4fb7b3] flex items-center gap-2"
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
             {project.tags.includes('Security') ? <Shield className="w-4 h-4" /> : <Code className="w-4 h-4" />}
             {project.techStack}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;