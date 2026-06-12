"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Trophy, Code, Rocket, FileText, ExternalLink } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Members" },
  { value: 50, suffix: "+", label: "Opportunities" },
  { value: 100, suffix: "+", label: "Events Hosted" },
];

const achievements = [
  { icon: Trophy, text: "3 teams won Smart India Hackathon 2025" },
  { icon: Code, text: "12 community members selected for GSoC 2025" },
  { icon: Rocket, text: "25+ students placed at Google, Microsoft, Amazon" },
  { icon: FileText, text: "8 research papers published in IEEE/ACM" },
];

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="py-24 lg:py-32 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          <AnimatedSection>
            <div>
              <span className="text-eyebrow text-accent mb-3 block">
                Community
              </span>
              <h2
                id="community-heading"
                className="font-display text-4xl font-bold text-text-primary mb-6"
              >
                Building Together
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-text-secondary leading-[1.8] text-base">
                  Harsha founded Student Hub in 2024 with a simple belief: every
                  student in India deserves access to the same opportunities,
                  regardless of which college they attend.
                </p>
                <p className="text-text-secondary leading-[1.8] text-base">
                  What started as a small community has grown to 5,000+ students
                  across India — sharing hackathons, internships, workshops, open
                  source programs, and more.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl lg:text-4xl font-bold text-accent">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Community achievements */}
              <div className="space-y-3 mb-6">
                {achievements.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <item.icon
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://student-hub-lake.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-5 py-2.5 rounded-xl hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Visit Student Hub
                <ExternalLink size={14} />
              </a>
            </div>
          </AnimatedSection>

          {/* Right — Browser mockup */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-bg-secondary border-b border-border-default px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-text-secondary border border-border-default">
                  student-hub-lake.vercel.app
                </div>
              </div>
              {/* Content preview */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  Student Hub
                </h3>
                <p className="text-sm text-text-secondary max-w-xs mb-4">
                  India&apos;s open student community for hackathons,
                  internships, workshops & more
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-white/80 rounded-full px-3 py-1 text-text-secondary border border-border-default">
                    5,000+ Members
                  </span>
                  <span className="text-xs bg-white/80 rounded-full px-3 py-1 text-text-secondary border border-border-default">
                    Pan-India
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
