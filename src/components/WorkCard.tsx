'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group relative h-full bg-card rounded-xl overflow-hidden border border-border hover:border-emerald-500/50 transition-all duration-300">
        {/* Image/Preview area */}
        <Link href={`/project/${project.slug}`} className="block">
          <div className="aspect-4/3 bg-linear-to-br from-secondary to-secondary/50 relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-300" />

            <div className="absolute top-4 right-4 rounded-full bg-emerald-200 dark:bg-emerald-400 p-2 backdrop-blur-xs">
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <Link href={`/project/${project.slug}`} className="block flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-500 transition-colors line-clamp-1">
                {project.title}
              </h3>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs font-normal px-2 py-0.5"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Visit Site Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-emerald-500 transition-colors group/link"
          >
            <span>Visit site</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-emerald-500/0 group-hover:bg-emerald-500/10 rotate-45 transition-colors duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
