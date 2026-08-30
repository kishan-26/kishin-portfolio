import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#ffeaf9]/75">
            Formal academic background in computer science and foundational sciences.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line with pink/purple gradient */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#ff7edb] via-[#a73be2] to-[#6d2d8f] -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-8">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Center Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0e041a] border-4 border-[#ff7edb] shadow-lg shadow-[#ff7edb]/30 items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#ff7edb]"></div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden sm:block w-1/2"></div>

                  {/* Card content */}
                  <div className="w-full sm:w-1/2">
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-[#ff7edb]/20 hover:border-[#ff7edb]/60 hover:shadow-xl transition-all space-y-4">
                      
                      {/* Top Row: Duration & Score Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#a73be2] dark:text-[#d8b4fe] bg-[#ff7edb]/10 px-2.5 py-1 rounded-md border border-[#ff7edb]/15">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#ff7edb]/15 text-[#ff7edb] border border-[#ff7edb]/35">
                          <Award className="w-3.5 h-3.5" />
                          <span>{item.scoreType}: {item.score}</span>
                        </span>
                      </div>

                      {/* Degree and Institution */}
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <div className="text-sm font-semibold text-[#ff7edb]">
                          {item.institution}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-[#a73be2]" />
                          <span>{item.location}</span>
                          {item.status && (
                            <span className="ml-2 px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-[#ff7edb]/10 text-[#ff7edb] border border-[#ff7edb]/20">
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Details list */}
                      {item.details && (
                        <ul className="space-y-1.5 pt-2 border-t border-[#ff7edb]/15">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-[#ffeaf9]/80">
                              <CheckCircle2 className="w-4 h-4 text-[#ff7edb] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
