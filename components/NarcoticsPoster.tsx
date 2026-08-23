/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Maximize2 } from 'lucide-react';

interface NarcoticsPosterProps {
  onExpand?: () => void;
}

export const NarcoticsPoster: React.FC<NarcoticsPosterProps> = ({ onExpand }) => {
  return (
    <div 
      className="relative w-full max-w-[490px] mx-auto rounded-2xl overflow-hidden border border-red-500/30 bg-[#080204] shadow-[0_20px_60px_rgba(239,68,68,0.18)] group cursor-pointer transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_25px_70px_rgba(239,68,68,0.3)]"
      onClick={onExpand}
    >
      {/* Film Grain Texture & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180407] via-[#090203] to-[#040102]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(239,68,68,0.22)_0%,rgba(0,0,0,0.85)_75%)]" />
      
      {/* Poster Body */}
      <div className="relative z-10 flex flex-col justify-between min-h-[620px] sm:min-h-[680px] p-6 sm:p-8 select-none">
        
        {/* Top Header: Production */}
        <div className="text-center pt-2">
          <div className="inline-block px-3 py-1 rounded border border-red-500/20 bg-red-950/40 text-[10px] sm:text-xs font-bold tracking-[0.35em] text-white/95 uppercase mb-1">
            P2 PRODUCTIONS
          </div>
          <div className="tracking-[0.55em] text-[10px] text-red-500 font-extrabold uppercase mt-1">
            PRESENTS
          </div>
        </div>

        {/* Center Artwork Area */}
        <div className="relative my-auto py-4 flex flex-col items-center justify-center">
          
          {/* Main Title: NARCOTICS with crisp layered glow & typography */}
          <div className="relative w-full text-center my-1">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-red-500 font-heading"
              style={{
                letterSpacing: '-0.02em',
                textShadow: '0 0 35px rgba(239, 68, 68, 0.6), 0 0 10px rgba(239, 68, 68, 0.4)'
              }}
            >
              NARCOTICS
            </h1>
            <div className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-semibold mt-1">
              A FILM BY VESNI
            </div>
          </div>

          {/* High-detail Sleek Vector Artwork: Arun on Sport Motorcycle (Pulsar 150 style) */}
          <div className="relative w-full h-48 sm:h-56 my-4 flex items-center justify-center">
            <svg viewBox="0 0 460 220" className="w-full h-full max-h-56 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
              <defs>
                <linearGradient id="narcoticsRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#b91c1c" />
                  <stop offset="100%" stopColor="#450a0a" />
                </linearGradient>

                <linearGradient id="rimChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#52525b" />
                  <stop offset="50%" stopColor="#27272a" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>

                <radialGradient id="headlightBeam" cx="15%" cy="50%" r="85%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#fef08a" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="exhaustGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#71717a" />
                  <stop offset="100%" stopColor="#27272a" />
                </linearGradient>
              </defs>

              {/* Headlight beam shooting forward into the night */}
              <polygon points="100,128 0,90 0,175 100,140" fill="url(#headlightBeam)" />

              {/* Ground road shadow */}
              <ellipse cx="230" cy="196" rx="190" ry="12" fill="#000000" opacity="0.9" />
              <line x1="60" y1="196" x2="400" y2="196" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="16 8" />

              {/* REAR WHEEL */}
              <g id="rear-wheel">
                <circle cx="345" cy="150" r="38" fill="#121215" stroke="#27272a" strokeWidth="4" />
                <circle cx="345" cy="150" r="28" fill="#09090b" stroke="#3f3f46" strokeWidth="2" />
                {/* Spokes */}
                <line x1="345" y1="122" x2="345" y2="178" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.8" />
                <line x1="317" y1="150" x2="373" y2="150" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.8" />
                <line x1="325" y1="130" x2="365" y2="170" stroke="#71717a" strokeWidth="2" />
                <line x1="325" y1="170" x2="365" y2="130" stroke="#71717a" strokeWidth="2" />
                <circle cx="345" cy="150" r="10" fill="url(#narcoticsRed)" />
                <circle cx="345" cy="150" r="4" fill="#ffffff" />
              </g>

              {/* FRONT WHEEL */}
              <g id="front-wheel">
                <circle cx="115" cy="150" r="38" fill="#121215" stroke="#27272a" strokeWidth="4" />
                <circle cx="115" cy="150" r="28" fill="#09090b" stroke="#3f3f46" strokeWidth="2" />
                {/* Spokes */}
                <line x1="115" y1="122" x2="115" y2="178" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.8" />
                <line x1="87" y1="150" x2="143" y2="150" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.8" />
                <line x1="95" y1="130" x2="135" y2="170" stroke="#71717a" strokeWidth="2" />
                <line x1="95" y1="170" x2="135" y2="130" stroke="#71717a" strokeWidth="2" />
                <circle cx="115" cy="150" r="10" fill="url(#narcoticsRed)" />
                <circle cx="115" cy="150" r="4" fill="#ffffff" />
              </g>

              {/* FRONT FORK & SHOCKS */}
              <line x1="115" y1="150" x2="160" y2="92" stroke="#52525b" strokeWidth="6" strokeLinecap="round" />
              <line x1="122" y1="145" x2="164" y2="92" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" />

              {/* REAR SWINGARM */}
              <polygon points="345,150 250,145 250,135 345,142" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />

              {/* EXHAUST PIPE */}
              <path d="M210 148 Q260 152 330 162 L335 152 Q260 142 210 138 Z" fill="url(#exhaustGrad)" stroke="#18181b" strokeWidth="1" />

              {/* ENGINE BLOCK & CRANKCASE */}
              <rect x="190" y="118" width="65" height="46" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
              <line x1="196" y1="128" x2="248" y2="128" stroke="#52525b" strokeWidth="2" />
              <line x1="196" y1="136" x2="248" y2="136" stroke="#52525b" strokeWidth="2" />
              <line x1="196" y1="144" x2="248" y2="144" stroke="#52525b" strokeWidth="2" />
              <line x1="196" y1="152" x2="248" y2="152" stroke="#52525b" strokeWidth="2" />
              <circle cx="212" cy="138" r="7" fill="#27272a" stroke="#71717a" strokeWidth="1.5" />

              {/* MAIN FRAME CHASSIS */}
              <path d="M160 92 L200 120 L270 120 L345 150" stroke="#27272a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />

              {/* SPORT TANK & BODYWORK (PULSAR 150 AESTHETIC) */}
              <path 
                d="M150 94 Q190 62 255 78 Q280 88 320 108 L310 124 L270 115 L180 110 Z" 
                fill="url(#narcoticsRed)" 
                stroke="#f87171" 
                strokeWidth="1.5" 
              />
              <path d="M220 82 Q250 88 285 106" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" fill="none" />
              {/* Pulsar 150 Badge on Tank */}
              <text x="290" y="116" fill="#ffffff" fontSize="9" fontFamily="Syncopate, sans-serif" fontWeight="bold">150</text>

              {/* HEADLIGHT COWL / FRONT FAIRING */}
              <polygon points="105,130 138,92 165,96 138,142" fill="#18181b" stroke="#ef4444" strokeWidth="2" />
              <polygon points="102,126 112,112 120,128" fill="#fef08a" />

              {/* HANDLEBARS & MIRRORS */}
              <path d="M150 88 L165 76 L182 84" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
              <circle cx="182" cy="84" r="4" fill="#ffffff" />
              <line x1="165" y1="76" x2="160" y2="66" stroke="#71717a" strokeWidth="2" />
              <ellipse cx="158" cy="64" rx="5" ry="3" fill="#18181b" stroke="#ef4444" strokeWidth="1" />

              {/* SEAT */}
              <path d="M245 80 Q290 85 320 104 L295 110 Q260 92 240 88 Z" fill="#09090b" stroke="#27272a" strokeWidth="2" />

              {/* RIDER: ARUN IN CASUAL COOL RECLINING STANCE */}
              {/* Legs / Jeans */}
              <path d="M165 82 L225 104 L275 92" stroke="#18181b" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M165 82 L225 104 L275 92" stroke="#27272a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />

              {/* Torso / Crimson Jacket */}
              <path d="M260 92 L335 78 L370 70" stroke="#dc2626" strokeWidth="16" strokeLinecap="round" />
              <path d="M270 90 L335 78 L365 72" stroke="#b91c1c" strokeWidth="12" strokeLinecap="round" />

              {/* Head / Face Profile / Hair */}
              <circle cx="380" cy="64" r="12" fill="#fca5a5" />
              {/* Stylish Haircut */}
              <path d="M372 56 Q388 50 390 66 Q382 62 372 56 Z" fill="#18181b" />
              <circle cx="384" cy="62" r="1.5" fill="#000000" />
              {/* Left Arm resting casually on leg / handlebar */}
              <path d="M345 74 Q370 52 388 60" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" fill="none" />
              <circle cx="388" cy="60" r="3.5" fill="#fca5a5" />
            </svg>
          </div>

          {/* Actor Debut Card */}
          <div className="text-center mt-1">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] uppercase text-white font-heading">
              ARUN
            </div>
            <div className="text-xs tracking-[0.35em] text-red-400 font-bold uppercase mt-1">
              IN HIS DEBUT FILM
            </div>
          </div>
        </div>

        {/* Bottom Credits Grid / Billing Block */}
        <div className="pt-4 border-t border-red-500/30 bg-black/60 backdrop-blur-sm rounded-xl p-4 -mx-1 -mb-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-1">
              <span className="block text-[9px] uppercase tracking-wider text-zinc-400 mb-0.5 font-semibold">WRITTEN & DIRECTED</span>
              <span className="block text-xs sm:text-sm font-bold uppercase text-white tracking-wide">VESNI</span>
            </div>
            <div className="p-1">
              <span className="block text-[9px] uppercase tracking-wider text-zinc-400 mb-0.5 font-semibold">DOP</span>
              <span className="block text-xs sm:text-sm font-bold uppercase text-white tracking-wide">ASWIN</span>
            </div>
            <div className="p-1">
              <span className="block text-[9px] uppercase tracking-wider text-zinc-400 mb-0.5 font-semibold">MUSIC DIRECTOR</span>
              <span className="block text-xs sm:text-sm font-bold uppercase text-white tracking-wide">NK</span>
            </div>
            <div className="p-1">
              <span className="block text-[9px] uppercase tracking-wider text-zinc-400 mb-0.5 font-semibold">EDITED BY</span>
              <span className="block text-xs sm:text-sm font-bold uppercase text-white tracking-wide">VESNI & ASWIN</span>
            </div>
          </div>
        </div>

      </div>

      {/* Hover Expand Banner */}
      <div className="absolute top-4 right-4 bg-black/80 border border-white/20 rounded-md px-3 py-1.5 text-xs text-zinc-200 font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 size={13} /> Full Screen
      </div>
    </div>
  );
};

export default NarcoticsPoster;
