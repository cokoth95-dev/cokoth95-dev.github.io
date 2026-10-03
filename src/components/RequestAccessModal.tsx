import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { Lock, Mail, ExternalLink, X, Check, Copy } from 'lucide-react';


interface RequestAccessModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  contactEmail: string;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  project,
  isOpen,
  onClose,
  contactEmail
}) => {
  const [copied, setCopied] = useState(false);
  const [requesterEmail, setRequesterEmail] = useState('');
  const [requesterName, setRequesterName] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !project) return null;

  const mailtoSubject = encodeURIComponent(`Access Request: ${project.title} Repository`);
  const mailtoBody = encodeURIComponent(
    `Hello Cokoth,\n\nI came across your portfolio and would like to request access / demo credentials for "${project.title}".\n\nName: ${requesterName || '[Your Name]'}\nCompany/Role: \nPurpose of request: ${note || 'Evaluating code architecture & potential collaboration'}\n\nBest regards,\n${requesterEmail || ''}`
  );
  const mailtoLink = `mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-lg bg-[#111219] border border-orange-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Amber accent glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900/60 hover:bg-neutral-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-orange-400/90 font-mono-code font-semibold">Private Repository</div>
            <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          This project is under an enterprise or client NDA. You can request direct access, code walkthroughs, or architectural documentation.
        </p>

        {/* Project Snapshot Card */}
        <div className="p-3.5 mb-6 rounded-xl bg-neutral-900/80 border border-neutral-800">
          <div className="text-xs text-neutral-400 mb-1">Architecture / Role:</div>
          <div className="text-sm font-medium text-neutral-200">{project.role || 'Full-Stack System'}</div>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs rounded bg-neutral-800 text-orange-300 font-mono-code">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="inline-flex p-3 rounded-full bg-orange-500/20 text-orange-400 mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-white">Email Client Triggered!</h4>
            <p className="text-sm text-neutral-400 mt-1 mb-4">
              Your default mail app should have opened. If not, copy my direct email below:
            </p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-orange-400 text-sm font-medium hover:border-orange-500/50"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {contactEmail}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Your Name / Organization</label>
              <input
                type="text"
                placeholder="e.g. Alex (Engineering Recruiter / Founder)"
                value={requesterName}
                onChange={(e) => setRequesterName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500/70"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="your.email@company.com"
                value={requesterEmail}
                onChange={(e) => setRequesterEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500/70"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Purpose / Note (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Code review for Full-Stack role"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500/70"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition shadow-lg shadow-orange-600/25 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Draft Request Email
              </button>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-sm transition cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                Copy Email
              </button>
            </div>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-500">
          <span>Repository: {project.githubUrl.replace('https://github.com/', '')}</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 inline-flex items-center gap-1"
          >
            GitHub Link <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
