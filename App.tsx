
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
  BarChart3
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ArtistCard'; 
import { Project } from './types';

const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'VESNI STUDIO\'S', 
    techStack: 'AUDIO ENGINE • WEB STACK', 
    tags: ['Music', 'Discography', 'Studio'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'Central hub for original music produced by Vesni. High-fidelity audio explorer for industrial soundscapes.',
    link: 'https://vesnistudios.vercel.app/'
  },
  { 
    id: '02', 
    title: 'SILKY WAY', 
    techStack: 'NEXT.JS • FIREBASE', 
    tags: ['Marketplace', 'Chat', 'E-comm'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    description: 'Listing marketplace with integrated real-time chat and high-performance product indexing.',
    link: 'https://silky-way.vercel.app/#/'
  },
  { 
    id: '03', 
    title: 'VESNI OS', 
    techStack: 'JS • CSS3 • KERNEL', 
    tags: ['Web OS', 'UI/UX', 'System Sim'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'Web-based operating system featuring a functional terminal and draggable window manager.',
    link: 'https://vesni-os.vercel.app/'
  },
  { 
    id: '04', 
    title: 'CYBER OS', 
    techStack: 'REACT • SIMULATION', 
    tags: ['Hacking Game', 'Strategy'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'Strategic hacking simulator. Engage in high-stakes digital warfare as White or Black Hat.',
    link: 'https://hacksim.vercel.app/'
  },
  { 
    id: '05', 
    title: 'P2 PRODUCTIONS', 
    techStack: 'FILM • DIRECTING', 
    tags: ['Alpha 1', 'Studio', 'Animation'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
    description: 'Production home for "Alpha 1". Leading the creative edge in animated cinematic storytelling.',
    link: 'https://p2-productions.vercel.app/'
  },
  { 
    id: '06', 
    title: 'LIFESTEAL\'26', 
    techStack: 'GAMING • NETWORKING', 
    tags: ['SMP', 'Minecraft', 'Managed'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=1000&auto=format&fit=crop',
    description: 'Community Minecraft SMP portal. Hub for tracking player stats and server uptime.',
    link: 'https://lifesteal26.vercel.app/'
  }
];

const ACHIEVEMENTS = [
  { id: 'AC-01', title: 'Infra Auditor', desc: 'Securely audited educational infrastructure, exposing critical network bypasses.', icon: Shield, color: 'text-red-500', metric: 'EXPLOIT_PATCHED' },
  { id: 'AC-02', title: 'Director Alpha', desc: 'Heading P2 Productions for the 2025 release of Alpha 1.', icon: Film, color: 'text-blue-500', metric: 'PHASE_03_READY' },
  { id: 'AC-03', title: 'Stream Count', desc: 'Surpassed 2,000 unique plays on SoundCloud music releases.', icon: Music, color: 'text-green-400', metric: '2K_PLAYS_LOG' },
  { id: 'AC-04', title: 'Kernel Dev', desc: 'Successfully architected the Vesni OS kernel and Cyber OS engine.', icon: Cpu, color: 'text-purple-400', metric: 'SYS_STABLE' },
  { id: 'AC-05', title: 'Versatile Athlete', desc: 'Proven high-tier performance in football with a multi-position versatile role.', icon: Trophy, color: 'text-red-600', metric: 'POS:VERSATILE' },
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

      {/* PC TOP NAV */}
      {deviceType === 'pc' && (
        <motion.nav 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-[100] px-16 py-10 flex justify-between items-center mix-blend-difference"
        >
          <div className="flex items-center gap-4 group" onClick={() => window.scrollTo(0,0)}>
            <div className="w-12 h-12 bg-[#00ffaa] flex items-center justify-center text-black font-black border-tactical shadow-[0_0_20px_rgba(0,255,170,0.3)]">
              <Terminal size={24} />
            </div>
            <span className="font-heading text-xl font-black tracking-tighter">VESNI.SYS</span>
          </div>
          <NavContent />
        </motion.nav>
      )}

      {/* TABLET SIDEBAR */}
      {deviceType === 'tablet' && (
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
      {deviceType === 'mobile' && (
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

      <main className={`${deviceType === 'tablet' ? 'pl-24' : ''}`}>
        {/* HERO */}
        <section className={`min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden ${deviceType === 'pc' ? 'text-center' : 'text-left items-start md:px-20'}`}>
          
          {/* PC HUD Decorations */}
          {deviceType === 'pc' && (
            <>
              <div className="absolute top-20 left-20 opacity-20 flex gap-4">
                <div className="w-1 h-32 bg-gradient-to-b from-[#00ffaa] to-transparent" />
                <div className="font-mono text-[8px] uppercase tracking-widest text-white mt-auto">SYS_BOOT_STABLE</div>
              </div>
              <div className="absolute bottom-20 right-20 opacity-20 flex flex-col items-end gap-2">
                <BarChart3 size={16} />
                <div className="font-mono text-[8px] uppercase tracking-widest text-white">UPTIME_100% // {new Date().getFullYear()}</div>
              </div>
            </>
          )}

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 w-full max-w-7xl">
            <div className={`mb-10 flex items-center gap-3 bg-[#00ffaa]/5 border border-[#00ffaa]/20 px-4 py-1.5 w-fit font-mono text-[9px] tracking-widest text-[#00ffaa] ${deviceType === 'pc' ? 'mx-auto' : ''}`}>
               <div className="w-1.5 h-1.5 bg-[#00ffaa] pulse-led" /> CORE_OS_V.2.5_DEPLOYED
            </div>

            <GradientText 
              text="VESNI" 
              className={`leading-[0.85] mb-8 tracking-tighter block
                ${deviceType === 'mobile' ? 'text-[28vw]' : deviceType === 'tablet' ? 'text-[22vw]' : 'text-[18vw]'}
              `}
            />

            <p className={`font-mono uppercase tracking-[0.4em] text-white/40 mb-14 max-w-3xl ${deviceType === 'pc' ? 'mx-auto' : ''} ${deviceType === 'mobile' ? 'text-[9px]' : 'text-sm'}`}>
              Full-Stack Architect // Ethical Auditor // Versatile Athlete // Film Director
            </p>

            <div className={`flex flex-wrap gap-5 ${deviceType === 'pc' ? 'justify-center' : 'justify-start'}`}>
              <button onClick={() => scrollTo('projects')} className="bg-[#00ffaa] text-black px-12 py-5 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all border-tactical" data-hover="true">
                Access_Vault
              </button>
              <button onClick={() => scrollTo('about')} className="border border-white/20 text-white px-12 py-5 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 transition-all" data-hover="true">
                Sys_Entity
              </button>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-40 px-6 md:px-24 bg-black relative">
          <div className="max-w-[1700px] mx-auto">
            <header className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-16 gap-10">
              <h2 className={`font-heading font-black leading-none uppercase ${deviceType === 'mobile' ? 'text-6xl' : 'text-9xl'}`}>
                THE <span className="text-[#00ffaa]">RECORDS.</span>
              </h2>
              <div className="font-mono text-[10px] text-white/30 tracking-[0.5em] uppercase text-right">
                [ {PROJECTS.length} ] Indexed_Files
              </div>
            </header>

            <div className={`grid gap-4 ${
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
              <div className="flex items-center gap-5 mb-24">
                <div className="w-12 h-px bg-red-600" />
                <h2 className={`font-heading font-black uppercase tracking-tight ${deviceType === 'mobile' ? 'text-4xl' : 'text-7xl'}`}>Milestones.</h2>
              </div>
              
              <div className={`grid gap-1 ${
                deviceType === 'mobile' ? 'grid-cols-1' : 
                deviceType === 'tablet' ? 'grid-cols-2' : 
                'grid-cols-3'
              }`}>
                {ACHIEVEMENTS.map(ach => (
                  <div key={ach.id} className="p-12 md:p-16 bg-black border border-white/5 hover:border-[#00ffaa]/40 transition-all group border-tactical">
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
               <h2 className={`font-heading font-black leading-tight uppercase ${deviceType === 'mobile' ? 'text-5xl' : 'text-8xl'}`}>IDENTITY_ <br/> <span className="text-[#00ffaa]">VERIFIED.</span></h2>
               <div className="text-lg md:text-xl font-light text-white/50 leading-relaxed space-y-10 border-l-2 border-[#00ffaa]/20 pl-10">
                 <p>I am <span className="text-white font-bold tracking-tight">VESNI</span>. A tactical multi-threat entity operating in full-stack architecture and high-stakes auditing.</p>
                 <p>As the CEO of <span className="text-white font-bold underline decoration-[#00ffaa] decoration-2 underline-offset-4">P2 Productions</span>, I lead creative engineering in cinematic motion, currently focusing on the 2025 rollout of Alpha 1.</p>
               </div>
               
               {/* Stats Row */}
               <div className="flex flex-wrap gap-4">
                  <div className="px-8 py-6 bg-white/5 border border-white/10 border-tactical flex-1 min-w-[200px]">
                     <span className="block font-mono text-[8px] text-[#ff3333] mb-3 uppercase tracking-[0.5em] font-bold">Football_Role</span>
                     <span className="text-3xl font-heading font-black text-white">VERSATILE</span>
                     <span className="block font-mono text-[9px] text-white/30 mt-2">MULTI-POSITION_READY</span>
                  </div>
                  <div className="px-8 py-6 bg-white/5 border border-white/10 border-tactical flex-1 min-w-[200px]">
                     <span className="block font-mono text-[8px] text-[#00ffaa] mb-3 uppercase tracking-[0.5em] font-bold">Music_Output</span>
                     <span className="text-3xl font-heading font-black text-white">2K+ STREAMS</span>
                     <span className="block font-mono text-[9px] text-white/30 mt-2">GLOBAL_TRAFFIC_LOG</span>
                  </div>
               </div>
            </div>

            {deviceType !== 'mobile' && (
              <div className="bg-white/5 border border-white/10 p-16 backdrop-blur-2xl relative border-tactical group">
                 <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#00ffaa]/30 translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform" />
                 <h3 className="font-heading font-bold mb-16 flex items-center gap-4 border-b border-white/10 pb-6 text-2xl uppercase">
                   <Cpu className="text-[#00ffaa]" /> SYSTEM_NODES
                 </h3>
                 <div className="space-y-12">
                   <div className="space-y-6">
                     <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 block uppercase font-bold">Frontend_Stack</span>
                     <div className="flex flex-wrap gap-3">
                        {['REACT', 'TS', 'TAILWIND', 'VITE'].map(s => <span key={s} className="bg-white text-black px-5 py-2 text-[10px] font-black uppercase tracking-widest">{s}</span>)}
                     </div>
                   </div>
                   <div className="space-y-6">
                     <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 block uppercase font-bold">Sec_Protocol</span>
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
                 <span className="text-[#00ffaa] font-black">STABLE_REL_2.5</span>
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
