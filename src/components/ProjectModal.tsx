import React from 'react';
import { X, CheckCircle2, Cpu, Globe, Calendar, Layers, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 bg-[#0e041a] border border-[#ff7edb]/40 shadow-2xl space-y-6 text-[#ffeaf9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#ffeaf9]/70 hover:text-white bg-[#1a0c30] hover:bg-[#ff7edb] hover:text-black transition-colors cursor-pointer border border-[#ff7edb]/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff7edb]/15 text-[#ff7edb] border border-[#ff7edb]/30">
              {project.category === 'Full-Stack Web' ? <Globe className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
              <span>{project.category}</span>
            </span>

            <span className="flex items-center gap-1 text-xs text-[#a73be2] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.duration}</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-base font-medium text-[#ff7edb]">
            {project.subtitle}
          </p>
        </div>

        {/* Quick Stats Grid if available */}
        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-[#ff7edb]/20">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center p-2.5 rounded-lg bg-[#180a2d] border border-[#ff7edb]/10">
                <div className="text-xs text-[#d8b4fe] font-medium">{stat.label}</div>
                <div className="font-bold text-[#ff7edb] font-mono text-sm sm:text-base">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem Statement */}
        <div className="p-4 rounded-xl bg-[#ff7edb]/10 border border-[#ff7edb]/25 space-y-1.5">
          <div className="flex items-center gap-2 text-[#ff7edb] font-bold text-sm">
            <Zap className="w-4 h-4" />
            <span>Problem Addressed & Solved</span>
          </div>
          <p className="text-xs sm:text-sm text-[#ffeaf9]/85 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Detailed Architectural Highlights */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-base flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff7edb]" />
            <span>Key Engineering Contributions</span>
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#ffeaf9]/85">
                <CheckCircle2 className="w-4 h-4 text-[#ff7edb] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture & Implementation Notes */}
        {project.architectureDetails && (
          <div className="p-4 rounded-xl bg-[#180a2d] border border-[#ff7edb]/15 space-y-1.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Layers className="w-4 h-4 text-[#a73be2]" />
              <span>Technical Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-[#ffeaf9]/75">
              {project.architectureDetails}
            </p>
          </div>
        )}

        {/* Technologies Used */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#d8b4fe]">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#1a0c30] text-[#ff7edb] border border-[#ff7edb]/25"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer: Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#ff7edb]/20">
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#ffeaf9] bg-[#1a0c30] hover:bg-[#ff7edb] hover:text-black border border-[#ff7edb]/30 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
