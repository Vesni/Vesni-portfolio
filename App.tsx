
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
  Layout,
  Monitor,
  Smartphone,
  Tablet as TabletIcon
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ArtistCard'; 
import { Project } from './types';

const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'SILKY WAY', 
    techStack: 'NEXT.JS • FIREBASE • CHAT', 
    tags: ['Marketplace', 'Real-time', 'E-commerce'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'A comprehensive listing marketplace featuring integrated real-time chat functionality, secure user authentication, and high-performance product indexing.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '02', 
    title: 'VESNI OS', 
    techStack: 'VANILLA JS • CSS3 • KERNEL', 
    tags: ['Web OS', 'UI/UX', 'System Sim'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A sophisticated web-based operating system. Includes a fully functional terminal, custom window manager, and native web-apps built on a vanilla JS kernel.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '03', 
    title: 'CYBER OS', 
    techStack: 'REACT • SIMULATION • HACKING', 
    tags: ['Hacking Game', 'Strategy', 'Multi-role'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A strategic hacking simulator. Choose between White Hat or Black Hat roles to either compromise secure systems or defend against incoming threats.',
    link: 'https://hacksim.vercel.app/'
  },
  { 
    id: '04', 
    title: 'LIFESTEAL\'26', 
    techStack: 'COMMUNITY • NETWORKING', 
    tags: ['Minecraft SMP', 'Gaming', 'Managed'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=1000&auto=format&fit=crop',
    description: 'The official portal for the Lifesteal\'26 Minecraft SMP. Organized and managed by Vesni.',
    link: 'https://lifesteal26.vercel.app/'
  },
  { 
    id: '05', 
    title: 'P2 PRODUCTIONS', 
    techStack: 'CREATIVE • FILM • DIRECTING', 
    tags: ['Alpha 1', 'Animation', 'Studio'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
    description: 'CEO, Founder, and Director Vesni leads the production of the highly anticipated upcoming animated film "Alpha 1".',
    link: 'https://p2-productions.vercel.app/'
  },
  { 
    id: '06', 
    title: 'PC26 CRICKET', 
    techStack: 'JS • LOGIC • PHYSICS', 
    tags: ['Functional Game', 'Sports', 'Viral'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop',
    description: 'High-performance cricket simulation with 400+ concurrent users at peak.',
    link: 'https://pcwc.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { id: 'AC-01', title: 'Infra Breach', desc: 'Audited and audited educational network security.', icon: Shield, color: 'text-[#ff3333]', metric: 'SEC_AUDIT_PASS' },
  { id: 'AC-02', title: 'P2 CEO', desc: 'Directing "Alpha 1" animation film.', icon: Film, color: 'text-blue-400', metric: 'ALPHA_1_V.1' },
  { id: 'AC-03', title: 'SoundCloud 2K+', desc: '2000+ plays on original tracks.', icon: Music, color: 'text-[#00ffaa]', metric: 'AUD_GROWTH' },
  { id: 'AC-04', title: 'OS Architect', desc: 'Built functional web kernels.', icon: Cpu, color: 'text-purple-400', metric: 'OS_KERNEL_V2' },
  { id: 'AC-05', title: 'Football MVP', desc: 'Competitive athletic achievements.', icon: Trophy, color: 'text-[#ff3333]', metric: 'STRIKER_RANK' },
  { id: 'AC-06', title: 'Game Logic', desc: 'Deployed viral functional games.', icon: Gamepad2, color: 'text-yellow-400', metric: 'LOGIC_SCALED' }
];

const SOCIALS = [
  { name: 'Github', icon: Github, url: 'https://github.com/Vesni' },
  { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@NotebookLMgoogl' },
  { name: 'Discord', icon: Gamepad2, url: 'https://discord.gg/tZE7WEkyhH' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/https.vesni/' }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'pc'>('pc');

  // Device Recognition Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1280) setDeviceType('tablet');
      else setDeviceType('pc');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const NavItems = () => (
    <>
      {['Projects', 'Achievements', 'About', 'Contact'].map((item) => (
        <button 
          key={item} 
          onClick={() => scrollToSection(item.toLowerCase())}
          className="relative group transition-colors uppercase font-mono tracking-widest text-[10px] hover:text-[#00ffaa]"
          data-hover="true"
        >
          <span className="hidden lg:inline opacity-0 group-hover:opacity-100 mr-2">[</span>
          {item}
          <span className="hidden lg:inline opacity-0 group-hover:opacity-100 ml-2">]</span>
        </button>
      ))}
    </>
  );

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00ffaa] selection:text-black font-sans crt-overlay overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />

      {/* 1. PC NAVIGATION (TOP) */}
      <AnimatePresence>
        {deviceType === 'pc' && (
          <motion.nav 
            initial={{ y: -100 }} animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] px-12 py-8 flex justify-between items-center mix-blend-difference"
          >
            <div className="flex items-center gap-4 cursor-pointer" data-hover="true">
              <div className="w-10 h-10 bg-[#00ffaa] flex items-center justify-center text-black font-black">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="font-heading text-xl font-black tracking-tighter">VESNI.SYS</span>
            </div>
            <div className="flex items-center gap-12">
              <NavItems />
              <div className="flex items-center gap-2 text-[9px] font-mono opacity-40 ml-8 border-l border-white/10 pl-8">
                <Monitor className="w-3 h-3" /> PC_OPTIMIZED
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 2. TABLET NAVIGATION (SIDEBAR) */}
      <AnimatePresence>
        {deviceType === 'tablet' && (
          <motion.nav 
            initial={{ x: -100 }} animate={{ x: 0 }}
            className="fixed top-0 left-0 bottom-0 w-20 z-[100] bg-black/50 backdrop-blur-xl border-r border-white/5 flex flex-col items-center py-12 gap-12"
          >
            <div className="w-12 h-12 bg-[#00ffaa] flex items-center justify-center text-black font-black mb-8">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-12 items-center flex-1 justify-center">
              {['Projects', 'Achievements', 'About', 'Contact'].map(item => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="rotate-90 origin-center text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 hover:text-[#00ffaa] whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="text-[#00ffaa] opacity-40">
              <TabletIcon size={20} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 3. MOBILE NAVIGATION (TOP STICKY) */}
      <AnimatePresence>
        {deviceType === 'mobile' && (
          <motion.nav 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/10"
          >
             <span className="font-heading text-sm font-black tracking-tighter text-[#00ffaa]">VESNI.SYS</span>
             <div className="flex items-center gap-4">
               <span className="text-[8px] font-mono text-white/30 uppercase"><Smartphone className="inline w-3 h-3 mb-1" /> MOBILE_HUD</span>
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10">
                 {isMobileMenuOpen ? <X size={18}/> : <Menu size={18}/>}
               </button>
             </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[95] bg-black flex flex-col items-center justify-center gap-8 p-12"
          >
            {['Projects', 'Achievements', 'About', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-black hover:text-[#00ffaa] uppercase tracking-tighter"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`${deviceType === 'tablet' ? 'pl-20' : ''}`}>
        {/* HERO SECTION - Adaptive */}
        <section className={`relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 ${deviceType === 'pc' ? 'items-center text-center' : 'items-start text-left'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10 w-full max-w-[1400px]"
          >
            <div className={`flex items-center gap-3 mb-8 bg-[#00ffaa]/5 border border-[#00ffaa]/20 px-4 py-1.5 w-fit font-mono text-[9px] tracking-widest text-[#00ffaa] ${deviceType === 'pc' ? 'mx-auto' : ''}`}>
              <Activity size={12} className="animate-pulse" /> SYSTEM_ENCRYPTED_OS_V.2.5
            </div>
            
            <GradientText 
              text="VESNI" 
              className={`leading-none mb-10 select-none tracking-tighter
                ${deviceType === 'mobile' ? 'text-[30vw]' : deviceType === 'tablet' ? 'text-[22vw]' : 'text-[18vw]'}
              `} 
            />

            <p className={`font-mono uppercase tracking-[0.3em] text-white/40 mb-12 max-w-2xl ${deviceType === 'pc' ? 'mx-auto' : ''} ${deviceType === 'mobile' ? 'text-[10px]' : 'text-sm'}`}>
              Full-Stack Architect // Ethical Pen-Tester // Director of Alpha 1
            </p>

            <div className={`flex flex-wrap gap-4 ${deviceType === 'pc' ? 'justify-center' : 'justify-start'}`}>
               <button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#00ffaa] text-black px-10 py-4 font-black text-[10px] tracking-[0.3em] uppercase hover:scale-105 transition-transform"
                data-hover="true"
               >
                 Execute_Access
               </button>
               <button 
                onClick={() => scrollToSection('contact')}
                className="border border-white/20 text-white px-10 py-4 font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all"
                data-hover="true"
               >
                 Contact_Protocol
               </button>
            </div>
          </motion.div>

          {/* PC Layout HUD Elements */}
          {deviceType === 'pc' && (
            <>
              <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col gap-8 opacity-20">
                <div className="w-1 h-32 bg-white/10 relative overflow-hidden">
                   <motion.div 
                    className="absolute top-0 left-0 w-full bg-[#00ffaa]" 
                    animate={{ height: ['0%', '100%', '0%'] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                   />
                </div>
                <span className="rotate-90 font-mono text-[8px] tracking-[0.5em] text-white">X-COORD_882</span>
              </div>
              <div className="absolute bottom-12 right-12 text-right opacity-20 font-mono text-[8px] space-y-2">
                <p>LATENCY: 14MS</p>
                <p>UID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
              </div>
            </>
          )}
        </section>

        {/* PROJECTS SECTION - Adaptive Grid */}
        <section id="projects" className="py-32 px-6 md:px-20 bg-black relative">
          <div className="max-w-[1600px] mx-auto">
            <header className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8 border-b border-white/5 pb-12">
               <h2 className={`font-heading font-black leading-none ${deviceType === 'mobile' ? 'text-6xl' : 'text-8xl'}`}>THE <span className="text-[#00ffaa]">VAULT</span></h2>
               <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase text-right">Records_Found: {PROJECTS.length}</div>
            </header>
            
            <div className={`grid gap-6 ${
              deviceType === 'mobile' ? 'grid-cols-1' : 
              deviceType === 'tablet' ? 'grid-cols-2' : 
              'grid-cols-2 lg:grid-cols-3'
            }`}>
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS - Adaptive Layout */}
        <section id="achievements" className="py-32 px-6 md:px-20 bg-[#0a0a0b] border-t border-white/5">
           <div className="max-w-[1600px] mx-auto">
              <div className="flex items-center gap-4 mb-20 text-[#ff3333]">
                <Zap size={20} />
                <h2 className={`font-heading font-black uppercase tracking-tight ${deviceType === 'mobile' ? 'text-4xl' : 'text-6xl'}`}>Key_Milestones</h2>
              </div>
              
              <div className={`grid gap-1 ${
                deviceType === 'mobile' ? 'grid-cols-1' : 
                deviceType === 'tablet' ? 'grid-cols-2' : 
                'grid-cols-3'
              }`}>
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="p-10 md:p-14 bg-black/50 border border-white/5 hover:border-[#00ffaa]/30 transition-all group">
                    <div className={`${ach.color} mb-8 flex justify-between`}>
                      <ach.icon size={deviceType === 'mobile' ? 32 : 48} />
                      <span className="font-mono text-[10px] opacity-20">{ach.id}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-black mb-4 uppercase group-hover:text-[#00ffaa] transition-colors">{ach.title}</h3>
                    <p className="text-white/40 text-sm mb-8 leading-relaxed font-light">{ach.desc}</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                       <span className="font-mono text-[9px] text-[#00ffaa] tracking-widest">{ach.metric}</span>
                       <Target className="w-3 h-3 text-white/20" />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6 md:px-20 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <h2 className={`font-heading font-black leading-tight ${deviceType === 'mobile' ? 'text-5xl' : 'text-7xl'}`}>IDENTITY_ <br/> <span className="text-[#00ffaa]">VERIFIED.</span></h2>
               <div className="text-lg md:text-xl font-light text-white/60 leading-relaxed space-y-6">
                 <p>I am <span className="text-white font-bold underline decoration-[#00ffaa]">VESNI</span>. Multimedia architect and ethical security researcher.</p>
                 <p>Leading <span className="text-white font-bold">P2 Productions</span>, I bridge the gap between complex backend security and high-fidelity front-end storytelling.</p>
               </div>
               <div className="flex gap-4">
                  <div className="px-6 py-4 bg-white/5 border border-white/10">
                     <span className="block font-mono text-[8px] text-white/30 mb-2 uppercase tracking-widest">Football_Rank</span>
                     <span className="text-2xl font-heading font-bold">STRIKER</span>
                  </div>
                  <div className="px-6 py-4 bg-white/5 border border-white/10">
                     <span className="block font-mono text-[8px] text-white/30 mb-2 uppercase tracking-widest">Plays_Soundcloud</span>
                     <span className="text-2xl font-heading font-bold">2K+</span>
                  </div>
               </div>
            </div>
            
            {/* Logic Matrix - PC/Tablet focus */}
            {deviceType !== 'mobile' && (
              <div className="bg-white/5 border border-white/10 p-12 backdrop-blur-3xl relative">
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#00ffaa]/40 translate-x-4 -translate-y-4" />
                <h3 className="font-heading font-bold mb-12 flex items-center gap-3 border-b border-white/5 pb-4 text-xl">
                  <Cpu className="text-[#00ffaa]" /> SYSTEM_CAPABILITIES
                </h3>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono tracking-[0.5em] text-white/20 block">CORE_SYSTEMS</span>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS3', 'JS', 'PHP'].map(s => <span key={s} className="bg-white text-black px-4 py-1.5 text-[10px] font-black">{s}</span>)}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono tracking-[0.5em] text-white/20 block">SEC_PROTOCOL</span>
                    <div className="flex flex-wrap gap-2">
                      {['NMAP', 'BURP', 'GHOST', 'ENCRYPTION'].map(s => <span key={s} className="border border-[#ff3333] text-[#ff3333] px-4 py-1.5 text-[10px] font-mono bg-[#ff3333]/5">{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-32 px-6 md:px-20 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`font-heading font-black text-white/5 mb-24 select-none tracking-tighter ${deviceType === 'mobile' ? 'text-7xl' : 'text-[12vw]'}`}>TRANSMIT</h2>
            <div className={`grid gap-4 mb-24 ${deviceType === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'}`}>
              {SOCIALS.map(s => (
                <a key={s.name} href={s.url} target="_blank" className="p-10 border border-white/5 hover:border-[#00ffaa] hover:bg-[#00ffaa]/5 transition-all group" data-hover="true">
                  <s.icon className="mx-auto mb-4 group-hover:text-[#00ffaa] group-hover:scale-110 transition-all" size={24} />
                  <span className="font-mono text-[9px] tracking-widest uppercase text-white/40 group-hover:text-white">{s.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] text-white/20 tracking-widest">
               <span>// ARCHIVE_VESNI_PORTFOLIO</span>
               <div className="flex gap-8">
                 <span className="text-[#00ffaa]">STATUS: ACTIVE</span>
                 <span>LAYOUT: {deviceType.toUpperCase()}</span>
               </div>
               <span>© 2025 ALL_RECORDS_LOCKED</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          >
             <motion.div
              initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-6xl bg-[#0a0a0b] border border-white/10 flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden ${deviceType === 'pc' ? 'md:flex-row' : ''}`}
              onClick={e => e.stopPropagation()}
             >
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-30 text-white/40 hover:text-white" data-hover="true">
                  <X size={32} />
                </button>
                <div className={`${deviceType === 'pc' ? 'w-1/2' : 'w-full h-64'} bg-black relative`}>
                  <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt={selectedProject.title} />
                  <div className="absolute inset-0 scanner-line opacity-20" />
                </div>
                <div className={`p-10 md:p-20 flex flex-col justify-center ${deviceType === 'pc' ? 'w-1/2' : 'w-full'}`}>
                  <span className="text-[#00ffaa] font-mono text-[10px] tracking-widest mb-4 uppercase">Project_Rec: {selectedProject.id}</span>
                  <h3 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-none tracking-tighter uppercase">{selectedProject.title}</h3>
                  <p className="text-white/50 mb-10 leading-relaxed font-light">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    {selectedProject.tags.map(t => <span key={t} className="text-[9px] font-mono border border-white/10 px-4 py-2 uppercase bg-white/5">{t}</span>)}
                  </div>
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" className="bg-white text-black px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#00ffaa] transition-colors text-center" data-hover="true">
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
