/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, X, CheckCircle2, Cpu, Wrench, Lock, Network } from 'lucide-react';

interface KaliModalProps {
  onClose: () => void;
}

export const KaliModal: React.FC<KaliModalProps> = ({ onClose }) => {
  const KALI_TOOL_CATEGORIES = [
    {
      category: 'Information Gathering & Recon',
      tools: ['Nmap', 'Zenmap', 'Wireshark', 'theHarvester', 'Recon-ng', 'Amass', 'Whois / DNSenum']
    },
    {
      category: 'Vulnerability Analysis & Auditing',
      tools: ['Nikto', 'Nessus', 'OpenVAS', 'WPScan', 'SQLmap', 'Commix', 'SSLScan']
    },
    {
      category: 'Exploitation & Frameworks',
      tools: ['Metasploit Framework', 'Armitage', 'Searchsploit', 'BeEF Framework', 'CrackMapExec']
    },
    {
      category: 'Wireless & Network Auditing',
      tools: ['Aircrack-ng suite', 'Kismet', 'Reaver', 'Wifite', 'Bettercap', 'Ettercap']
    },
    {
      category: 'Password Cracking & Hash Analysis',
      tools: ['John the Ripper', 'Hashcat', 'Hydra', 'Medusa', 'Crunch', 'Ophcrack']
    },
    {
      category: 'Post-Exploitation & Forensics',
      tools: ['Mimikatz', 'PowerSploit', 'Autopsy', 'Binwalk', 'Foremost', 'Ghidra / Radare2']
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-3xl rounded-2xl bg-[#0d0f12] border border-cyan-500/30 shadow-[0_20px_70px_rgba(6,182,212,0.15)] overflow-hidden relative"
      >
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                  Ethical Hacking & Cyber Security
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-0.5">
                Kali Linux Offensive & Defensive Tool Mastery
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

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Intro statement banner */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-4">
            <Shield className="text-cyan-400 shrink-0 mt-0.5" size={22} />
            <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              I specialize in <strong className="text-white">Ethical Hacking, Penetration Testing, and Network Defense</strong>, with comprehensive hands-on proficiency across virtually every standard security tool in the <strong className="text-cyan-400">Kali Linux ecosystem</strong>.
            </div>
          </div>

          {/* Tools Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Proficient Toolsets & Methodologies
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KALI_TOOL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/90 hover:border-cyan-500/30 transition-all">
                  <div className="text-xs font-bold text-cyan-300 mb-2.5 flex items-center gap-1.5">
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

          {/* Core Methodologies */}
          <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Security Philosophy & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>OWASP Top 10 web audit workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Network privilege escalation & hardening</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Ethical disclosure & vulnerability remediation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
          <span>Kali Linux Security Suite • Offensive & Defensive Workflows</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider text-[11px] transition-colors"
          >
            Got it
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KaliModal;
