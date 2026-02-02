
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Tactical Grid */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Moving Light Beams */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[120vw] h-[40vh] bg-gradient-to-b from-[#00ffaa]/5 to-transparent -rotate-12 blur-3xl"
        animate={{
          x: [-100, 100, -100],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[120vw] h-[40vh] bg-gradient-to-t from-[#ff3333]/5 to-transparent rotate-12 blur-3xl"
        animate={{
          x: [100, -100, 100],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Reactive Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
};

export default FluidBackground;