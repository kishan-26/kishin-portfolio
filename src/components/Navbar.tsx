import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 pb-2">
      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'glass-nav px-4 sm:px-6 py-2.5 shadow-2xl' 
          : 'bg-transparent px-2 sm:px-4 py-3'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6d2d8f] via-[#a73be2] to-[#ff7edb] flex items-center justify-center text-white font-mono text-sm shadow-md shadow-[#ff7edb]/30 group-hover:scale-105 transition-transform">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#ff7edb] to-[#a73be2] opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <span className="relative z-10 font-bold">K</span>
            </div>
            <span className="font-semibold text-white tracking-wide">
              {personalInfo.name}
              <span className="text-[#ff7edb] animate-pulse">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#120524]/60 p-1.5 rounded-xl border border-[#ff7edb]/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-black bg-[#ff7edb] shadow-md shadow-[#ff7edb]/30 scale-105'
                      : 'text-[#ffeaf9]/75 hover:text-[#ff7edb] hover:bg-[#ff7edb]/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] shadow-lg shadow-[#ff7edb]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
              <Sparkles className="w-3 h-3 opacity-70" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#ffeaf9] bg-[#ff7edb]/10 border border-[#ff7edb]/25 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 glass-nav rounded-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200 border border-[#ff7edb]/30">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[#ffeaf9] hover:bg-[#ff7edb]/15 hover:text-[#ff7edb] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#ff7edb]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4]"
            >
              <FileText className="w-4 h-4" />
              <span>View Official Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
