
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  Shield, 
  Cpu, 
  Code, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Gamepad2, 
  Trophy, 
  Mail,
  ExternalLink,
  Music,
  Youtube,
  Twitter,
  Instagram,
  Disc // Using Disc for SoundCloud substitute or generic
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ArtistCard'; 
import AIChat from './components/AIChat';
import Intro from './components/Intro';
import { Project } from './types';

// Portfolio Data
const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'PC26 (Paper Cricket)', 
    techStack: 'JS • LocalStorage • Game Logic', 
    tags: ['Game Dev', 'Top Project', '400+ Users'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop',
    description: 'My top game with 400+ active users worldwide. A multiplayer cricket score simulator featuring a virtual coin toss system, friend invites, and complex score tracking logic. Designed to bring the classroom classic to the web.',
    link: 'https://pcwc.vercel.app/'
  },
  { 
    id: '2', 
    title: 'Forca OS', 
    techStack: 'HTML • CSS • JS', 
    tags: ['Web OS', 'Simulation'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'A web-based operating system simulation featuring draggable windows, terminal commands, and theme customization. Built entirely with vanilla JavaScript to demonstrate DOM manipulation mastery without frameworks.',
    link: 'https://vercel.com/vesnis-projects'
  },
  { 
    id: '3', 
    title: 'Security Lab', 
    techStack: 'Python • Burp Suite • Nmap', 
    tags: ['Security', 'Ethical Hacking'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    description: 'A repository of sanitized CTF writeups and vulnerability reports from controlled lab environments. Includes methodology for directory discovery using gobuster and packet analysis with Wireshark.',
    link: 'https://github.com/Vesni'
  },
  { 
    id: '4', 
    title: 'FB26 Tracker', 
    techStack: 'PHP • SQL • Analytics', 
    tags: ['Sports Tech', 'Full Stack'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000&auto=format&fit=crop',
    description: 'A football performance tracking application. Logs training sessions, matches goals, and generates heatmaps. Demonstrates full-stack CRUD capabilities and data visualization.',
    link: 'https://github.com/Vesni'
  },
  { 
    id: '5', 
    title: 'Discord Tools', 
    techStack: 'Node.js • API', 
    tags: ['Bot Dev', 'Automation'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom Discord bots and overlay tools for streamers. Handles server moderation, live stats, and automated alerts using the Discord API.'
  },
  { 
    id: '6', 
    title: 'Music Editor', 
    techStack: 'Audio Engineering', 
    tags: ['Creative', 'Audio'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    description: 'Portfolio of sound design and music editing work. Showcasing the creative side of technical production.',
    link: 'https://soundcloud.com/vesni-lanus'
  },
];

const SKILLS = {
  mastered: ['HTML5', 'CSS3 / Tailwind', 'JavaScript ES6+', 'PHP'],
  intermediate: ['Python', 'SQL / MySQL', 'Git / GitHub', 'Ethical Hacking'],
  tools: ['Burp Suite', 'Nmap', 'Wireshark', 'Gobuster', 'VS Code']
};

const SOCIALS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Vesni' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@NotebookLMgoogl' },
  { name: 'Discord', icon: Gamepad2, url: 'https://discord.gg/tZE7WEkyhH' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/https.vesni/' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/NextYTreal' },
  { name: 'SoundCloud', icon: Disc, url: 'https://soundcloud.com/vesni-lanus' },
  { name: 'Vercel', icon: Code, url: 'https://vercel.com/vesnis-projects' }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('tech');
  const [showIntro, setShowIntro] = useState(true);

  // Handle keyboard navigation for project modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') navigateProject('prev');
      if (e.key === 'ArrowRight') navigateProject('next');
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % PROJECTS.length;
    } else {
      nextIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    }
    setSelectedProject(PROJECTS[nextIndex]);
  };
  
  return (
    <div className={`relative min-h-screen text-white selection:bg-[#4fb7b3] selection:text-black cursor-auto md:cursor-none font-sans ${showIntro ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      <CustomCursor />
      <FluidBackground />
      
      {/* Intro Animation Overlay */}
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <AIChat />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 py-6 mix-blend-difference">
        <div className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-white cursor-default z-50 flex items-center gap-2">
          <Terminal className="w-6 h-6" /> VESNI
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
          {['Projects', 'About', 'Services', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-[#a8fbd3] transition-colors text-white cursor-pointer bg-transparent border-none"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex items-center gap-2 border border-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer bg-transparent"
          data-hover="true"
        >
          <Mail className="w-4 h-4" /> Hire Me
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#31326f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Projects', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-bold text-white hover:text-[#a8fbd3] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <div className="absolute bottom-10 flex gap-6">
               <Github className="text-white/50" />
               <Linkedin className="text-white/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-24 md:pb-20"
        >
           {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!showIntro ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] md:text-sm font-mono text-[#a8fbd3] tracking-widest uppercase mb-4"
          >
            <span className="bg-black/40 px-3 py-1 rounded-full border border-[#4fb7b3]/30 backdrop-blur-sm flex items-center gap-2">
              <Code className="w-3 h-3" /> Full-Stack Dev
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full border border-[#4fb7b3]/30 backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-3 h-3" /> Ethical Pen-Tester
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full border border-[#4fb7b3]/30 backdrop-blur-sm flex items-center gap-2">
              <Trophy className="w-3 h-3" /> Footballer
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="relative w-full flex justify-center items-center">
            <GradientText 
              text="VESNI" 
              as="h1" 
              className="text-[18vw] md:text-[16vw] leading-[0.8] font-black tracking-tighter text-center" 
            />
            <motion.div 
               className="absolute -z-20 w-[50vw] h-[50vw] bg-[#4fb7b3]/10 blur-[60px] rounded-full pointer-events-none"
               animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.4, 0.2] }}
               transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
          
          <motion.div
             initial={{ scaleX: 0 }}
             animate={!showIntro ? { scaleX: 1 } : {}}
             transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
             className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#a8fbd3] to-transparent mt-4 md:mt-8 mb-6 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={!showIntro ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-xl font-light max-w-2xl mx-auto text-gray-300 leading-relaxed px-4"
          >
             Mastered HTML • CSS • JS • PHP · Intermediate Python · Ethical Security Research · Team player on and off the pitch.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={!showIntro ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex gap-4 mt-8"
          >
            <button onClick={() => scrollToSection('projects')} className="bg-[#4fb7b3] text-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors" data-hover="true">View Work</button>
            <button onClick={() => scrollToSection('contact')} className="border border-white/30 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors" data-hover="true">Contact</button>
          </motion.div>
        </motion.div>

        {/* MARQUEE */}
        <div className="absolute bottom-12 md:bottom-16 left-0 w-full py-3 md:py-4 bg-white text-black z-20 overflow-hidden border-y-4 border-black shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <motion.div 
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-2xl md:text-5xl font-heading font-black px-8 flex items-center gap-4">
                    WEB DEVELOPMENT <span className="text-[#4fb7b3] text-xl md:text-3xl">●</span> 
                    ETHICAL HACKING <span className="text-[#4fb7b3] text-xl md:text-3xl">●</span> 
                    FOOTBALL <span className="text-[#4fb7b3] text-xl md:text-3xl">●</span> 
                    GAMING <span className="text-[#4fb7b3] text-xl md:text-3xl">●</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* PROJECTS SECTION (Formerly Lineup) */}
      <section id="projects" className="relative z-10 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-4">
             <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.9] drop-shadow-lg break-words w-full md:w-auto">
              Select <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8fbd3] to-[#4fb7b3]">Projects</span>
            </h2>
             <div className="hidden md:block text-right">
               <p className="text-gray-400 font-mono text-sm tracking-widest">
                 /// SYSTEM.PROJECTS.LOAD()<br/>
                 STATUS: ONLINE
               </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS SECTION (Formerly Experience) */}
      <section id="about" className="relative z-10 py-20 md:py-32 bg-black/40 backdrop-blur-sm border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 right-[-20%] w-[50vw] h-[50vw] bg-[#637ab9]/20 rounded-full blur-[40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* Left Col: Bio */}
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                WHO IS <br/> <GradientText text="VESNI?" className="text-5xl md:text-8xl" />
              </h2>
              <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed mb-10">
                <p className="mb-6">
                  I’m a results-first <span className="text-[#a8fbd3] font-bold">web developer</span> and <span className="text-[#a8fbd3] font-bold">ethical security researcher</span> who ships clean, battle-tested sites and runs hands-on security assessments in controlled environments.
                </p>
                <p>
                  Off keyboard, I have a captain-level mindset on the football pitch and compete in gaming. I build small tools, experiment with new tech, and follow strict responsible-disclosure practices for any security work.
                </p>
              </div>

              {/* Interests Tabs */}
              <div className="flex gap-6 border-b border-white/10 pb-4 mb-6">
                <button 
                  onClick={() => setActiveTab('tech')}
                  className={`text-sm font-bold tracking-widest uppercase pb-2 transition-colors ${activeTab === 'tech' ? 'text-white border-b-2 border-[#4fb7b3]' : 'text-gray-500 hover:text-white'}`}
                >
                  Tech
                </button>
                <button 
                  onClick={() => setActiveTab('life')}
                  className={`text-sm font-bold tracking-widest uppercase pb-2 transition-colors ${activeTab === 'life' ? 'text-white border-b-2 border-[#4fb7b3]' : 'text-gray-500 hover:text-white'}`}
                >
                  Life
                </button>
              </div>

              {activeTab === 'tech' ? (
                 <div className="space-y-4">
                   <div className="flex items-center gap-4 text-gray-300"><Code className="text-[#4fb7b3]"/> Google Developer Badge Holder</div>
                   <div className="flex items-center gap-4 text-gray-300"><Github className="text-[#4fb7b3]"/> Open Source Contributor</div>
                   <div className="flex items-center gap-4 text-gray-300"><Cpu className="text-[#4fb7b3]"/> Active Discord Developer: <strong>ethical_vesni</strong></div>
                 </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300"><Trophy className="text-[#4fb7b3]"/> 
                    <a href="https://cricheroes.com/player-profile/43662014/vesni/matches" target="_blank" rel="noopener noreferrer" className="hover:text-[#a8fbd3] underline underline-offset-4">
                      Official ICA Box Cricket Player
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300"><Gamepad2 className="text-[#4fb7b3]"/> Competitive Gamer</div>
                  <div className="flex items-center gap-4 text-gray-300"><Music className="text-[#4fb7b3]"/> Music Editor</div>
                </div>
              )}
            </div>

            {/* Right Col: Skills Visualizer */}
            <div className="lg:col-span-6 bg-[#1a1b3b]/50 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-2">
                <Terminal className="text-[#4fb7b3]" /> Skill Matrix
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Mastered Core</h4>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.mastered.map(skill => (
                      <span key={skill} className="bg-[#4fb7b3] text-black px-3 py-1 font-bold text-sm rounded-md">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Intermediate / Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.intermediate.map(skill => (
                      <span key={skill} className="bg-white/10 text-white border border-white/10 px-3 py-1 text-sm rounded-md">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                   <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Security Tools (Ethical Use Only)</h4>
                   <div className="grid grid-cols-2 gap-3">
                      {SKILLS.tools.map(tool => (
                        <div key={tool} className="flex items-center gap-2 text-sm text-gray-300 bg-black/20 p-2 rounded">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" /> {tool}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES / CONTACT SECTION (Formerly Tickets) */}
      <section id="services" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
             <h2 className="text-5xl md:text-9xl font-heading font-bold opacity-20 text-white">
               DEPLOY
             </h2>
             <p className="text-[#a8fbd3] font-mono uppercase tracking-widest -mt-3 md:-mt-8 relative z-10 text-sm md:text-base">
               Ready to start your project?
             </p>
          </div>
          
          <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Web Dev', 
                desc: 'Fast, responsive, and accessible websites built with modern standards.', 
                icon: Code,
                features: ['Custom Frontend', 'PHP Backend', 'SEO Friendly'],
                action: 'View Projects',
                link: 'projects'
              },
              { 
                title: 'Security Audit', 
                desc: 'Vulnerability assessments and hardening for your web applications.', 
                icon: Shield,
                features: ['Penetration Testing', 'Report Writing', 'Remediation'],
                action: 'Request Audit',
                link: 'mailto:vesni277@gmail.com?subject=Security%20Audit'
              },
              { 
                title: 'Collaboration', 
                desc: 'Looking for a teammate? I bring leadership from the pitch to the repo.', 
                icon: Trophy,
                features: ['Open Source', 'Team Leadership', 'Mentorship'],
                action: 'Let\'s Talk',
                link: 'mailto:vesni277@gmail.com?subject=Collaboration'
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative p-8 md:p-10 border border-white/10 backdrop-blur-md flex flex-col min-h-[400px] bg-gradient-to-b from-white/5 to-transparent transition-colors hover:border-[#4fb7b3]/50 group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity text-[#4fb7b3]">
                   <card.icon className="w-12 h-12" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 mb-8 h-20">{card.desc}</p>
                
                <ul className="space-y-4 mb-auto">
                  {card.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-200">
                      <span className="w-1 h-1 bg-[#4fb7b3] rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={card.link.startsWith('http') || card.link.startsWith('mailto') ? card.link : `#${card.link}`}
                  onClick={(e) => {
                    if (!card.link.startsWith('http') && !card.link.startsWith('mailto')) {
                       e.preventDefault();
                       scrollToSection(card.link);
                    }
                  }}
                  className="w-full py-4 mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] border border-white/20 hover:bg-white hover:text-black transition-all"
                  data-hover="true"
                >
                  {card.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 md:py-16 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">VESNI</div>
              <div className="text-sm text-gray-400 max-w-md">
                 Building the future, securing the present.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                 {SOCIALS.map((social) => (
                   <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors group"
                    title={social.name}
                   >
                     <social.icon className="w-5 h-5" />
                   </a>
                 ))}
                 <a href="mailto:vesni277@gmail.com" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors" title="Email">
                   <Mail className="w-5 h-5"/>
                 </a>
              </div>
            </div>
            
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 font-mono gap-4">
             <p>© 2025 Vesni. All rights reserved.</p>
             <div className="max-w-xl text-right md:text-right text-justify opacity-60">
                <strong>Responsible Disclosure:</strong> All security testing shown is performed in legal, controlled environments or with explicit permission. I do not condone illicit hacking. Contact me to report potential vulnerabilities.
             </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#1a1b3b] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-[#4fb7b3]/10 group/modal max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                data-hover="true"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                className="absolute left-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm"
                data-hover="true"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                className="absolute right-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm md:right-8"
                data-hover="true"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedProject.id}
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b3b] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 pb-24 md:p-12 flex flex-col justify-center relative">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 text-[#4fb7b3] mb-4">
                     <span className="font-mono text-sm tracking-widest uppercase border border-[#4fb7b3]/30 px-2 py-1 rounded">{selectedProject.year}</span>
                     <span className="font-mono text-sm tracking-widest uppercase">{selectedProject.techStack}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase leading-none mb-4 text-white">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="h-px w-20 bg-white/20 mb-6" />
                  
                  <p className="text-gray-300 leading-relaxed text-lg font-light mb-8">
                    {selectedProject.description}
                  </p>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-[#4fb7b3] font-bold tracking-widest uppercase text-sm hover:text-white transition-colors w-fit group-hover/link:translate-x-1" 
                      data-hover="true"
                    >
                      View Code / Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
