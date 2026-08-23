/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Film, 
  Camera, 
  Music, 
  Scissors, 
  User, 
  Clapperboard, 
  Maximize2, 
  X,
  Sparkles
} from 'lucide-react';
import NarcoticsPoster from './NarcoticsPoster';
import NarcoticsTitleCard from './NarcoticsTitleCard';

export const NarcoticsSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'poster' | 'titlecard'>('poster');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const CREDITS = [
    {
      role: 'Written & Directed By',
      name: 'Vesni',
      desc: 'Directed the short film under P2 Productions and wrote the script.',
      icon: Film,
      badge: 'Director & Writer',
      color: 'border-red-500/30 text-red-400 bg-red-950/20'
    },
    {
      role: 'Lead Actor (Debut)',
      name: 'Arun',
      desc: 'Debut film performance starring as the lead character.',
      icon: User,
      badge: 'Debut Actor',
      color: 'border-amber-500/30 text-amber-400 bg-amber-950/20'
    },
    {
      role: 'Director of Photography (DOP)',
      name: 'Aswin',
      desc: 'Handled cinematography, lighting, and camera work.',
      icon: Camera,
      badge: 'Cinematography',
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20'
    },
    {
      role: 'Music Director',
      name: 'NK',
      desc: 'Composed the original background score and soundtrack.',
      icon: Music,
      badge: 'A NK Musical',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20'
    },
    {
      role: 'Edited By',
      name: 'Vesni & Aswin',
      desc: 'Film pacing, video editing, and color grading.',
      icon: Scissors,
      badge: 'Editing',
      color: 'border-purple-500/30 text-purple-400 bg-purple-950/20'
    },
    {
      role: 'Production Studio',
      name: 'P2 Productions',
      desc: 'Independent production banner presenting NARCOTICS.',
      icon: Clapperboard,
      badge: 'Production Banner',
      color: 'border-zinc-500/30 text-zinc-300 bg-zinc-900/40'
    }
  ];

  return (
    <section id="narcotics" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0d0709] border-t border-b border-red-900/20 relative">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 ambient-glow-red pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-red-900/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Film size={14} /> Short Film Premiere
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-heading tracking-tight">
              NAR<span className="text-red-500">COTICS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Presented by <strong className="text-white font-semibold">P2 Productions</strong> • Directed by <strong className="text-white font-semibold">Vesni</strong> • Debut Film for <strong className="text-amber-400 font-semibold">Arun</strong>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('poster')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeView === 'poster'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Official Poster
            </button>
            <button
              onClick={() => setActiveView('titlecard')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeView === 'titlecard'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Arun Title Card
            </button>
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {activeView === 'poster' ? (
              <div className="w-full">
                <NarcoticsPoster onExpand={() => setIsPosterModalOpen(true)} />
                <p className="text-center text-xs text-zinc-500 mt-3">
                  Click on the poster to view in full size
                </p>
              </div>
            ) : (
              <div className="w-full">
                <NarcoticsTitleCard />
                <p className="text-center text-xs text-zinc-500 mt-3">
                  Official 3D Gold Title Reveal Artwork
                </p>
              </div>
            )}
          </div>

          {/* Overview & Information (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-red-900/20">
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                About The Film
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                <strong>NARCOTICS</strong> is an upcoming crime thriller short film written and directed by Vesni under P2 Productions, featuring Arun in his debut role. The project combines atmospheric night visuals, original music by NK, and tight editing by Vesni and Aswin.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase font-medium">Writer & Director</span>
                  <span className="text-white font-semibold text-sm">Vesni</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase font-medium">Lead Actor</span>
                  <span className="text-amber-400 font-semibold text-sm">Arun (Debut)</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase font-medium">Cinematography (DOP)</span>
                  <span className="text-cyan-400 font-semibold text-sm">Aswin</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase font-medium">Original Music</span>
                  <span className="text-emerald-400 font-semibold text-sm">NK (A NK Musical)</span>
                </div>
                <div className="col-span-2">
                  <span className="text-zinc-500 block uppercase font-medium">Edited By</span>
                  <span className="text-purple-400 font-semibold text-sm">Vesni & Aswin</span>
                </div>
              </div>
            </div>

            {/* Quick Switch Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveView('poster')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  activeView === 'poster' 
                    ? 'border-red-500/50 bg-red-950/20 text-white' 
                    : 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider text-red-400 block font-semibold mb-1">Asset 01</span>
                <span className="font-bold text-sm text-white block">Official Poster</span>
                <span className="text-xs text-zinc-500">Bike & billing credits</span>
              </button>

              <button
                onClick={() => setActiveView('titlecard')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  activeView === 'titlecard' 
                    ? 'border-amber-500/50 bg-amber-950/20 text-white' 
                    : 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider text-amber-400 block font-semibold mb-1">Asset 02</span>
                <span className="font-bold text-sm text-white block">3D Title Card</span>
                <span className="text-xs text-zinc-500">Arun Debut Reveal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Cast & Crew Grid */}
        <div className="pt-10 border-t border-red-900/20">
          <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 font-heading">
            Cast & Crew Credits
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CREDITS.map((c, i) => (
              <div key={i} className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${c.color}`}>
                    {c.badge}
                  </span>
                  <c.icon size={16} className="text-zinc-500" />
                </div>
                <span className="text-xs text-zinc-400 block">{c.role}</span>
                <h4 className="text-lg font-bold text-white mb-1.5">{c.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPosterModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative max-w-xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="absolute -top-10 right-0 text-zinc-400 hover:text-white flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              >
                <X size={18} /> Close
              </button>
              <NarcoticsPoster />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default NarcoticsSection;
