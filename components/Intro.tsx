
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Lock, Unlock, Wifi, Battery, Skull } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const MatrixBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-[#4fb7b3] font-mono text-[10px] md:text-xs writing-vertical-rl whitespace-nowrap"
        initial={{ top: -200, left: `${i * 7}%`, opacity: 0 }}
        animate={{ top: '120%', opacity: [0, 1, 0] }}
        transition={{ 
          duration: Math.random() * 2 + 2, 
          repeat: Infinity, 
          delay: Math.random() * 2,
          ease: "linear"
        }}
      >
        {Array.from({ length: 30 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
      </motion.div>
    ))}
  </div>
);

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'scan' | 'hack' | 'lockout' | 'override' | 'reveal'>('scan');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sequence Logic
    const sequence = async () => {
      // Stage 1: Scan (Normal Phone)
      await new Promise(r => setTimeout(r, 1500));
      
      // Stage 2: Hack (Glitch/Shake)
      setStage('hack');
      await new Promise(r => setTimeout(r, 1200));

      // Stage 3: Lockout (Warning)
      setStage('lockout');
      await new Promise(r => setTimeout(r, 1500));

      // Stage 4: Override (Code)
      setStage('override');
      // Progress bar animation for override
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 100);
      
      await new Promise(r => setTimeout(r, 1800));
      clearInterval(interval);

      // Stage 5: Reveal
      setStage('reveal');
      await new Promise(r => setTimeout(r, 2200));
      
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden text-white"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
    >
      <MatrixBackground />
      
      {/* Phone Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={
          stage === 'reveal' 
            ? { scale: 20, opacity: 0, rotate: 10 } 
            : { 
                y: 0, 
                opacity: 1, 
                x: stage === 'hack' ? [-5, 5, -8, 8, -5, 5, 0] : 0,
                rotate: stage === 'hack' ? [-1, 1, -2, 2, 0] : 0
              }
        }
        transition={
            stage === 'hack' 
                ? { duration: 0.4, repeat: 2 } 
                : stage === 'reveal'
                    ? { duration: 0.8, ease: "circIn" }
                    : { duration: 0.8 }
        }
        className="relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[40px] border-[8px] border-[#333] shadow-2xl overflow-hidden z-20"
      >
        {/* Phone Notch/Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-xl z-30 flex items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-black/50 blur-xl absolute" />
        </div>

        {/* Status Bar */}
        <div className="absolute top-3 left-6 right-6 flex justify-between text-[10px] text-gray-400 z-20 font-sans">
            <span>9:41</span>
            <div className="flex gap-1">
                <Wifi className="w-3 h-3" />
                <Battery className="w-3 h-3" />
            </div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-black flex flex-col items-center justify-center p-6">
            
            <AnimatePresence mode="wait">
                {/* SCAN STAGE */}
                {stage === 'scan' && (
                    <motion.div
                        key="scan"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <motion.div 
                            className="relative"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Lock className="w-12 h-12 text-white/80" />
                            <motion.div 
                                className="absolute inset-0 border-2 border-white/50 rounded-lg"
                                animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                        </motion.div>
                        <p className="text-xs text-white/50 tracking-widest mt-4">FACE ID SCANNING...</p>
                    </motion.div>
                )}

                {/* HACK STAGE */}
                {stage === 'hack' && (
                    <motion.div
                        key="hack"
                        className="flex flex-col items-center justify-center w-full h-full absolute inset-0 bg-red-900/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                             className="text-4xl font-black text-red-500 text-center leading-none glitch-text mb-4"
                             animate={{ x: [-2, 2, -2, 2, 0] }}
                             transition={{ repeat: Infinity, duration: 0.1 }}
                        >
                             SYSTEM<br/>FAILURE
                        </motion.div>
                        <Skull className="w-16 h-16 text-red-600 animate-pulse" />
                        
                        {/* Random glitch lines */}
                        {Array.from({length: 5}).map((_, i) => (
                             <motion.div 
                                key={i}
                                className="absolute w-full h-[2px] bg-white mix-blend-difference"
                                style={{ top: `${Math.random() * 100}%` }}
                                animate={{ opacity: [0, 1, 0], x: [-100, 100] }}
                                transition={{ duration: 0.2, delay: i * 0.1, repeat: Infinity }}
                             />
                        ))}
                    </motion.div>
                )}

                {/* LOCKOUT STAGE */}
                {stage === 'lockout' && (
                    <motion.div
                        key="lockout"
                        className="flex flex-col items-center gap-6 text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                    >
                        <ShieldAlert className="w-20 h-20 text-yellow-500 animate-bounce" />
                        <div className="bg-yellow-500/10 border border-yellow-500/50 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-yellow-500 font-bold text-lg mb-2">SECURITY BREACH</h3>
                            <p className="text-[10px] text-yellow-200/80 font-mono">
                                UNAUTHORIZED CONNECTION DETECTED<br/>
                                TRACING IP...
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* OVERRIDE STAGE */}
                {stage === 'override' && (
                    <motion.div
                        key="override"
                        className="w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="font-mono text-[10px] text-[#4fb7b3] h-32 overflow-hidden mb-4 opacity-70">
                            {Array.from({length: 10}).map((_, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    &gt; injecting_payload_{i}.sh... OK
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                             <Unlock className="w-4 h-4 text-[#4fb7b3]" />
                             <span className="text-xs text-[#4fb7b3] font-bold">OVERRIDING SECURITY...</span>
                        </div>
                        
                        <div className="w-full bg-[#1a1b3b] h-2 rounded-full overflow-hidden border border-[#4fb7b3]/30">
                             <motion.div 
                                className="h-full bg-[#4fb7b3]"
                                style={{ width: `${progress}%` }}
                             />
                        </div>
                        <div className="text-right text-[10px] text-[#4fb7b3] mt-1">{Math.round(progress)}%</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>

      {/* Final Reveal Text Behind Phone (scales up) */}
       {stage === 'reveal' && (
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(79,183,179,0.5)]">
                   VESNI
                 </h1>
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    className="h-1 bg-[#4fb7b3] mt-4"
                 />
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-[#a8fbd3] font-mono tracking-[0.3em] uppercase text-sm"
                 >
                    Access Granted
                 </motion.p>
            </motion.div>
       )}
    </motion.div>
  );
};

export default Intro;
