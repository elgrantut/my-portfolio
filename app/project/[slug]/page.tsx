import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/app/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/#work"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit site
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-background font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                View code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Image placeholder */}
        <div className="aspect-video bg-secondary rounded-xl mb-16 flex items-center justify-center border border-border overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="text-center relative">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-green-accent/10 border border-green-accent/20 flex items-center justify-center">
              <ExternalLink className="w-10 h-10 text-green-accent" />
            </div>
            <p className="text-muted-foreground">Project preview</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-xs font-medium tracking-widest uppercase text-green-accent mb-4">
            Technologies
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

        {/* Description */}
        <div className="mb-16">
          <h2 className="text-xs font-medium tracking-widest uppercase text-green-accent mb-4">
            About this project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xs font-medium tracking-widest uppercase text-green-accent mb-6">
            Key features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">Interested in working together?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
