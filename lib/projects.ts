export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  tier: number;
  role: string;
  badge?: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: "medagent-360",
    title: "MedAgent 360",
    tagline: "Autonomous Healthcare Intelligence Platform",
    description:
      "An AI-powered system leveraging OCR, NLP, and LLMs for medical report and prescription analysis. Automates information extraction and healthcare insight generation through intelligent agent workflows.",
    stack: ["Python", "LangChain", "OCR", "NLP", "LLMs", "Firebase"],
    tags: ["Healthcare AI", "Team Lead", "Agent Workflows"],
    githubUrl: "https://github.com/Harsha-Sampangi/MedAgent360",
    tier: 1,
    role: "Team Lead",
    categories: ["AI/ML"],
  },
  {
    id: "accessos",
    title: "AccossOS (Savr)",
    tagline: "Smart Access & Visitor Regulation System",
    description:
      "A cloud SaaS platform for gated residential communities — JWT-secured QR passes, guard panel, delivery API integration, admin analytics dashboard, and parking management. 63 product features across a multi-tenant architecture.",
    stack: ["Flutter", "Dart", "REST API", "JWT", "PostgreSQL", "Firebase"],
    tags: ["SaaS", "Solo Build", "Product Design"],
    githubUrl: "https://github.com/Harsha-Sampangi/AccossOS",
    tier: 1,
    role: "Solo",
    categories: ["Full-Stack", "SaaS"],
  },
  {
    id: "authentic-ai",
    title: "Authentic.AI",
    tagline: "AI-Powered Misinformation Detection System",
    description:
      "NLP-based platform for content authenticity verification and misinformation detection. Implements semantic analysis and credibility scoring for real-time trust assessment.",
    stack: ["Python", "NLP", "Semantic Analysis", "Streamlit"],
    tags: ["NLP", "Solo Build", "🏆 CodeStream 2026 Winner"],
    githubUrl: "https://github.com/Harsha-Sampangi/Authentic.Ai",
    tier: 1,
    role: "Solo",
    badge: "🏆 1st Prize — CodeStream 2026",
    categories: ["AI/ML", "Hackathon Winners"],
  },
  {
    id: "savr-ai",
    title: "Savr-AI",
    tagline: "Computer Vision Attendance System",
    description:
      "Real-time face recognition system using OpenCV and dlib for automated attendance tracking. Integrated Firebase/SQLite and achieved 90%+ recognition accuracy with an analytics dashboard.",
    stack: ["Python", "OpenCV", "dlib", "Firebase", "SQLite"],
    tags: ["Computer Vision", "Solo Build", "🏆 NeuraX Winner"],
    githubUrl: "https://github.com/Harsha-Sampangi/savr-ai",
    tier: 2,
    role: "Solo",
    badge: "🏆 1st Prize — NeuraX Hackathon",
    categories: ["AI/ML", "Hackathon Winners"],
  },
  {
    id: "daytrack",
    title: "DayTrack",
    tagline: "Offline-First Personal Finance & Task Manager",
    description:
      "A clean personal life manager for students — offline-first architecture, biometric/PIN authentication, interactive expense charts, and local push notifications. No cloud dependencies.",
    stack: ["Flutter", "Dart", "Hive DB", "Provider", "Local Auth"],
    tags: ["Mobile App", "Solo Build", "Offline-First"],
    githubUrl: "https://github.com/Harsha-Sampangi/DayTrack",
    tier: 2,
    role: "Solo",
    categories: ["Mobile", "Full-Stack"],
  },
];

export const filterCategories = [
  "All",
  "AI/ML",
  "Full-Stack",
  "Mobile",
  "SaaS",
  "Hackathon Winners",
];
