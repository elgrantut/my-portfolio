import type { ContactLink, Project } from '@/types/data';

export interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export interface ContactLinkCardProps {
  link: ContactLink;
}

export interface AvailabilityCardProps {
  delay?: number;
}

export interface WorkCardProps {
  project: Project;
  index: number;
}

export interface ProjectContentProps {
  project: Project;
}

export interface ProjectPageParams {
  params: Promise<{ slug: string }>;
}
