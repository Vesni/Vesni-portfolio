/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { 
  Code, 
  Sparkles, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';

export const SkillsEcosystemSection: React.FC = () => {
  const SKILL_DOMAINS = [
    {
      category: 'Software & Web Development',
      icon: Code,
      color: 'emerald',
      desc: 'Building responsive websites, useful apps, and testing them thoroughly to make sure they are safe from hackers.',
      skills: [
        'Full-stack website development',
        'Clean, mobile-friendly interface design',
        'High-speed real-time messaging apps',
        'Testing websites for security holes',
        'Ethical hacking and security audits',
        'Protecting passwords and private user data',
        'Database setup and server workflows'
      ]
    },
    {
      category: 'Design, Movies & Music',
      icon: Sparkles,
      color: 'red',
      desc: 'Creating visual artwork, directing short films, editing video, and composing original music soundtracks.',
      skills: [
        'Simple, intuitive user interface design',
        'Movie directing and scriptwriting',
        'Poster and promotional artwork',
        'Video editing and scene timing',
        'Color grading and visual polish',
        'Music production and songwriting',
        'Audio mixing and sound effects'
      ]
    },
    {
      category: 'Management, Gaming & Electronics',
      icon: Wrench,
      color: 'cyan',
      desc: 'Leading projects at VOBA, running esports tournaments, streaming live, and repairing computer hardware.',
      skills: [
        'Managing VOBA and company projects',
        'Running online gaming tournaments (Clutch League)',
        'Hosting daily live streams on Twitch',
        'Repairing broken computers and gadgets',
        'Soldering small circuit board chips',
        'Custom gaming PC builds and tuning',
        'Social media and online brand growth'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#090a0d] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-zinc-800/80">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading">
            Skills & What I Do
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-2xl">
            A simple overview of the skills, software, and creative tools I work with every day.
          </p>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white">
                      <Icon size={18} className={
                        domain.color === 'emerald' ? 'text-emerald-400' :
                        domain.color === 'red' ? 'text-red-400' : 'text-cyan-400'
                      } />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {domain.category}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {domain.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 size={14} className={
                          domain.color === 'emerald' ? 'text-emerald-400 shrink-0 mt-0.5' :
                          domain.color === 'red' ? 'text-red-400 shrink-0 mt-0.5' : 'text-cyan-400 shrink-0 mt-0.5'
                        } />
                        <span>{skill}</span>
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

export default SkillsEcosystemSection;
