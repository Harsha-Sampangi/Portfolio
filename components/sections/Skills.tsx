"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, scaleIn } from "@/lib/animations";

const skillGroups = [
  {
    label: "AI/ML & Data",
    skills: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Hugging Face",
      "Transformers",
      "LangChain",
      "Streamlit",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    label: "Web & Mobile Development",
    skills: ["React.js", "Next.js", "Flutter", "JavaScript", "HTML", "CSS", "Dart"],
  },
  {
    label: "Databases & Cloud",
    skills: ["Firebase", "Firestore", "SQLite", "REST APIs", "JWT Auth"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
  },
  {
    label: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "Dart"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 lg:py-32 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="skills-heading"
            className="font-display text-4xl font-bold text-text-primary mb-4"
          >
            My Toolkit
          </h2>
          <p className="text-text-secondary">
            Technologies and tools I build with daily
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              variants={scaleIn}
              className={
                groupIndex === skillGroups.length - 1
                  ? "md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <div className={groupIndex === skillGroups.length - 1 ? "max-w-lg" : ""}>
                <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4 block">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 bg-white border border-border-default rounded-xl px-4 py-2.5 text-sm font-medium text-text-primary hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
