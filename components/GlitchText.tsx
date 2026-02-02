
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block font-black tracking-tighter uppercase ${className}`}>
      {/* Layer 1: Red Glitch */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-[#ff3333] opacity-70 z-0 mix-blend-screen"
        animate={{
          x: [-2, 2, -1, 0],
          y: [1, -1, 0, 1],
        }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror' }}
      >
        {text}
      </motion.span>

      {/* Layer 2: Cyan Glitch */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full text-[#00ffaa] opacity-70 z-0 mix-blend-screen"
        animate={{
          x: [2, -2, 1, 0],
          y: [-1, 1, 0, -1],
        }}
        transition={{ duration: 0.25, repeat: Infinity, repeatType: 'mirror' }}
      >
        {text}
      </motion.span>
      
      {/* Main White Text */}
      <span className="relative z-10 text-white">
        {text}
      </span>

      {/* Scanline Mask */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-transparent bg-[length:100%_4px] opacity-30"></div>
    </Component>
  );
};

export default GradientText;