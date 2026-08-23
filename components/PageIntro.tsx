/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Shield, ArrowRight, Play } from 'lucide-react';

interface PageIntroProps {
  onComplete: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "VESNI // INITIALIZING PROFILE";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 bg-[#060608] flex flex-col items-center justify-center p-6 text-center select-none"
    >
      {/* Background radial ambient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center">
        
        {/* Animated Brand Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex items-center justify-center text-white text-3xl font-black font-heading">
            V
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight mb-2"
        >
          VESNI
        </motion.h1>

        {/* Typewriter subtitle */}
        <div className="h-6 mb-8 flex items-center justify-center">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 font-semibold">
            {typedText}
          </span>
          <span className="w-1.5 h-4 ml-1 bg-emerald-400 animate-pulse" />
        </div>

        {/* Triple discipline indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 text-[11px] font-semibold text-zinc-400"
        >
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
            Full-Stack Software
          </span>
          <span className="px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-300">
            Film: NARCOTICS
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
            Music: BANDS (25k+)
          </span>
        </motion.div>

        {/* Enter Site Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          onClick={onComplete}
          className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          Enter Portfolio <ArrowRight size={16} />
        </motion.button>

        <span className="text-[11px] text-zinc-500 mt-4">
          Press to explore film, discography, and engineering vault
        </span>

      </div>
    </motion.div>
  );
};

export default PageIntro;
