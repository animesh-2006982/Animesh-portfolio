export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  capabilities: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    id: "full-stack-development",
    number: "01",
    title: "FULL STACK DEVELOPMENT",
    shortTitle: "FULL STACK",
    description:
      "Complete web applications from frontend to backend, database integration, authentication and deployment.",
    capabilities: [
      "Frontend Development",
      "Backend Development",
      "Database Integration",
      "Admin Dashboards",
      "Authentication",
      "Deployment",
    ],
    tools: [
      "Next.js",
      "React",
      "Node.js",
      "Firebase",
      "Firestore",
    ],
  },

  {
    id: "web-development",
    number: "02",
    title: "WEB DEVELOPMENT",
    shortTitle: "WEB DEV",
    description:
      "Modern, responsive and performance-focused websites designed for businesses, organizations, personal brands and digital products.",
    capabilities: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Responsive UI",
      "Interactive Interfaces",
      "Performance Optimization",
    ],
    tools: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    id: "video-editing",
    number: "03",
    title: "VIDEO EDITING",
    shortTitle: "VIDEO",
    description:
      "Creative video editing for YouTube, reels, educational content, promotional videos and cinematic storytelling.",
    capabilities: [
      "YouTube Videos",
      "Short Form Content",
      "Educational Videos",
      "Promotional Videos",
      "Cinematic Editing",
      "Motion Graphics",
    ],
    tools: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
    ],
  },

  {
    id: "poster-visual-design",
    number: "04",
    title: "POSTER & VISUAL DESIGN",
    shortTitle: "DESIGN",
    description:
      "Creative visual communication through posters, event creatives, banners, social media graphics and promotional designs.",
    capabilities: [
      "Event Posters",
      "Social Media Creatives",
      "Promotional Banners",
      "Campaign Designs",
      "Visual Communication",
      "Digital Branding",
    ],
    tools: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Canva",
    ],
  },
];