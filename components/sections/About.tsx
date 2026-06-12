"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">
          {/* Left — Text */}
          <AnimatedSection>
            <div>
              <span className="text-eyebrow text-accent mb-3 block">
                About Me
              </span>
              <h2
                id="about-heading"
                className="font-display text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
              >
                Driven by curiosity.
                <br />
                Built by code.
              </h2>

              <div className="space-y-4">
                <p className="text-text-secondary leading-[1.8] text-base">
                  I never got interested in technology because of grades or job
                  titles. What fascinated me was the idea that a single person
                  with a laptop could build something that solves a real problem
                  for thousands of people.
                </p>
                <p className="text-text-secondary leading-[1.8] text-base">
                  My journey started with curiosity — wondering how websites
                  work, how apps are built, and how software can turn ideas into
                  reality. Today, whether it&apos;s developing AI-powered solutions,
                  winning hackathons, leading technical communities, or creating
                  projects from scratch, I enjoy the process of turning concepts
                  into products that create impact.
                </p>
                <p className="text-text-secondary leading-[1.8] text-base">
                  Five years from now, I hope to be building products that reach
                  millions of users while helping other students and developers
                  grow through communities, mentorship, and collaboration.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mt-8 pt-8 border-t border-border-default">
                <span>3rd Year CSE</span>
                <span className="w-px h-4 bg-border-default" />
                <span>B.Tech 2024–2028</span>
                <span className="w-px h-4 bg-border-default" />
                <span>Malla Reddy Engineering College</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Quote Card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-accent-light border border-accent-mid rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative quote mark */}
              <span className="text-[120px] font-display font-[800] text-accent/10 absolute -top-4 -left-2 leading-none select-none">
                &ldquo;
              </span>

              <p className="font-display text-xl font-semibold text-text-primary leading-[1.5] relative z-10">
                &ldquo;A single person with a laptop could build something that
                solves a real problem for thousands of people.&rdquo;
              </p>
              <span className="text-sm text-accent font-medium mt-4 block">
                — Harsha Sampangi
              </span>
            </div>

            {/* Closing statement */}
            <p className="text-sm italic text-text-secondary text-center mt-8 max-w-xs mx-auto">
              &ldquo;At my core, I&apos;m simply someone who loves to learn, build,
              lead, and leave every project, team, and community better than I
              found it.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
