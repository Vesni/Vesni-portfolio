/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, X, CheckCircle2 } from 'lucide-react';

interface KaliModalProps {
  onClose: () => void;
}

export const KaliModal: React.FC<KaliModalProps> = ({ onClose }) => {
  const KALI_TOOL_CATEGORIES = [
    {
      category: 'Scanning & Finding Weak Spots',
      tools: ['Nmap', 'Zenmap', 'Wireshark', 'theHarvester', 'Recon-ng', 'Amass']
    },
    {
      category: 'Web Safety & Security Audits',
      tools: ['Nikto', 'Nessus', 'OpenVAS', 'WPScan', 'SQLmap', 'SSLScan']
    },
    {
      category: 'Password & Login Strength Testing',
      tools: ['John the Ripper', 'Hashcat', 'Hydra', 'Medusa', 'Crunch']
    },
    {
      category: 'WiFi & Wireless Network Checks',
      tools: ['Aircrack-ng', 'Kismet', 'Wifite', 'Bettercap', 'Ettercap']
    },
    {
      category: 'System Testing Frameworks',
      tools: ['Metasploit', 'Armitage', 'Searchsploit', 'BeEF Framework']
    },
    {
      category: 'Data Analysis & File Forensics',
      tools: ['Autopsy', 'Binwalk', 'Foremost', 'Ghidra', 'Radare2']
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl bg-[#0d0f12] border border-cyan-500/30 shadow-2xl overflow-hidden relative"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Shield size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                Ethical Hacking & App Safety
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mt-0.5">
                Cybersecurity & Safety Testing Tools
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[70vh] overflow-y-auto">
          
          {/* Simple Explanation */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-3">
            <Terminal className="text-cyan-400 shrink-0 mt-0.5" size={18} />
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              I learned ethical hacking with tools in <strong>Kali Linux</strong> to understand how bad actors try to break into systems. Today, I use that knowledge to find weaknesses in websites and apps early so I can fix them and protect people's private data.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Tools I'm Experienced With
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {KALI_TOOL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/30 transition-all">
                  <div className="text-xs font-semibold text-cyan-300 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map(t => (
                      <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Principles */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              My Core Safety Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Fix security flaws before apps go live</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Keep passwords and user data safe</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Always follow ethical guidelines</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
          <span>Ethical Security & Protection</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KaliModal;
