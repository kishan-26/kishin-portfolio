export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  category: 'Embedded Systems' | 'Full-Stack Web' | 'Other';
  description: string;
  problemSolved: string;
  highlights: string[];
  technologies: string[];
  stats?: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureDetails?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  highlight?: boolean;
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  status?: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  skills: string[];
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
  badgeText: string;
  highlightColor: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  preferredName?: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  softSkills: string[];
  stats: {
    cgpa: string;
    leetcodeProblems: string;
    leetcodeStreak: string;
    projectsCount: string;
  };
}
