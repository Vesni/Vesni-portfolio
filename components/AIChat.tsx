/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Connected to Vesni_Terminal. Ask me about his stack, projects, or security research. ⚡️' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Slight delay to allow state update to render before scrolling
    setTimeout(scrollToBottom, 100);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[90vw] md:w-96 bg-black/90 backdrop-blur-xl border border-[#4fb7b3]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#4fb7b3]/10 font-mono"
          >
            {/* Header */}
            <div className="bg-[#1a1b3b] p-4 flex justify-between items-center border-b border-[#4fb7b3]/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4fb7b3] animate-pulse" />
                <h3 className="text-[#4fb7b3] text-xs tracking-widest uppercase font-bold">Vesni AI Terminal</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white" data-hover="true">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="h-64 md:h-80 overflow-y-auto p-4 space-y-3 scroll-smooth bg-black/50"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 text-xs md:text-sm ${
                      msg.role === 'user'
                        ? 'bg-[#4fb7b3]/20 text-[#a8fbd3] border border-[#4fb7b3]/30'
                        : 'bg-white/5 text-gray-300 border border-white/10'
                    }`}
                  >
                    <span className="opacity-50 text-[10px] block mb-1 uppercase tracking-wider">
                        {msg.role === 'user' ? 'USR' : 'SYS'}
                    </span>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 flex gap-1 items-center border border-white/10">
                    <span className="text-xs text-[#4fb7b3] animate-pulse">PROCESSING...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#4fb7b3]/20 bg-[#1a1b3b]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Execute command..."
                  className="flex-1 bg-transparent text-[#a8fbd3] placeholder-[#a8fbd3]/30 text-sm focus:outline-none font-mono"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-[#4fb7b3] hover:text-white transition-colors disabled:opacity-50 uppercase text-xs font-bold tracking-widest"
                  data-hover="true"
                >
                  [SEND]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center shadow-[0_0_20px_rgba(79,183,179,0.3)] border border-[#4fb7b3]/50 z-50 group"
        data-hover="true"
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6 text-[#4fb7b3]" />
        ) : (
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#4fb7b3] group-hover:animate-bounce" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;