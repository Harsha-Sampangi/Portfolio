"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Projects() {
  const featured = projects.filter((p) => p.tier === 1);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-eyebrow text-accent mb-3 block">
                Portfolio
              </span>
              <h2
                id="projects-heading"
                className="font-display text-4xl font-bold text-text-primary"
              >
                Things I&apos;ve Built
              </h2>
              <p className="text-text-secondary mt-2">
                AI systems, SaaS products, and full-stack applications — all
                shipped.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200 shrink-0"
            >
              View all {projects.length} projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {/* Featured project — full width */}
          <AnimatedSection delay={0.1}>
            <ProjectCard project={featured[0]} isFeatured />
          </AnimatedSection>

          {/* Two standard cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.slice(1).map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
