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
  Tv, 
  Bot, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Radio,
  ArrowUpRight
} from 'lucide-react';

export const VobaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'interactive' | 'esports' | 'media' | 'labs'>('all');

  const DIVISIONS = [
    {
      id: 'interactive',
      name: 'VOBA Interactive',
      subtitle: 'Consumer Tech, Scalable Platforms & AI',
      icon: Cpu,
      color: 'emerald',
      badge: 'Consumer Tech & AI',
      desc: 'Architecting next-generation communications, interactive web software, custom intelligence engines, and gaming portals.',
      items: [
        {
          name: 'Pulse Messenger',
          role: 'Flagship Real-time Comms App',
          desc: 'Modern privacy-centric communication app featuring end-to-end encryption, real-time voice/video calls, group chats, and broadcasts.',
          badge: '1 Year Online',
          link: 'https://pulse-msg.vercel.app/'
        },
        {
          name: 'VesGPT',
          role: 'In-House AI Architecture',
          desc: 'Custom proprietary AI model and workflow architecture tailored for autonomous operational logic and assistive generation.',
          badge: 'Proprietary AI',
          link: null
        },
        {
          name: 'PC27 Cricket (Paper Cricket 27)',
          role: 'Interactive Gaming Platform',
          desc: 'Interactive browser-based cricket gaming platform featuring seasonal content, responsive multiplayer algorithms, and community integration.',
          badge: 'Live Game',
          link: null
        }
      ]
    },
    {
      id: 'esports',
      name: 'VOBA Esports',
      subtitle: 'Tournament Logistics & Competitive Gaming',
      icon: Gamepad2,
      color: 'amber',
      badge: 'Esports & Gaming',
      desc: 'Powering competitive tournament infrastructures, fair-play enforcement, and exhilarating racing/action game development.',
      items: [
        {
          name: 'Clutch League',
          role: 'Official Tournament Operations',
          desc: 'Official competitive tournament system, bracket management, live caster pipelines, and high-stakes eSports league play.',
          badge: 'Official League',
          link: null
        },
        {
          name: 'Pulse Drifters',
          role: 'Adrenaline Gaming Project',
          desc: 'High-adrenaline high-speed gaming project under the VOBA gaming portfolio engineered for competitive multiplayer racers.',
          badge: 'Gaming Studio',
          link: null
        }
      ]
    },
    {
      id: 'media',
      name: 'VOBA Media & Cinema',
      subtitle: 'Broadcast, Cinematography & Audio Scoring',
      icon: Video,
      color: 'red',
      badge: 'Media Production',
      desc: 'Cinematic film production, commercial-grade cinema camera crews, original music scoring, and daily live broadcast entertainment.',
      items: [
        {
          name: 'Porom Vlogs',
          role: 'Daily Live Broadcasting Channel',
          desc: 'Official daily streaming broadcast running live on Twitch covering creator updates, gaming sessions, and community interaction.',
          badge: 'Twitch Daily',
          link: 'https://twitch.tv'
        },
        {
          name: 'VOBA Cinema Crew',
          role: 'Film Crew & Camera Operators',
          desc: 'In-house cinema camera crew and film production unit specializing in commercial-grade visuals, color grading, and screenwriting.',
          badge: 'Cinema Production',
          link: null
        },
        {
          name: 'P2 Productions',
          role: 'Original Scoring & Film Direction',
          desc: 'Creative home for the short film NARCOTICS, soundtrack composition, Foley recording, sound design, and audio master production.',
          badge: 'Film Banner',
          link: '#narcotics'
        }
      ]
    },
    {
      id: 'labs',
      name: 'VOBA Labs & Engineering',
      subtitle: 'Hardware Repair, Security & Diagnostics',
      icon: Wrench,
      color: 'cyan',
      badge: 'Hardware & Security',
      desc: 'Component-level board diagnostics, custom system assembly, offensive-tested defensive security auditing, and hardware rehabilitation.',
      items: [
        {
          name: 'Hardware Operations',
          role: 'Component-Level Electronics Diagnostics',
          desc: 'Micro-soldering, hardware motherboard analysis, component-level repairs, performance overclocking, and custom rigs.',
          badge: 'Lab Services',
          link: null
        },
        {
          name: 'Mindful Blocker & Productivity Tools',
          role: 'System Software & Utilities',
          desc: 'Lightweight browser utilities and focus automation tools protecting user attention and privacy across web sessions.',
          badge: 'Utilities',
          link: null
        },
        {
          name: 'Defensive Security & Privacy Audits',
          role: 'Adversarial Review & Hardening',
          desc: 'Leveraging offensive Kali Linux/BlackArch experience to build resilient zero-trust architectures and harden web endpoints.',
          badge: 'SecOps',
          link: null
        }
      ]
    }
  ];

  const filteredDivisions = activeTab === 'all' 
    ? DIVISIONS 
    : DIVISIONS.filter(d => d.id === activeTab);

  return (
    <section id="voba" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#07080a] border-b border-white/5 relative overflow-hidden">
      {/* Background ambient branding glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Enterprise Banner / Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* VOBA Official Logo Avatar */}
              <div className="relative group shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-950 border-2 border-emerald-500/40 p-1 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.25)] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/VOBA.png" 
                    alt="VOBA Enterprise Logo" 
                    className="w-full h-full object-contain filter drop-shadow"
                    onError={(e) => {
                      // Fallback if image fails to load in preview
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white font-black text-2xl font-heading hidden">
                    VOBA
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded bg-emerald-500 text-[10px] font-black text-black uppercase tracking-wider">
                  HQ
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 size={13} /> Multi-Sector Enterprise
                </div>
                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
                  VOBA <span className="text-zinc-500 text-xl sm:text-2xl font-normal lowercase font-sans">/ enterprise</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl">
                  Managed and Founded by <strong className="text-white">Vesni Lanus</strong>. Uniting creative technology, competitive gaming, cinema production, and hardware engineering.
                </p>
              </div>
            </div>

            {/* Direct Portal CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://vobastudios.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
              >
                Visit VOBA Studios <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Quick Summary Pill Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>4 Core Operational Divisions</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
              <span>Pulse Messenger Ecosystem</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
              <span>Clutch League eSports</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 size={16} className="text-red-400 shrink-0" />
              <span>VOBA Cinema & Camera Crew</span>
            </div>
          </div>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'all' 
                ? 'bg-white text-black' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Divisions (4)
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'interactive' 
                ? 'bg-emerald-500 text-black' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            VOBA Interactive (Apps & AI)
          </button>
          <button
            onClick={() => setActiveTab('esports')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'esports' 
                ? 'bg-amber-500 text-black' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            VOBA Esports (Clutch League)
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'media' 
                ? 'bg-red-500 text-white' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            VOBA Media (Cinema & Twitch)
          </button>
          <button
            onClick={() => setActiveTab('labs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'labs' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            VOBA Labs (Hardware & Repairs)
          </button>
        </div>

        {/* Divisions Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDivisions.map((div) => {
            const Icon = div.icon;
            return (
              <div 
                key={div.id}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white">
                        <Icon size={20} className={
                          div.color === 'emerald' ? 'text-emerald-400' :
                          div.color === 'amber' ? 'text-amber-400' :
                          div.color === 'red' ? 'text-red-400' : 'text-cyan-400'
                        } />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                          {div.badge}
                        </span>
                        <h3 className="text-xl font-bold text-white font-heading">
                          {div.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {div.desc}
                  </p>

                  {/* Division Holdings Items */}
                  <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                    {div.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            {item.name}
                            {item.link && (
                              <a 
                                href={item.link} 
                                target={item.link.startsWith('http') ? '_blank' : '_self'} 
                                rel="noreferrer"
                                className="text-emerald-400 hover:text-emerald-300"
                              >
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </h4>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-medium block mb-1">
                          {item.role}
                        </span>
                        <p className="text-xs text-zinc-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
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
