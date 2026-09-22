/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Film, 
  Music, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Radio,
  ExternalLink
} from 'lucide-react';

interface PageIntroProps {
  onComplete: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const [typedCommand, setTypedCommand] = useState('');
  const [step, setStep] = useState(0);

  const commandText = "vesni --init --enterprise=VOBA --role=FOUNDER";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= commandText.length) {
        setTypedCommand(commandText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setStep(1);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 bg-[#050608] flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none overflow-y-auto"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center my-auto py-8">
        
        {/* Terminal Header Prompt */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-2xl p-4 sm:p-5 text-left mb-6 font-mono text-xs backdrop-blur-md"
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-zinc-400 font-semibold ml-2">vesni-secops: ~/voba-core</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
              AUTHENTICATED
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-white font-semibold">{typedCommand}</span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
          </div>

          {step >= 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 pt-3 border-t border-zinc-900 text-zinc-400 space-y-1 text-[11px]"
            >
              <div className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={12} /> VOBA Enterprise subsystems mounted (Pulse Messenger, Clutch League, VesGPT)
              </div>
              <div className="text-zinc-400 flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-cyan-400" /> Defense protocols active (Red Team mindset applied to zero-trust)
              </div>
              <div className="text-rose-400 flex items-center gap-1.5">
                <CheckCircle2 size={12} /> Film & Discography indexed: NARCOTICS & "She Likes My Clam"
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Brand Avatar with VOBA & Vesni emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-4"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)] flex items-center justify-center p-2 relative overflow-hidden group">
            <img 
              src="/VOBA.png" 
              alt="VOBA Logo" 
              className="w-full h-full object-contain filter drop-shadow" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
          </div>
          <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider">
            FOUNDER
          </div>
        </motion.div>

        {/* Identity Headings */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-6xl font-black uppercase text-white font-heading tracking-tight mb-2"
        >
          VESNI <span className="text-emerald-400">LANUS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6 leading-relaxed font-normal"
        >
          Founder & Managing Director of <strong className="text-white">VOBA</strong> • Full-Stack Engineer • Film Director (<span className="text-red-400">NARCOTICS</span>) • Retired Red Teamer
        </motion.p>

        {/* Quick Highlights Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 text-[11px] font-semibold"
        >
          <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300">
            Pulse Messenger (1 Year Online)
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300">
            New Single: She Likes My Clam
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
            GUVI IIT Madras Certified
          </span>
        </motion.div>

        {/* Action Button: Enter Portfolio */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onComplete}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          Explore Portfolio & Enterprise <ArrowRight size={16} />
        </motion.button>

        <span className="text-[11px] text-zinc-500 mt-4">
          Press to enter • Optimized for all devices (Mobile & Desktop)
        </span>

      </div>
    </motion.div>
  );
};

export default PageIntro;
