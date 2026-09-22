/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Film, 
  Music, 
  Sparkles, 
  ShieldCheck,
  ArrowRight, 
  Play, 
  Volume2, 
  VolumeX, 
  SkipForward,
  Terminal,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface PageIntroProps {
  onComplete: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  // Steps:
  // 0: Initial cinematic boot & sound init
  // 1: VOBA Enterprise reveal
  // 2: Pulse Messenger spotlight
  // 3: Narcotics short film spotlight
  // 4: Vesni Music & Audio spotlight
  // 5: Final Launch summary
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);

  // Play subtle synthesis sound fx using Web Audio API if permitted
  const playChime = (frequency: number = 440, type: OscillatorType = 'sine', duration: number = 0.15) => {
    if (isAudioMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext may be restricted by browser policy before first interaction
    }
  };

  // Step 0 Boot progress simulation
  useEffect(() => {
    if (step === 0) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              playChime(587.33, 'triangle', 0.25);
              setStep(1);
            }, 300);
            return 100;
          }
          return prev + 4;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Audio cue when steps advance
  const advanceStep = (nextStep: number) => {
    const freqs = [440, 523.25, 659.25, 783.99, 880];
    playChime(freqs[nextStep % freqs.length], 'sine', 0.2);
    setStep(nextStep);
  };

  const STORY_STEPS = [
    {
      id: 'boot',
      badge: 'SYSTEM INITIALIZATION',
      title: 'INITIALIZING VESNI LANUS PORTFOLIO',
    },
    {
      id: 'voba',
      badge: 'CHAPTER 01 • FOUNDER & ENTERPRISE',
      title: 'VOBA',
      tagline: 'Leading the New Age of Digital Creations',
      icon: Building2,
      accentColor: 'emerald',
      description: 'Founder of VOBA — uniting web software & AI, competitive esports tournaments (Clutch League), cinema production, and hardware engineering.',
      metrics: ['VOBA Studios', 'Clutch League Esports', 'Tech Repair Lab']
    },
    {
      id: 'pulse',
      badge: 'CHAPTER 02 • FLAGSHIP APP',
      title: 'PULSE MESSENGER',
      tagline: 'Private, Encrypted Messaging & Real-Time Calls',
      icon: Sparkles,
      accentColor: 'cyan',
      description: 'Built a full-scale private chat and calling application with high-speed encryption. Officially celebrated over 1 year (365+ days) running smoothly online.',
      metrics: ['1 Year Live', 'Zero-Lag Voice/Video', 'Web & Mobile']
    },
    {
      id: 'film',
      badge: 'CHAPTER 03 • CINEMATIC SHORT FILM',
      title: 'NARCOTICS',
      tagline: 'Crime Drama Short Film • Directed by Vesni',
      icon: Film,
      accentColor: 'red',
      description: 'Wrote the script and directed NARCOTICS under P2 Productions banner, introducing lead actor Arun into an intense crime thriller world.',
      metrics: ['P2 Productions', 'Directed by Vesni', 'Introducing Arun']
    },
    {
      id: 'music',
      badge: 'CHAPTER 04 • ORIGINAL MUSIC',
      title: 'VESNI MUSIC',
      tagline: 'Singles, Soundtracks & Discography',
      icon: Music,
      accentColor: 'rose',
      description: 'Composer and music producer with over 25,000 streams on hit single "BANDS" and the brand new worldwide release "She Likes My Clam".',
      metrics: ['New: She Likes My Clam', '25,000+ Plays (BANDS)', 'Spotify & YouTube']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 bg-[#050608] text-white flex flex-col justify-between p-4 sm:p-8 select-none overflow-hidden"
    >
      {/* Dynamic Animated Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Radial Gradients */}
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            x: step === 1 ? [-20, 20, -20] : step === 2 ? [30, -30, 30] : step === 3 ? [-40, 30, -40] : [0, 0, 0],
            opacity: [0.15, 0.28, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px] ${
            step === 0 ? 'bg-emerald-500/15' :
            step === 1 ? 'bg-emerald-500/25' :
            step === 2 ? 'bg-cyan-500/25' :
            step === 3 ? 'bg-red-500/25' :
            step === 4 ? 'bg-rose-500/25' : 'bg-emerald-500/20'
          }`}
        />

        {/* High-Tech Grid Lines Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* Cinematic Scanline Bar */}
        <motion.div 
          animate={{ y: ['-100%', '1000%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-full h-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"
        />
      </div>

      {/* Top Header Controls */}
      <div className="relative z-20 flex items-center justify-between max-w-5xl mx-auto w-full">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shadow-lg">
            <img 
              src="/VOBA.png" 
              alt="VOBA" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <span className="text-xs font-black tracking-widest uppercase font-heading text-white flex items-center gap-1.5">
              VESNI LANUS <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider uppercase block">
              Interactive Portfolio Premiere
            </span>
          </div>
        </div>

        {/* Controls: Audio mute toggle & Quick Skip */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAudioMuted(!isAudioMuted)}
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            title={isAudioMuted ? 'Turn Sound On' : 'Mute Sound'}
          >
            {isAudioMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-emerald-400" />}
            <span className="hidden sm:inline text-[11px] font-medium">{isAudioMuted ? 'Muted' : 'Audio FX'}</span>
          </button>

          <button
            onClick={onComplete}
            className="px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer group"
          >
            <span>Skip Intro</span>
            <SkipForward size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Center Cinematic Stage */}
      <div className="relative z-20 max-w-4xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center">
        
        {/* STEP 0: System Boot Loading Stage */}
        {step === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center max-w-md w-full"
          >
            {/* Glowing Logo Icon */}
            <div className="relative mb-6">
              <motion.div 
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 rounded-3xl bg-zinc-950/90 border border-emerald-500/40 p-3 shadow-2xl flex items-center justify-center backdrop-blur-md"
              >
                <img src="/VOBA.png" alt="VOBA" className="w-full h-full object-contain" />
              </motion.div>
              <div className="absolute -inset-1 rounded-3xl bg-emerald-500/20 blur-xl -z-10" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <Terminal size={13} />
              <span>BOOTING_EXPERIENCE // v2.5</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading tracking-tight mb-2">
              VESNI LANUS
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide mb-8">
              Founder of VOBA • App Developer • Film Director • Musician
            </p>

            {/* High Tech Progress Bar */}
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-full h-3 p-0.5 mb-3 relative overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="w-full flex justify-between text-[11px] font-mono text-zinc-500">
              <span>LOADING PORTFOLIO MODULES</span>
              <span className="text-emerald-400 font-bold">{progress}%</span>
            </div>
          </motion.div>
        )}

        {/* STEPS 1-4: Story Milestones */}
        <AnimatePresence mode="wait">
          {step >= 1 && step <= 4 && (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.04 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              {(() => {
                const current = STORY_STEPS[step];
                const Icon = current.icon || Sparkles;
                const accentBorder = 
                  current.accentColor === 'emerald' ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' :
                  current.accentColor === 'cyan' ? 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10' :
                  current.accentColor === 'red' ? 'border-red-500/40 text-red-400 bg-red-500/10' :
                  'border-rose-500/40 text-rose-400 bg-rose-500/10';

                const glowColor =
                  current.accentColor === 'emerald' ? 'bg-emerald-500' :
                  current.accentColor === 'cyan' ? 'bg-cyan-500' :
                  current.accentColor === 'red' ? 'bg-red-500' : 'bg-rose-500';

                return (
                  <div className="flex flex-col items-center max-w-2xl px-4">
                    
                    {/* Chapter Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-6 backdrop-blur-md">
                      <span className={`w-2 h-2 rounded-full ${glowColor} animate-pulse`} />
                      {current.badge}
                    </div>

                    {/* Animated Big Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-3xl ${accentBorder} border p-4 flex items-center justify-center shadow-2xl backdrop-blur-xl`}>
                        <Icon size={40} />
                      </div>
                      <div className={`absolute -inset-2 rounded-3xl ${glowColor}/20 blur-xl -z-10`} />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-6xl font-black uppercase text-white font-heading tracking-tight mb-2">
                      {current.title}
                    </h2>

                    {/* Tagline */}
                    <p className="text-sm sm:text-lg font-semibold text-zinc-300 mb-4 max-w-xl">
                      {current.tagline}
                    </p>

                    {/* Description in clear language */}
                    <p className="text-zinc-400 text-xs sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
                      {current.description}
                    </p>

                    {/* Quick Metric Pills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                      {current.metrics?.map((m, i) => (
                        <div 
                          key={i} 
                          className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs font-semibold text-zinc-200 flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={13} className={current.accentColor === 'emerald' ? 'text-emerald-400' : current.accentColor === 'cyan' ? 'text-cyan-400' : current.accentColor === 'red' ? 'text-red-400' : 'text-rose-400'} />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Continue Action */}
                    <div className="flex items-center gap-3">
                      {step > 1 && (
                        <button
                          onClick={() => advanceStep(step - 1)}
                          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Back
                        </button>
                      )}

                      <button
                        onClick={() => advanceStep(step + 1)}
                        className={`px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer ${
                          current.accentColor === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400 text-black' :
                          current.accentColor === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-400 text-black' :
                          current.accentColor === 'red' ? 'bg-red-500 hover:bg-red-400 text-white' :
                          'bg-rose-500 hover:bg-rose-400 text-white'
                        }`}
                      >
                        <span>Next Chapter</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* STEP 5: Grand Finale Launch Screen */}
          {step === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-xl px-4"
            >
              {/* Grand Ready Emblem */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-2xl">
                  <Zap size={38} className="fill-emerald-500/30" />
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-emerald-500/30 blur-2xl -z-10 animate-pulse" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} /> You Are Ready To Explore
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight mb-3">
                WELCOME INSIDE
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
                Explore the complete creations of <strong>Vesni Lanus</strong>: the VOBA enterprise, Pulse Messenger, the short film NARCOTICS, new songs, verified credentials, and software apps.
              </p>

              {/* Big Enter Portfolio Button */}
              <button
                onClick={() => {
                  playChime(880, 'triangle', 0.3);
                  onComplete();
                }}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Enter Full Portfolio</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Bottom Timeline Progress Bar */}
      <div className="relative z-20 max-w-3xl mx-auto w-full pt-4 border-t border-zinc-900/80">
        <div className="flex items-center justify-between gap-2 sm:gap-4 mb-2">
          {['Boot', 'VOBA', 'Pulse', 'Movie', 'Music', 'Ready'].map((label, idx) => (
            <button
              key={label}
              onClick={() => {
                if (step !== 0) {
                  advanceStep(idx);
                }
              }}
              disabled={step === 0}
              className={`flex-1 flex flex-col items-center gap-1.5 transition-all group ${
                step === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              }`}
            >
              <div 
                className={`w-full h-1.5 rounded-full transition-all duration-300 ${
                  idx < step 
                    ? 'bg-emerald-500' 
                    : idx === step 
                      ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]' 
                      : 'bg-zinc-800 group-hover:bg-zinc-700'
                }`} 
              />
              <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider hidden sm:block ${
                idx === step ? 'text-white font-bold' : idx < step ? 'text-emerald-400' : 'text-zinc-600'
              }`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default PageIntro;
