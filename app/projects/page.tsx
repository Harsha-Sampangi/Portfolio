"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filterCategories } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            All Projects
          </h1>
          <p className="text-text-secondary text-lg">
            A comprehensive list of things I&apos;ve built, from AI agents to SaaS
            platforms.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-border-default">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-accent-light hover:border-accent border border-border-default"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-text-secondary">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
