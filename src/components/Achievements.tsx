import React from 'react';
import { Award, Flame, Code, Sparkles, CheckCircle2, Trophy, ArrowUpRight, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievements, personalInfo } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const triggerConfetti = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ff7edb', '#a73be2', '#6d2d8f', '#ffeaf9']
    });
  };

  const achievementIcons: Record<string, React.ReactNode> = {
    'Flame': <Flame className="w-6 h-6 text-[#ff7edb]" />,
    'Code': <Code className="w-6 h-6 text-[#a73be2]" />
  };

  return (
    <section id="achievements" className="py-24 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Algorithmic Achievements
          </h2>
          <p className="text-base sm:text-lg text-[#ffeaf9]/70">
            Demonstrating disciplined consistency and algorithmic problem-solving ability. Click any card to view the live LeetCode profile.
          </p>
        </div>

        {/* Achievements Cards Grid (Clickable to LeetCode profile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <a
              key={item.id}
              href={item.link || personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 sm:p-8 rounded-3xl border border-[#ff7edb]/25 hover:border-[#ff7edb]/70 hover:shadow-2xl transition-all relative overflow-hidden group block cursor-pointer"
              title="Click to visit LeetCode profile (Kishan_0porwal)"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.highlightColor}`} />

              <div className="flex items-start justify-between gap-4">
                <div className="p-3.5 rounded-2xl bg-[#ff7edb]/10 border border-[#ff7edb]/20 group-hover:scale-110 transition-transform">
                  {achievementIcons[item.icon] || <Award className="w-6 h-6 text-[#ff7edb]" />}
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#ff7edb]/15 text-[#ff7edb] border border-[#ff7edb]/30 font-mono">
                    <Sparkles className="w-3 h-3 text-[#ff7edb]" />
                    <span>{item.badgeText}</span>
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#1a082e] text-[#ff7edb] opacity-70 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Title & Metric */}
              <div className="mt-5 space-y-2">
                <div className="text-3xl sm:text-4xl font-black font-mono text-[#ff7edb] flex items-center gap-2">
                  <span>{item.metric}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff7edb] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#ffeaf9]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#ff7edb]/15 flex items-center justify-between">
                <span className="text-xs text-[#ffeaf9]/65 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7edb]" />
                  <span>Verified: @Kishan_0porwal</span>
                </span>

                <button
                  onClick={triggerConfetti}
                  className="text-xs font-bold text-[#ff7edb] hover:text-[#ffa1e4] flex items-center gap-1 cursor-pointer bg-[#ff7edb]/15 px-3 py-1.5 rounded-xl border border-[#ff7edb]/30 hover:scale-105 transition-transform"
                  title="Celebrate this milestone!"
                >
                  <span>Celebrate</span>
                  <span>🎉</span>
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* LeetCode Practice Context Banner */}
        <div className="max-w-4xl mx-auto mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#1b0630] via-[#240842] to-[#120321] border border-[#ff7edb]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-sm text-[#ffeaf9]">
            <span className="text-2xl">🔥</span>
            <span>
              Regular practice covering C++ data structures, algorithms, two-pointer techniques, and problem patterns on <strong>LeetCode (Kishan_0porwal)</strong>.
            </span>
          </div>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-[#ff7edb] text-black hover:bg-[#ffa1e4] shadow-lg shadow-[#ff7edb]/30 transition-all hover:scale-105"
          >
            <span>Open LeetCode Profile</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
};
