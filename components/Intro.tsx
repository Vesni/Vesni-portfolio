
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Trophy } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'console.log("Champion");';
  const [ballVisible, setBallVisible] = useState(false);
  const [impact, setImpact] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start ball animation after typing
        setTimeout(() => setBallVisible(true), 400);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (ballVisible) {
      // Impact timing (ball hits text)
      setTimeout(() => {
        setImpact(true);
      }, 600); 
      
      // Show Logo timing
      setTimeout(() => {
        setShowLogo(true);
      }, 1000);

      // Finish and trigger exit
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  }, [ballVisible, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#1a1b3b] flex flex-col items-center justify-center font-mono overflow-hidden"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {!showLogo ? (
        <div className="relative">
          {/* Terminal Window */}
          <motion.div 
            animate={impact ? { 
              rotate: [0, -10, 10, -5, 5, 0],
              x: [0, -10, 10, -5, 5, 0],
              opacity: [1, 0.5, 0],
              scale: [1, 0.9, 0]
            } : {}}
            transition={{ duration: 0.4 }}
            className="bg-black/80 p-6 rounded-xl border border-[#4fb7b3]/30 backdrop-blur-sm min-w-[320px] shadow-2xl shadow-[#4fb7b3]/10"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-3 h-3 text-[#4fb7b3]" />
                <span className="text-xs text-gray-400">vesni_system.exe</span>
              </div>
            </div>
            <div className="text-[#a8fbd3] text-xl font-bold font-mono">
              &gt; {text}<span className="animate-pulse">_</span>
            </div>
          </motion.div>

          {/* Flying Ball */}
          {ballVisible && (
            <motion.div
              initial={{ x: '100vw', y: -200, rotate: 0 }}
              animate={{ x: 0, y: 0, rotate: -720 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.25 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl z-10 drop-shadow-[0_0_20px_rgba(79,183,179,0.5)]"
            >
              ⚽
            </motion.div>
          )}
          
          {/* Impact Flash */}
          {impact && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white rounded-xl z-20 mix-blend-overlay"
            />
          )}
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center relative z-10"
        >
          {/* Big Logo */}
          <motion.div
             className="text-8xl md:text-[10rem] font-heading font-black text-white tracking-tighter mb-4 leading-none mix-blend-difference"
             initial={{ letterSpacing: "-0.2em" }}
             animate={{ letterSpacing: "-0.05em" }}
             transition={{ duration: 1, ease: "circOut" }}
          >
            VESNI
          </motion.div>
          
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-[#4fb7b3] font-bold tracking-[0.3em] text-sm md:text-base uppercase"
          >
            <Code className="w-5 h-5" /> 
            <span>Coder</span>
            <span className="text-white/20">|</span>
            <span>Baller</span>
            <Trophy className="w-5 h-5" />
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#a8fbd3] to-transparent mt-8 w-full max-w-md mx-auto"
          />
        </motion.div>
      )}
      
      {/* Background Particles/Noise to make it lively */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </motion.div>
  );
};

export default Intro;
