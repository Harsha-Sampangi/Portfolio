"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export default function ProjectCard({ project, isFeatured }: ProjectCardProps) {
  return (
    <div
      className={`group bg-white border border-border-default rounded-2xl p-6 hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
        isFeatured ? "lg:flex lg:gap-8 lg:items-start" : ""
      }`}
    >
      <div className={isFeatured ? "lg:flex-1" : ""}>
        {/* Badge */}
        {project.badge && (
          <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs px-2.5 py-0.5 font-medium mb-3">
            {project.badge}
          </span>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-text-secondary bg-bg-secondary rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-150">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-text-secondary mt-1 mb-3 font-medium">
          {project.tagline}
        </p>

        {/* Description */}
        <p
          className={`text-sm text-text-secondary leading-relaxed ${
            isFeatured ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-text-secondary bg-bg-secondary rounded-md px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border-subtle">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title} live demo`}
              className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Live Demo
              <ArrowUpRight size={12} />
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View Project
            <ArrowUpRight
              size={14}
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
