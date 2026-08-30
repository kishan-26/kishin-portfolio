import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LeetcodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'dsa' | 'hardware'>('profile');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid">
      {/* Background Lighting Mesh Blobs */}
      <div className="glow-blob-pink w-[500px] h-[500px] -top-20 -left-20"></div>
      <div className="glow-blob-purple w-[600px] h-[600px] top-1/3 -right-20"></div>
      <div className="glow-blob-pink w-[350px] h-[350px] bottom-0 left-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17062b]/80 border border-[#ff7edb]/40 backdrop-blur-xl shadow-lg shadow-[#ff7edb]/10 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7edb] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7edb]"></span>
              </span>
              <span className="text-[#ffeaf9]">B.Tech CSE @ LPU</span>
              <span className="text-[#ff7edb]/40">•</span>
              <span className="text-[#ff7edb]">Open to Internships & Placements</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                <span className="block text-white">Engineering Next-Gen</span>
                <span className="gradient-text-neon font-black">
                  Software & Systems.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-[#ffeaf9]/90">
                Hi, I'm <span className="text-[#ff7edb] font-bold">{personalInfo.name}</span> — {personalInfo.headline}
              </p>
            </div>

            {/* Narrative summary */}
            <p className="text-sm sm:text-base text-[#ffeaf9]/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Premium Metrics Grid with Clickable LeetCode Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-[#ff7edb] text-center">
                <div className="text-2xl font-black text-[#ff7edb] font-mono">
                  {personalInfo.stats.cgpa}
                </div>
                <div className="text-[11px] text-[#ffeaf9]/60 font-semibold uppercase tracking-wider mt-0.5">
                  B.Tech CGPA
                </div>
              </div>

              {/* Clickable LeetCode Streak Card */}
              <a 
                href={personalInfo.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-2xl border-l-4 border-l-[#a73be2] text-center hover:scale-105 hover:border-[#ff7edb]/60 transition-all group block"
                title="View LeetCode Profile (Kishan_0porwal)"
              >
                <div className="text-2xl font-black text-[#c084fc] group-hover:text-[#ff7edb] font-mono flex items-center justify-center gap-1">
                  <span>{personalInfo.stats.leetcodeStreak}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[11px] text-[#ffeaf9]/60 font-semibold uppercase tracking-wider mt-0.5 flex items-center justify-center gap-1">
                  <span>Streak Badge</span>
                  <span className="text-[#ff7edb]">↗</span>
                </div>
              </a>

              {/* Clickable 65+ Solved DSA Card */}
              <a 
                href={personalInfo.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-2xl border-l-4 border-l-[#ff7edb] text-center hover:scale-105 hover:border-[#ff7edb]/80 transition-all group block shadow-md shadow-[#ff7edb]/10"
                title="View LeetCode Profile (Kishan_0porwal)"
              >
                <div className="text-2xl font-black text-[#ff7edb] font-mono flex items-center justify-center gap-1">
                  <span>{personalInfo.stats.leetcodeProblems}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[11px] text-[#ffeaf9]/80 font-bold uppercase tracking-wider mt-0.5 flex items-center justify-center gap-1 text-[#ff7edb]">
                  <span>65+ DSA Solved</span>
                  <span>↗</span>
                </div>
              </a>

              <div className="glass-card p-3.5 rounded-2xl border-l-4 border-l-[#6d2d8f] text-center">
                <div className="text-2xl font-black text-[#d8b4fe] font-mono">
                  42
                </div>
                <div className="text-[11px] text-[#ffeaf9]/60 font-semibold uppercase tracking-wider mt-0.5">
                  App Routes
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#ff7edb] via-[#ffa1e4] to-[#ff7edb] hover:opacity-95 shadow-xl shadow-[#ff7edb]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-[#ffeaf9] bg-[#1a082e] hover:bg-[#250d42] border border-[#ff7edb]/30 shadow-md hover:border-[#ff7edb]/60 transition-all hover:scale-105 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#ff7edb]" />
                <span>View Full CV</span>
              </button>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-[#ff7edb] bg-[#ff7edb]/10 hover:bg-[#ff7edb]/20 border border-[#ff7edb]/30 transition-all hover:scale-105"
              >
                <LeetcodeIcon className="w-4 h-4 text-[#ff7edb]" />
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs sm:text-sm text-[#ffeaf9]/70 border-t border-[#ff7edb]/15">
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 hover:text-[#ff7edb] transition-colors group cursor-pointer bg-[#ff7edb]/10 px-3 py-1.5 rounded-lg border border-[#ff7edb]/20"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff7edb]" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-[#ff7edb]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-[#ff7edb] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#a73be2]" />
                <span className="font-mono text-xs">{personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#ffeaf9] hover:text-[#ff7edb] font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#ff7edb]" />
                <span>github/kishan-26</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#ffeaf9] hover:text-[#ff7edb] font-medium transition-colors"
              >
                <LeetcodeIcon className="w-4 h-4 text-[#ff7edb]" />
                <span>LeetCode (Kishan_0porwal)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Multi-Tab Cyber IDE */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#6d2d8f] via-[#ff7edb] to-[#a73be2] opacity-35 blur-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden glass-card border border-[#ff7edb]/30 shadow-2xl bg-[#0a0314]">
                
                {/* IDE Window Title Bar & Tabs */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#120421] border-b border-[#ff7edb]/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('profile')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all cursor-pointer ${
                        activeCodeTab === 'profile'
                          ? 'bg-[#ff7edb]/20 text-[#ff7edb] border border-[#ff7edb]/40'
                          : 'text-[#ffeaf9]/50 hover:text-[#ffeaf9]'
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('dsa')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all cursor-pointer ${
                        activeCodeTab === 'dsa'
                          ? 'bg-[#a73be2]/25 text-[#d8b4fe] border border-[#a73be2]/50'
                          : 'text-[#ffeaf9]/50 hover:text-[#ffeaf9]'
                      }`}
                    >
                      sm2Engine.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('hardware')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all cursor-pointer ${
                        activeCodeTab === 'hardware'
                          ? 'bg-[#ff7edb]/20 text-[#ff7edb] border border-[#ff7edb]/40'
                          : 'text-[#ffeaf9]/50 hover:text-[#ffeaf9]'
                      }`}
                    >
                      piezoADC.ino
                    </button>
                  </div>
                </div>

                {/* Code Content Area */}
                <div className="p-5 font-mono text-xs space-y-2 text-[#ffeaf9] min-h-[290px] bg-[#07010f]/90 overflow-x-auto leading-relaxed">
                  {activeCodeTab === 'profile' && (
                    <div className="space-y-1 animate-in fade-in duration-200">
                      <p className="text-[#a73be2] italic">// Kishin Kumar - Profile Spec</p>
                      <p><span className="text-[#ff7edb]">export const</span> candidate = {'{'}</p>
                      <div className="pl-4 space-y-1">
                        <p><span className="text-[#d8b4fe]">name</span>: <span className="text-[#ff7edb]">"Kishin Kumar"</span>,</p>
                        <p><span className="text-[#d8b4fe]">degree</span>: <span className="text-[#ffeaf9]">"B.Tech Computer Science (LPU)"</span>,</p>
                        <p><span className="text-[#d8b4fe]">leetcode</span>: <a href="https://leetcode.com/u/Kishan_0porwal/" target="_blank" rel="noopener noreferrer" className="text-[#ff7edb] underline">"leetcode.com/u/Kishan_0porwal"</a>,</p>
                        <p><span className="text-[#d8b4fe]">dsaRepo</span>: <a href="https://github.com/kishan-26/dsa-master" target="_blank" rel="noopener noreferrer" className="text-[#ff7edb] underline">"github.com/kishan-26/dsa-master"</a>,</p>
                        <p><span className="text-[#d8b4fe]">coreLanguages</span>: [<span className="text-[#ffa1e4]">"C"</span>, <span className="text-[#ffa1e4]">"C++"</span>, <span className="text-[#ffa1e4]">"Python"</span>, <span className="text-[#ffa1e4]">"TypeScript"</span>],</p>
                        <p><span className="text-[#d8b4fe]">openToHire</span>: <span className="text-[#ff7edb]">true</span></p>
                      </div>
                      <p>{'};'}</p>
                    </div>
                  )}

                  {activeCodeTab === 'dsa' && (
                    <div className="space-y-1 animate-in fade-in duration-200">
                      <p className="text-[#a73be2] italic">// SuperMemo SM-2 Adaptive Algorithm</p>
                      <p><span className="text-[#ff7edb]">function</span> <span className="text-[#c084fc]">calcNextInterval</span>(rev: <span className="text-[#d8b4fe]">Revision</span>) {'{'}</p>
                      <div className="pl-4 space-y-1">
                        <p><span className="text-[#ff7edb]">const</span> ef = rev.factor + (0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02));</p>
                        <p><span className="text-[#ff7edb]">const</span> interval = rev.reps === 1 ? 1 : rev.reps === 2 ? 6 : Math.round(rev.prev * ef);</p>
                        <p><span className="text-[#a73be2]">// Synchronized across 42 routes</span></p>
                        <p><span className="text-[#ff7edb]">return</span> {'{'} nextDue: interval, newEF: ef {'};'}</p>
                      </div>
                      <p>{'}'}</p>
                    </div>
                  )}

                  {activeCodeTab === 'hardware' && (
                    <div className="space-y-1 animate-in fade-in duration-200">
                      <p className="text-[#a73be2] italic">// Direct Piezo-to-ADC Interfacing (A0 Pin)</p>
                      <p><span className="text-[#ff7edb]">void</span> <span className="text-[#c084fc]">detectFootstep</span>() {'{'}</p>
                      <div className="pl-4 space-y-1">
                        <p><span className="text-[#ff7edb]">int</span> raw = analogRead(A0); <span className="text-[#a73be2]">// 0.5V - 3V</span></p>
                        <p><span className="text-[#ff7edb]">if</span> (raw &gt; THRESHOLD && !hysteresis) {'{'}</p>
                        <p className="pl-4">footstepCount++; hysteresis = <span className="text-[#ff7edb]">true</span>;</p>
                        <p>{'}'} <span className="text-[#ff7edb]">else if</span> (raw &lt; RESET_THRESHOLD) {'{'}</p>
                        <p className="pl-4">hysteresis = <span className="text-[#ff7edb]">false</span>; <span className="text-[#a73be2]">// Debounced</span></p>
                        <p>{'}'}</p>
                      </div>
                      <p>{'}'}</p>
                    </div>
                  )}
                </div>

                {/* IDE Bottom Status Bar */}
                <div className="px-4 py-2 bg-[#0e031a] border-t border-[#ff7edb]/15 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-[#ffeaf9]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                    <span>UTF-8 • TypeScript Strict • Embedded C</span>
                  </div>
                  <a
                    href="https://github.com/kishan-26/dsa-master"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff7edb] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View dsa-master</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
