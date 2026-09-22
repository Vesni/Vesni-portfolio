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
  X
} from 'lucide-react';
import NarcoticsPoster from './NarcoticsPoster';
import NarcoticsTitleCard from './NarcoticsTitleCard';

export const NarcoticsSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'poster' | 'titlecard'>('poster');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CREDITS = [
    {
      role: 'Written & Directed By',
      name: 'Vesni',
      desc: 'Wrote the original script and directed the short film.',
      icon: Film,
      badge: 'Director & Writer'
    },
    {
      role: 'Lead Actor (Debut)',
      name: 'Arun',
      desc: 'First acting performance as the movie’s lead character.',
      icon: User,
      badge: 'Debut Actor'
    },
    {
      role: 'Camera & Lighting (DOP)',
      name: 'Aswin',
      desc: 'Handled cinematography, lighting, and camera setups.',
      icon: Camera,
      badge: 'Cinematographer'
    },
    {
      role: 'Music & Score',
      name: 'NK',
      desc: 'Composed the original background music and tracks.',
      icon: Music,
      badge: 'Music Director'
    },
    {
      role: 'Video Editing',
      name: 'Vesni & Aswin',
      desc: 'Cut all the scenes, timed transitions, and balanced colors.',
      icon: Scissors,
      badge: 'Editors'
    },
    {
      role: 'Production Studio',
      name: 'P2 Productions',
      desc: 'The studio banner producing and releasing the movie.',
      icon: Clapperboard,
      badge: 'Production Banner'
    }
  ];

  return (
    <section id="narcotics" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#0c0608] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Film size={13} /> Short Film
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading tracking-tight">
              NAR<span className="text-red-500">COTICS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Presented by <strong className="text-white">P2 Productions</strong> • Directed by <strong className="text-white">Vesni</strong> • Introducing <strong className="text-amber-400">Arun</strong>
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('poster')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'poster'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Movie Poster
            </button>
            <button
              onClick={() => setActiveView('titlecard')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'titlecard'
                  ? 'bg-amber-500 text-black font-bold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Arun Title Card
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Artwork Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {activeView === 'poster' ? (
              <div className="w-full">
                <NarcoticsPoster onExpand={() => setIsModalOpen(true)} />
                <p className="text-center text-xs text-zinc-500 mt-3">
                  Click the poster to view full screen
                </p>
              </div>
            ) : (
              <div className="w-full">
                <NarcoticsTitleCard onExpand={() => setIsModalOpen(true)} />
                <p className="text-center text-xs text-zinc-500 mt-3">
                  Click the card to view full screen
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Story & Cast */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-2">
                About The Film
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
                A Crime Drama Short Film
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                <strong>NARCOTICS</strong> is an intense crime thriller written and directed by Vesni, produced under the P2 Productions banner. The film marks the debut of lead actor <strong>Arun</strong>, exploring the hidden realities and risks of the underworld.
              </p>
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed">
                Shot on cinema cameras with custom lighting, original soundtrack scoring by NK, and post-production color grading completed by Vesni & Aswin.
              </div>
            </div>

            {/* Film Credits Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Cast & Crew Credits
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CREDITS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 font-semibold uppercase block">
                          {item.role}
                        </span>
                        <h5 className="text-sm font-bold text-white">
                          {item.name}
                        </h5>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              className="relative max-w-2xl max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center hover:bg-zinc-800"
              >
                <X size={18} />
              </button>
              <img 
                src={activeView === 'poster' ? '/poster1.jpeg' : '/tile card.jpeg'} 
                alt="Narcotics Artwork" 
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl border border-zinc-800"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default NarcoticsSection;
