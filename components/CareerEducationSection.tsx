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
  Building, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Code2,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const CareerEducationSection: React.FC = () => {
  const CERTIFICATIONS = [
    {
      title: 'Web Development Certification',
      issuer: 'GUVI • IIT Madras',
      icon: Code2,
      color: 'emerald',
      date: 'Certified',
      desc: 'Advanced full-stack development, modern frontend engineering, scalable architectures, and server workflows accredited with IIT Madras Research Park partner GUVI.'
    },
    {
      title: 'Digital Marketing Certification',
      issuer: 'HubSpot Academy',
      icon: TrendingUp,
      color: 'amber',
      date: 'Certified',
      desc: 'Inbound marketing strategy, funnel optimization, content distribution, brand positioning, and analytics data modeling.'
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#08080b] border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-zinc-800">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            Background & Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
            Education, Internship & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal education, industrial development internships, sports captaincies, and accredited engineering certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Education Timeline (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2">
              <GraduationCap className="text-emerald-400" size={20} /> Academic Path
            </h3>

            {/* Current School */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.06)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Current School • 11th Grade
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <MapPin size={12} /> Tamil Nadu, India
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                Carmel Public School
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-3">
                Veppampattu, Tamil Nadu
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                Currently pursuing <strong>11th Grade</strong>, balancing senior academic coursework with enterprise software engineering, film direction, and cybersecurity research.
              </div>
            </div>

            {/* Indian Language School */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                  Oct 2018 – Jun 2026 • Grades 3 to 10
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <Calendar size={12} /> 8 Years
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                Indian Language School
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-4">
                Foundational Education & School Leadership
              </p>

              <div className="space-y-2 text-xs">
                <span className="text-zinc-400 block font-semibold uppercase tracking-wider text-[11px]">
                  Activities, Leadership & Societies:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Former POCSO Committee Head</span>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cauvery House Captain (Kho-Kho & Football)</span>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Defender for ILS Football Team</span>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Former Sports & ICT Committee Member</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Internship & Certifications (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2">
              <Briefcase className="text-cyan-400" size={20} /> Work Experience
            </h3>

            {/* InAmigos Internship */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-cyan-500/30 shadow-[0_10px_30px_rgba(6,182,212,0.06)]">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  Web Developer Intern
                </span>
                <span className="text-xs text-zinc-500">
                  Internship
                </span>
              </div>

              <h4 className="text-xl font-bold text-white font-heading mb-1">
                InAmigos Foundation
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-3">
                Full-Stack & Frontend Development
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                Served as a <strong>Web Developer Intern</strong>, designing and implementing interactive web components, optimizing responsive user layouts for desktop and mobile devices, and assisting with production deployments.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-cyan-300 border border-cyan-500/20 font-medium">
                  Web Development
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800 font-medium">
                  Responsive UI/UX
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800 font-medium">
                  Frontend Engineering
                </span>
              </div>
            </div>

            {/* Accredited Certifications */}
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-heading flex items-center gap-2 pt-2">
              <Award className="text-amber-400" size={20} /> Professional Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white shrink-0">
                      <Icon size={20} className={cert.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {cert.date}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 block mb-1.5">
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
