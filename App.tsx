/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin,
  Terminal, 
  Shield, 
  Cpu, 
  Code, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight, 
  Gamepad2, 
  Mail,
  ExternalLink,
  Music,
  Film,
  Building2,
  Layers,
  Sparkles,
  Move,
  Radio,
  Lock,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';

import ProjectCard from './components/ArtistCard'; 
import NarcoticsSection from './components/NarcoticsSection';
import MusicCatalogSection from './components/MusicCatalogSection';
import PulseAnniversarySection from './components/PulseAnniversarySection';
import VobaSection from './components/VobaSection';
import CareerEducationSection from './components/CareerEducationSection';
import SkillsEcosystemSection from './components/SkillsEcosystemSection';
import PageIntro from './components/PageIntro';
import KaliModal from './components/KaliModal';
import { Project } from './types';

const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'PULSE MESSENGER', 
    techStack: 'WebSockets • Real-Time • E2EE Mesh', 
    tags: ['Flagship App', '1-Year Milestone', 'Web & Mobile'],
    year: '2024–2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern, high-speed real-time communication platform engineered for instant messaging, private groups, and seamless zero-latency voice/video streaming.',
    link: 'https://pulse-msg.vercel.app/'
  },
  { 
    id: '02', 
    title: 'VOBA STUDIOS HQ', 
    techStack: 'Enterprise Portal • React • Cloud Edge', 
    tags: ['Enterprise', 'Gaming & eSports', 'Cinema'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    description: 'Central portal for VOBA, uniting VOBA Interactive (Pulse Messenger, VesGPT), VOBA Esports (Clutch League), VOBA Media, and VOBA Labs.',
    link: 'https://vobastudios.vercel.app/'
  },
  { 
    id: '03', 
    title: 'VESNI STUDIOS', 
    techStack: 'Audio Engine • Web Stack', 
    tags: ['Music', 'Studio', 'Discography'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'Central hub for original music produced by Vesni. Explore albums, singles including "She Likes My Clam" and "BANDS" (25k+ streams).',
    link: 'https://vesnistudios.vercel.app/'
  },
  { 
    id: '04', 
    title: 'SILKY WAY', 
    techStack: 'Next.js • Firebase', 
    tags: ['Marketplace', 'Real-time Chat', 'E-Commerce'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'A full-featured listing marketplace with real-time chat between buyers and sellers, user authentication, and responsive product indexing.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '05', 
    title: 'VESNI OS', 
    techStack: 'JavaScript • CSS3 • Web Kernel', 
    tags: ['Web OS', 'Window Manager', 'Interactive'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A web-based desktop operating system featuring a functional terminal, draggable window management, custom file system, and native web apps.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '06', 
    title: 'CYBER OS', 
    techStack: 'React • Strategy Engine', 
    tags: ['Hacking Game', 'Cybersecurity', 'Simulation'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A strategic hacking simulation where players choose between White Hat defense and Black Hat offense to secure or breach simulated networks.',
    link: 'https://hacksim.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { 
    id: '01', 
    title: 'Founder & MD of VOBA', 
    desc: 'Managing a multi-sector enterprise uniting creative technology, competitive gaming (Clutch League), cinema, and hardware labs.', 
    icon: Building2, 
    color: 'text-emerald-400', 
    metric: 'Enterprise Founder' 
  },
  { 
    id: '02', 
    title: 'Pulse Messenger 1 Year Online', 
    desc: 'Celebrating 1-year anniversary since public deployment of the real-time encrypted messaging and calling platform.', 
    icon: Sparkles, 
    color: 'text-cyan-400', 
    metric: '365+ Days Uptime' 
  },
  { 
    id: '03', 
    title: '25,000+ Music Plays & New Singles', 
    desc: 'Surpassed 25k plays on SoundCloud with hit single BANDS; new single "She Likes My Clam" out worldwide on YouTube.', 
    icon: Music, 
    color: 'text-rose-400', 
    metric: '25K+ Streams' 
  },
  { 
    id: '04', 
    title: 'Film Director: NARCOTICS', 
    desc: 'Wrote and directed neo-noir crime thriller short film NARCOTICS presented by P2 Productions starring Arun in his debut role.', 
    icon: Film, 
    color: 'text-red-400', 
    metric: 'P2 Productions' 
  },
  { 
    id: '05', 
    title: 'GUVI IIT Madras Certified', 
    desc: 'Certified in Full-Stack Web Development via GUVI IIT Madras Research Park; certified in Digital Marketing by HubSpot.', 
    icon: Award, 
    color: 'text-amber-400', 
    metric: 'Accredited' 
  },
  { 
    id: '06', 
    title: 'Offensive to Defensive Security', 
    desc: 'Deep hands-on red team experience using Kali Linux & BlackArch, translating into hardened zero-trust web architectures.', 
    icon: Shield, 
    color: 'text-blue-400', 
    metric: 'SecOps Auditor' 
  }
];

const SOCIALS = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vesni-lanus/', label: 'linkedin.com/in/vesni-lanus' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Vesni', label: 'github.com/Vesni' },
  { name: 'VOBA Studios', icon: Building2, url: 'https://vobastudios.vercel.app/', label: 'vobastudios.vercel.app' },
  { name: 'Pulse Messenger', icon: Sparkles, url: 'https://pulse-msg.vercel.app/', label: 'pulse-msg.vercel.app' },
  { name: 'YouTube Song', icon: Music, url: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ', label: 'She Likes My Clam' },
  { name: 'Spotify', icon: HeadphonesIcon, url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', label: 'Official Discography' },
  { name: 'Gaana', icon: Radio, url: 'https://gaana.com/artist/vesni-lanus', label: 'Artist Profile' },
  { name: 'Email', icon: Mail, url: 'mailto:vesni277@gmail.com', label: 'vesni277@gmail.com' }
];

function HeadphonesIcon(props: any) {
  return <Music {...props} />;
}

const NAV_ITEMS = [
  { label: 'VOBA', id: 'voba' },
  { label: 'Pulse 1Y', id: 'pulse' },
  { label: 'Film', id: 'narcotics' },
  { label: 'Music', id: 'music' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Software', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' }
];

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isKaliModalOpen, setIsKaliModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('voba');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-white font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* PAGE INTRO OVERLAY */}
      <AnimatePresence>
        {showIntro && (
          <PageIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#07080a]/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-emerald-500/40 p-1 flex items-center justify-center group-hover:border-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <img 
                src="/VOBA.png" 
                alt="VOBA" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-black text-xs text-white">V</span>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight font-heading block leading-none">
                VESNI LANUS
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest leading-tight">
                FOUNDER OF VOBA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors py-1 ${
                  activeSection === item.id 
                    ? 'text-emerald-400 font-bold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Replay Intro + Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowIntro(true)}
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all cursor-pointer"
            >
              Replay Intro
            </button>

            <a
              href="https://vobastudios.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20"
            >
              VOBA HQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a0c10] border-b border-zinc-800 px-6 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-emerald-400"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => { setIsMenuOpen(false); setShowIntro(true); }}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Replay Intro
              </button>
              <a
                href="https://vobastudios.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-md bg-emerald-500 text-black font-bold text-xs uppercase"
              >
                VOBA HQ
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Founder & Managing Director of VOBA • Full-Stack Engineer • Film Director
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-white uppercase font-heading mb-6">
              VESNI <span className="text-emerald-400">LANUS</span>
            </h1>

            {/* Bio summary */}
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
              Turning ambitious ideas into polished, production-ready ecosystems. Specializing in full-stack engineering, modern UI/UX design, cinematic media with <strong className="text-red-400 font-semibold">P2 Productions</strong>, and defensive cybersecurity.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center items-center">
              <button
                onClick={() => scrollTo('voba')}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
              >
                <Building2 size={16} /> VOBA Enterprise
              </button>

              <button
                onClick={() => scrollTo('pulse')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:scale-105"
              >
                <Sparkles size={16} /> Pulse 1Y Anniversary
              </button>

              <button
                onClick={() => scrollTo('narcotics')}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-600/20 hover:scale-105"
              >
                <Film size={16} /> Film: NARCOTICS
              </button>

              <button
                onClick={() => scrollTo('music')}
                className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-rose-600/20 hover:scale-105"
              >
                <Music size={16} /> Music Discography
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 1: VOBA ENTERPRISE */}
        <VobaSection />

        {/* SECTION 2: PULSE MESSENGER 1-YEAR ANNIVERSARY */}
        <PulseAnniversarySection />

        {/* SECTION 3: NARCOTICS SHORT FILM (Poster & Arun Title Card) */}
        <NarcoticsSection />

        {/* SECTION 4: MUSIC CATALOG (She Likes My Clam & BANDS) */}
        <MusicCatalogSection />

        {/* SECTION 5: EDUCATION, INTERNSHIP & CERTIFICATIONS */}
        <CareerEducationSection />

        {/* SECTION 6: CORE SKILL MATRIX & ECOSYSTEM */}
        <SkillsEcosystemSection />

        {/* SECTION 7: PROJECTS / SOFTWARE VAULT */}
        <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#090a0d] border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Selected Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
                  Software Applications
                </h2>
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                {PROJECTS.length} Featured Applications
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map(p => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 8: ACHIEVEMENTS & MILESTONES */}
        <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#07080a] border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="mb-16 pb-8 border-b border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Highlights
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
                Milestones & Stats
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map(ach => (
                <div 
                  key={ach.id}
                  className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-zinc-950 border border-zinc-800 ${ach.color}`}>
                        <ach.icon size={22} />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {ach.metric}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">
                      {ach.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 9: DETAILED PROFESSIONAL BIO */}
        <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#090b0e] border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Founder • Technologist • Director
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading leading-tight">
                About Vesni Lanus
              </h2>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I’m a developer, product strategist, and creative director passionate about turning ambitious ideas into polished, production-ready ecosystems. I specialize in full-stack engineering, modern UI/UX design, cinematic media, scalable digital infrastructure, and defensive cybersecurity.
                </p>
                <p>
                  My background includes hands-on experience in offensive security and red teaming using tools like <strong className="text-cyan-400 font-semibold">Kali Linux</strong> and <strong className="text-cyan-400 font-semibold">BlackArch</strong>. Today, I channel that adversarial mindset into architecting resilient systems, identifying vulnerabilities before they can be exploited, and building privacy-first protocols.
                </p>
                <p>
                  Currently, I serve as the <strong className="text-emerald-400 font-semibold">Founder & Managing Director of VOBA</strong>—a multi-sector enterprise uniting creative technology, competitive gaming, hardware engineering, and digital media under one roof.
                </p>
              </div>

              {/* LinkedIn Direct Connect Button */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/vesni-lanus/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                >
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>

                <a
                  href="https://vobastudios.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <Building2 size={16} className="text-emerald-400" /> Visit VOBA Studios
                </a>
              </div>
            </div>

            {/* Right Card: Quick Identity Digest */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-heading">
                Operational Overview
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                    Enterprise
                  </span>
                  <span className="text-sm font-bold text-white block">VOBA (Founder & MD)</span>
                  <p className="text-zinc-400 text-xs mt-1">VOBA Interactive, VOBA Esports, VOBA Media, VOBA Labs.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                    Flagship Comms
                  </span>
                  <span className="text-sm font-bold text-white block">Pulse Messenger</span>
                  <p className="text-zinc-400 text-xs mt-1">1 Year Online • Real-time encrypted messaging and calling.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block mb-1">
                    Cinema & Production
                  </span>
                  <span className="text-sm font-bold text-white block">P2 Productions</span>
                  <p className="text-zinc-400 text-xs mt-1">Directed short film NARCOTICS starring Arun.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block mb-1">
                    Music & Audio
                  </span>
                  <span className="text-sm font-bold text-white block">Vesni Discography</span>
                  <p className="text-zinc-400 text-xs mt-1">"She Likes My Clam" (Out Now) • "BANDS" (25k+ streams).</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 10: CONTACT / TRANSMIT */}
        <footer id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#060709]">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Connect & Inquire
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading mb-4">
                Get In Touch
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                For software engineering, enterprise partnerships with VOBA, film commissions, or music production.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all mb-4">
                    <s.icon size={22} />
                  </div>
                  <h4 className="font-bold text-white text-base mb-1">{s.name}</h4>
                  <span className="text-xs text-zinc-500 truncate max-w-full">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Interactive "Hey" Text Card revealing Ethical Hacking & Kali Linux Mastery */}
            <div className="mb-16 flex justify-center">
              <button
                onClick={() => setIsKaliModalOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-300 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
                <span className="text-xs sm:text-sm font-medium">
                  <strong className="text-white font-bold group-hover:text-cyan-300">Hey</strong> — click here for info on my ethical hacking & Kali Linux toolset
                </span>
                <ChevronRight size={16} className="text-zinc-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Footer Bottom Line */}
            <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
              <span>© 2025 Vesni Lanus • Founder of VOBA</span>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="https://vobastudios.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">VOBA Studios</a>
                <a href="https://pulse-msg.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">Pulse Messenger (1Y)</a>
                <a href="https://www.linkedin.com/in/vesni-lanus/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">LinkedIn</a>
                <span>Film: NARCOTICS</span>
                <span>Music: She Likes My Clam</span>
              </div>
            </div>

          </div>
        </footer>

      </main>

      {/* ETHICAL HACKING / KALI LINUX MODAL */}
      <AnimatePresence>
        {isKaliModalOpen && (
          <KaliModal onClose={() => setIsKaliModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-[#121216] border border-zinc-800 overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-zinc-400 hover:text-white flex items-center justify-center"
              >
                <X size={18} />
              </button>

              <div className="h-56 w-full bg-zinc-950 overflow-hidden relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {selectedProject.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <span className="text-xs text-zinc-500 font-medium">
                    {selectedProject.techStack} • {selectedProject.year}
                  </span>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target={selectedProject.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                    >
                      Visit Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
