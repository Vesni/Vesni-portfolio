/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

interface NarcoticsPosterProps {
  onExpand?: () => void;
}

export const NarcoticsPoster: React.FC<NarcoticsPosterProps> = ({ onExpand }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="relative w-full max-w-[490px] mx-auto rounded-2xl overflow-hidden border border-red-500/30 bg-[#080204] shadow-[0_20px_60px_rgba(239,68,68,0.22)] group cursor-pointer transition-all duration-300 hover:border-red-500/70 hover:shadow-[0_25px_80px_rgba(239,68,68,0.35)]"
      onClick={onExpand}
    >
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180407] via-[#090203] to-[#040102]" />
      
      {/* Real Poster Image Render */}
      {!imgError ? (
        <div className="relative z-10 w-full min-h-[560px] sm:min-h-[640px] flex items-center justify-center bg-black/90">
          <img 
            src="/poster1.jpeg" 
            alt="NARCOTICS - A Film by Vesni • Official Poster" 
            className="w-full h-auto max-h-[720px] object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImgError(true)}
          />
          {/* Subtle gradient vignette over image edges for neat blend */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
        </div>
      ) : (
        /* Fallback Graphic Poster if image fails */
        <div className="relative z-10 flex flex-col justify-between min-h-[620px] sm:min-h-[680px] p-6 sm:p-8 select-none">
          <div className="text-center pt-2">
            <div className="inline-block px-3 py-1 rounded border border-red-500/20 bg-red-950/40 text-[10px] sm:text-xs font-bold tracking-[0.35em] text-white/95 uppercase mb-1">
              P2 PRODUCTIONS
            </div>
            <div className="tracking-[0.55em] text-[10px] text-red-500 font-extrabold uppercase mt-1">
              PRESENTS
            </div>
          </div>

          <div className="text-center my-auto py-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-red-500 font-heading">
              NARCOTICS
            </h1>
            <div className="text-xs tracking-[0.4em] uppercase text-zinc-400 font-semibold mt-2">
              A FILM BY VESNI
            </div>
            <div className="mt-8">
              <div className="text-3xl font-extrabold tracking-[0.25em] text-white font-heading">
                ARUN
              </div>
              <div className="text-xs tracking-[0.35em] text-red-400 font-bold uppercase mt-1">
                IN HIS DEBUT FILM
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-red-500/30 bg-black/60 rounded-xl p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400">DIRECTED BY</span>
                <span className="font-bold uppercase text-white">VESNI</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400">DOP</span>
                <span className="font-bold uppercase text-white">ASWIN</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400">MUSIC</span>
                <span className="font-bold uppercase text-white">NK</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-zinc-400">EDITED BY</span>
                <span className="font-bold uppercase text-white">VESNI & ASWIN</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hover Expand Banner */}
      <div className="absolute top-4 right-4 z-20 bg-black/85 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-zinc-200 font-medium flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-lg">
        <Maximize2 size={13} className="text-red-400" /> Full Resolution Poster
      </div>
    </div>
  );
};

export default NarcoticsPoster;
