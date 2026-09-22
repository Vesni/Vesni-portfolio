/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Film, Sparkles, Maximize2 } from 'lucide-react';

export const NarcoticsTitleCard: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-2xl overflow-hidden border border-amber-500/30 bg-[#0c0a07] p-4 sm:p-6 shadow-[0_15px_50px_rgba(245,158,11,0.12)]">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.2)_0%,rgba(12,10,7,0.98)_80%)]" />

      <div className="relative z-10 text-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-bold tracking-[0.3em] text-amber-300 uppercase mb-4 drop-shadow">
          <Sparkles size={13} className="text-amber-400" />
          OFFICIAL TITLE CARD REVEAL
        </div>

        {/* Real Title Card Image from user asset 'tile card.jpeg' */}
        {!imgError ? (
          <div className="rounded-xl overflow-hidden border border-amber-500/20 shadow-2xl bg-black/80 my-2">
            <img 
              src="/tile card.jpeg" 
              alt="ARUN - Debut Film Title Card in NARCOTICS" 
              className="w-full h-auto max-h-[380px] object-contain select-none"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          /* Rendered Typography fallback */
          <div className="my-6 py-8 px-4 rounded-xl bg-black/60 border border-amber-500/20">
            <div className="text-xs font-bold tracking-[0.4em] text-amber-400 uppercase mb-2">
              DEBUT FILM FOR
            </div>
            <h2 
              className="text-6xl sm:text-7xl font-black tracking-tight uppercase select-none font-heading"
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
        )}

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-white/10 text-zinc-400 text-xs font-medium tracking-wider">
          <Film size={14} className="text-amber-400" />
          <span>Starring in NARCOTICS • A Film by Vesni • P2 Productions</span>
        </div>
      </div>
    </div>
  );
};

export default NarcoticsTitleCard;
