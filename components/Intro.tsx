
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Lock, Terminal, Unlock } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#4fb7b3] font-mono text-xs writing-vertical-rl"
          initial={{ top: -100, left: `${i * 10}%`, opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 0] }}
          transition={{ 
            duration: Math.random() * 2 + 1, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "linear"
          }}
        >
          {Array.from({ length: 20 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}
    </div>
  );
};

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'boot' | 'hack' | 'lockout' | 'override' | 'reveal'>('boot');
  const [bootText, setBootText] = useState<string[]>([]);
  
  useEffect(() => {
    // Stage 1: Boot Sequence
    const bootLines = [
      "BIOS CHECK... OK",
      "LOADING KERNEL...",
      "MOUNTING VOLUMES...",
      "CONNECTING TO SERVER...",
    ];

    let lineIndex = 0;
    const bootInterval = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setBootText(prev => [...prev, bootLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setStage('hack'), 500);
      }
    }, 150);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    if (stage === 'hack') {
      // Stage 2: The Glitch/Hack
      const timeout = setTimeout(() => {
        setStage('lockout');
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (stage === 'lockout') {
      // Stage 3: Warning Screen
      const timeout = setTimeout(() => {
        setStage('override');
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (stage === 'override') {
      // Stage 4: Access Granted
      const timeout = setTimeout(() => {
        setStage('reveal');
      }, 1200);
      return () => clearTimeout(timeout);
    }
    
    if (stage === 'reveal') {
       const timeout = setTimeout(() => {
         onComplete();
       }, 2500);
       return () => clearTimeout(timeout);
    }
  }, [stage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden text-white"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <MatrixRain />
      
      {/* Boot Stage */}
      {stage === 'boot' && (
        <div className="w-80 font-mono text-sm text-gray-400">
          {bootText.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              &gt; {line}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle"
          />
        </div>
      )}

      {/* Glitch Stage */}
      {stage === 'hack' && (
        <div className="relative">
          <motion.div
             className="text-6xl font-black text-red-500 glitch-text"
             animate={{ x: [-5, 5, -5, 5, 0], opacity: [1, 0.5, 1, 0.8, 1] }}
             transition={{ duration: 0.2, repeat: Infinity }}
          >
             SYSTEM ERROR
          </motion.div>
          <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay animate-pulse" />
        </div>
      )}

      {/* Lockout/Warning Stage */}
      {stage === 'lockout' && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-red-900/20 border-2 border-red-500 p-8 rounded-lg flex flex-col items-center gap-4 backdrop-blur-md relative z-20 shadow-[0_0_50px_rgba(239,68,68,0.5)]"
        >
          <AlertTriangle className="w-16 h-16 text-red-500 animate-bounce" />
          <h2 className="text-3xl font-bold text-red-500 tracking-widest uppercase">Security Breach</h2>
          <p className="text-red-300 text-sm text-center font-mono">
            UNAUTHORIZED ACCESS DETECTED.<br/>
            IP TRACED: 127.0.0.1
          </p>
          <div className="w-full bg-red-900/50 h-2 mt-4 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-red-500"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "linear" }}
             />
          </div>
        </motion.div>
      )}

      {/* Override Stage */}
      {stage === 'override' && (
        <motion.div 
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 1, ease: "linear", repeat: Infinity }}
           >
             <Lock className="w-12 h-12 text-green-400" />
           </motion.div>
           <div className="text-green-400 font-mono text-xl">
             BYPASSING FIREWALL...
           </div>
           <div className="font-mono text-xs text-green-400/50">
             injecting_payload.sh
           </div>
        </motion.div>
      )}

      {/* Reveal Stage */}
      {stage === 'reveal' && (
        <motion.div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 1.5, filter: 'blur(10px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="flex flex-col items-center gap-4"
          >
             <div className="p-4 rounded-full bg-[#4fb7b3]/20 border border-[#4fb7b3] mb-4">
                <Unlock className="w-12 h-12 text-[#4fb7b3]" />
             </div>
             
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mix-blend-difference">
               VESNI
             </h1>
             
             <div className="bg-[#4fb7b3] text-black px-4 py-1 text-sm font-bold tracking-[0.3em] uppercase">
               Access Granted
             </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Background Noise - Reduced opacity for performance */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      {/* Red Flash Overlay for Hack */}
      <AnimatePresence>
        {stage === 'hack' && (
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.2 }}
             exit={{ opacity: 0 }}
             className="absolute inset-0 bg-red-600 z-0"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Intro;
