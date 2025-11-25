
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Vesni's Portfolio. 
Vesni is a Full-Stack Web Developer, Ethical Pen-Tester, Footballer, and Gamer.

**Vesni's Core Info:**
- **Email:** vesni277@gmail.com
- **Role:** Web Developer & Ethical Security Researcher.
- **Key Skills:** HTML, CSS, JavaScript, PHP, Python, Burp Suite, Nmap.
- **Current Top Project:** PC26 (Paper Cricket WC) - A web game with 400+ active users.

**Socials & Links (Provide these when asked):**
- **YouTube:** https://www.youtube.com/@NotebookLMgoogl
- **Discord:** ethical_vesni (Server: https://discord.gg/tZE7WEkyhH)
- **Instagram:** https://www.instagram.com/https.vesni/
- **Twitter/X:** https://x.com/NextYTreal
- **GitHub:** https://github.com/Vesni
- **Vercel Projects:** https://vercel.com/vesnis-projects
- **SoundCloud:** https://soundcloud.com/vesni-lanus
- **Cricket Profile (ICA):** https://cricheroes.com/player-profile/43662014/vesni/matches

**Guidelines:**
- Be professional but cool (cyberpunk/hacker vibe).
- **Security:** Emphasize that all security work is ETHICAL and done in controlled labs.
- **Football:** Vesni has a captain-level mindset.
- **Gaming:** Competitive gamer.
- If asked about "PC26", describe it as his top game with 400+ users worldwide (https://pcwc.vercel.app/).

**Response Style:**
- Short, punchy, terminal-style output.
- Use emojis like ⚡️, 🛡️, ⚽, 💻.
`;

let ai: GoogleGenAI | null = null;

export const initializeGemini = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return;
  
  ai = new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    initializeGemini();
  }
  
  if (!ai) {
     // Fallback if no API key is present in environment (for demo purposes)
     return "TermLink Offline: Please configure API_KEY to chat with Vesni AI. For now, check the links in the footer! ⚡️";
  }

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });
    return result.text || "";
  } catch (error) {
    console.error("AI Error:", error);
    return "Connection interrupted. Handshake failed. Try again later. 🛡️";
  }
};
