"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Download, ExternalLink, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const subtitles = ["AI/ML Engineer", "Full-Stack Developer", "Community Builder"];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease, delay },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center pt-32 pb-16 lg:pb-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left Column — Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow tag */}
            <motion.div {...fadeInUp(0.2)}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent-light border border-accent-mid px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
                Available for Internships · Hyderabad, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeInUp(0.3)} className="mt-6">
              <h1
                id="hero-heading"
                className="font-display text-[48px] lg:text-[72px] font-[800] leading-[1.0] tracking-[-0.04em] text-text-primary"
              >
                Hi, I&apos;m
                <br />
                Harsha Sampangi
                <span className="text-accent">.</span>
              </h1>
            </motion.div>

            {/* Rotating subtitle */}
            <motion.div
              {...fadeInUp(0.5)}
              className="mt-4 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-accent font-display font-semibold text-2xl lg:text-3xl mr-2">
                &gt;
              </span>
              <div className="relative h-10 overflow-hidden" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={subtitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease }}
                    className="font-display text-2xl lg:text-3xl font-semibold text-text-secondary inline-block"
                  >
                    {subtitles[subtitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bio line */}
            <motion.p
              {...fadeInUp(0.6)}
              className="mt-6 text-base text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              ML Intern @ SkillCraft
              <span className="text-accent mx-1">·</span>
              Google Student Ambassador 2026
              <span className="text-accent mx-1">·</span>
              Founder of Student Hub (5,000+ members)
              <span className="text-accent mx-1">·</span>
              2× Hackathon Winner
            </motion.p>

            {/* CTA Row */}
            <motion.div
              {...fadeInUp(0.7)}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="portfolio/public/Harsha_Sampangi_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-xl hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/harsha-sampangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Harsha on LinkedIn"
                className="inline-flex items-center justify-center gap-2 border border-border-default text-text-primary font-medium px-6 py-3 rounded-xl hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
              >
                Connect on LinkedIn
                <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeInUp(0.8)}
              className="mt-6 flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Harsha-Sampangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Harsha's GitHub profile"
                className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-150"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/harsha-sampangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Harsha's LinkedIn profile"
                className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-150"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:sampangiharshavardhan0@gmail.com"
                aria-label="Email Harsha"
                className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-150"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column — Photo */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="relative"
            >
              {/* Background decoration circle */}
              <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-accent-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Real photo */}
              <div className="relative z-10 w-56 h-72 lg:w-80 lg:h-96 rounded-3xl ring-4 ring-accent/20 shadow-xl bg-gradient-to-br from-accent-light via-bg-secondary to-accent-mid overflow-hidden flex items-center justify-center">
                <Image
                  src="/harsha-photo.png"
                  alt="Harsha Sampangi"
                  fill
                  sizes="(max-width: 1024px) 224px, 320px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating achievement card 1 — Bottom left */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease }}
                className="hidden lg:block absolute bottom-8 -left-6 bg-white rounded-2xl p-3 shadow-lg ring-1 ring-gray-100 z-20 min-w-[160px] animate-float"
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">
                      2× Hackathon Winner
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">
                      NeuraX · CodeStream 2026
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating achievement card 2 — Top right */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease }}
                className="hidden lg:block absolute -top-4 -right-6 bg-white rounded-2xl p-3 shadow-lg ring-1 ring-gray-100 z-20 min-w-[160px] animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌐</span>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">
                      5,000+ Members
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">
                      Student Hub Founder
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-text-secondary/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
