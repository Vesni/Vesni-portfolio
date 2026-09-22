/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { 
  Terminal, 
  ShieldAlert, 
  Lock, 
  Layers, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Wrench, 
  Eye, 
  Flame,
  Sparkles
} from 'lucide-react';

export const SkillsEcosystemSection: React.FC = () => {
  const SKILL_DOMAINS = [
    {
      category: 'Software Architecture & Defensive Security',
      icon: Terminal,
      color: 'emerald',
      desc: 'Former offensive red-team practitioner using Kali Linux & BlackArch, now designing resilient zero-trust architectures and hardened web infrastructure.',
      skills: [
        'Full-Stack Web Development',
        'Responsive Multi-Device UI/UX',
        'Product Strategy & Systems Architecture',
        'Penetration Testing (Kali Linux / BlackArch)',
        'Red Teaming & Threat Emulation',
        'Defensive Security & Zero-Trust Hardening',
        'Applied Cryptography & Privacy-First Protocols'
      ]
    },
    {
      category: 'Design, Media Production & Cinematography',
      icon: Sparkles,
      color: 'red',
      desc: 'Commercial-grade aesthetics, screenwriting, cinematic color pipelines, audio mastering, and modern user-centric interfaces.',
      skills: [
        'Modern UI/UX Design & Prototyping',
        'Product & Ergonomic Design',
        'Graphic Design & Poster Art',
        'Brand Identity & Systems',
        'Motion Graphics & Transitions',
        'Cinematic Video Editing & Color Timing',
        'Soundtrack Production & Audio Mastering'
      ]
    },
    {
      category: 'Operations, eSports & Hardware Engineering',
      icon: Wrench,
      color: 'cyan',
      desc: 'Directing multi-sector enterprises, competitive tournament infrastructure, live daily streaming, and electronics diagnostics.',
      skills: [
        'Enterprise Management (VOBA)',
        'Digital Marketing & Growth',
        'Tournament Logistics (Clutch League)',
        'Live Broadcast Operations (Twitch / Porom Vlogs)',
        'Hardware Diagnostics & Micro-Soldering',
        'Component-Level Electronics Repair',
        'High-Concurrency Game Scaling'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0d] border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-zinc-800">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            Proficiencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
            Core Skill Matrix
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging adversarial cybersecurity, full-stack software development, film direction, and enterprise operations.
          </p>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white">
                      <Icon size={20} className={
                        domain.color === 'emerald' ? 'text-emerald-400' :
                        domain.color === 'red' ? 'text-red-400' : 'text-cyan-400'
                      } />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {domain.category}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {domain.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">
                  Production Verified • VOBA Standard
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsEcosystemSection;
