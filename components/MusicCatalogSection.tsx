/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  ExternalLink, 
  Headphones, 
  Music, 
  Radio, 
  Share2, 
  Check, 
  Youtube
} from 'lucide-react';

export const MusicCatalogSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const SONGS = [
    {
      id: 'clam',
      title: 'She Likes My Clam',
      tagline: 'Brand New Single • Out Now',
      status: 'NEW SONG',
      description: 'My brand new single featuring upbeat rhythm, catchy melodies, and heavy bass. Listen to it now on YouTube or streaming services.',
      artist: 'Vesni',
      streams: 'Trending on YouTube',
      youtubeUrl: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ',
      featured: true,
      platforms: [
        { name: 'Watch on YouTube', url: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ', icon: Youtube, color: 'text-red-500' },
        { name: 'Listen on Spotify', url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', icon: Headphones, color: 'text-emerald-400' },
        { name: 'Listen on Gaana', url: 'https://gaana.com/artist/vesni-lanus', icon: Radio, color: 'text-amber-400' }
      ]
    },
    {
      id: 'bands',
      title: 'BANDS',
      tagline: '25,000+ Streams Hit',
      status: 'POPULAR TRACK',
      description: 'Produced, written, and mixed by Vesni featuring vocals by R3$T. Reached over 25,000 plays across SoundCloud and streaming platforms.',
      artist: 'Vesni feat. R3$T',
      streams: '25,000+ Total Plays',
      youtubeUrl: 'https://music.youtube.com/watch?v=qM8I7Zoxy_Q',
      featured: false,
      platforms: [
        { name: 'Listen on Spotify', url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', icon: Headphones, color: 'text-emerald-400' },
        { name: 'YouTube Music', url: 'https://music.youtube.com/watch?v=qM8I7Zoxy_Q', icon: Youtube, color: 'text-red-500' },
        { name: 'Listen on Gaana', url: 'https://gaana.com/artist/vesni-lanus', icon: Radio, color: 'text-amber-400' }
      ]
    }
  ];

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="music" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#07090b] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Music size={13} /> Original Music
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading tracking-tight">
              Music & <span className="text-rose-400">Songs</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-1">
              Songs written and produced by <strong className="text-white">Vesni Lanus</strong>. Listen on YouTube, Spotify, and Gaana.
            </p>
          </div>

          <a
            href="https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <Headphones size={15} className="text-emerald-400" />
            Spotify Artist Profile
          </a>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SONGS.map(song => (
            <div
              key={song.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    song.featured ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {song.status}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {song.streams}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                  {song.title}
                </h3>
                <span className="text-xs text-zinc-400 font-medium block mb-3">
                  By {song.artist}
                </span>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {song.description}
                </p>
              </div>

              {/* Streaming Links */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  Listen Here
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {song.platforms.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <a
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 flex items-center justify-between text-xs text-zinc-300 hover:text-white transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={15} className={p.color} />
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <ExternalLink size={12} className="text-zinc-500" />
                      </a>
                    );
                  })}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => handleCopy(song.youtubeUrl, song.id)}
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-950 border border-zinc-800 transition-colors"
                  >
                    {copiedLink === song.id ? (
                      <>
                        <Check size={12} className="text-emerald-400" /> Copied link!
                      </>
                    ) : (
                      <>
                        <Share2 size={12} /> Share song link
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MusicCatalogSection;
