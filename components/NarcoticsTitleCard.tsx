/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Film } from 'lucide-react';

export const NarcoticsTitleCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-xl overflow-hidden border border-amber-500/20 bg-[#0c0a07] p-8 sm:p-12 shadow-[0_10px_40px_rgba(245,158,11,0.08)]">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.15)_0%,rgba(12,10,7,0.98)_80%)]" />

      <div className="relative z-10 text-center py-4">
        {/* Top Tagline */}
        <div className="text-xs sm:text-sm font-bold tracking-[0.35em] text-amber-300 uppercase mb-3 drop-shadow">
          DEBUT FILM FOR
        </div>

        {/* 3D Gold Title: ARUN */}
        <div className="relative inline-block my-3">
          {/* Subtle cyan and red flare accents */}
          <div className="absolute -top-2 left-1/4 w-4 h-4 rounded-full bg-cyan-400/80 blur-sm pointer-events-none" />
          <div className="absolute -top-2 right-1/4 w-4 h-4 rounded-full bg-red-500/80 blur-sm pointer-events-none" />

          <h2 
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase select-none font-heading"
            style={{
              background: 'linear-gradient(180deg, #fef08a 0%, #d97706 50%, #78350f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.9))'
            }}
          >
            ARUN
          </h2>
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/10 text-zinc-400 text-xs font-medium tracking-wider">
          <Film size={14} className="text-amber-400" />
          <span>Official Title Card • P2 Productions</span>
        </div>
      </div>
    </div>
  );
};

export default NarcoticsTitleCard;
