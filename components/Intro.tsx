
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const bootSequence = [
    "VESNI_OS INITIALIZING...",
    "KERNEL_VERSION: 2.5.0_STABLE",
    "LOADING CORE MODULES... [DONE]",
    "SCANNING HARDWARE... [OPTIMIZED]",
    "MOUNTING PROJECTS... ████████ 100%",
    "SECURITY LAYER ACTIVE",
    "USER DETECTED: VESNI",
    "ROLE: SYSTEM DEVELOPER",
    "MODE: BUILD > ANIMATE",
    "INITIALIZING_UI..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 500);
        setTimeout(() => onComplete(), 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div 
          className="fixed inset-0 z-[1000] bg-[#050505] flex items-center justify-center p-6 font-mono crt-overlay"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full max-w-xl space-y-2">
            {lines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs md:text-sm tracking-widest ${line.includes('DONE') || line.includes('100%') ? 'text-[#00ffaa]' : 'text-white/60'}`}
              >
                <span className="text-[#00ffaa] mr-2">></span>
                {line}
              </motion.div>
            ))}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-[#00ffaa] inline-block"
            />
          </div>
          
          <div className="absolute bottom-10 right-10 text-[8px] text-white/10 uppercase tracking-[0.5em]">
            SYSTEM_BOOT_SEQUENCE_V2
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
