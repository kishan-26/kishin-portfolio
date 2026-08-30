import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formSubject || `Portfolio Inquiry from ${formName || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff7edb]/10 border border-[#ff7edb]/30 text-[#ff7edb] text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#ffeaf9]/75">
            Open for internship opportunities, technical discussions, and full-stack/embedded engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-3 border border-[#ff7edb]/20 hover:border-[#ff7edb]/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#ff7edb]/10 text-[#ff7edb] border border-[#ff7edb]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-xs font-semibold text-[#ff7edb] hover:text-white p-2 rounded-lg bg-[#ff7edb]/10 hover:bg-[#ff7edb] hover:text-black border border-[#ff7edb]/30 cursor-pointer transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-[#ff7edb] font-mono transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-3 border border-[#ff7edb]/20 hover:border-[#ff7edb]/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#a73be2]/10 text-[#a73be2] dark:text-[#c084fc] border border-[#a73be2]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-1 text-xs font-semibold text-[#a73be2] dark:text-[#c084fc] hover:text-white p-2 rounded-lg bg-[#a73be2]/10 hover:bg-[#a73be2] hover:text-white border border-[#a73be2]/30 cursor-pointer transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Mobile Phone</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-[#a73be2] font-mono transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location & Quick Action */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-4 border border-[#ff7edb]/20">
              <div className="flex items-center gap-3 text-slate-700 dark:text-[#ffeaf9]">
                <div className="p-3 rounded-xl bg-[#ff7edb]/10 text-[#ff7edb] border border-[#ff7edb]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                  <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#180a2d] text-[#ff7edb] hover:bg-[#ff7edb] hover:text-black border border-[#ff7edb]/30 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#180a2d] text-[#c084fc] hover:bg-[#a73be2] hover:text-white border border-[#a73be2]/30 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Resume CTA inside contact */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-bold text-black bg-[#ff7edb] hover:bg-[#ffa1e4] shadow-lg shadow-[#ff7edb]/25 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>View & Download Official CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Composer Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border border-[#ff7edb]/20">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#ff7edb]" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-[#ffeaf9]/75">
                  Fill in this form to launch your email client pre-formatted with your message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-[#d8b4fe]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe (Recruiter / Lead)"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#140625] border border-[#ff7edb]/25 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7edb]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-[#d8b4fe]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#140625] border border-[#ff7edb]/25 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7edb]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-[#d8b4fe]">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Interview Invitation / Project Collaboration"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#140625] border border-[#ff7edb]/25 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7edb]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-[#d8b4fe]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Kishin, we reviewed your DSA Tracker and Foot Step Power Generation projects and would like to discuss an opportunity..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#140625] border border-[#ff7edb]/25 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7edb]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-[#ff7edb] via-[#ffa1e4] to-[#ff7edb] hover:opacity-95 shadow-lg shadow-[#ff7edb]/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Message to Kishin</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-[#ff7edb]/15 border border-[#ff7edb]/40 text-[#ff7edb] text-xs font-semibold text-center animate-in fade-in">
                    Email composer opened! Looking forward to connecting.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
