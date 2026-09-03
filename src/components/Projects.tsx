import React, { useState } from 'react';
import {
  FolderGit2,
  Globe,
  Cpu,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  Activity,
  BarChart3,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured Systems & Projects
          </h2>

          <p className="text-base sm:text-lg text-[#ffeaf9]/70">
            End-to-end architectures spanning full-stack algorithmic learning engines and embedded kinetic energy hardware.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {['All', 'Full-Stack Web', 'Embedded Systems'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#ff7edb] to-[#a73be2] text-black shadow-lg shadow-[#ff7edb]/30 scale-105'
                  : 'bg-[#140625] text-[#ffeaf9]/75 hover:bg-[#ff7edb]/10 hover:text-[#ff7edb] border border-[#ff7edb]/15'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-[#ff7edb]/25 flex flex-col justify-between hover:shadow-2xl hover:border-[#ff7edb]/60 transition-all duration-300 group"
            >

              {/* Card Top Header */}
              <div className="p-6 sm:p-8 space-y-6">

                {/* Meta Row: Category Badge & Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff7edb]/15 text-[#ff7edb] border border-[#ff7edb]/35">
                    {project.category === 'Full-Stack Web' ? (
                      <Globe className="w-3.5 h-3.5" />
                    ) : (
                      <Cpu className="w-3.5 h-3.5" />
                    )}
                    <span>{project.category}</span>
                  </span>

                  <span className="flex items-center gap-1 text-xs text-[#a73be2] font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.duration}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#ff7edb] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#a73be2]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Simulated Visual Architecture Element */}
                {project.id === 'dsa-tracker-tool' ? (
                  <div className="p-4 rounded-2xl bg-[#090214] border border-[#ff7edb]/25 space-y-3">

                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#ff7edb] flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>365-Day Spaced Repetition Heatmap</span>
                      </span>

                      <span className="text-[#a73be2]">
                        SM-2 Algorithm
                      </span>
                    </div>

                    {/* Heatmap Grid Simulation */}
                    <div className="grid grid-cols-12 gap-1.5 pt-1">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 rounded-sm transition-all ${
                            i % 5 === 0
                              ? 'bg-[#ff7edb] shadow-sm shadow-[#ff7edb]/50'
                              : i % 3 === 0
                              ? 'bg-[#a73be2]'
                              : i % 2 === 0
                              ? 'bg-[#6d2d8f]'
                              : 'bg-[#18092a]'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#ffeaf9]/60 font-mono pt-1">
                      <span>42 Active Routes</span>
                      <span>Hook: useDueQuestions()</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-[#090214] border border-[#ff7edb]/25 space-y-3">

                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#ff7edb] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Piezo ADC Signal Conditioning (Pin A0)</span>
                      </span>

                      <span className="text-[#a73be2]">
                        0.5V – 3.0V
                      </span>
                    </div>

                    {/* Waveform Simulation */}
                    <div className="h-10 rounded-xl bg-[#140526] border border-[#ff7edb]/15 flex items-center px-3 justify-between overflow-hidden">
                      <div className="w-full flex items-center justify-around h-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff7edb] animate-ping"></span>
                        <span className="h-4 w-1 bg-[#ff7edb] rounded-full"></span>
                        <span className="h-6 w-1 bg-[#a73be2] rounded-full"></span>
                        <span className="h-2 w-1 bg-[#6d2d8f] rounded-full"></span>
                        <span className="h-5 w-1 bg-[#ff7edb] rounded-full"></span>
                        <span className="h-3 w-1 bg-[#a73be2] rounded-full"></span>
                        <span className="h-7 w-1 bg-[#ff7edb] rounded-full shadow-sm shadow-[#ff7edb]"></span>
                        <span className="h-2 w-1 bg-[#6d2d8f] rounded-full"></span>
                        <span className="h-4 w-1 bg-[#ff7edb] rounded-full"></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#ffeaf9]/60 font-mono pt-1">
                      <span>Hysteresis Edge Detection</span>
                      <span>50+ Tests Debounced</span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 dark:text-[#ffeaf9]/85 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved Callout */}
                <div className="p-4 rounded-2xl bg-[#ff7edb]/5 dark:bg-[#180a2d] border border-[#ff7edb]/20 text-xs text-slate-700 dark:text-[#ffeaf9] space-y-1">
                  <span className="font-bold text-[#ff7edb] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Problem Solved:</span>
                  </span>

                  <p className="leading-relaxed dark:text-[#ffeaf9]/80">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#a73be2]">
                    Key Highlights & Contributions
                  </h4>

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#ffeaf9]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ff7edb] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Stats Pills */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-[#ff7edb]/5 dark:bg-[#180a2d] border border-[#ff7edb]/10 text-center"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-[#a73be2] font-semibold">
                          {stat.label}
                        </div>

                        <div className="text-xs font-bold font-mono text-[#ff7edb]">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Tech Tags & Action Buttons */}
              <div className="p-6 bg-[#0f041d] border-t border-[#ff7edb]/15 space-y-4">

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#1a0c30] text-[#ffeaf9] border border-[#ff7edb]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5">

                  {/* Technical Deep-Dive */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] shadow-md shadow-[#ff7edb]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-black" />
                    <span>Technical Deep-Dive</span>
                    <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* GitHub Repository */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#ffeaf9] bg-[#1a0c30] hover:bg-[#250d42] border border-[#ff7edb]/30 hover:border-[#ff7edb]/60 transition-all hover:scale-[1.02]"
                      title="Open GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4 text-[#ff7edb]" />
                      <span>Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}

                  {/* Live Demo */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#a73be2] hover:bg-[#c26cff] transition-all hover:scale-[1.02]"
                      title="Open Live Project"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
