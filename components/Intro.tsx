
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

interface LogLine {
  text: string;
  category: 'boot' | 'id' | 'prompt';
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<LogLine[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isInteractive, setIsInteractive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const bootSequence = [
    { text: "VesniOS initializing...", delay: 400, category: 'boot' as const },
    { text: "Loading core modules ████░░░ 68%", delay: 600, category: 'boot' as const },
    { text: "Mounting projects ████████ 100%", delay: 400, category: 'boot' as const },
    { text: "Security layer active", delay: 500, category: 'boot' as const },
    { text: "----------------------------------", delay: 200, category: 'boot' as const },
    { text: "User detected: Vesni", delay: 500, category: 'id' as const },
    { text: "Role: System Developer", delay: 300, category: 'id' as const },
    { text: "Mode: Build > Animate", delay: 300, category: 'id' as const },
    { text: "----------------------------------", delay: 200, category: 'boot' as const },
    { text: "Type: start", delay: 400, category: 'prompt' as const },
  ];

  useEffect(() => {
    let currentDelay = 0;
    const timeouts: number[] = [];

    bootSequence.forEach((item, index) => {
      currentDelay += item.delay;
      const tid = window.setTimeout(() => {
        setLines(prev => [...prev, { text: item.text, category: item.category }]);
        if (index === bootSequence.length - 1) {
          setIsInteractive(true);
        }
      }, currentDelay);
      timeouts.push(tid);
    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  useEffect(() => {
    if (isInteractive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInteractive]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = userInput.toLowerCase().trim();
      if (cmd === 'start') {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      } else if (cmd !== '') {
        setLines(prev => [...prev, { text: `Invalid command: ${cmd}`, category: 'boot' }]);
        setUserInput('');
      }
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center font-mono p-6 crt-overlay overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.6 }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* HUD Elements */}
          <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-20 text-[10px] uppercase tracking-widest hidden md:flex">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ffaa] animate-pulse" />
              <span>CPU_LOAD: 12.4%</span>
            </div>
            <span>MEM: 4.2GB / 16GB</span>
            <span>UPLINK: STABLE</span>
          </div>

          <div className="absolute top-8 right-8 opacity-20 text-[10px] uppercase tracking-widest text-right hidden md:block">
            <span>REGION: IAD1</span><br/>
            <span>LATENCY: 14MS</span>
          </div>

          <div className="w-full max-w-lg space-y-1 md:space-y-2">
            {lines.map((line, i) => (
              <motion.div 
                key={`${i}-${line.text}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs md:text-sm tracking-wider ${
                  line.category === 'boot' ? 'text-white/40' : 
                  line.category === 'id' ? 'text-white font-bold' : 
                  'text-[#00ffaa]'
                }`}
              >
                <span className="opacity-20 mr-4">[{i.toString().padStart(2, '0')}]</span>
                {line.text}
              </motion.div>
            ))}

            {isInteractive && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-[#00ffaa] text-xs md:text-sm mt-4 border-l-2 border-[#00ffaa] pl-3"
              >
                <span className="font-black animate-pulse">{">"}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none w-full text-[#00ffaa] caret-transparent"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                <motion.div 
                  className="w-2 h-4 bg-[#00ffaa]"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-10">
            <div className="w-32 h-1 bg-white/20 relative overflow-hidden">
               <motion.div 
                className="absolute top-0 left-0 h-full bg-white" 
                animate={{ left: ['-100%', '100%'] }} 
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ width: '40%' }}
               />
            </div>
            <span className="text-[8px] uppercase tracking-[0.6em]">Encrypted_Stream</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
