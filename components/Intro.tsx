
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Signal, Lock, Unlock, MessageSquare, Terminal, AlertTriangle, Smartphone, Skull } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const TERMINAL_LOGS = [
  "--- INITIATING ROOT ACCESS ---",
  "> bypassing_secure_boot...",
  "> injecting_payload: exploit_v9.bin",
  "> modifying_system_partition...",
  "[SUCCESS] superuser_privileges: GRANTED",
  "> disabling_security_services...",
  "> mounting /data/portfolio...",
  "> executing: LOAD_VESNI_PROFILE.exe",
  "SYSTEM OWNED."
];

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'locked' | 'message' | 'bruteforce' | 'unlocked' | 'glitch' | 'terminal' | 'reveal'>('locked');
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const [logs, setLogs] = useState<string[]>([]);
  const [batteryLevel, setBatteryLevel] = useState(84);

  useEffect(() => {
    let isMounted = true;
    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

    const sequence = async () => {
      // 1. Locked State
      await wait(1500);
      if (!isMounted) return;

      // 2. Message Received
      setStage('message');
      await wait(2000);
      if (!isMounted) return;

      // 3. Brute Force PIN
      setStage('bruteforce');
      await wait(500);
      
      // Simulate rapid pin entry
      for (let i = 0; i < 4; i++) {
        if (!isMounted) return;
        setPin(prev => {
          const newPin = [...prev];
          newPin[i] = Math.floor(Math.random() * 10).toString();
          return newPin;
        });
        await wait(150);
      }
      await wait(200);

      // 4. Unlock to Home Screen
      if (!isMounted) return;
      setStage('unlocked');
      await wait(800);

      // 5. System Glitch
      if (!isMounted) return;
      setStage('glitch');
      // Drain battery visual
      const drainInterval = setInterval(() => {
        setBatteryLevel(prev => Math.max(0, prev - Math.floor(Math.random() * 20)));
      }, 100);
      
      await wait(1500);
      clearInterval(drainInterval);
      if (!isMounted) return;

      // 6. Terminal Rooting
      setStage('terminal');
      for (const log of TERMINAL_LOGS) {
        if (!isMounted) break;
        setLogs(prev => [...prev, log]);
        await wait(Math.random() * 150 + 50);
      }
      await wait(500);

      // 7. Reveal
      if (!isMounted) return;
      setStage('reveal');
      await wait(2000);

      if (isMounted) onComplete();
    };

    sequence();
    return () => { isMounted = false; };
  }, [onComplete]);

  // Current time for lock screen
  const time = new Date();
  const timeString = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateString = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-sans overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)", transition: { duration: 0.8 } }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Phone Container */}
      <motion.div
        className="relative w-[300px] md:w-[340px] h-[620px] md:h-[680px] bg-[#000] rounded-[50px] shadow-[0_0_0_4px_#1a1a1a,0_0_0_6px_#000,0_0_100px_rgba(79,183,179,0.1)] z-20 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={
          stage === 'reveal' 
          ? { scale: 20, opacity: 0 } 
          : { scale: 1, opacity: 1, rotate: stage === 'glitch' ? [0, -1, 1, -1, 0] : 0 }
        }
        transition={stage === 'reveal' ? { duration: 0.8, ease: "circIn" } : { duration: 0.5 }}
      >
        {/* Hardware Details */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[120px] bg-black z-50 rounded-b-[16px] flex justify-center items-center gap-4">
             {/* Speaker */}
             <div className="w-16 h-1.5 bg-[#1a1a1a] rounded-full opacity-50"></div>
             {/* Camera */}
             <div className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-[#222]">
                 <div className="w-1 h-1 bg-[#000033] rounded-full opacity-60 m-0.5"></div>
             </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-3 left-6 right-6 flex justify-between text-[10px] font-medium text-white z-40 px-2">
            <span>{timeString}</span>
            <div className="flex gap-1.5 items-center">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <div className="flex items-center gap-0.5">
                    <span className="text-[9px]">{batteryLevel}%</span>
                    <Battery className={`w-3.5 h-3.5 ${batteryLevel < 20 ? 'text-red-500' : 'text-white'}`} />
                </div>
            </div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
            
            <AnimatePresence mode="wait">
                {/* STAGE 1-3: LOCK SCREEN */}
                {(stage === 'locked' || stage === 'message' || stage === 'bruteforce') && (
                    <motion.div
                        key="lockscreen"
                        className="w-full h-full flex flex-col items-center pt-20 px-6 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"
                        exit={{ opacity: 0, scale: 1.1 }}
                    >
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                        
                        <div className="relative z-10 flex flex-col items-center w-full">
                            <Lock className="w-5 h-5 text-white/70 mb-4" />
                            <h2 className="text-6xl font-thin text-white tracking-tighter mb-1">{timeString}</h2>
                            <p className="text-white/80 font-medium text-sm mb-8">{dateString}</p>

                            {/* Notification */}
                            <AnimatePresence>
                                {stage !== 'locked' && (
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-3 mb-4 border border-white/10 shadow-lg"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                                <AlertTriangle className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <span className="text-xs font-bold text-white">Unknown</span>
                                                    <span className="text-[9px] text-white/50">now</span>
                                                </div>
                                                <p className="text-xs text-white/90">I'm in.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* PIN Pad Visual */}
                        {stage === 'bruteforce' && (
                             <motion.div 
                                className="mt-auto mb-12 relative z-10 flex gap-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                             >
                                 {pin.map((digit, i) => (
                                     <motion.div 
                                        key={i}
                                        animate={digit ? { scale: [1, 1.2, 1], backgroundColor: "#ffffff" } : {}}
                                        className={`w-3 h-3 rounded-full border border-white ${digit ? 'bg-white' : 'bg-transparent'}`}
                                     />
                                 ))}
                             </motion.div>
                        )}
                        
                        {/* Fake Home Bar */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full"></div>
                    </motion.div>
                )}

                {/* STAGE 4: HOME SCREEN */}
                {stage === 'unlocked' && (
                    <motion.div
                        key="homescreen"
                        className="w-full h-full bg-black pt-16 px-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="grid grid-cols-4 gap-4">
                            {Array.from({length: 24}).map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-1">
                                    <div className={`w-12 h-12 rounded-xl ${i === 2 ? 'bg-[#4fb7b3]' : 'bg-gray-800'} flex items-center justify-center`}>
                                        {i === 2 && <Terminal className="w-6 h-6 text-black" />}
                                    </div>
                                    <div className="w-8 h-1 bg-gray-800/50 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-6 left-4 right-4 h-20 bg-white/5 rounded-[24px] flex items-center justify-around px-2 backdrop-blur-lg">
                             <div className="w-12 h-12 rounded-xl bg-green-500/80"></div>
                             <div className="w-12 h-12 rounded-xl bg-blue-500/80"></div>
                             <div className="w-12 h-12 rounded-xl bg-gray-500/80"></div>
                             <div className="w-12 h-12 rounded-xl bg-red-500/80"></div>
                        </div>
                    </motion.div>
                )}

                {/* STAGE 5: GLITCH */}
                {stage === 'glitch' && (
                    <motion.div
                        key="glitch"
                        className="absolute inset-0 bg-red-600 flex flex-col items-center justify-center z-50 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        <Skull className="w-32 h-32 text-black animate-pulse relative z-10" />
                        <h1 className="text-4xl font-black text-black mt-4 relative z-10 tracking-tighter">SYSTEM<br/>FAILURE</h1>
                        
                        {/* Random glitch bars */}
                        {Array.from({length: 10}).map((_, i) => (
                             <motion.div
                                key={i}
                                className="absolute bg-black w-full h-2"
                                style={{ top: `${Math.random() * 100}%` }}
                                animate={{ x: [-100, 100, -50, 0], opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.2, delay: Math.random() }}
                             />
                        ))}
                    </motion.div>
                )}

                {/* STAGE 6: TERMINAL */}
                {stage === 'terminal' && (
                    <motion.div
                        key="terminal"
                        className="absolute inset-0 bg-black p-4 pt-16 font-mono text-[10px] text-[#4fb7b3] overflow-hidden"
                    >
                         <div className="border-b border-gray-800 pb-2 mb-2 flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span className="ml-2 opacity-50">root@vesni:~</span>
                         </div>
                         <div className="flex flex-col gap-1">
                             {logs.map((log, i) => (
                                 <motion.div key={i} initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}}>
                                     {log}
                                 </motion.div>
                             ))}
                             <motion.div 
                                animate={{ opacity: [0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="w-2 h-4 bg-[#4fb7b3] mt-2"
                             />
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[44px] z-[60]"></div>
        </div>
      </motion.div>

      {/* Final Reveal Text Behind Phone */}
       <AnimatePresence>
       {stage === 'reveal' && (
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                 <h1 className="text-[15vw] font-black tracking-tighter text-white leading-none mix-blend-screen select-none">
                   VESNI
                 </h1>
            </motion.div>
       )}
       </AnimatePresence>
    </motion.div>
  );
};

export default Intro;
