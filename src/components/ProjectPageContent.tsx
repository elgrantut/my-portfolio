'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useTranslations } from '@/hooks/useTranslations';

interface ProjectPageContentProps {
  project: Project;
}

export default function ProjectPageContent({
  project,
}: ProjectPageContentProps) {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link
            href="/#work"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            {t.project.backToProjects}
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t.work.visitSite}
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-background font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                {t.project.viewCode}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Image
          src={project.headerImage}
          alt={project.title}
          width={1024}
          height={512}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />

        <div className="mb-16">
          <h2 className="text-xs font-medium tracking-widest uppercase text-emerald-500 mb-4">
            {t.project.technologies}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xs font-medium tracking-widest uppercase text-emerald-500 mb-4">
            {t.project.aboutThisProject}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-medium tracking-widest uppercase text-emerald-500 mb-6">
            {t.project.keyFeatures}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 pt-16 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">
            {t.project.interestedCta}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            {t.hero.getInTouch}
          </Link>
        </div>
      </div>
    </div>
  );
}
