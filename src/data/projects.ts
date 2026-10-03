export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Fintech & SACCO' | 'Python & Desktop' | 'Browser Extension';
  description: string;
  longDescription?: string;
  technologies: string[];
  isPrivate: boolean;
  githubUrl: string;
  highlights: string[];
  role?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'the-fans-league',
    title: 'The Fans League',
    category: 'Full-Stack',
    description: 'Modern sports prediction and peer-to-peer fans competition platform featuring real-time fixtures, automated M-Pesa payouts, and gamified group leagues.',
    longDescription: 'Engineered a high-concurrency fan competition engine with automated payment callbacks, real-time sports API synchronization, wallet ledger balances, and community tournaments.',
    technologies: ['TypeScript', 'Node.js', 'React', 'M-Pesa Daraja API', 'PostgreSQL', 'WebSockets'],
    isPrivate: true,
    githubUrl: 'https://github.com/cokoth95-dev/the-fans-league',
    highlights: ['Automated M-Pesa B2C/C2B payouts', 'Real-time fixture streaming', 'Gamified group leaderboard system'],
    role: 'Lead Architect & Full-Stack Developer'
  },
  {
    id: 'goldenxpress-gx',
    title: 'GoldenXpress (GX)',
    category: 'Full-Stack',
    description: 'Enterprise logistics, dispatch tracking, and courier transaction management system tailored for high velocity delivery workflows.',
    longDescription: 'Complete shipping lifecycle system featuring waybill generation, shipment dispatch status progression, multi-stop routing, and customer SMS/notification webhooks.',
    technologies: ['TypeScript', 'Next.js / React', 'Tailwind CSS', 'REST API', 'Redis'],
    isPrivate: true,
    githubUrl: 'https://github.com/cokoth95-dev/GoldenXpress-GX',
    highlights: ['Real-time dispatch tracking', 'Multi-tenant parcel management', 'Automated customer dispatch receipts'],
    role: 'Full-Stack Engineer'
  },
  {
    id: 'jua-kali-sacco',
    title: 'JUA KALI SACCO App',
    category: 'Fintech & SACCO',
    description: 'Comprehensive SACCO enterprise operations system designed for managing member savings, loan disbursement schedules, and daily liquidity operations.',
    longDescription: 'Mission-critical cooperative banking software built to handle daily deposit reconciliation, loan amortisation calculation, dividend distribution, and statutory reporting.',
    technologies: ['TypeScript', 'PostgreSQL', 'Express', 'React', 'Role-Based Access Control'],
    isPrivate: true,
    githubUrl: 'https://github.com/cokoth95-dev/JUA-KALI-SACCO',
    highlights: ['Member deposit & share registers', 'Automated loan repayment amortisation', 'Strict financial audit trail & ledger'],
    role: 'Core Systems Developer'
  },
  {
    id: 'kbt-sacco-app',
    title: 'KBT SACCO Core App',
    category: 'Fintech & SACCO',
    description: 'Full-featured cooperative financial management suite handling SACCO contributions, member dividends, and cashier operations.',
    longDescription: 'Modern digital portal enabling cooperative members to view dividends, contribute shares, request micro-loans, and inspect transaction summaries.',
    technologies: ['TypeScript', 'Node.js', 'Tailwind CSS', 'SQL Ledger'],
    isPrivate: true,
    githubUrl: 'https://github.com/cokoth95-dev/kbt-sacco-app',
    highlights: ['Cashier operational workflows', 'Instant member statements', 'Tiered loan approval flows'],
    role: 'Full-Stack Developer'
  },
  {
    id: 'family-finance-manager',
    title: 'Family Finance Manager',
    category: 'Python & Desktop',
    description: 'A modern PyQt6 desktop personal & family finance manager featuring multi-account tracking, budget analytics, and a companion Telegram bot for instant expense logging.',
    longDescription: 'High-performance desktop application combined with an asynchronous Telegram Bot companion, enabling users to log expenses on the go with zero-latency synchronization to the local encrypted SQLite datastore.',
    technologies: ['Python 3', 'PyQt6', 'Telegram Bot API', 'SQLite', 'Matplotlib / Charts'],
    isPrivate: false,
    githubUrl: 'https://github.com/cokoth95-dev/family-finance-manager',
    highlights: ['PyQt6 native modern desktop UI', 'Companion Telegram bot for instant receipts', 'Interactive monthly analytics & budget ceilings'],
    role: 'Creator & Maintainer'
  },
  {
    id: 'pylearn-pro',
    title: 'PyLearn Pro',
    category: 'Python & Desktop',
    description: 'Developer learning suite and interactive Python experimentation platform designed to accelerate coding mastery and algorithmic thinking.',
    longDescription: 'Curated curriculum, algorithmic benchmarks, and practical challenge suites helping software developers level up in modern Python paradigms.',
    technologies: ['Python', 'CLI & TUI Tools', 'Unit Testing', 'Data Structures'],
    isPrivate: false,
    githubUrl: 'https://github.com/cokoth95-dev/pylearn-pro',
    highlights: ['Interactive learning CLI', 'Algorithmic unit-test runner', 'Clean modular design patterns'],
    role: 'Author'
  },
  {
    id: 'undertaker-autobidder',
    title: 'Undertaker & Autobidder',
    category: 'Browser Extension',
    description: 'Intelligent Chrome extension and browser automation tool built to streamline real-time task bidding, keyword parsing, and auction monitoring.',
    longDescription: 'Client-side background service worker and content-script automation tool that scans target platforms, evaluates deal margins, and executes automated bids with millisecond precision.',
    technologies: ['JavaScript / TypeScript', 'Chrome Extensions Manifest V3', 'HTML5', 'DOM Automation'],
    isPrivate: false,
    githubUrl: 'https://github.com/cokoth95-dev/Undertaker-and-Autobidder-privacy',
    highlights: ['Manifest V3 background worker', 'High-speed DOM detection algorithm', 'Configurable bidding rules & thresholds'],
    role: 'Extension Developer'
  },
  {
    id: 'cs50-foundations',
    title: 'Harvard CS50 Algorithms & Systems',
    category: 'Python & Desktop',
    description: 'Extensive implementation of algorithmic computing, memory optimization, data structures, and computer science foundations.',
    longDescription: 'Implementations of sorting algorithms, tree/graph traversal, dynamic memory allocation in C/Python, and full-stack web applications.',
    technologies: ['Python', 'C', 'SQL', 'Algorithms & Data Structures'],
    isPrivate: true,
    githubUrl: 'https://github.com/me50/cokoth95-dev',
    highlights: ['Computer Science foundations', 'Algorithmic complexity optimization', 'Rigorous Harvard CS50 problem sets'],
    role: 'Student & Developer'
  }
];

export const SKILLS_DATA = [
  {
    category: 'Frontend & UI Engineering',
    skills: ['TypeScript', 'JavaScript (ESNext)', 'React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI / UX', 'Chrome Extensions (MV3)']
  },
  {
    category: 'Backend & Systems',
    skills: ['Node.js', 'Express', 'Python 3', 'PyQt6 Desktop', 'RESTful API Architecture', 'WebSockets', 'M-Pesa Daraja Integration']
  },
  {
    category: 'Databases & Infrastructure',
    skills: ['PostgreSQL', 'SQLite', 'Redis', 'Git & GitHub Pages', 'Linux / Shell Scripting', 'Docker Basics']
  },
  {
    category: 'Core Competencies',
    skills: ['Fintech & SACCO Operations', 'Automated Workflows & Bots', 'Clean Architecture', 'Ledger Balancing & Auditing']
  }
];
