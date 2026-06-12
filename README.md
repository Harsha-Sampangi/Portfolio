# Harsha Sampangi — Personal Brand Platform

A premium, recruiter-focused personal brand platform built to showcase my technical abilities, projects, and community impact.

Designed for performance, aesthetics, and accessibility.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (Inline Theme)
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVGs
- **Content:** MDX via `next-mdx-remote`

## Features
- **Recruiter-First Design:** Optimized 5-second, 30-second, and 2-minute conversion funnels.
- **Micro-interactions:** Staggered fade-ins, bobbing elements, and scroll-aware reveals.
- **Dynamic Projects:** Filterable project categories and tier-based layout highlighting major work.
- **MDX Blog System:** Fully typed statically generated MDX blog.
- **SEO Optimized:** Full JSON-LD schema, Next.js Metadata, Sitemap, and dynamic OpenGraph generation.
- **Performance:** Perfect Lighthouse scores expected. Uses Next.js Turbopack and static optimization.

## Running Locally

1. Install dependencies
```bash
npm install
```

2. Start the development server
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
├── app/                  # Next.js App Router and Pages
│   ├── blog/             # Blog index and dynamic routes
│   └── projects/         # Projects archive
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Projects, Community, etc.
│   └── ui/               # Reusable components (Icons, AnimatedSection, ProjectCard)
├── content/              # MDX files for the blog
├── lib/                  # Utilities and data (blog.ts, animations.ts, projects.ts)
└── public/               # Static assets (Resume, Images)
```

## Adding Content

- **Blog Posts:** Add `.mdx` files to `content/blog/`
- **Projects:** Edit `lib/projects.ts`
- **Resume:** Replace `public/Harsha_Sampangi_Resume.pdf`
- **Profile Photo:** Add `harsha-photo.png` to `public/` and update `Hero.tsx`.
