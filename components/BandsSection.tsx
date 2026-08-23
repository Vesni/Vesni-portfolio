/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  Music, 
  ExternalLink, 
  Disc, 
  Headphones, 
  Radio, 
  Share2, 
  Check, 
  Flame 
} from 'lucide-react';

export const BandsSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const STREAMING_PLATFORMS = [
    {
      name: 'Spotify',
      tagline: 'Stream official track on Spotify',
      url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1',
      badge: 'Spotify',
      cardBorder: 'hover:border-[#1DB954]',
      iconColor: 'text-[#1DB954]',
      btnStyle: 'bg-[#1DB954] text-black hover:bg-white',
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.308c-.216.353-.678.468-1.031.252-2.825-1.727-6.381-2.118-10.569-1.161-.403.092-.807-.162-.899-.565-.092-.403.162-.807.565-.899 4.584-1.049 8.522-.609 11.682 1.342.353.216.468.678.252 1.031zm1.47-3.264c-.272.443-.853.585-1.296.313-3.235-1.989-8.167-2.564-11.993-1.402-.497.151-1.026-.134-1.177-.631-.151-.497.134-1.026.631-1.177 4.375-1.328 9.814-.689 13.522 1.591.443.272.585.853.313 1.296zm.126-3.411c-3.879-2.304-10.279-2.516-13.985-1.391-.594.181-1.226-.16-1.407-.754-.181-.594.16-1.226.754-1.407 4.261-1.293 11.323-1.047 15.797 1.609.534.317.708 1.01.391 1.544-.317.534-1.01.708-1.544.391z"/>
        </svg>
      )
    },
    {
      name: 'YouTube Music',
      tagline: 'Listen on YouTube Music',
      url: 'https://music.youtube.com/watch?v=qM8I7Zoxy_Q',
      badge: 'YouTube Music',
      cardBorder: 'hover:border-[#FF0000]',
      iconColor: 'text-[#FF0000]',
      btnStyle: 'bg-[#FF0000] text-white hover:bg-white hover:text-black',
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-11.458c-2.404 0-4.354 1.95-4.354 4.354s1.95 4.354 4.354 4.354 4.354-1.95 4.354-4.354-1.95-4.354-4.354-4.354zm-1.294 6.174V9.636l3.524 1.992-3.524 1.992z"/>
        </svg>
      )
    },
    {
      name: 'Gaana',
      tagline: 'Artist Profile & Catalog',
      url: 'https://gaana.com/artist/vesni-lanus',
      badge: 'Gaana',
      cardBorder: 'hover:border-[#e72c30]',
      iconColor: 'text-[#ff474b]',
      btnStyle: 'bg-[#e72c30] text-white hover:bg-white hover:text-black',
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      )
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="bands" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#080b09] border-b border-white/5 relative">
      {/* Soft Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 ambient-glow-emerald pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Music size={14} /> Featured Single
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-heading tracking-tight">
              B<span className="text-emerald-400">ANDS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Written, Composed & Produced by <strong className="text-white font-semibold">Vesni</strong> • Vocals by <strong className="text-purple-400 font-semibold">R3$T</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
              {copiedLink ? 'Link Copied' : 'Share Song'}
            </button>
          </div>
        </div>

        {/* Highlight Banner: 25,000+ SoundCloud Plays */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900/80 to-zinc-900/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Headphones size={28} />
            </div>
            <div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
                SoundCloud Milestone
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                25,000+ Unique Streams
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                Across SoundCloud and multi-platform digital music releases.
              </p>
            </div>
          </div>

          <a
            href="https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Listen on Spotify <ExternalLink size={14} />
          </a>
        </div>

        {/* 2-Column Disc & Production Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Disc Artwork (Left 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
            {/* Spinning Disc visual */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-zinc-700 bg-zinc-950 flex items-center justify-center relative shadow-xl my-4">
              <div className="absolute inset-2 rounded-full border border-zinc-800" />
              <div className="absolute inset-8 rounded-full border border-zinc-800" />
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex flex-col items-center justify-center">
                <span className="text-xs font-black text-white font-heading">BANDS</span>
                <span className="text-[9px] text-emerald-400 font-medium">VESNI</span>
              </div>
            </div>

            <h4 className="text-lg font-bold text-white mt-2">BANDS - Single</h4>
            <p className="text-xs text-zinc-400 mt-1">Available on all major streaming platforms</p>
          </div>

          {/* Credits & Production (Right 7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <h4 className="text-lg font-bold text-white mb-4 font-heading">
                Track Credits
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="text-zinc-500 block uppercase font-medium mb-1">Written & Composed</span>
                  <span className="text-base font-bold text-white block">Vesni</span>
                  <span className="text-emerald-400 text-[11px]">Original Melody & Beat</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="text-zinc-500 block uppercase font-medium mb-1">Lead Vocals</span>
                  <span className="text-base font-bold text-white block">R3$T</span>
                  <span className="text-purple-400 text-[11px]">Vocal Performance</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="text-zinc-500 block uppercase font-medium mb-1">Music Production</span>
                  <span className="text-base font-bold text-white block">Vesni</span>
                  <span className="text-cyan-400 text-[11px]">Arrangement & Production</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <span className="text-zinc-500 block uppercase font-medium mb-1">Mixing & Mastering</span>
                  <span className="text-base font-bold text-white block">Vesni</span>
                  <span className="text-amber-400 text-[11px]">Audio Engineering</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Streaming Platform Links */}
        <div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 font-heading">
            Streaming Platforms
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STREAMING_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className={`p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 ${platform.cardBorder} transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={platform.iconColor}>{platform.icon}</div>
                    <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{platform.name}</h4>
                  <p className="text-xs text-zinc-400 mb-6">{platform.tagline}</p>
                </div>

                <div className={`w-full py-2.5 rounded-lg text-center font-bold text-xs uppercase tracking-wider ${platform.btnStyle} transition-colors`}>
                  Listen Now
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BandsSection;
