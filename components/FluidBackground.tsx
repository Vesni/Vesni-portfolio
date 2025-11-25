
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#31326f]">
      
      {/* Static gradient base instead of multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#31326f] via-[#28295c] to-[#1f2048]" />

      {/* Blob 1: Mint - Slower, smoother animation */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#a8fbd3] rounded-full mix-blend-screen filter blur-[60px] opacity-20 will-change-transform"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Blob 2: Teal */}
      <motion.div
        className="absolute top-[20%] right-[-20%] w-[90vw] h-[70vw] bg-[#4fb7b3] rounded-full mix-blend-screen filter blur-[60px] opacity-15 will-change-transform"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Blob 3: Periwinkle */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-[#637ab9] rounded-full mix-blend-screen filter blur-[60px] opacity-15 will-change-transform"
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Static Grain Overlay - Reduced opacity for performance */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Vignette - Static CSS */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/60 pointer-events-none" />
    </div>
  );
};

export default FluidBackground;
