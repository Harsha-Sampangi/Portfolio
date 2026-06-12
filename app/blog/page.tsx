import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Harsha Sampangi",
  description: "Thoughts on AI, building in public, and student communities.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-text-secondary text-lg">
            Thoughts on building AI products, organizing communities, and
            navigating the transition from student to software engineer.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white border border-border-default rounded-2xl p-6 lg:p-8 hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <span className="inline-block bg-accent-light text-accent rounded-full text-xs px-3 py-1 font-medium w-max">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                  Read article
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-24 text-text-secondary border border-dashed border-border-default rounded-2xl">
              No posts found. Add some MDX files to content/blog.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
