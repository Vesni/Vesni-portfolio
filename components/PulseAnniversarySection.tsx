/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { 
  MessageSquare, 
  ShieldCheck, 
  Radio, 
  PhoneCall, 
  Video, 
  Users, 
  Sparkles, 
  ExternalLink, 
  ArrowRight,
  Zap,
  Lock,
  Globe2,
  Calendar
} from 'lucide-react';

export const PulseAnniversarySection: React.FC = () => {
  const HIGHLIGHTS = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      desc: 'Zero-knowledge architecture ensuring total cryptographic privacy across all 1-on-1 and group channels.'
    },
    {
      icon: PhoneCall,
      title: 'Real-Time Voice & Video',
      desc: 'Sub-50ms ultra-low latency peer connections engineered with scalable WebRTC mesh audio pipelines.'
    },
    {
      icon: Radio,
      title: 'Global Broadcasts',
      desc: 'Effortlessly stream announcements, newsletters, and community updates to thousands simultaneously.'
    },
    {
      icon: Zap,
      title: 'Instant WebSockets Mesh',
      desc: 'Bi-directional real-time events delivering messages with zero perceptible lag across all client types.'
    }
  ];

  return (
    <section id="pulse" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#090b10] border-b border-white/5 relative overflow-hidden">
      {/* Background Neon Pulse Aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Anniversary Celebration Hero Card */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#111624] via-[#0d121e] to-[#0a0d15] border border-blue-500/30 shadow-[0_20px_80px_rgba(37,99,235,0.2)] relative overflow-hidden">
          
          {/* Floating Glow Orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            
            {/* 1 Year Anniversary Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Calendar size={14} className="text-cyan-400" />
              <span>1-Year Anniversary Milestone • 2024 — 2025</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white font-heading tracking-tight leading-none">
                  PULSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">MESSENGER</span>
                </h2>

                <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed font-normal">
                  Celebrating <strong>1 full year deployed live online</strong>! Engineered by Vesni Lanus under VOBA Interactive, Pulse Messenger is a modern, high-speed, privacy-first communication platform designed for individuals and communities who value performance, uncompromised encryption, and real-time responsiveness.
                </p>

                {/* Glaze Stats Row */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-blue-500/20 text-center">
                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-black text-white font-heading block">365+</span>
                    <span className="text-[10px] sm:text-xs text-blue-300/80 uppercase font-semibold">Days Online</span>
                  </div>
                  <div className="p-2 border-x border-blue-500/20">
                    <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-heading block">0ms</span>
                    <span className="text-[10px] sm:text-xs text-blue-300/80 uppercase font-semibold">Message Lag</span>
                  </div>
                  <div className="p-2">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading block">E2EE</span>
                    <span className="text-[10px] sm:text-xs text-blue-300/80 uppercase font-semibold">Total Privacy</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://pulse-msg.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
                  >
                    Launch Pulse Messenger <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://pulse-msg.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 text-blue-200 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    Try Live Web App
                  </a>
                </div>

              </div>

              {/* Graphic Mockup / Card Preview (Right) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-zinc-950/90 border border-blue-500/30 p-5 shadow-2xl relative">
                  
                  {/* Mock Window Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[10px] text-zinc-400 ml-2">pulse://live-mesh</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 font-bold text-[9px] uppercase">
                      v2.0 Anniversary
                    </span>
                  </div>

                  {/* Chat Mock conversation bubbles */}
                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 max-w-[85%]">
                      <span className="text-[10px] text-cyan-400 font-bold block mb-0.5">Vesni // Founder</span>
                      Pulse Messenger officially marks 1 year in deployment today! Instant WebSockets are firing perfectly.
                    </div>

                    <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-100 ml-auto max-w-[85%] text-right">
                      <span className="text-[10px] text-blue-300 font-bold block mb-0.5">Community Node</span>
                      Calls, group rooms, and E2EE are pristine. Happy 1-Year Anniversary! 🚀
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Lock size={12} /> Cryptographic Mesh: ACTIVE
                      </span>
                      <span className="font-bold">100% Uptime</span>
                    </div>
                  </div>

                  {/* Bottom App Link */}
                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>https://pulse-msg.vercel.app</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-1">
                      Online <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {HIGHLIGHTS.map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <item.icon size={20} />
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PulseAnniversarySection;
