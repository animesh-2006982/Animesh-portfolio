export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Web Development"
  | "Video Editing"
  | "Poster Design"
  | "Visual Design";

export interface Project {
  id: string;

  title: string;

  category: Exclude<
    ProjectCategory,
    "All"
  >;

  year: string;

  description: string;

  technologies: string[];

  image?: string;

  video?: string;

  videos?: string[];

  gallery?: string[];

  link?: string;

  github?: string;

  featured?: boolean;
}