import React from 'react';
import type { Project } from '../data/projects';
import { Lock, Unlock, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';


interface ProjectCardProps {
  project: Project;
  onRequestAccess: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onRequestAccess }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#0f1118]/80 hover:bg-[#141622]/90 border border-neutral-800/80 hover:border-orange-500/40 p-6 md:p-7 card-ambient-hover transition-all duration-300 backdrop-blur-sm">
      {/* Subtle orange accent glow on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono-code font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
            {project.category}
          </span>

          {project.isPrivate ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Lock className="w-3 h-3" /> Private Repo
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Unlock className="w-3 h-3" /> Public
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
        </h3>

        {/* Role subtitle */}
        {project.role && (
          <div className="text-xs text-orange-400/80 font-mono-code mt-1 mb-3">
            Role: {project.role}
          </div>
        )}

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mt-2 mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-5">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-neutral-900/90 text-neutral-300 border border-neutral-800/70 font-mono-code"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {project.isPrivate ? (
          <button
            onClick={() => onRequestAccess(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600/15 hover:bg-orange-600 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Request Access / Demo</span>
          </button>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-white font-medium text-sm transition-all duration-200 cursor-pointer"
          >
            <span>View Source Code</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400" />
          </a>
        )}
      </div>
    </div>
  );
};
