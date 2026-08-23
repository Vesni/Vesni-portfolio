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
  Flame,
  Activity,
  Layers,
  Sparkles,
  Move,
  Radio,
  Lock,
  ChevronDown
} from 'lucide-react';
import ProjectCard from './components/ArtistCard'; 
import NarcoticsSection from './components/NarcoticsSection';
import BandsSection from './components/BandsSection';
import PageIntro from './components/PageIntro';
import KaliModal from './components/KaliModal';
import { Project } from './types';

const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'PULSE MESSENGER', 
    techStack: 'WebSockets • Real-Time • Cloud Architecture', 
    tags: ['Chat Platform', 'Real-Time Messaging', 'Web App'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    description: 'A modern, high-speed real-time chat platform engineered for instant messaging, private channels, and seamless cross-device communication.',
    link: 'https://pulse-msg.vercel.app/'
  },
  { 
    id: '02', 
    title: 'VESNI STUDIOS', 
    techStack: 'Audio Engine • Web Stack', 
    tags: ['Music', 'Studio', 'Discography'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'Central hub for original music produced by Vesni. Features a high-fidelity interface to explore albums, singles, and soundscapes.',
    link: 'https://vesnistudios.vercel.app/'
  },
  { 
    id: '03', 
    title: 'SILKY WAY', 
    techStack: 'Next.js • Firebase', 
    tags: ['Marketplace', 'Real-time Chat', 'E-Commerce'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'A full-featured listing marketplace with real-time chat between buyers and sellers, user authentication, and responsive product indexing.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '04', 
    title: 'VESNI OS', 
    techStack: 'JavaScript • CSS3 • Web Kernel', 
    tags: ['Web OS', 'Window Manager', 'Interactive'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A web-based desktop operating system featuring a functional terminal, draggable window management, custom file system, and native web apps.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '05', 
    title: 'CYBER OS', 
    techStack: 'React • Strategy Engine', 
    tags: ['Hacking Game', 'Cybersecurity', 'Simulation'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A strategic hacking simulation where players choose between White Hat defense and Black Hat offense to secure or breach simulated networks.',
    link: 'https://hacksim.vercel.app/'
  },
  { 
    id: '06', 
    title: 'LIFESTEAL\'26', 
    techStack: 'Community Hub • Management Portal', 
    tags: ['Minecraft', 'SMP', 'Community'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=1000&auto=format&fit=crop',
    description: 'The official portal for the Lifesteal\'26 Minecraft SMP server community. Organized and managed by Vesni.',
    link: 'https://lifesteal26.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { 
    id: '01', 
    title: '25,000+ Music Plays', 
    desc: 'Surpassed 25,000+ unique streams on SoundCloud and multi-platform digital music releases.', 
    icon: Music, 
    color: 'text-emerald-400', 
    metric: '25K+ Streams' 
  },
  { 
    id: '02', 
    title: 'Film Director: NARCOTICS', 
    desc: 'Wrote and directed the neo-noir crime thriller short film NARCOTICS presented by P2 Productions.', 
    icon: Film, 
    color: 'text-red-400', 
    metric: 'P2 Productions' 
  },
  { 
    id: '03', 
    title: 'Operating System Architect', 
    desc: 'Engineered custom web desktop operating systems including Vesni OS and Cyber OS.', 
    icon: Cpu, 
    color: 'text-purple-400', 
    metric: 'Web OS Engine' 
  },
  { 
    id: '04', 
    title: 'Security & Infrastructure Auditing', 
    desc: 'Conducted ethical security audits, vulnerability scanning, and hardening across networks.', 
    icon: Shield, 
    color: 'text-cyan-400', 
    metric: 'Ethical Security' 
  },
  { 
    id: '05', 
    title: 'Game Scaling & Infrastructure', 
    desc: 'Scaled PC26 Cricket to support high concurrent active user sessions seamlessly.', 
    icon: Gamepad2, 
    color: 'text-amber-400', 
    metric: 'High Concurrency' 
  },
  { 
    id: '06', 
    title: 'Athletic Versatility', 
    desc: 'Dynamic football player adaptable to any position across the pitch from defense to attack.', 
    icon: Move, 
    color: 'text-rose-400', 
    metric: 'All-Rounder' 
  }
];

const SOCIALS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Vesni', label: 'github.com/Vesni' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vesni-lanus/', label: 'linkedin.com/in/vesni-lanus' },
  { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/track/4ZaaaNrR5y7vm9I4gRBtYr?autoplay_ok=1', label: 'Official Discography' },
  { name: 'Gaana', icon: Radio, url: 'https://gaana.com/artist/vesni-lanus', label: 'Artist Profile' },
  { name: 'Email', icon: Mail, url: 'mailto:vesni277@gmail.com', label: 'vesni277@gmail.com' }
];

const NAV_ITEMS = [
  { label: 'Film', id: 'narcotics' },
  { label: 'Music', id: 'bands' },
  { label: 'Projects', id: 'projects' },
  { label: 'Milestones', id: 'achievements' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' }
];

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isKaliModalOpen, setIsKaliModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('narcotics');

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
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* PAGE INTRO OVERLAY */}
      <AnimatePresence>
        {showIntro && (
          <PageIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm group-hover:bg-emerald-400 transition-colors">
              V
            </div>
            <span className="font-bold text-base tracking-tight font-heading">
              VESNI
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
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
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowIntro(true)}
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
            >
              Play Intro
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0c] border-b border-zinc-800 px-6 py-6 space-y-4">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-emerald-400"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setIsMenuOpen(false); setShowIntro(true); }}
              className="block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
            >
              Replay Intro
            </button>
          </div>
        )}
      </header>

      <main className="pt-16">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Full-Stack Developer • Film Director • Music Producer
            </div>

            {/* Name */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white uppercase font-heading mb-6">
              VESNI
            </h1>

            {/* Bio summary */}
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
              Building modern software systems, directing independent cinema with <strong className="text-red-400 font-semibold">P2 Productions</strong>, and producing original music.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => scrollTo('narcotics')}
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-600/20"
              >
                <Film size={16} /> Short Film: NARCOTICS
              </button>

              <button
                onClick={() => scrollTo('bands')}
                className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Music size={16} /> Single: BANDS (25k+ Streams)
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <Cpu size={16} /> Software Vault
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 1: NARCOTICS SHORT FILM */}
        <NarcoticsSection />

        {/* SECTION 2: BANDS MUSIC RELEASE */}
        <BandsSection />

        {/* SECTION 3: PROJECTS / SOFTWARE VAULT */}
        <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0c0c0f] border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Selected Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
                  Software Projects
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

        {/* SECTION 4: ACHIEVEMENTS & MILESTONES */}
        <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0c] border-b border-white/5">
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

        {/* SECTION 5: ABOUT */}
        <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0c0c0f] border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                About Vesni
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading leading-tight">
                Creator & Developer
              </h2>
              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  I am <strong>Vesni</strong> — a multidisciplinary creator focusing on full-stack web development, independent cinema, and music production.
                </p>
                <p>
                  As Director at <strong className="text-white">P2 Productions</strong>, I lead original films, including our 2025 short film <strong className="text-red-400">NARCOTICS</strong> starring Arun in his debut role.
                </p>
                <p>
                  In sound, I write, compose, produce, and mix tracks like <strong className="text-emerald-400">BANDS</strong> featuring R3$T, with over <strong className="text-white">25,000+ plays</strong> across SoundCloud and streaming platforms.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-heading">
                Core Skills & Tools
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase font-medium mb-2">Development</span>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Firebase'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-md bg-zinc-800 text-zinc-200 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500 block uppercase font-medium mb-2">Film & Direction</span>
                  <div className="flex flex-wrap gap-2">
                    {['P2 Productions', 'NARCOTICS', 'Screenplay', 'Directing', 'Color Grading'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-md bg-red-950/40 text-red-300 border border-red-900/40 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500 block uppercase font-medium mb-2">Music & Audio</span>
                  <div className="flex flex-wrap gap-2">
                    {['BANDS', 'Beat Production', 'Songwriting', 'Audio Mixing', 'SoundCloud'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-md bg-emerald-950/40 text-emerald-300 border border-emerald-900/40 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: CONTACT / TRANSMIT */}
        <footer id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#08080a]">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Connect
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading mb-4">
                Get In Touch
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Feel free to reach out for collaborations, music inquiries, or software projects.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
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
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-300 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] cursor-pointer"
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
              <span>© 2025 Vesni • P2 Productions</span>
              <div className="flex flex-wrap gap-6 justify-center">
                <span>Short Film: NARCOTICS</span>
                <span>Single: BANDS (25k+ Streams)</span>
                <span>Pulse Messenger</span>
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
