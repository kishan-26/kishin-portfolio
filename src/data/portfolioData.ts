import type { 
  PersonalInfo, 
  Project, 
  SkillCategory, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kishin Kumar',
  preferredName: 'Kishin',
  headline: 'Computer Science & Engineering Student | Full-Stack & Embedded Systems Developer',
  shortBio: 'B.Tech CSE student at Lovely Professional University passionate about full-stack engineering and embedded systems. Experienced in building algorithmic learning tools (Next.js/TypeScript/MongoDB) and kinetic energy harvesting hardware prototypes (Arduino/C++).',
  fullBio: [
    'I am a Computer Science & Engineering undergraduate at Lovely Professional University with a strong foundation in C/C++, algorithmic problem solving, and modern full-stack development.',
    'My hands-on experience spans developing complex web platforms—such as a 42-route DSA Tracker powered by an adaptive SM-2 spaced repetition engine—to engineering embedded systems prototypes like kinetic footstep power generation using Arduino Uno and PZT sensors.',
    'I actively practice data structures and algorithms on LeetCode (earning the 50-Day Badge with 65+ problems solved) and take pride in writing clean, strict TypeScript and efficient C/C++ code.'
  ],
  email: 'glaksh098@gmail.com',
  phone: '+91-9286250826',
  location: 'Phagwara, Punjab / Etawah, UP, India',
  github: 'https://github.com/kishan-26',
  linkedin: 'https://linkedin.com/in/kishin-kumar',
  leetcode: 'https://leetcode.com/u/Kishan_0porwal/',
  softSkills: [
    'Leadership',
    'Adaptability',
    'Cross-functional Collaboration',
    'Self-motivated Learner'
  ],
  stats: {
    cgpa: '7.11',
    leetcodeProblems: '80+',
    leetcodeStreak: '50 Days',
    projectsCount: '2 Core Projects'
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'C', category: 'Languages', highlight: true },
      { name: 'C++', category: 'Languages', highlight: true },
      { name: 'Python', category: 'Languages', highlight: true },
      { name: 'TypeScript', category: 'Languages', highlight: true },
      { name: 'JavaScript', category: 'Languages' }
    ]
  },
  {
    title: 'Web & Frontend Development',
    icon: 'Layout',
    skills: [
      { name: 'Next.js 14', category: 'Web', highlight: true },
      { name: 'HTML5', category: 'Web' },
      { name: 'CSS3', category: 'Web' },
      { name: 'Tailwind CSS', category: 'Web', highlight: true },
      { name: 'Framer Motion', category: 'Web' },
      { name: 'CodeMirror 6', category: 'Web' }
    ]
  },
  {
    title: 'Databases & Backend',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', category: 'Database', highlight: true },
      { name: 'Mongoose ORM', category: 'Database' },
      { name: 'MySQL', category: 'Database', highlight: true }
    ]
  },
  {
    title: 'Embedded Systems & Hardware',
    icon: 'Cpu',
    skills: [
      { name: 'Arduino Uno', category: 'Embedded', highlight: true },
      { name: 'PZT Piezoelectric Sensors', category: 'Embedded' },
      { name: 'ADC Interfacing', category: 'Embedded', highlight: true },
      { name: 'Embedded C/C++', category: 'Embedded' },
      { name: 'Signal Processing (0.5V–3V)', category: 'Embedded' }
    ]
  },
  {
    title: 'Tools, Version Control & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git', category: 'Tools', highlight: true },
      { name: 'GitHub', category: 'Tools', highlight: true },
      { name: 'LeetCode', category: 'Platforms', highlight: true, link: 'https://leetcode.com/u/Kishan_0porwal/' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'dsa-tracker-tool',
    title: 'DSA Tracker Tool',
    subtitle: 'Adaptive Spaced-Repetition Platform & Analytics Engine',
    duration: 'Feb 2025 - Mar 2025',
    category: 'Full-Stack Web',
    description: 'Designed and developed an end-to-end full-stack DSA learning platform featuring real-time question tracking, an adaptive spaced-repetition engine based on the SM-2 algorithm, dashboard analytics, flashcards, and an integrated code editor across 42 distinct routes.',
    problemSolved: 'Solves the problem of forgetting algorithms over time by calculating optimal revision intervals using a cognitive decay model (SM-2), ensuring students retain complex coding patterns consistently.',
    highlights: [
      'Engineered an adaptive spaced-repetition engine implementing the SuperMemo SM-2 algorithm to schedule revisions dynamically.',
      'Constructed a unified analytics hook (useDueQuestions) to calculate due/overdue revisions and synchronize mastery scores across 42 routes.',
      'Developed an interactive 365-day GitHub-style contribution heatmap and topic/pattern mastery scoring using aggregated MongoDB pipelines.',
      'Integrated CodeMirror 6 in-browser editor for real-time problem solving and flashcard self-evaluation workflows.'
    ],
    technologies: [
      'Next.js 14',
      'TypeScript (strict)',
      'Tailwind CSS',
      'MongoDB',
      'Mongoose',
      'Framer Motion',
      'CodeMirror 6'
    ],
    githubUrl: 'https://github.com/kishan-26/dsa-master',
    liveUrl: 'https://dsa-master-mu.vercel.app/',
    stats: [
      { label: 'Application Routes', value: '42 Routes' },
      { label: 'Algorithm', value: 'SM-2 Engine' },
      { label: 'Activity Heatmap', value: '365 Days' },
      { label: 'Type Safety', value: 'Strict TS' }
    ],
    architectureDetails: 'Built on Next.js App Router with server/client component separation. Employs Mongoose schemas for problem meta, review logs, and streak tracking. State is synchronized via custom React hooks.'
  },
  {
    id: 'foot-step-power-generation',
    title: 'Foot Step Power Generation',
    subtitle: 'Kinetic Energy Harvesting & Embedded Sensing Prototype',
    duration: 'May 2026 - June 2026',
    category: 'Embedded Systems',
    description: 'Developed an embedded systems prototype that harvests kinetic energy from human footsteps using PZT piezoelectric disc sensors connected in parallel to an Arduino Uno microcontroller with direct ADC signal conditioning.',
    problemSolved: 'Converts wasted mechanical energy from pedestrian footfalls into electrical power while accurately measuring real-time impact events without signal degradation.',
    highlights: [
      'Engineered a novel direct piezo-to-ADC interfacing approach bypassing conventional bridge rectification, capturing 0.5V–3V signal range on analog pin A0.',
      'Programmed real-time footstep detection using threshold-based edge detection with a boolean hysteresis flag.',
      'Successfully eliminated false positives and double-counting across 50+ experimental test cases.',
      'Connected parallel PZT disc sensor arrays optimized for maximum charge distribution under variable foot pressure.'
    ],
    technologies: [
      'Arduino Uno',
      'PZT Piezo Sensors',
      'C / C++',
      'Embedded C',
      'ADC Interfacing',
      'Signal Conditioning'
    ],
    stats: [
      { label: 'Signal Range', value: '0.5V – 3.0V' },
      { label: 'ADC Input Pin', value: 'Analog A0' },
      { label: 'Accuracy', value: '50+ Tests Passed' },
      { label: 'Algorithm', value: 'Hysteresis Edge' }
    ],
    architectureDetails: 'Combines parallel PZT piezoelectric crystal transducers with custom embedded firmware running on the ATmega328P. Features dynamic voltage thresholding to filter ambient vibrational noise.'
  }
];

export const achievements: AchievementItem[] = [
  {
    id: 'leetcode-streak',
    title: '50 Days Badge on LeetCode',
    description: 'Earned the official 50 Days Consistency Badge on LeetCode demonstrating sustained daily problem-solving dedication in Data Structures and Algorithms.',
    metric: '50 Days Continuous Streak',
    icon: 'Flame',
    badgeText: 'LeetCode Milestone',
    highlightColor: 'from-[#ff7edb] via-[#a73be2] to-[#6d2d8f]',
    link: 'https://leetcode.com/u/Kishan_0porwal/'
  },
  {
    id: 'leetcode-problems',
    title: '65+ LeetCode Problems Solved',
    description: 'Successfully solved over 65+ competitive programming problems spanning arrays, strings, two pointers, binary search, and dynamic patterns.',
    metric: '65+ Solved',
    icon: 'Code',
    badgeText: 'Problem Solving',
    highlightColor: 'from-[#a73be2] to-[#ff7edb]',
    link: 'https://leetcode.com/u/Kishan_0porwal/'
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-cpp',
    title: 'Programming in C, C++',
    issuer: 'Technical Certification',
    skills: ['C Language', 'C++ Language', 'Object Oriented Programming', 'Memory Management', 'Pointers & Data Structures'],
    icon: 'Terminal'
  },
  {
    id: 'cert-python',
    title: 'Programming in Python',
    issuer: 'Technical Certification',
    skills: ['Python Syntax', 'Data Structures', 'Functions & Modules', 'Scripting & Automation'],
    icon: 'FileCode2'
  }
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    duration: 'Aug 2025 - Present',
    score: '6.5',
    scoreType: 'CGPA',
    status: 'Currently Pursuing',
    details: [
      'Core coursework in Computer Science, Data Structures & Algorithms, Object-Oriented Programming, and Database Systems.',
      'Active participant in coding challenges and embedded engineering prototyping.'
    ]
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Holy Point Academy',
    location: 'Etawah, Uttar Pradesh',
    duration: 'June 2023 - Mar 2025',
    score: '76%',
    scoreType: 'Percentage',
    status: 'Completed',
    details: [
      'Focused on Science, Mathematics, and Computer fundamentals.',
      'Graduated with 76% aggregate score.'
    ]
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Msk International School',
    location: 'Etawah, Uttar Pradesh',
    duration: 'June 2019 - Mar 2023',
    score: '75%',
    scoreType: 'Percentage',
    status: 'Completed',
    details: [
      'Completed foundational high school education with 75% marks.',
      'Active participation in science exhibitions and school computer events.'
    ]
  }
];
