import type { IconComponent } from '@/types/components';

export interface Project {
  slug: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  headerImage: string;
  features: string[];
}

export interface ProjectContent {
  title: string;
  description: string;
  longDescription: string;
}

export type ProjectWithContent = Project & ProjectContent;

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface ContactLink {
  icon: IconComponent;
  label: string;
  value: string;
  href: string | null;
}
