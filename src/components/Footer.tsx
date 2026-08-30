import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#ff7edb]/20 bg-white/60 dark:bg-[#07020d] backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#ff7edb]/15">
          
          {/* Logo & Headline */}
          <div className="space-y-1 text-center md:text-left">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6d2d8f] via-[#a73be2] to-[#ff7edb] flex items-center justify-center text-white font-mono text-sm shadow-sm">
                K
              </div>
              <span>
                {personalInfo.name}
                <span className="text-[#ff7edb]">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#ffeaf9]/60">
              B.Tech Computer Science & Engineering • Lovely Professional University
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-[#ffeaf9]/80">
            <a href="#about" className="hover:text-[#ff7edb] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#ff7edb] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#ff7edb] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#ff7edb] transition-colors">Achievements</a>
            <a href="#education" className="hover:text-[#ff7edb] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#ff7edb] transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-[#ff7edb] font-semibold hover:underline cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-[#ffeaf9] hover:text-[#ff7edb] bg-[#ff7edb]/10 border border-[#ff7edb]/20 hover:border-[#ff7edb]/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-[#ff7edb]" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-[#ffeaf9] hover:text-[#a73be2] bg-[#ff7edb]/10 border border-[#ff7edb]/20 hover:border-[#a73be2]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#a73be2]" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-slate-600 dark:text-[#ffeaf9] hover:text-[#ff7edb] bg-[#ff7edb]/10 border border-[#ff7edb]/20 hover:border-[#ff7edb]/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl text-slate-600 dark:text-[#ffeaf9] hover:text-black hover:bg-[#ff7edb] bg-[#ff7edb]/10 border border-[#ff7edb]/20 transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-[#ffeaf9]/50 gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span>Built with Pink + Black Theme • React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
