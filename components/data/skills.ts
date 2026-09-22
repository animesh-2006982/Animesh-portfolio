export type SkillCategory =
  | "DEVELOPMENT"
  | "BACKEND"
  | "CREATIVE"
  | "DESIGN"
  | "MARKETING"
  | "PROFESSIONAL";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  image: string;
  level: "Expert" | "Advanced" | "Intermediate";
  tags: string[];
}

export const skills: Skill[] = [
  {
    id: "nextjs",
    name: "NEXT.JS",
    category: "DEVELOPMENT",
    image: "/images/skills/nextjs.png",
    level: "Advanced",
    tags: [
      "React Framework",
      "App Router",
      "Server Components",
      "Full Stack",
    ],
  },

  {
    id: "react",
    name: "REACT",
    category: "DEVELOPMENT",
    image: "/images/skills/react.png",
    level: "Advanced",
    tags: [
      "Components",
      "Hooks",
      "State Management",
      "UI",
    ],
  },

  {
    id: "javascript",
    name: "JAVASCRIPT",
    category: "DEVELOPMENT",
    image: "/images/skills/javascript.png",
    level: "Advanced",
    tags: [
      "ES6+",
      "DOM",
      "Async",
      "API Integration",
    ],
  },

  {
    id: "html",
    name: "HTML",
    category: "DEVELOPMENT",
    image: "/images/skills/html.png",
    level: "Expert",
    tags: [
      "Semantic HTML",
      "Forms",
      "Accessibility",
      "Web Structure",
    ],
  },

  {
    id: "tailwind",
    name: "TAILWIND CSS",
    category: "DEVELOPMENT",
    image: "/images/skills/tailwind-css.png",
    level: "Advanced",
    tags: [
      "Responsive UI",
      "Utility CSS",
      "Components",
      "Design Systems",
    ],
  },

  {
    id: "nodejs",
    name: "NODE.JS",
    category: "BACKEND",
    image: "/images/skills/nodejs.png",
    level: "Intermediate",
    tags: [
      "Backend",
      "APIs",
      "Express",
      "Server Logic",
    ],
  },

  {
    id: "firebase",
    name: "FIREBASE",
    category: "BACKEND",
    image: "/images/skills/firebase.png",
    level: "Advanced",
    tags: [
      "Authentication",
      "Firestore",
      "Hosting",
      "Cloud",
    ],
  },

  {
    id: "supabase",
    name: "SUPABASE",
    category: "BACKEND",
    image: "/images/skills/supabase.png",
    level: "Intermediate",
    tags: [
      "Database",
      "Authentication",
      "Storage",
      "Backend",
    ],
  },

  {
    id: "video-editing",
    name: "VIDEO EDITING",
    category: "CREATIVE",
    image: "/images/skills/video-editing.png",
    level: "Advanced",
    tags: [
      "YouTube",
      "Reels",
      "Cinematic",
      "Social Media",
    ],
  },

  {
    id: "motion-graphics",
    name: "MOTION GRAPHICS",
    category: "CREATIVE",
    image: "/images/skills/motion-graphics.png",
    level: "Intermediate",
    tags: [
      "Animation",
      "Transitions",
      "Effects",
      "Motion Design",
    ],
  },

  {
    id: "poster-design",
    name: "POSTER DESIGN",
    category: "DESIGN",
    image: "/images/skills/poster-design.png",
    level: "Advanced",
    tags: [
      "Posters",
      "Social Media",
      "Campaigns",
      "Visual Design",
    ],
  },

  {
    id: "photoshop",
    name: "PHOTOSHOP",
    category: "DESIGN",
    image: "/images/skills/photoshop.png",
    level: "Advanced",
    tags: [
      "Photo Editing",
      "Compositing",
      "Posters",
      "Graphics",
    ],
  },

  {
    id: "canva",
    name: "CANVA",
    category: "DESIGN",
    image: "/images/skills/canva.png",
    level: "Expert",
    tags: [
      "Social Media",
      "Presentations",
      "Posters",
      "Marketing",
    ],
  },

  {
    id: "digital-marketing",
    name: "DIGITAL MARKETING",
    category: "MARKETING",
    image: "/images/skills/digital-marketing.png",
    level: "Intermediate",
    tags: [
      "Content",
      "Promotion",
      "Campaigns",
      "Branding",
    ],
  },

  {
    id: "social-media",
    name: "SOCIAL MEDIA",
    category: "MARKETING",
    image: "/images/skills/social-media.png",
    level: "Advanced",
    tags: [
      "Instagram",
      "Facebook",
      "Content",
      "Engagement",
    ],
  },

  {
    id: "communication",
    name: "COMMUNICATION",
    category: "PROFESSIONAL",
    image: "/images/skills/communication.png",
    level: "Advanced",
    tags: [
      "Client Communication",
      "Presentation",
      "Teamwork",
      "Collaboration",
    ],
  },

  {
    id: "github",
    name: "GITHUB",
    category: "PROFESSIONAL",
    image: "/images/skills/github.png",
    level: "Advanced",
    tags: [
      "Git",
      "Version Control",
      "Repositories",
      "Deployment",
    ],
  },
];