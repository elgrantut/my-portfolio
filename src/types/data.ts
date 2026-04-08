import type { IconComponent } from '@/types/components';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  headerImage: string;
  features: string[];
}

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
