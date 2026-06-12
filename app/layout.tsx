import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshasampangi.dev"),
  title: "Harsha Sampangi — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Harsha Sampangi — CS undergrad, ML Intern at SkillCraft Technology, Google Student Ambassador 2026, and founder of Student Hub (5,000+ members). Building AI-powered solutions from Hyderabad, India.",
  keywords: [
    "Harsha Sampangi",
    "ML Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Portfolio",
    "Hyderabad",
    "Student Hub",
  ],
  authors: [{ name: "Harsha Sampangi", url: "https://harshasampangi.dev" }],
  creator: "Harsha Sampangi",
  openGraph: {
    title: "Harsha Sampangi — AI/ML Engineer & Full-Stack Developer",
    description:
      "Building AI-powered products, winning hackathons, and leading communities.",
    url: "https://harshasampangi.dev",
    siteName: "Harsha Sampangi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Sampangi — AI/ML Engineer",
    description:
      "Building AI-powered products, winning hackathons, and leading communities.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://harshasampangi.dev" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsha Sampangi",
  url: "https://harshasampangi.dev",
  jobTitle: "ML Engineer & Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Malla Reddy Engineering College",
  },
  sameAs: [
    "https://github.com/Harsha-Sampangi",
    "https://linkedin.com/in/harsha-sampangi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
