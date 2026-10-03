import { useState } from 'react';
import { PROJECTS_DATA, SKILLS_DATA } from './data/projects';
import type { Project } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { RequestAccessModal } from './components/RequestAccessModal';
import { 
  Mail, 
  ArrowRight, 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Terminal,
  CheckCircle2,
  Phone,
  MessageCircle
} from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}


export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactEmail = 'cokoth95@gmail.com';
  const phoneNumber = '+254741937102';
  const whatsappNumber = '+254702090361';
  const whatsappLink = `https://wa.me/254702090361?text=${encodeURIComponent("Hello Cokoth, I checked your portfolio and would like to discuss a project / role.")}`;
  const githubUsername = 'cokoth95-dev';

  const categories = ['All', 'Full-Stack', 'Fintech & SACCO', 'Python & Desktop', 'Browser Extension'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const handleRequestAccess = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-200 relative overflow-hidden">
      {/* Background ambient warm luxury glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-600/15 via-amber-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-[-200px] w-[500px] h-[500px] bg-orange-700/10 blur-[130px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090a0f]/80 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors">
                Cokoth<span className="text-orange-500">.</span>
              </span>
              <span className="block text-[11px] font-mono-code text-neutral-400">Full-Stack Developer</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/40 transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 cursor-pointer"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-mono-code">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES & CONTRACTS
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Hi, I'm <span className="font-serif-display italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Cokoth</span>.
              <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl text-neutral-200 font-sans">
                Full-Stack & Systems Developer.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              I architect high-concurrency web platforms, fintech cooperative ledgers, and Python automation engines. From real-time M-Pesa sports leagues to cooperative SACCO core systems, I turn complex requirements into robust, high-performance software.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-all duration-200 shadow-xl shadow-orange-600/30 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-medium text-sm transition cursor-pointer"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Tech badges strip */}
            <div className="pt-6 flex flex-wrap items-center gap-3 text-xs font-mono-code text-neutral-400 border-t border-neutral-900">
              <span className="text-neutral-500">CORE FOCUS:</span>
              <span className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300">TypeScript & Node</span>
              <span className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300">Python / PyQt6</span>
              <span className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300">M-Pesa Daraja APIs</span>
              <span className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300">PostgreSQL / SQLite</span>
            </div>
          </div>

          {/* Hero Right Visual: Elegant Terminal Card Inspired by the Dark / Amber Look */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl bg-[#0e1017] border border-orange-500/20 p-6 shadow-2xl shadow-orange-950/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono-code text-neutral-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-orange-400" />
                  developer@cokoth95-dev ~ 
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-3 font-mono-code text-xs leading-relaxed">
                <div>
                  <span className="text-orange-400">$</span> <span className="text-neutral-300">whoami</span>
                  <p className="text-neutral-400 mt-1 pl-3 border-l border-neutral-800">
                    Full-Stack Engineer building enterprise cooperative software, gamified prediction platforms & automation tools.
                  </p>
                </div>

                <div>
                  <span className="text-orange-400">$</span> <span className="text-neutral-300">cat current_status.json</span>
                  <div className="mt-1 pl-3 border-l border-neutral-800 text-neutral-400 space-y-1">
                    <p>{"{"}</p>
                    <p className="pl-3"><span className="text-amber-300">"status"</span>: <span className="text-emerald-400">"Shipping production software"</span>,</p>
                    <p className="pl-3"><span className="text-amber-300">"primary_stack"</span>: [<span className="text-orange-300">"TypeScript"</span>, <span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"React"</span>],</p>
                    <p className="pl-3"><span className="text-amber-300">"fintech"</span>: <span className="text-orange-300">"SACCO systems & Daraja Payouts"</span>,</p>
                    <p className="pl-3"><span className="text-amber-300">"github"</span>: <span className="text-neutral-300">"@cokoth95-dev"</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-orange-400">$</span> <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Mini Stats strip */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-neutral-900/60">
                  <div className="text-base font-bold text-white">8+</div>
                  <div className="text-[10px] text-neutral-400">Projects</div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900/60">
                  <div className="text-base font-bold text-orange-400">100%</div>
                  <div className="text-[10px] text-neutral-400">Clean Code</div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900/60">
                  <div className="text-base font-bold text-white">24/7</div>
                  <div className="text-[10px] text-neutral-400">Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono-code uppercase tracking-wider text-orange-400 mb-2">
              Featured Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production Code & Repositories
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mt-2">
              A collection of enterprise cooperative apps, sports prediction leagues, desktop managers, and automated browser tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onRequestAccess={handleRequestAccess}
            />
          ))}
        </div>
      </section>

      {/* Technical Skills & Expertise Section */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono-code uppercase tracking-wider text-orange-400 mb-2">
            Toolbelt & Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Architecture
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Built with modern industry standards, zero-bloat principles, and robust security protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0d0f15] border border-neutral-800/80 p-6 card-ambient-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-5">
                {idx === 0 && <Code2 className="w-5 h-5" />}
                {idx === 1 && <Cpu className="w-5 h-5" />}
                {idx === 2 && <Database className="w-5 h-5" />}
                {idx === 3 && <Layers className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400/80 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About & Philosophy Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
        <div className="rounded-3xl bg-[#0f1118]/60 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono-code uppercase tracking-wider text-orange-400">
                Philosophy & Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Reliable Systems, Real Impact
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                As a developer, my focus goes beyond writing code — it's about solving operational headaches. Whether that's automating cooperative SACCO loan disbursements so treasurers spend less time on manual registers, building peer-to-peer competition platforms with instantaneous M-Pesa ledger settlements, or programming desktop finance companions with Telegram bot integration.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Grounding my knowledge in rigorous computer science principles (including Harvard CS50 algorithms) gives me the adaptability to engineer fast, maintainable solutions in TypeScript, Python, or systems C when performance calls for it.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="text-xs text-neutral-400">Location</div>
                <div className="text-sm font-semibold text-white mt-1">Available Globally (Remote)</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="text-xs text-neutral-400">Primary Focus</div>
                <div className="text-sm font-semibold text-orange-400 mt-1">Full-Stack & Fintech Apps</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="text-xs text-neutral-400">GitHub Activity</div>
                <div className="text-sm font-semibold text-white mt-1">Active Commits & Repos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Have a project in mind or want to collaborate?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            I am currently open to full-stack engineering roles, contract projects, and architecture reviews. Let's discuss your roadmap.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-orange-600/15 hover:bg-orange-600 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white transition group"
            >
              <div className="p-2 rounded-lg bg-orange-500/20 group-hover:bg-white/20 text-orange-400 group-hover:text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-[11px] font-mono-code text-neutral-400 uppercase">Email</div>
                <div className="text-xs font-semibold truncate text-white">{contactEmail}</div>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white transition group"
            >
              <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-white/20 text-emerald-400 group-hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-[11px] font-mono-code text-neutral-400 uppercase">WhatsApp</div>
                <div className="text-xs font-semibold truncate text-white">{whatsappNumber}</div>
              </div>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 transition group"
            >
              <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 text-orange-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-[11px] font-mono-code text-neutral-400 uppercase">Phone / Call</div>
                <div className="text-xs font-semibold truncate text-white">{phoneNumber}</div>
              </div>
            </a>

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 transition group"
            >
              <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 text-orange-400">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-[11px] font-mono-code text-neutral-400 uppercase">GitHub</div>
                <div className="text-xs font-semibold truncate text-white">@{githubUsername}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900 text-center text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Cokoth. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              GitHub
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-orange-400 transition">
              Email
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
          </div>
        </div>
      </footer>

      {/* Private Repo Access Modal */}
      <RequestAccessModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
        contactEmail={contactEmail}
      />
    </div>
  );
}

export default App;
