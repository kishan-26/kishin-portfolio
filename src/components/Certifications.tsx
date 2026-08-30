import React from 'react';
import { Award, Terminal, FileCode2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const certIcons: Record<string, React.ReactNode> = {
    'Terminal': <Terminal className="w-6 h-6 text-[#ff7edb]" />,
    'FileCode2': <FileCode2 className="w-6 h-6 text-[#a73be2]" />
  };

  return (
    <section id="certifications" className="py-20 bg-slate-900/10 dark:bg-[#0c0418]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#ffeaf9]/75">
            Validated proficiencies in core programming and algorithmic development.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#ff7edb]/20 hover:border-[#ff7edb]/60 hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Icon */}
                <div className="flex items-start justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#ff7edb]/10 dark:bg-[#180a2d] border border-[#ff7edb]/20 group-hover:scale-110 transition-transform">
                    {certIcons[cert.icon] || <Terminal className="w-6 h-6 text-[#ff7edb]" />}
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#ff7edb]/10 text-[#ff7edb] border border-[#ff7edb]/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  {cert.issuer && (
                    <p className="text-xs font-medium text-[#a73be2] dark:text-[#c084fc] mt-0.5">
                      {cert.issuer}
                    </p>
                  )}
                </div>

                {/* Topics / Skills covered */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d8b4fe]">
                    Key Competencies Covered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-[#180a2d] text-slate-700 dark:text-[#ffeaf9] border border-[#ff7edb]/20"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#ff7edb]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom status */}
              <div className="mt-6 pt-4 border-t border-[#ff7edb]/15 text-xs text-slate-500 dark:text-[#ffeaf9]/60 flex items-center justify-between">
                <span>Formal CV Verification</span>
                <span className="font-mono text-[#ff7edb]">Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
