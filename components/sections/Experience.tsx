"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "industry" as const,
    role: "ML Intern",
    company: "SkillCraft Technology",
    period: "June 2026 – Present",
    location: "Hyderabad, India",
    description:
      "Contributing to ML research and development initiatives. Working on real-world machine learning applications and deployment pipelines.",
    isCurrent: true,
    icon: Briefcase,
  },
  {
    type: "education" as const,
    role: "B.Tech in Computer Science & Engineering",
    company: "Malla Reddy Engineering College",
    period: "2024 – 2028",
    location: "Hyderabad, India",
    description:
      "Core focus in AI/ML, Computer Vision, NLP, and Full-Stack Development. Active in competitive programming, hackathons, and community building.",
    isCurrent: false,
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 lg:py-32 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-eyebrow text-accent mb-3 block">
            Journey
          </span>
          <h2
            id="experience-heading"
            className="font-display text-4xl font-bold text-text-primary mb-12"
          >
            Experience
          </h2>
        </AnimatedSection>

        <div className="relative ml-4">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border-default" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.role} delay={index * 0.15}>
                <div className="relative ml-8">
                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm absolute -left-10 top-6" />

                  <div className="bg-white border border-border-default rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                          <exp.icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-primary text-lg">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-text-secondary">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrent && (
                          <span className="bg-green-50 text-green-700 border border-green-200 rounded-full text-xs px-2 py-0.5 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary mb-2">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
