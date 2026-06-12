"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

function ExternalLinkIconWrapper({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-eyebrow text-accent mb-3 block">
            Let&apos;s Connect
          </span>
          <h2
            id="contact-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4"
          >
            Start a Conversation
          </h2>
          <p className="text-text-secondary text-base lg:text-lg mb-12">
            Open to ML/AI internship opportunities, collaborations, and
            conversations about building things that matter.
          </p>

          <div className="bg-bg-secondary border border-border-default rounded-3xl p-8 lg:p-10">
            <a
              href="mailto:sampangiharshavardhan0@gmail.com"
              className="text-xl lg:text-2xl font-display font-bold text-accent hover:text-accent-dark transition-colors duration-200 block mb-8 break-all"
            >
              sampangiharshavardhan0@gmail.com
            </a>

            <a
              href="/Harsha_Sampangi_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full bg-accent text-white font-medium px-6 py-4 rounded-xl hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mb-8 text-base"
            >
              <Download size={18} />
              Download Resume
            </a>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-default"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-bg-secondary text-text-secondary">
                  or connect via
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/Harsha-Sampangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border-default hover:border-accent hover:bg-accent-light transition-all text-sm font-medium text-text-secondary hover:text-accent group"
              >
                <GithubIcon size={24} className="group-hover:scale-110 transition-transform duration-200" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/harsha-sampangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border-default hover:border-accent hover:bg-accent-light transition-all text-sm font-medium text-text-secondary hover:text-accent group"
              >
                <LinkedinIcon size={24} className="group-hover:scale-110 transition-transform duration-200" />
                LinkedIn
              </a>
              <a
                href="https://student-hub-lake.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Student Hub"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border-default hover:border-accent hover:bg-accent-light transition-all text-sm font-medium text-text-secondary hover:text-accent group"
              >
                <ExternalLinkIconWrapper size={24} />
                Student Hub
              </a>
            </div>
          </div>

          <p className="text-sm text-text-secondary mt-8">
            Based in Hyderabad, India · Available for remote & on-site
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
