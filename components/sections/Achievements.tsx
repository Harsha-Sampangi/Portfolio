"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GoogleIcon } from "@/components/ui/Icons";
import { Trophy, Users, Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-eyebrow text-accent mb-3 block">
            Recognition
          </span>
          <h2
            id="achievements-heading"
            className="font-display text-4xl font-bold text-text-primary mb-2"
          >
            Highlights
          </h2>
          <p className="text-text-secondary mb-12">
            A few things I&apos;m proud of.
          </p>
        </AnimatedSection>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 — Guinness World Record (FEATURED — spans 2 cols) */}
          <motion.div
            variants={scaleIn}
            className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 lg:p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏅</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Guinness World Records™
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                Most participants in an agentic AI hackathon
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Google for Developers × GDG Hyderabad
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                <span>December 21, 2025</span>
                <span>·</span>
                <span>Hyderabad, India</span>
              </div>
              <span className="inline-block mt-4 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                Officially Amazing™
              </span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          </motion.div>

          {/* Card 2 — Hackathon Wins */}
          <motion.div
            variants={scaleIn}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={20} className="text-amber-600" />
              <span className="font-display font-bold text-text-primary text-lg">
                2× Hackathon Winner
              </span>
            </div>
            <p className="text-xs font-medium text-text-secondary mb-4">
              Solo · 24 hours each
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-3 border border-amber-100">
                <p className="text-sm font-semibold text-text-primary">
                  NeuraX Hackathon — 1st Prize
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Built: Savr-AI (Computer Vision)
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-amber-100">
                <p className="text-sm font-semibold text-text-primary">
                  CodeStream 2026 — 1st Prize
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Built: Authentic.AI (NLP)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Google Ambassador */}
          <motion.div
            variants={scaleIn}
            className="bg-white border border-border-default rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GoogleIcon size={24} />
              <div>
                <p className="font-display font-bold text-text-primary">
                  Google Student Ambassador
                </p>
                <p className="text-xs text-text-secondary">
                  2026 · Hyderabad, India
                </p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Selected by Google to represent and grow developer communities on
              campus. Organizing workshops, hackathons, and developer meetups.
            </p>
          </motion.div>

          {/* Card 4 — Student Hub */}
          <motion.div
            variants={scaleIn}
            className="bg-white border border-border-default rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-accent" />
              <div>
                <p className="font-display font-bold text-text-primary">
                  Founder · Student Hub
                </p>
                <p className="text-xs text-text-secondary">
                  5,000+ Members · Pan-India
                </p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              India&apos;s open student community — hackathons, internships,
              workshops, GSoC selections, SIH winners.
            </p>
            <a
              href="https://student-hub-lake.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:gap-1.5 transition-all"
            >
              student-hub-lake.vercel.app
              <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Card 5 — Technical Club President */}
          <motion.div
            variants={scaleIn}
            className="bg-white border border-border-default rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award size={20} className="text-accent" />
              <div>
                <p className="font-display font-bold text-text-primary">
                  President
                </p>
                <p className="text-xs text-text-secondary">Technical Club</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Leading the Technical Club at Malla Reddy Engineering College.
              Organizing technical events, coding competitions, and workshops
              for 500+ students.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
