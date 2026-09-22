/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Code2, 
  TrendingUp, 
  MapPin 
} from 'lucide-react';

export const CareerEducationSection: React.FC = () => {
  const CERTIFICATIONS = [
    {
      title: 'Web Development Certificate',
      issuer: 'GUVI • IIT Madras Research Park',
      icon: Code2,
      color: 'emerald',
      date: 'Completed',
      desc: 'Trained in building full websites, creating responsive user interfaces, and managing servers and databases.'
    },
    {
      title: 'Digital Marketing Certificate',
      issuer: 'HubSpot Academy',
      icon: TrendingUp,
      color: 'amber',
      date: 'Completed',
      desc: 'Trained in online brand growth, content creation, social media strategy, and website analytics.'
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#08080b] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-zinc-800/80">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
            My Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading">
            School, Experience & Certificates
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1 max-w-2xl">
            My high school journey, student leadership and sports, web developer internship, and certified courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2">
              <GraduationCap className="text-emerald-400" size={18} /> Education & School
            </h3>

            {/* Current School */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Current School • 11th Grade
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <MapPin size={12} /> Tamil Nadu, India
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                Carmel Public School
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mb-3">
                Veppampattu, Tamil Nadu
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Currently studying in <strong>11th Grade</strong>, balancing high school academics with building apps, making movies, and running VOBA.
              </p>
            </div>

            {/* Indian Language School */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                  Oct 2018 – Jun 2026 • 3rd to 10th Grade
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Calendar size={12} /> 8 Years
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                Indian Language School
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4">
                School Leadership & Sports Activities
              </p>

              <div className="space-y-2 text-xs">
                <span className="text-zinc-400 block font-semibold text-xs mb-1">
                  Roles & School Activities:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Head of Student Safety (POCSO) Committee</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cauvery House Captain (Kho-Kho & Football)</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Defender on the School Football Team</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Member of Sports & Computer Clubs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Internship & Certifications (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2">
              <Briefcase className="text-cyan-400" size={18} /> Work Experience
            </h3>

            {/* InAmigos Internship */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  Web Developer Intern
                </span>
                <span className="text-xs text-zinc-500">
                  Internship
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                InAmigos Foundation
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mb-3">
                Web Development & Frontend Design
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                Worked as a <strong>Web Developer Intern</strong>, designing clean web pages, making sure the site looks great on both phones and computers, and helping maintain code.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-cyan-300 border border-cyan-500/20">
                  Website Design
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800">
                  Mobile Responsive
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800">
                  Frontend Code
                </span>
              </div>
            </div>

            {/* Accredited Certifications */}
            <h3 className="text-lg font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2 pt-2">
              <Award className="text-amber-400" size={18} /> Verified Certificates
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white shrink-0 mt-0.5">
                      <Icon size={18} className={cert.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {cert.date}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 block mb-1">
                        {cert.issuer}
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerEducationSection;
