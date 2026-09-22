/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { 
  Lock, 
  PhoneCall, 
  Radio, 
  Zap, 
  ExternalLink, 
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const PulseAnniversarySection: React.FC = () => {
  const HIGHLIGHTS = [
    {
      icon: Lock,
      title: 'Completely Private',
      desc: 'All messages and calls are encrypted. No one else, not even servers, can read or listen to them.'
    },
    {
      icon: PhoneCall,
      title: 'Clear Voice & Video Calls',
      desc: 'Talk face-to-face or voice chat with friends without stutter, robotic audio, or frustrating lag.'
    },
    {
      icon: Radio,
      title: 'Broadcast Channels & Groups',
      desc: 'Create group chats with friends, or set up channels to post announcements to large audiences.'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      desc: 'Messages appear the second you hit send, so conversations feel fast and natural.'
    }
  ];

  return (
    <section id="pulse" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#08090d] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-blue-500/20 relative overflow-hidden shadow-xl">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            
            {/* 1 Year Anniversary Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar size={13} className="text-cyan-400" />
              <span>1 Year Online • 2024 — 2025</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse ml-1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading tracking-tight">
                  Pulse <span className="text-cyan-400">Messenger</span>
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Pulse Messenger has now been <strong>live online for over 1 full year</strong>! I built it under VOBA as a fast, clean communication app where people can talk, send voice notes, and video call with complete privacy.
                </p>

                {/* 3 Simple Stats */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-zinc-800 text-center">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-white font-heading block">365+</span>
                    <span className="text-xs text-zinc-400">Days Live</span>
                  </div>
                  <div className="border-x border-zinc-800">
                    <span className="text-2xl sm:text-3xl font-bold text-cyan-400 font-heading block">0s</span>
                    <span className="text-xs text-zinc-400">Message Delay</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-heading block">100%</span>
                    <span className="text-xs text-zinc-400">Encrypted</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="https://pulse-msg.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md hover:scale-105"
                  >
                    Open Pulse Messenger <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Visual preview box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-white">Live App Features</span>
                  </div>
                  <span className="text-[11px] text-zinc-500">Free to use</span>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Instant messaging with text, images, and attachments</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Free high-definition voice and video calls</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Custom private group chats for friends and clubs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Works smoothly on both mobile phones and laptops</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-zinc-800">
              {HIGHLIGHTS.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-3">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PulseAnniversarySection;
