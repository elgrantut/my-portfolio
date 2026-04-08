import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import ProjectContent from '@/components/ProjectContent';
import { en } from '@/i18n/en';
import type { ProjectPageParams } from '@/types/props';

export async function generateMetadata({
  params,
}: ProjectPageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const projectContent = en.projects[slug as keyof typeof en.projects];

  if (!project || !projectContent) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${projectContent.title} | Portfolio`,
    description: projectContent.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
