/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin,
  Shield, 
  Cpu, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight, 
  Mail,
  ExternalLink,
  Music,
  Film,
  Building2,
  Sparkles,
  Radio,
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
    techStack: 'Private Chat & Calls • Web & Mobile', 
    tags: ['Flagship App', '1 Year Live', 'Encrypted'],
    year: '2024–2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    description: 'A fast, private messaging app with free voice and video calls. Completely encrypted so no one else can read your messages. Live online for over 1 year.',
    link: 'https://pulse-msg.vercel.app/'
  },
  { 
    id: '02', 
    title: 'VOBA STUDIOS HQ', 
    techStack: 'Official Company Website', 
    tags: ['Company Portal', 'Gaming & Esports', 'Cinema'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    description: 'The main website for VOBA, uniting our software apps (Pulse Messenger, VesGPT), esports tournaments (Clutch League), short films, and electronics repair lab.',
    link: 'https://vobastudios.vercel.app/'
  },
  { 
    id: '03', 
    title: 'VESNI STUDIOS', 
    techStack: 'Music & Song Discography', 
    tags: ['Music', 'Studio', 'Streaming'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'My official music hub where you can listen to all my singles and albums, including my newest release "She Likes My Clam" and my hit track "BANDS".',
    link: 'https://vesnistudios.vercel.app/'
  },
  { 
    id: '04', 
    title: 'SILKY WAY', 
    techStack: 'Online Marketplace & Chat', 
    tags: ['Marketplace', 'Real-Time Chat', 'Shopping'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'A clean online marketplace where buyers and sellers can browse listings, post products, and chat directly in real-time.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '05', 
    title: 'VESNI OS', 
    techStack: 'Web Operating System', 
    tags: ['Browser OS', 'Interactive Desktop', 'Apps'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A desktop operating system simulator that runs right inside your browser, featuring moveable windows, a terminal, folders, and working apps.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '06', 
    title: 'CYBER OS', 
    techStack: 'Strategy Game & Simulation', 
    tags: ['Hacking Game', 'Cybersecurity', 'Simulation'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A strategy cybersecurity game where players test hacking offense and defense to learn how computer networks are protected.',
    link: 'https://hacksim.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { 
    id: '01', 
    title: 'Founder of VOBA', 
    desc: 'Leading my company across 4 core areas: web apps & AI, esports gaming tournaments, film production, and computer repair.', 
    icon: Building2, 
    color: 'text-emerald-400', 
    metric: 'Company Founder' 
  },
  { 
    id: '02', 
    title: 'Pulse Messenger 1 Year Live', 
    desc: 'Celebrated over 365 days online for my private, encrypted messaging and voice calling app.', 
    icon: Sparkles, 
    color: 'text-cyan-400', 
    metric: '365+ Days Online' 
  },
  { 
    id: '03', 
    title: '25,000+ Music Streams', 
    desc: 'My song BANDS reached over 25,000 plays, and my new single "She Likes My Clam" is out now worldwide on YouTube.', 
    icon: Music, 
    color: 'text-rose-400', 
    metric: '25K+ Plays' 
  },
  { 
    id: '04', 
    title: 'Directed Film "NARCOTICS"', 
    desc: 'Wrote the script and directed a crime drama short film under P2 Productions introducing actor Arun.', 
    icon: Film, 
    color: 'text-red-400', 
    metric: 'P2 Productions' 
  },
  { 
    id: '05', 
    title: 'Certified in Web Development', 
    desc: 'Completed verified web development certification with GUVI (IIT Madras Research Park) and digital marketing with HubSpot.', 
    icon: Award, 
    color: 'text-amber-400', 
    metric: 'Certified' 
  },
  { 
    id: '06', 
    title: 'Cybersecurity & App Testing', 
    desc: 'Hands-on experience using ethical hacking tools to find security weaknesses and protect websites against attacks.', 
    icon: Shield, 
    color: 'text-blue-400', 
    metric: 'App Safety' 
  }
];

const SOCIALS = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vesni-lanus/', label: 'linkedin.com/in/vesni-lanus' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Vesni', label: 'github.com/Vesni' },
  { name: 'VOBA Studios', icon: Building2, url: 'https://vobastudios.vercel.app/', label: 'vobastudios.vercel.app' },
  { name: 'Pulse Messenger', icon: Sparkles, url: 'https://pulse-msg.vercel.app/', label: 'pulse-msg.vercel.app' },
  { name: 'YouTube Song', icon: Music, url: 'https://www.youtube.com/watch?app=desktop&v=X1dChjNLFGQ', label: 'She Likes My Clam' },
  { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', label: 'Spotify Profile' },
  { name: 'Gaana', icon: Radio, url: 'https://gaana.com/artist/vesni-lanus', label: 'Gaana Profile' },
  { name: 'Email', icon: Mail, url: 'mailto:vesni277@gmail.com', label: 'vesni277@gmail.com' }
];

const NAV_ITEMS = [
  { label: 'VOBA', id: 'voba' },
  { label: 'Pulse Messenger', id: 'pulse' },
  { label: 'Movie', id: 'narcotics' },
  { label: 'Music', id: 'music' },
  { label: 'Background', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Apps', id: 'projects' },
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
      
      {/* Friendly Page Intro */}
      <AnimatePresence>
        {showIntro && (
          <PageIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#07080a]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-emerald-500/30 p-1 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
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
              <span className="font-bold text-base tracking-tight font-heading block leading-none">
                VESNI LANUS
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider leading-tight">
                FOUNDER OF VOBA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider">
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

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowIntro(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={12} className="text-emerald-400 animate-pulse" />
              Replay Intro
            </button>

            <a
              href="https://vobastudios.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              VOBA Website
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
                VOBA Website
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-8 py-20 text-center relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              App Developer • Film Director • Founder of VOBA
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase font-heading mb-5">
              VESNI <span className="text-emerald-400">LANUS</span>
            </h1>

            {/* Bio summary in Simple English */}
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              I build helpful software and mobile apps, direct crime drama short films with <strong className="text-red-400">P2 Productions</strong>, produce music, and test websites to keep them safe.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <button
                onClick={() => scrollTo('voba')}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-105"
              >
                <Building2 size={15} /> My Company: VOBA
              </button>

              <button
                onClick={() => scrollTo('pulse')}
                className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
              >
                <Sparkles size={15} className="text-cyan-400" /> Pulse Messenger
              </button>

              <button
                onClick={() => scrollTo('narcotics')}
                className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
              >
                <Film size={15} className="text-red-400" /> Film: NARCOTICS
              </button>

              <button
                onClick={() => scrollTo('music')}
                className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105"
              >
                <Music size={15} className="text-rose-400" /> Music & Songs
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 1: VOBA ENTERPRISE */}
        <VobaSection />

        {/* SECTION 2: PULSE MESSENGER 1-YEAR ANNIVERSARY */}
        <PulseAnniversarySection />

        {/* SECTION 3: NARCOTICS SHORT FILM */}
        <NarcoticsSection />

        {/* SECTION 4: MUSIC CATALOG */}
        <MusicCatalogSection />

        {/* SECTION 5: EDUCATION, INTERNSHIP & CERTIFICATIONS */}
        <CareerEducationSection />

        {/* SECTION 6: SKILLS & CAPABILITIES */}
        <SkillsEcosystemSection />

        {/* SECTION 7: APPS & SOFTWARE VAULT */}
        <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#08090c] border-b border-zinc-800/80">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  Selected Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading">
                  Software & Apps
                </h2>
              </div>
              <span className="text-xs text-zinc-400">
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

        {/* SECTION 8: ACHIEVEMENTS & STATS */}
        <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#07080a] border-b border-zinc-800/80">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="mb-12 pb-6 border-b border-zinc-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                Highlights
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading">
                Milestones & Stats
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ACHIEVEMENTS.map(ach => (
                <div 
                  key={ach.id}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 ${ach.color}`}>
                        <ach.icon size={20} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-950 text-zinc-300 border border-zinc-800">
                        {ach.metric}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5 font-heading">
                      {ach.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 9: ABOUT VESNI */}
        <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#08090d] border-b border-zinc-800/80">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                Founder • Developer • Director
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading">
                About Vesni Lanus
              </h2>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I'm a high school developer and creative director passionate about turning ideas into real, working products. I specialize in building full-stack websites, creating clean user interfaces, directing short films, producing original music, and keeping software safe from hackers.
                </p>
                <p>
                  I have hands-on experience using ethical hacking tools in <strong className="text-cyan-400 font-semibold">Kali Linux</strong> to understand how bad actors try to find vulnerabilities in software. Today, I use that knowledge to build secure systems and fix security problems before apps launch.
                </p>
                <p>
                  I am also the <strong className="text-emerald-400 font-semibold">Founder of VOBA</strong>, my company that unites creative web software, esports tournaments, film production, and electronics repair.
                </p>
              </div>

              {/* LinkedIn Button */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <a
                  href="https://www.linkedin.com/in/vesni-lanus/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                >
                  <Linkedin size={15} /> Connect on LinkedIn
                </a>

                <a
                  href="https://vobastudios.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <Building2 size={15} className="text-emerald-400" /> Visit VOBA
                </a>
              </div>
            </div>

            {/* Right Card: Quick Identity Summary */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <h3 className="text-base font-bold text-white font-heading">
                At a Glance
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-0.5">
                    My Company
                  </span>
                  <span className="text-sm font-bold text-white block">VOBA (Founder)</span>
                  <p className="text-zinc-400 text-xs mt-0.5">Apps & AI, Esports gaming, film production, and computer repair.</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-0.5">
                    Flagship Messaging App
                  </span>
                  <span className="text-sm font-bold text-white block">Pulse Messenger</span>
                  <p className="text-zinc-400 text-xs mt-0.5">1 year live online with private messaging, voice and video calls.</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block mb-0.5">
                    Short Film
                  </span>
                  <span className="text-sm font-bold text-white block">NARCOTICS (P2 Productions)</span>
                  <p className="text-zinc-400 text-xs mt-0.5">Crime drama short film directed by Vesni, starring actor Arun.</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block mb-0.5">
                    Original Music
                  </span>
                  <span className="text-sm font-bold text-white block">Vesni Songs</span>
                  <p className="text-zinc-400 text-xs mt-0.5">New single "She Likes My Clam" & milestone hit "BANDS" (25k+ plays).</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 10: CONTACT */}
        <footer id="contact" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#060709]">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white font-heading mb-3">
                Contact Me
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Feel free to reach out for software projects, partnerships with VOBA, film collaborations, or music.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-12">
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-all mb-3">
                    <s.icon size={18} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-0.5">{s.name}</h4>
                  <span className="text-xs text-zinc-500 truncate max-w-full">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Interactive Cybersecurity info button */}
            <div className="mb-12 flex justify-center">
              <button
                onClick={() => setIsKaliModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 text-zinc-300 hover:text-cyan-300 transition-all text-xs sm:text-sm cursor-pointer shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>
                  Interested in cybersecurity? <strong>Click to see the safety testing tools I use</strong>
                </span>
                <ChevronRight size={15} className="text-zinc-500" />
              </button>
            </div>

            {/* Footer Bottom */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
              <span>© 2025 Vesni Lanus • Founder of VOBA</span>
              <div className="flex flex-wrap gap-5 justify-center">
                <a href="https://vobastudios.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">VOBA Studios</a>
                <a href="https://pulse-msg.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">Pulse Messenger</a>
                <a href="https://www.linkedin.com/in/vesni-lanus/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">LinkedIn</a>
                <span>Film: NARCOTICS</span>
                <span>Music: She Likes My Clam</span>
              </div>
            </div>

          </div>
        </footer>

      </main>

      {/* CYBERSECURITY MODAL */}
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-[#121216] border border-zinc-800 overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-zinc-400 hover:text-white flex items-center justify-center"
              >
                <X size={16} />
              </button>

              <div className="h-48 w-full bg-zinc-950 overflow-hidden relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold uppercase text-white font-heading mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                  {selectedProject.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xs text-zinc-400">
                    {selectedProject.techStack} • {selectedProject.year}
                  </span>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target={selectedProject.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      Visit Project <ExternalLink size={13} />
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
