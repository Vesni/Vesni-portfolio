/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Cpu, 
  Gamepad2, 
  Video, 
  Wrench, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const VobaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'interactive' | 'esports' | 'media' | 'labs'>('all');

  const DIVISIONS = [
    {
      id: 'interactive',
      name: 'Apps & Software',
      shortName: 'VOBA Interactive',
      subtitle: 'Web Apps, Messaging & AI Tools',
      icon: Cpu,
      color: 'emerald',
      badge: 'Software & Apps',
      desc: 'Building helpful apps, fast communication tools, and custom AI helpers that make everyday tasks easier.',
      items: [
        {
          name: 'Pulse Messenger',
          role: 'Private Chat & Call App',
          desc: 'A safe, high-speed messaging platform with completely private texts, group chats, and free voice/video calling.',
          badge: '1 Year Online',
          link: 'https://pulse-msg.vercel.app/'
        },
        {
          name: 'VesGPT',
          role: 'Custom AI Assistant',
          desc: 'Our own AI tool built to answer questions, write content, and automate repetitive tasks.',
          badge: 'AI Tool',
          link: null
        },
        {
          name: 'PC27 Cricket',
          role: 'Online Browser Game',
          desc: 'A fun, lightweight cricket game you can pick up and play instantly in your browser.',
          badge: 'Playable Game',
          link: null
        }
      ]
    },
    {
      id: 'esports',
      name: 'Gaming & Tournaments',
      shortName: 'VOBA Esports',
      subtitle: 'Competitive Gaming & Leagues',
      icon: Gamepad2,
      color: 'amber',
      badge: 'Esports & Gaming',
      desc: 'Organizing competitive gaming tournaments, managing leaderboards, and developing fast-paced multiplayer games.',
      items: [
        {
          name: 'Clutch League',
          role: 'Official Tournaments',
          desc: 'Our official tournament system where players and teams compete in organized brackets with live standings.',
          badge: 'Official League',
          link: null
        },
        {
          name: 'Pulse Drifters',
          role: 'Racing Game Project',
          desc: 'An action-packed multiplayer racing game project built for speed and competition.',
          badge: 'In Development',
          link: null
        }
      ]
    },
    {
      id: 'media',
      name: 'Films & Streaming',
      shortName: 'VOBA Media',
      subtitle: 'Movies, Live Broadcasts & Music',
      icon: Video,
      color: 'red',
      badge: 'Media & Video',
      desc: 'Directing short films, running daily Twitch streams, shooting with professional cameras, and composing original music.',
      items: [
        {
          name: 'Porom Vlogs',
          role: 'Daily Live Streams on Twitch',
          desc: 'Daily gaming and community live streams on Twitch where we play games, share updates, and talk with viewers.',
          badge: 'Daily on Twitch',
          link: 'https://twitch.tv'
        },
        {
          name: 'VOBA Cinema Crew',
          role: 'Camera & Video Production',
          desc: 'Our video team handling lighting, camera angles, color correction, and video editing for movies and projects.',
          badge: 'Film Crew',
          link: null
        },
        {
          name: 'P2 Productions',
          role: 'Original Film Banner',
          desc: 'The creative banner behind our crime thriller short film NARCOTICS and original music tracks.',
          badge: 'Film Banner',
          link: '#narcotics'
        }
      ]
    },
    {
      id: 'labs',
      name: 'Electronics & Tech Lab',
      shortName: 'VOBA Labs',
      subtitle: 'Gadget Repair & Safety Checks',
      icon: Wrench,
      color: 'cyan',
      badge: 'Hardware & Security',
      desc: 'Repairing broken computer motherboards, soldering small electronics, and testing software to keep it safe from hackers.',
      items: [
        {
          name: 'Electronics & PC Repair',
          role: 'Hardware Diagnostics & Soldering',
          desc: 'Finding broken circuits, soldering small microchips, fixing laptops and consoles, and building custom computers.',
          badge: 'Lab Services',
          link: null
        },
        {
          name: 'Mindful Blocker',
          role: 'Focus & Productivity Tool',
          desc: 'A simple tool that blocks time-wasting websites so you can get more work done without distractions.',
          badge: 'Free Utility',
          link: null
        },
        {
          name: 'Security Checks',
          role: 'Testing & Protecting Apps',
          desc: 'Testing apps and websites to find security holes and fix them before anyone can abuse them.',
          badge: 'Cyber Safety',
          link: null
        }
      ]
    }
  ];

  const filteredDivisions = activeTab === 'all' 
    ? DIVISIONS 
    : DIVISIONS.filter(d => d.id === activeTab);

  return (
    <section id="voba" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#07080a] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Enterprise Header Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* Logo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-950 border border-emerald-500/30 p-2 flex items-center justify-center shrink-0 shadow-md">
                <img 
                  src="/VOBA.png" 
                  alt="VOBA" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                  <Building2 size={13} /> Founded & Managed by Vesni Lanus
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white font-heading">
                  VOBA <span className="text-zinc-500 text-lg font-normal font-sans lowercase">/ my company</span>
                </h2>
                <p className="text-zinc-300 text-sm mt-1 max-w-xl leading-relaxed">
                  VOBA is my company that brings together 4 areas I love: software apps, competitive gaming tournaments, film production, and electronics repair.
                </p>
              </div>
            </div>

            {/* Direct Link */}
            <div>
              <a
                href="https://vobastudios.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md hover:scale-105"
              >
                Visit VOBA Website <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-black'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All 4 Divisions
          </button>

          {DIVISIONS.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === d.id
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <d.icon size={14} />
              {d.name}
            </button>
          ))}
        </div>

        {/* Division Cards */}
        <div className="space-y-8">
          {filteredDivisions.map(division => {
            const Icon = division.icon;
            return (
              <div 
                key={division.id}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all"
              >
                {/* Division Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800/80 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        {division.name} <span className="text-xs text-zinc-400 font-normal font-sans">({division.shortName})</span>
                      </h3>
                      <p className="text-xs text-zinc-400">
                        {division.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 w-fit">
                    {division.badge}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                  {division.desc}
                </p>

                {/* Sub-projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {division.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1">
                          {item.name}
                        </h4>
                        <span className="text-xs text-emerald-400/90 font-medium block mb-2">
                          {item.role}
                        </span>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {item.link && (
                        <div className="pt-4 mt-3 border-t border-zinc-900">
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                          >
                            Open {item.name} <ArrowRight size={12} />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VobaSection;
