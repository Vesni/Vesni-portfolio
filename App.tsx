
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Terminal, 
  Shield, 
  Cpu, 
  Code, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight, 
  Gamepad2, 
  Trophy, 
  Mail,
  ExternalLink,
  Youtube,
  Instagram,
  Activity,
  Layers,
  Database,
  Lock,
  Music,
  Film,
  Zap,
  Target,
  Monitor,
  Smartphone,
  Tablet as TabletIcon,
  Crosshair,
  BarChart3,
  Dribbble,
  Move
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ArtistCard'; 
import Intro from './components/Intro';
import { Project } from './types';

const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'VESNI STUDIO\'S', 
    techStack: 'AUDIO ENGINE • WEB STACK', 
    tags: ['Music', 'Discography', 'Studio'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'Central hub for all original music produced by Vesni. Features a high-fidelity interface to explore tracks, albums, and industrial soundscapes.',
    link: 'https://vesnistudios.vercel.app/'
  },
  { 
    id: '02', 
    title: 'SILKY WAY', 
    techStack: 'NEXT.JS • FIREBASE', 
    tags: ['Marketplace', 'Chat', 'E-comm'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'A comprehensive listing marketplace featuring integrated real-time chat functionality, secure user authentication, and high-performance product indexing.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '03', 
    title: 'VESNI OS', 
    techStack: 'JS • CSS3 • KERNEL', 
    tags: ['Web OS', 'UI/UX', 'System Sim'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A sophisticated web-based operating system. Includes a fully functional terminal, custom window manager, and native web-apps built on a vanilla JS kernel.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '04', 
    title: 'CYBER OS', 
    techStack: 'REACT • SIMULATION', 
    tags: ['Hacking Game', 'Strategy'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A strategic hacking simulator. Choose between White Hat or Black Hat roles to either compromise secure systems or defend against incoming threats.',
    link: 'https://hacksim.vercel.app/'
  },
  { 
    id: '05', 
    title: 'P2 PRODUCTIONS', 
    techStack: 'FILM • DIRECTING', 
    tags: ['Alpha 1', 'Studio', 'Animation'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
    description: 'CEO, Founder, and Director Vesni leads the production of the highly anticipated upcoming animated film "Alpha 1".',
    link: 'https://p2-productions.vercel.app/'
  },
  { 
    id: '06', 
    title: 'LIFESTEAL\'26', 
    techStack: 'GAMING • NETWORKING', 
    tags: ['SMP', 'Minecraft', 'Managed'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=1000&auto=format&fit=crop',
    description: 'The official portal for the Lifesteal\'26 Minecraft SMP. Organized and managed by Vesni.',
    link: 'https://lifesteal26.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { id: 'AC-01', title: 'Infra Auditor', desc: 'Securely audited educational infrastructure, exposing critical network bypasses.', icon: Shield, color: 'text-red-500', metric: 'EXPLOIT_PATCHED' },
  { id: 'AC-02', title: 'Director Alpha', desc: 'Heading P2 Productions for the 2025 release of Alpha 1.', icon: Film, color: 'text-blue-500', metric: 'PHASE_03_READY' },
  { id: 'AC-03', title: 'Stream Count', desc: 'Surpassed 2,000 unique plays on SoundCloud music releases.', icon: Music, color: 'text-green-400', metric: '2K_PLAYS_LOG' },
  { id: 'AC-04', title: 'Kernel Dev', desc: 'Successfully architected the Vesni OS kernel and Cyber OS engine.', icon: Cpu, color: 'text-purple-400', metric: 'SYS_STABLE' },
  { id: 'AC-05', title: 'Versatile', desc: 'Adaptable tactical performance on the pitch. Capable of dominating in any position from defense to attack.', icon: Move, color: 'text-red-600', metric: 'ROLE:ALL_ROUNDER' },
  { id: 'AC-06', title: 'Game Scaler', desc: 'Scaled PC26 Cricket to support massive concurrent user surges.', icon: Gamepad2, color: 'text-yellow-400', metric: 'SCALE_READY' }
];

const SOCIALS = [
  { name: 'Github', icon: Github, url: 'https://github.com/Vesni' },
  { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@NotebookLMgoogl' },
  { name: 'Discord', icon: Gamepad2, url: 'https://discord.gg/tZE7WEkyhH' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/https.vesni/' }
];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'pc'>('pc');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const checkResize = () => {
      const w = window.innerWidth;
      if (w < 768) setDeviceType('mobile');
      else if (w < 1280) setDeviceType('tablet');
      else setDeviceType('pc');
    };
    checkResize();
    window.addEventListener('resize', checkResize);
    return () => window.removeEventListener('resize', checkResize);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const NavContent = () => (
    <div className={`flex ${deviceType === 'pc' ? 'gap-12' : 'flex-col gap-8 items-center'}`}>
      {['Projects', 'Achievements', 'About', 'Contact'].map(item => (
        <button 
          key={item} 
          onClick={() => scrollTo(item.toLowerCase())}
          className="text-[10px] font-mono tracking-[0.4em] uppercase hover:text-[#00ffaa] transition-all relative group"
        >
          <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#00ffaa]">[</span>
          {item}
          <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#00ffaa]">]</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00ffaa] selection:text-black font-sans crt-overlay overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* PC TOP NAV */}
      {deviceType === 'pc' && !showIntro && (
        <motion.nav 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-[100] px-16 py-10 flex justify-between items-center mix-blend-difference"
        >
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-12 h-12 bg-[#00ffaa] flex items-center justify-center text-black font-black border-tactical shadow-[0_0_20px_rgba(0,255,170,0.3)]">
              <Terminal size={24} />
            </div>
            <span className="font-heading text-xl font-black tracking-tighter">VESNI.SYS</span>
          </div>
          <NavContent />
        </motion.nav>
      )}

      {/* TABLET SIDEBAR */}
      {deviceType === 'tablet' && !showIntro && (
        <motion.nav 
          initial={{ x: -100 }} animate={{ x: 0 }}
          className="fixed top-0 left-0 bottom-0 w-24 bg-black/40 backdrop-blur-3xl border-r border-white/5 z-[100] flex flex-col items-center py-12"
        >
          <div className="w-14 h-14 bg-[#00ffaa] flex items-center justify-center text-black mb-20 border-tactical">
            <Terminal size={24} />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-16">
            {['Projects', 'Achievements', 'About', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="rotate-90 origin-center text-[10px] font-mono tracking-widest uppercase text-white/40 hover:text-[#00ffaa] whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.nav>
      )}

      {/* MOBILE TOP BAR */}
      {deviceType === 'mobile' && !showIntro && (
        <motion.nav className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-xl px-6 py-5 flex justify-between items-center border-b border-white/10">
          <span className="font-heading text-sm font-black text-[#00ffaa]">VESNI.SYS</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10 border border-white/10 flex items-center justify-center">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[95] bg-[#050505] flex flex-col items-center justify-center"
          >
            <NavContent />
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`${deviceType === 'tablet' ? 'pl-24' : ''} ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* HERO */}
        <section className={`min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden ${deviceType === 'pc' ? 'text-center' : 'text-left items-start md:px-20'}`}>
          
          {/* HUD Brackets - The "Cool" corners */}
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[#00ffaa]/20 hidden lg:block" />
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#00ffaa]/20 hidden lg:block" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#00ffaa]/20 hidden lg:block" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[#00ffaa]/20 hidden lg:block" />

          {deviceType === 'pc' && (
            <>
              <div className="absolute top-1/2 left-20 -translate-y-1/2 opacity-20 flex flex-col gap-6">
                <div className="w-1 h-32 bg-gradient-to-b from-[#00ffaa] to-transparent" />
                <div className="font-mono text-[8px] uppercase tracking-widest text-white vertical-text">LOC_SEC_PORT_8080</div>
              </div>
              <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-20 flex flex-col items-end gap-6">
                <div className="font-mono text-[8px] uppercase tracking-widest text-white vertical-text">DATA_FLOW_STABLE</div>
                <div className="w-1 h-32 bg-gradient-to-t from-[#ff3333] to-transparent" />
              </div>
            </>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="z-10 w-full max-w-7xl">
            <div className={`mb-10 flex items-center gap-3 bg-[#00ffaa]/5 border border-[#00ffaa]/20 px-4 py-1.5 w-fit font-mono text-[9px] tracking-widest text-[#00ffaa] ${deviceType === 'pc' ? 'mx-auto' : ''}`}>
               <div className="w-1.5 h-1.5 bg-[#00ffaa] pulse-led" /> SYSTEM_INITIALIZED_OK
            </div>

            <GradientText 
              text="VESNI" 
              className={`leading-[0.85] mb-8 tracking-tighter block
                ${deviceType === 'mobile' ? 'text-[28vw]' : deviceType === 'tablet' ? 'text-[22vw]' : 'text-[18vw]'}
              `}
            />

            <p className={`font-mono uppercase tracking-[0.4em] text-white/40 mb-14 max-w-3xl ${deviceType === 'pc' ? 'mx-auto' : ''} ${deviceType === 'mobile' ? 'text-[9px]' : 'text-sm'}`}>
              Full-Stack Architect // Ethical Auditor // Versatile // Film Director
            </p>

            <div className={`flex flex-wrap gap-5 ${deviceType === 'pc' ? 'justify-center' : 'justify-start'}`}>
              <button onClick={() => scrollTo('projects')} className="bg-[#00ffaa] text-black px-12 py-5 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all border-tactical" data-hover="true">
                Execute_Access
              </button>
              <button onClick={() => scrollTo('about')} className="border border-white/20 text-white px-12 py-5 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 transition-all" data-hover="true">
                Entity_Data
              </button>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-40 px-6 md:px-24 bg-black relative grid-tactical">
          <div className="max-w-[1700px] mx-auto">
            <header className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-16 gap-10">
              <h2 className={`font-heading font-black leading-none uppercase ${deviceType === 'mobile' ? 'text-6xl' : 'text-9xl'}`}>
                THE <span className="text-[#00ffaa]">VAULT.</span>
              </h2>
              <div className="font-mono text-[10px] text-white/30 tracking-[0.5em] uppercase text-right">
                [ INDEXED_RECORDS: {PROJECTS.length} ]
              </div>
            </header>

            <div className={`grid gap-6 ${
              deviceType === 'mobile' ? 'grid-cols-1' : 
              deviceType === 'tablet' ? 'grid-cols-2' : 
              'grid-cols-2 lg:grid-cols-3'
            }`}>
              {PROJECTS.map(p => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />)}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-40 px-6 md:px-24 bg-[#0a0a0b] border-t border-white/5">
           <div className="max-w-[1700px] mx-auto">
              <div className="flex items-center gap-5 mb-24 border-l-4 border-red-600 pl-8">
                <h2 className={`font-heading font-black uppercase tracking-tight ${deviceType === 'mobile' ? 'text-4xl' : 'text-7xl'}`}>MILESTONES.</h2>
              </div>
              
              <div className={`grid gap-1 ${
                deviceType === 'mobile' ? 'grid-cols-1' : 
                deviceType === 'tablet' ? 'grid-cols-2' : 
                'grid-cols-3'
              }`}>
                {ACHIEVEMENTS.map(ach => (
                  <div key={ach.id} className="p-12 md:p-16 bg-black border border-white/5 hover:border-[#00ffaa]/40 transition-all group border-tactical overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#00ffaa]/5 -rotate-45 translate-x-8 -translate-y-8" />
                    <div className={`${ach.color} mb-10 flex justify-between`}>
                      <ach.icon size={deviceType === 'mobile' ? 32 : 44} className="group-hover:scale-110 transition-transform" />
                      <span className="font-mono text-[10px] opacity-20 uppercase tracking-widest">{ach.id}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-black mb-6 uppercase group-hover:text-[#00ffaa] transition-colors tracking-tighter">{ach.title}</h3>
                    <p className="text-white/40 text-sm mb-10 leading-relaxed font-light">{ach.desc}</p>
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                       <span className="font-mono text-[9px] text-[#00ffaa] tracking-[0.3em] font-bold">{ach.metric}</span>
                       <Crosshair size={14} className="opacity-20" />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-40 px-6 md:px-24 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
               <h2 className={`font-heading font-black leading-tight uppercase ${deviceType === 'mobile' ? 'text-5xl' : 'text-8xl'}`}>ENTITY_ <br/> <span className="text-[#00ffaa]">PROFILE.</span></h2>
               <div className="text-lg md:text-xl font-light text-white/50 leading-relaxed space-y-10 border-l-2 border-[#00ffaa]/20 pl-10">
                 <p>I am <span className="text-white font-bold tracking-tight">VESNI</span>. A tactical multi-threat entity specializing in secure full-stack architecture and industrial audio-visual engineering.</p>
                 <p>As Director of <span className="text-white font-bold underline decoration-[#00ffaa] decoration-2 underline-offset-4">P2 Productions</span>, I lead creative engineering in cinematic motion, currently focusing on the 2025 release of Alpha 1.</p>
               </div>
               
               <div className="flex flex-wrap gap-4">
                  <div className="px-8 py-6 bg-white/5 border border-white/10 border-tactical flex-1 min-w-[240px]">
                     <div className="flex items-center gap-3 mb-3">
                       <Move className="text-[#ff3333] w-4 h-4" />
                       <span className="block font-mono text-[8px] text-[#ff3333] uppercase tracking-[0.5em] font-bold">Football_Profile</span>
                     </div>
                     <span className="text-3xl font-heading font-black text-white">VERSATILE</span>
                     <span className="block font-mono text-[9px] text-white/30 mt-2">HIGH_TACTICAL_FLEXIBILITY</span>
                  </div>
                  <div className="px-8 py-6 bg-white/5 border border-white/10 border-tactical flex-1 min-w-[240px]">
                     <div className="flex items-center gap-3 mb-3">
                       <Music className="text-[#00ffaa] w-4 h-4" />
                       <span className="block font-mono text-[8px] text-[#00ffaa] uppercase tracking-[0.5em] font-bold">Music_Stats</span>
                     </div>
                     <span className="text-3xl font-heading font-black text-white">2K+ PLAYS</span>
                     <span className="block font-mono text-[9px] text-white/30 mt-2">SOUNDCLOUD_INDEXED</span>
                  </div>
               </div>
            </div>

            {deviceType !== 'mobile' && (
              <div className="bg-white/5 border border-white/10 p-16 backdrop-blur-2xl relative border-tactical group">
                 <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#00ffaa]/30 translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform" />
                 <h3 className="font-heading font-bold mb-16 flex items-center gap-4 border-b border-white/10 pb-6 text-2xl uppercase">
                   <Cpu className="text-[#00ffaa]" /> LOGIC_MODULES
                 </h3>
                 <div className="space-y-12">
                   <div className="space-y-6">
                     <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 block uppercase font-bold">Front_End_Interface</span>
                     <div className="flex flex-wrap gap-3">
                        {['REACT', 'TS', 'TAILWIND', 'VITE'].map(s => <span key={s} className="bg-white text-black px-5 py-2 text-[10px] font-black uppercase tracking-widest">{s}</span>)}
                     </div>
                   </div>
                   <div className="space-y-6">
                     <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 block uppercase font-bold">Security_Array</span>
                     <div className="flex flex-wrap gap-3">
                        {['NMAP', 'BURP', 'HACK_SIM', 'AUDIT'].map(s => <span key={s} className="border border-red-600 text-red-500 bg-red-500/5 px-5 py-2 text-[10px] font-mono uppercase font-bold">{s}</span>)}
                     </div>
                   </div>
                 </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-40 px-6 md:px-24 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`font-heading font-black text-white/5 mb-28 select-none tracking-tighter uppercase ${deviceType === 'mobile' ? 'text-7xl' : 'text-[14vw]'}`}>TRANSMIT.</h2>
            <div className={`grid gap-4 mb-32 ${deviceType === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'}`}>
              {SOCIALS.map(s => (
                <a key={s.name} href={s.url} target="_blank" className="p-12 border border-white/5 hover:border-[#00ffaa] hover:bg-[#00ffaa]/5 transition-all group border-tactical" data-hover="true">
                  <s.icon className="mx-auto mb-6 group-hover:text-[#00ffaa] group-hover:scale-110 transition-all" size={32} />
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/40 group-hover:text-white font-bold">{s.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase font-bold">
               <span>// ARCHIVE_VESNI_PRO_PORTFOLIO</span>
               <div className="flex gap-12">
                 <span className="text-[#00ffaa] font-black">SYS_STABLE_REL_2.5</span>
                 <span>LAYOUT: {deviceType.toUpperCase()}</span>
               </div>
               <span>© 2025 ALL_RECORDS_SECURED</span>
            </div>
          </div>
        </footer>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          >
             <motion.div
              initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-6xl bg-[#0a0a0b] border border-white/10 flex flex-col shadow-[0_0_120px_rgba(0,0,0,1)] relative overflow-hidden border-tactical ${deviceType === 'pc' ? 'md:flex-row' : ''}`}
              onClick={e => e.stopPropagation()}
             >
                <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 z-30 text-white/40 hover:text-white transition-colors" data-hover="true">
                  <X size={36} />
                </button>
                <div className={`${deviceType === 'pc' ? 'w-1/2' : 'w-full h-80'} bg-black relative`}>
                  <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" alt={selectedProject.title} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0b]" />
                  <div className="absolute inset-0 scanner-line opacity-30" />
                </div>
                <div className={`p-12 md:p-24 flex flex-col justify-center ${deviceType === 'pc' ? 'w-1/2' : 'w-full'}`}>
                  <span className="text-[#00ffaa] font-mono text-[11px] tracking-[0.5em] mb-6 uppercase font-black">RECORD_ID: {selectedProject.id}</span>
                  <h3 className="text-5xl md:text-8xl font-heading font-black mb-10 leading-none tracking-tighter uppercase">{selectedProject.title}</h3>
                  <p className="text-white/60 mb-14 text-lg md:text-xl leading-relaxed font-light">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-4 mb-14">
                    {selectedProject.tags.map(t => <span key={t} className="text-[10px] font-mono border border-white/10 px-6 py-2 uppercase bg-white/5 tracking-widest">{t}</span>)}
                  </div>
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" className="bg-[#00ffaa] text-black px-14 py-5 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-colors text-center border-tactical" data-hover="true">
                      Initiate_Link
                    </a>
                  )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
