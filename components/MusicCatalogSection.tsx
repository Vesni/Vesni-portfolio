/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Disc, 
  Headphones, 
  Music, 
  Radio, 
  Flame, 
  Sparkles, 
  Share2, 
  Check, 
  Youtube,
  Volume2
} from 'lucide-react';

export const MusicCatalogSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const SONGS = [
    {
      id: 'clam',
      title: 'She Likes My Clam',
      tagline: 'Brand New Single • Out Now Worldwide',
      status: 'NEW RELEASE',
      badgeColor: 'bg-rose-500 text-white',
      accentColor: 'border-rose-500/40 shadow-rose-500/10',
      description: 'The sensational new single by Vesni. Featuring hard-hitting rhythm, infectious hooks, and signature dark punchy mixing.',
      artist: 'Vesni',
      streams: 'Trending on YouTube & All Platforms',
      youtubeUrl: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ',
      featured: true,
      platforms: [
        { name: 'YouTube', url: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ', icon: Youtube, color: 'text-red-500' },
        { name: 'Spotify Catalog', url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', icon: Headphones, color: 'text-emerald-400' },
        { name: 'Gaana', url: 'https://gaana.com/artist/vesni-lanus', icon: Radio, color: 'text-amber-400' }
      ]
    },
    {
      id: 'bands',
      title: 'BANDS',
      tagline: '25,000+ Streams Milestone Single',
      status: 'MILESTONE HIT',
      badgeColor: 'bg-emerald-500 text-black',
      accentColor: 'border-emerald-500/40 shadow-emerald-500/10',
      description: 'Written, composed, produced, and mixed by Vesni featuring lead vocals by R3$T. Surpassed over 25k plays on SoundCloud and global platforms.',
      artist: 'Vesni feat. R3$T',
      streams: '25,000+ Unique Plays',
      youtubeUrl: 'https://music.youtube.com/watch?v=qM8I7Zoxy_Q',
      featured: false,
      platforms: [
        { name: 'Spotify Track', url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', icon: Headphones, color: 'text-emerald-400' },
        { name: 'YouTube Music', url: 'https://music.youtube.com/watch?v=qM8I7Zoxy_Q', icon: Youtube, color: 'text-red-500' },
        { name: 'Gaana Artist', url: 'https://gaana.com/artist/vesni-lanus', icon: Radio, color: 'text-amber-400' }
      ]
    }
  ];

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="music" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#07090b] border-b border-white/5 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Music size={14} /> Official Discography & Releases
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-heading tracking-tight">
              MUSIC <span className="text-rose-500">CATALOG</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Produced, arranged, and mastered by <strong className="text-white font-semibold">Vesni Lanus</strong>. Streaming across YouTube, Spotify, and Gaana.
            </p>
          </div>

          <a
            href="https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <Headphones size={15} className="text-emerald-400" />
            Spotify Artist Profile
          </a>
        </div>

        {/* SONG RELEASES CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SONGS.map((song) => (
            <div 
              key={song.id}
              className={`p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border ${song.accentColor} transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${song.badgeColor}`}>
                  {song.status}
                </span>

                <button
                  onClick={() => handleCopy(song.youtubeUrl, song.id)}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedLink === song.id ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  <span className="text-[11px] font-medium">{copiedLink === song.id ? 'Copied' : 'Share'}</span>
                </button>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-heading tracking-tight mb-2">
                  {song.title}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-4">
                  {song.artist} • {song.tagline}
                </span>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {song.description}
                </p>

                {/* Milestone Stat pill */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between text-xs mb-8">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Disc size={15} className="text-rose-400 animate-spin" style={{ animationDuration: '6s' }} />
                    Performance Metric
                  </span>
                  <span className="font-bold text-white">
                    {song.streams}
                  </span>
                </div>
              </div>

              {/* Streaming Platform Actions */}
              <div className="pt-6 border-t border-zinc-800/80 space-y-3">
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-2">
                  Listen On Official Platforms
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {song.platforms.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <a
                        key={idx}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800/90 text-xs font-bold text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-all hover:scale-102"
                      >
                        <Icon size={14} className={p.color} />
                        <span className="truncate">{p.name}</span>
                        <ExternalLink size={11} className="text-zinc-500" />
                      </a>
                    );
                  })}
                </div>

                {/* Direct Listen CTA button */}
                <a
                  href={song.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full mt-2 py-3 rounded-xl ${song.featured ? 'bg-rose-500 hover:bg-rose-400 text-white' : 'bg-emerald-500 hover:bg-emerald-400 text-black'} font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg`}
                >
                  <Play size={14} fill="currentColor" /> Play on YouTube / Stream Now
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MusicCatalogSection;
