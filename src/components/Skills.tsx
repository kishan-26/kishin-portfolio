import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { skillCategories, personalInfo } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Code2': <Code2 className="w-5 h-5 text-[#ff7edb]" />,
    'Layout': <Layout className="w-5 h-5 text-[#a73be2]" />,
    'Database': <Database className="w-5 h-5 text-[#ff7edb]" />,
    'Cpu': <Cpu className="w-5 h-5 text-[#c084fc]" />,
    'Wrench': <Wrench className="w-5 h-5 text-[#ff7edb]" />
  };

  const filterOptions = ['All', 'Programming Languages', 'Web & Frontend Development', 'Databases & Backend', 'Embedded Systems & Hardware', 'Tools, Version Control & Platforms'];

  const displayedCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title === activeFilter);

  return (
    <section id="skills" className="py-24 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Verified Skills & Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-[#ffeaf9]/70">
            Categorized strictly from hands-on system builds, competitive programming, and formal certifications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#ff7edb] via-[#ffa1e4] to-[#ff7edb] text-black shadow-lg shadow-[#ff7edb]/30 scale-105'
                  : 'bg-[#130623] text-[#ffeaf9]/75 hover:bg-[#ff7edb]/10 hover:text-[#ff7edb] border border-[#ff7edb]/15'
              }`}
            >
              {filter === 'All' ? 'All Competencies' : filter.replace(' Development', '').replace(', Version Control & Platforms', '')}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 sm:p-7 rounded-3xl space-y-5 border border-[#ff7edb]/20 hover:border-[#ff7edb]/60 hover:shadow-2xl transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#ff7edb]/15">
                <div className="p-3 rounded-2xl bg-[#ff7edb]/10 border border-[#ff7edb]/25 group-hover:scale-110 transition-transform">
                  {categoryIcons[category.icon] || <Code2 className="w-5 h-5 text-[#ff7edb]" />}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    {category.title}
                  </h3>
                  <span className="text-xs text-[#a73be2] font-mono">
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* Skills Badges List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isLink = Boolean(skill.link);

                  const content = (
                    <>
                      {skill.highlight ? (
                        <Sparkles className="w-3.5 h-3.5 text-[#ff7edb]" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a73be2]" />
                      )}
                      <span>{skill.name}</span>
                      {isLink && <ArrowUpRight className="w-3 h-3 text-[#ff7edb]" />}
                    </>
                  );

                  if (isLink) {
                    return (
                      <a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#ff7edb]/20 text-[#ff7edb] border border-[#ff7edb]/50 shadow-sm shadow-[#ff7edb]/20 hover:scale-105 hover:bg-[#ff7edb] hover:text-black transition-all cursor-pointer"
                        title="Open LeetCode profile (Kishan_0porwal)"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        skill.highlight
                          ? 'bg-[#ff7edb]/15 text-[#ff7edb] border border-[#ff7edb]/40 shadow-sm shadow-[#ff7edb]/15 hover:scale-105'
                          : 'bg-[#140625] text-[#ffeaf9]/85 border border-[#ff7edb]/15 hover:border-[#ff7edb]/40'
                      }`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* High Impact LeetCode Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1b0630] via-[#260945] to-[#120321] border border-[#ff7edb]/35 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#ff7edb]/20 text-[#ff7edb] flex items-center justify-center shrink-0 border border-[#ff7edb]/30 shadow-lg shadow-[#ff7edb]/20">
              <Flame className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h4 className="font-black text-white text-lg sm:text-xl">
                Continuous Problem Solving on LeetCode
              </h4>
              <p className="text-xs sm:text-sm text-[#ffeaf9]/75 mt-0.5">
                50-Day active streak badge with 65+ questions solved focusing on C++ & data structures.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] shadow-lg shadow-[#ff7edb]/30 hover:scale-105 transition-all"
            >
              <span>View LeetCode (Kishan_0porwal)</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
