import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Harsha Sampangi`,
    description: post.excerpt,
  };
}

const components = {
  h1: (props: any) => <h1 className="font-display text-3xl font-bold mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="font-display text-2xl font-bold mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="font-display text-xl font-bold mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-text-secondary leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 text-text-secondary mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 text-text-secondary mb-6 space-y-2" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline underline-offset-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-accent bg-accent-light/30 pl-4 py-2 italic text-text-primary my-6 rounded-r-lg" {...props} />
  ),
  code: (props: any) => <code className="bg-bg-secondary text-text-primary px-1.5 py-0.5 rounded text-sm font-mono border border-border-default" {...props} />,
  pre: (props: any) => (
    <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-xl overflow-x-auto mb-6 text-sm font-mono" {...props} />
  ),
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.content) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg-primary">
      <article className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-accent-light text-accent rounded-full text-xs px-3 py-1 font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] tracking-[-0.02em]">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </div>
  );
}
