
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const hovering = !!target.closest('[data-hover="true"]') || 
                       ['button', 'a', 'input'].includes(target.tagName.toLowerCase());

      if (hovering !== isHoveringRef.current) {
        isHoveringRef.current = hovering;
        setIsHovering(hovering);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Center Dot */}
      <motion.div 
        className="absolute w-1 h-1 bg-white rounded-full"
        animate={{ scale: isHovering ? 2 : 1 }}
      />
      
      {/* Tactical Brackets */}
      <motion.div
        className="relative w-12 h-12 border border-white/40 rounded-sm"
        animate={{
          rotate: isHovering ? 90 : 0,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
          borderRadius: isHovering ? '50%' : '4px'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
      </motion.div>

      {/* Label */}
      <motion.span
        className="absolute top-14 text-[8px] font-mono tracking-[0.3em] uppercase text-white whitespace-nowrap"
        animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 5 }}
      >
        {isHovering ? 'Target.Lock' : ''}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;