import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Compass, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const softSkillIcons: Record<string, React.ReactNode> = {
    'Leadership': <ShieldCheck className="w-5 h-5 text-[#ff7edb]" />,
    'Adaptability': <Compass className="w-5 h-5 text-[#a73be2]" />,
    'Cross-functional Collaboration': <Users className="w-5 h-5 text-[#ff7edb]" />,
    'Self-motivated Learner': <BookOpen className="w-5 h-5 text-[#a73be2]" />,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Bridging Software Algorithms & Embedded Hardware
          </h2>
          <p className="text-base sm:text-lg text-[#ffeaf9]/70">
            A disciplined Computer Science undergraduate combining rigorous DSA practice with physical hardware prototyping.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Box 1: Core Narrative (8 cols) */}
          <div className="md:col-span-8 glass-card p-6 sm:p-8 rounded-3xl space-y-4 border border-[#ff7edb]/25 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff7edb]">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Undergraduate at Lovely Professional University focused on full-stack development & embedded engineering.
              </h3>

              {personalInfo.fullBio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-[#ffeaf9]/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom Dual Capability Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#ff7edb]/15">
              <div className="p-4 rounded-2xl bg-[#ff7edb]/5 border border-[#ff7edb]/20 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Code2 className="w-4 h-4 text-[#ff7edb]" />
                  <span>Full-Stack Web</span>
                </div>
                <p className="text-xs text-[#ffeaf9]/65">
                  Next.js 14, TypeScript (strict), MongoDB, Tailwind, and SM-2 Spaced Repetition logic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#a73be2]/10 border border-[#a73be2]/25 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Cpu className="w-4 h-4 text-[#c084fc]" />
                  <span>Embedded Systems</span>
                </div>
                <p className="text-xs text-[#ffeaf9]/65">
                  Arduino Uno, PZT sensors, direct ADC signal capture (0.5V–3V), and C/C++ firmware.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Box 2: Academic Credential (4 cols) */}
          <div className="md:col-span-4 glass-card p-6 sm:p-7 rounded-3xl border border-[#ff7edb]/25 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a73be2]">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Record</span>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1b0730] to-[#0c0316] border border-[#ff7edb]/20 text-center space-y-1">
                <div className="text-xs text-[#d8b4fe] font-semibold">University Standing</div>
                <div className="text-3xl font-black text-[#ff7edb] font-mono">
                  {personalInfo.stats.cgpa} <span className="text-xs text-[#ffeaf9]/60 font-sans">/ 10 CGPA</span>
                </div>
                <div className="text-[11px] text-[#ffeaf9]/60">Aug 2025 - Present</div>
              </div>

              <div className="space-y-2.5 text-xs text-[#ffeaf9]/85">
                <div className="flex justify-between py-1.5 border-b border-[#ff7edb]/10">
                  <span className="text-[#ffeaf9]/50">University</span>
                  <span className="font-semibold text-right">Lovely Professional University</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ff7edb]/10">
                  <span className="text-[#ffeaf9]/50">Degree</span>
                  <span className="font-semibold text-right">B.Tech - CSE</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#ffeaf9]/50">Campus</span>
                  <span className="font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#ff7edb]" />
                    <span>Phagwara, Punjab</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#ff7edb]/10 border border-[#ff7edb]/20 text-center text-xs font-semibold text-[#ff7edb]">
              Class XII: 76% • Class X: 75%
            </div>
          </div>

          {/* Bento Box 3: Soft Skills Grid (12 cols) */}
          <div className="md:col-span-12 glass-card p-6 sm:p-7 rounded-3xl border border-[#ff7edb]/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff7edb]">
                <Award className="w-4 h-4" />
                <span>Core Behavioral Strengths</span>
              </div>
              <span className="text-xs text-[#a73be2] font-mono">Verified in CV</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#140624] border border-[#ff7edb]/15 hover:border-[#ff7edb]/45 transition-all"
                >
                  <div className="p-2 rounded-xl bg-[#ff7edb]/10 border border-[#ff7edb]/20 shrink-0">
                    {softSkillIcons[skill] || <ShieldCheck className="w-4 h-4 text-[#ff7edb]" />}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#ffeaf9]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
