
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Lock, Unlock, Wifi, Battery, Skull, Fingerprint, Terminal, AlertTriangle } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const MatrixBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {Array.from({ length: 25 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-[#4fb7b3] font-mono text-[10px] md:text-xs writing-vertical-rl whitespace-nowrap shadow-[0_0_8px_rgba(79,183,179,0.4)]"
        initial={{ top: -200, left: `${Math.random() * 100}%`, opacity: 0 }}
        animate={{ top: '120%', opacity: [0, 1, 0] }}
        transition={{ 
          duration: Math.random() * 3 + 2, 
          repeat: Infinity, 
          delay: Math.random() * 5,
          ease: "linear"
        }}
        style={{ filter: 'blur(0.5px)' }}
      >
        {Array.from({ length: 40 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
      </motion.div>
    ))}
  </div>
);

const TERMINAL_LOGS = [
  "root@sys:~# initiating_handshake...",
  "[WARN] firewall_detected: 192.168.x.x",
  "> injecting_payload: shellcode_v4.asm",
  "> bypassing_proxy_chain...",
  "[SUCCESS] port_22_open",
  "> brute_forcing_credentials...",
  "root_access: GRANTED",
  "> decrypting_user_data...",
  "[INFO] fetching_portfolio_assets...",
  "> mounting_filesystem: /vesni/projects",
  "SYSTEM_OVERRIDE_COMPLETE"
];

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'scan' | 'denied' | 'hack' | 'breach' | 'override' | 'reveal'>('scan');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Biometric Scan
      await new Promise(r => setTimeout(r, 2000));
      
      // Stage 2: Access Denied
      setStage('denied');
      await new Promise(r => setTimeout(r, 1000));

      // Stage 3: System Hack (Glitch)
      setStage('hack');
      await new Promise(r => setTimeout(r, 1200));

      // Stage 4: Breach Warning
      setStage('breach');
      await new Promise(r => setTimeout(r, 1500));

      // Stage 5: Terminal Override
      setStage('override');
      
      // Simulate fast terminal logs
      for (let i = 0; i < TERMINAL_LOGS.length; i++) {
        setLogs(prev => [...prev, TERMINAL_LOGS[i]]);
        // Vary the speed slightly for realism
        await new Promise(r => setTimeout(r, Math.random() * 150 + 50)); 
        // Update progress bar
        setProgress((i + 1) / TERMINAL_LOGS.length * 100);
      }
      
      await new Promise(r => setTimeout(r, 800));

      // Stage 6: Final Reveal
      setStage('reveal');
      await new Promise(r => setTimeout(r, 2000));
      
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden text-white"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 0.8 } }}
    >
      <MatrixBackground />
      
      {/* Phone Container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={
          stage === 'reveal' 
            ? { scale: 30, opacity: 0, rotate: 5 } 
            : { 
                y: 0, 
                opacity: 1, 
                x: stage === 'hack' ? [-5, 5, -5, 5, 0] : 0,
                rotate: stage === 'hack' ? [-2, 2, -2, 2, 0] : 0
              }
        }
        transition={
            stage === 'hack' 
                ? { duration: 0.2, repeat: 4 } 
                : stage === 'reveal'
                    ? { duration: 0.8, ease: "circIn" }
                    : { duration: 0.8, type: "spring" }
        }
        className="relative w-[320px] h-[640px] bg-[#0a0a0a] rounded-[48px] border-[6px] border-[#2a2a2a] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-20"
      >
        {/* Hardware Buttons */}
        <div className="absolute -left-[6px] top-24 w-[6px] h-10 bg-[#2a2a2a] rounded-l-md" /> {/* Vol Up */}
        <div className="absolute -left-[6px] top-36 w-[6px] h-10 bg-[#2a2a2a] rounded-l-md" /> {/* Vol Down */}
        <div className="absolute -right-[6px] top-28 w-[6px] h-16 bg-[#2a2a2a] rounded-r-md" /> {/* Power */}

        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-40 flex items-center justify-center gap-3 px-3">
             {/* Camera Lens */}
             <div className="w-3 h-3 rounded-full bg-[#111] ring-1 ring-[#333] relative">
                 <div className="absolute inset-[30%] bg-[#000033] rounded-full opacity-60"></div>
             </div>
             {/* Sensor */}
             <div className="w-1.5 h-1.5 rounded-full bg-[#111] opacity-50"></div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-5 left-8 right-8 flex justify-between text-[11px] font-semibold text-white z-30 font-sans tracking-wide">
            <span>13:37</span>
            <div className="flex gap-1.5 items-center">
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-3.5 h-3.5" />
            </div>
        </div>

        {/* Glass Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-50 rounded-[40px]" />

        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-6 overflow-hidden">
            
            <AnimatePresence mode="wait">
                {/* 1. BIOMETRIC SCAN */}
                {stage === 'scan' && (
                    <motion.div
                        key="scan"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full w-full"
                    >
                        <div className="relative mb-8">
                             <Fingerprint className="w-24 h-24 text-white/20" strokeWidth={1} />
                             
                             {/* Scanning Laser */}
                             <motion.div 
                                className="absolute left-0 right-0 h-1 bg-[#4fb7b3] shadow-[0_0_15px_rgba(79,183,179,0.8)]"
                                initial={{ top: "0%" }}
                                animate={{ top: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                             />
                             
                             {/* HUD Elements */}
                             <motion.div 
                                className="absolute -inset-4 border border-[#4fb7b3]/30 rounded-lg border-dashed"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                             />
                        </div>
                        <div className="text-center">
                            <motion.h3 
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-white font-medium text-sm tracking-[0.2em] mb-2"
                            >
                                SYSTEM LOCKED
                            </motion.h3>
                            <p className="text-[10px] text-white/40 font-mono">BIOMETRIC AUTH REQUIRED</p>
                        </div>
                    </motion.div>
                )}

                {/* 2. ACCESS DENIED */}
                {stage === 'denied' && (
                     <motion.div
                        key="denied"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/10 backdrop-blur-sm z-10"
                     >
                         <Lock className="w-16 h-16 text-red-500 mb-4" />
                         <h2 className="text-red-500 font-bold text-xl tracking-widest">ACCESS DENIED</h2>
                         <p className="text-red-400/60 text-xs mt-2 font-mono">IDENTITY NOT VERIFIED</p>
                     </motion.div>
                )}

                {/* 3. SYSTEM HACK */}
                {stage === 'hack' && (
                    <motion.div
                        key="hack"
                        className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center"
                    >
                        {/* Background Code Dump */}
                        <div className="absolute inset-0 opacity-20 text-[8px] text-red-500 font-mono p-4 overflow-hidden leading-none break-all">
                             {Array.from({length: 40}).map((_, i) => (
                                 <div key={i}>{Math.random().toString(36).substring(2)} {Math.random().toString(16).substring(2)} KERNEL_PANIC 0x000{i}</div>
                             ))}
                        </div>

                        <motion.div
                             className="z-10 flex flex-col items-center"
                             animate={{ x: [-2, 2, -2, 2, 0] }}
                             transition={{ repeat: Infinity, duration: 0.1 }}
                        >
                             <Skull className="w-20 h-20 text-red-600 mb-4 animate-pulse" />
                             <h1 className="text-4xl font-black text-red-600 tracking-tighter mix-blend-difference">ERROR</h1>
                             <div className="bg-red-600 text-black font-bold px-2 py-0.5 text-xs mt-2">FATAL EXCEPTION</div>
                        </motion.div>
                    </motion.div>
                )}

                {/* 4. SECURITY BREACH */}
                {stage === 'breach' && (
                    <motion.div
                        key="breach"
                        className="absolute inset-0 bg-yellow-900/20 flex flex-col items-center justify-center p-6 text-center border-4 border-yellow-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6 animate-bounce" />
                        <div className="border border-yellow-500/50 bg-black/50 p-4 w-full backdrop-blur-md">
                            <h3 className="text-yellow-500 font-bold text-lg mb-2 tracking-wider">SECURITY ALERT</h3>
                            <div className="h-px w-full bg-yellow-500/30 mb-2" />
                            <p className="text-[10px] text-yellow-200 font-mono text-left">
                                > UNAUTHORIZED_ROOT_ACCESS<br/>
                                > FIREWALL_BREACHED<br/>
                                > PROXY: BYPASSED
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* 5. OVERRIDE (TERMINAL) */}
                {stage === 'override' && (
                    <motion.div
                        key="override"
                        className="absolute inset-0 bg-[#050505] p-6 flex flex-col pt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 text-gray-500 mb-4 border-b border-gray-800 pb-2">
                             <Terminal className="w-3 h-3" />
                             <span className="text-[10px] font-mono">root@vesni-server:~</span>
                        </div>

                        {/* Logs */}
                        <div className="flex-1 overflow-hidden font-mono text-[10px] space-y-1 text-left relative">
                            {logs.map((log, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${log.includes('SUCCESS') || log.includes('GRANTED') ? 'text-green-500' : log.includes('WARN') ? 'text-yellow-500' : 'text-[#4fb7b3]'}`}
                                >
                                    {log}
                                </motion.div>
                            ))}
                            {/* Cursor */}
                            <motion.div 
                                animate={{ opacity: [0, 1] }} 
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="w-2 h-4 bg-[#4fb7b3] mt-1" 
                            />
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="flex justify-between text-[8px] text-[#4fb7b3] mb-1 font-mono">
                                <span>INJECTING_ASSETS</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-[#4fb7b3]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>

      {/* Final Reveal Text Behind Phone */}
       {stage === 'reveal' && (
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                 <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white drop-shadow-[0_0_50px_rgba(79,183,179,0.5)] leading-none mix-blend-screen">
                   VESNI
                 </h1>
                 
                 <div className="flex items-center gap-4 mt-6">
                    <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#4fb7b3]" />
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-[#a8fbd3] font-mono tracking-[0.5em] uppercase text-xs md:text-sm"
                    >
                        Access Granted
                    </motion.div>
                    <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#4fb7b3]" />
                 </div>
            </motion.div>
       )}
    </motion.div>
  );
};

export default Intro;
