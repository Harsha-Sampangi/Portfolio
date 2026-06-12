"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const samplePosts = [
  {
    slug: "building-medagent-360",
    category: "AI/ML",
    title: "Building MedAgent 360: How I Used LLMs to Analyze Medical Reports",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "A deep dive into the architecture, challenges, and lessons learned while building an autonomous healthcare AI system...",
  },
  {
    slug: "building-student-hub",
    category: "Community",
    title: "How I Built a 5,000-Member Student Community From Scratch",
    date: "May 2026",
    readTime: "8 min read",
    excerpt:
      "Student Hub started as a WhatsApp group. Here's what I learned about community building, engagement, and creating real value...",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-eyebrow text-accent mb-3 block">Blog</span>
              <h2
                id="blog-heading"
                className="font-display text-4xl font-bold text-text-primary"
              >
                Thinking Out Loud
              </h2>
              <p className="text-text-secondary mt-2">
                Writing about AI, building in public, and student life in tech.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200 shrink-0"
            >
              Read all posts
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {samplePosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-border-default rounded-2xl p-6 hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <span className="inline-block bg-accent-light text-accent rounded-full text-xs px-3 py-1 font-medium">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text-primary mt-3 mb-2 group-hover:text-accent transition-colors duration-150">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border-subtle text-xs text-text-secondary">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span className="ml-auto text-accent font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read post
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
