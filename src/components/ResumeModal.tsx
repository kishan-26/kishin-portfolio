import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Check, 
  Copy, 
  FileText 
} from 'lucide-react';
import { personalInfo, projects, education, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainResume = () => {
    const text = `
==============================================
${personalInfo.name.toUpperCase()}
${personalInfo.headline}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
GitHub: ${personalInfo.github}
LeetCode: ${personalInfo.leetcode}
==============================================

EDUCATION
- Lovely Professional University (Phagwara, Punjab)
  B.Tech in Computer Science and Engineering | CGPA: 6.5 (Aug 2025 - Present)
- Holy Point Academy (Etawah, UP)
  Higher Secondary Education | Percentage: 76% (June 2023 - Mar 2025)
- Msk International School (Etawah, UP)
  Secondary Education | Percentage: 75% (June 2019 - Mar 2023)

TECHNICAL SKILLS
- Languages: C, C++, Python, TypeScript, JavaScript
- Web & Frontend: Next.js 14, HTML5, CSS3, Tailwind CSS, Framer Motion, CodeMirror 6
- Databases/Backend: MongoDB, Mongoose, MySQL
- Embedded/Hardware: Arduino Uno, PZT Piezo Sensors, ADC Interfacing, Embedded C
- Tools: Git, GitHub, LeetCode

PROJECTS
1. DSA Tracker Tool (Feb 2025 - Mar 2025)
   - Full-stack DSA learning platform with 42 routes, SM-2 spaced-repetition engine, useDueQuestions hook, and 365-day contribution heatmap.
   - GitHub Repo: https://github.com/kishan-26/dsa-master
   - Stack: Next.js 14, TypeScript (strict), Tailwind CSS, MongoDB/Mongoose, Framer Motion, CodeMirror 6.

2. Foot Step Power Generation (May 2026 - June 2026)
   - Embedded systems prototype harvesting kinetic energy with PZT piezoelectric sensors and Arduino Uno.
   - Direct piezo-to-ADC interfacing (0.5V-3V on A0 pin) with hysteresis edge detection across 50+ test cases.

ACHIEVEMENTS
- 50 Days Badge on LeetCode (Profile: https://leetcode.com/u/Kishan_0porwal/)
- Solved 65+ LeetCode algorithmic problems during regular practice.

CERTIFICATES
- Programming in C, C++
- Programming in Python
==============================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0e041a] rounded-2xl border border-[#ff7edb]/30 shadow-2xl overflow-hidden text-[#ffeaf9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header (Non-printable) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ff7edb]/20 bg-[#140625] print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#ff7edb]" />
            <span className="font-bold text-white text-base sm:text-lg">
              Official Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#ff7edb]/10 hover:bg-[#ff7edb]/20 text-[#ff7edb] border border-[#ff7edb]/30 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#ffeaf9]/70 hover:text-white hover:bg-[#ff7edb]/10 transition-colors ml-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-900 dark:text-[#ffeaf9] space-y-6 bg-white dark:bg-[#07020d] font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-[#ff7edb] pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-[#ff7edb] mt-0.5">
                  {personalInfo.headline}
                </p>
              </div>

              <div className="text-xs sm:text-sm font-mono text-slate-600 dark:text-[#ffeaf9]/75 space-y-0.5 sm:text-right">
                <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-[#ff7edb] underline">{personalInfo.email}</a></div>
                <div>Mobile: {personalInfo.phone}</div>
                <div>GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#ff7edb] underline">github.com/kishan-26</a></div>
                <div>LeetCode: <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-[#ff7edb] underline">leetcode.com/u/Kishan_0porwal</a></div>
                <div>Location: {personalInfo.location}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-[#ff7edb]/20 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900 dark:text-white">Languages:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">C, C++, Python, TypeScript, JavaScript</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Web Technologies:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">HTML5, CSS3, Next.js 14, Tailwind CSS, CodeMirror 6</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases & Backend:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">MongoDB, Mongoose ORM, MySQL</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Embedded Systems:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">Arduino Uno, PZT Sensors, ADC Interfacing, Signal Capture</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Tools & Platforms:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">Git, GitHub, LeetCode (65+ Solved)</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Soft Skills:</strong>{' '}
                <span className="text-slate-600 dark:text-[#ffeaf9]/80">{personalInfo.softSkills.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-[#ff7edb]/20 pb-1">
              Technical Projects
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {proj.title.toUpperCase()} | <span className="font-normal italic text-slate-600 dark:text-[#d8b4fe]">{proj.subtitle}</span>
                  </div>
                  <span className="font-mono text-xs text-[#a73be2]">{proj.duration}</span>
                </div>

                <div className="text-xs font-mono text-[#ff7edb] flex flex-wrap gap-2">
                  <span>Tech Stack: {proj.technologies.join(', ')}</span>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                      [Repo: github.com/kishan-26/dsa-master]
                    </a>
                  )}
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-600 dark:text-[#ffeaf9]/80">
                  <li><strong>Description:</strong> {proj.description}</li>
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-[#ff7edb]/20 pb-1">
              Key Achievements
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-[#ffeaf9]/80">
              <li><strong>50 Days Badge on LeetCode:</strong> Earned for continuous daily problem-solving dedication.</li>
              <li><strong>65+ Problems Solved:</strong> Successfully solved over 65+ algorithmic problems on LeetCode (<a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-[#ff7edb] underline">Kishan_0porwal</a>).</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-[#ff7edb]/20 pb-1">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-[#ffeaf9]/80">
              {certifications.map((c) => (
                <li key={c.id}>
                  <strong>{c.title}</strong> — Validated proficiency in core concepts and problem solving.
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-[#ff7edb]/20 pb-1">
              Education
            </h2>

            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{edu.institution}</div>
                  <div className="text-slate-600 dark:text-[#ffeaf9]/80">{edu.degree}</div>
                  <div className="text-slate-500 text-xs">{edu.location}</div>
                </div>
                <div className="sm:text-right font-mono text-xs mt-1 sm:mt-0">
                  <div className="font-bold text-[#ff7edb]">{edu.scoreType}: {edu.score}</div>
                  <div className="text-slate-500">{edu.duration}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
