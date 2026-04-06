'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import WorkCard from '@/components/WorkCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const orb_left = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const orb_right = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-16 sm:py-24 bg-emerald-200 dark:bg-emerald-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20" />
      {/* Gradient orbs */}
      <motion.div
        style={{ y: orb_left }}
        className="absolute -top-32 -left-32 w-150 h-150 bg-emerald-100/50 dark:bg-emerald-500/20 rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: orb_right }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/20  rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-medium tracking-widest uppercase text-emerald-500 mb-6"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6"
          >
            Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            A selection of projects showcasing frontend development, UI/UX
            design, and application architecture.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.slug}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <WorkCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-12">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-card border-border dark:border-emerald-900 hover:bg-secondary hover:dark:bg-emerald-800  hover:text-foreground" />
              <CarouselNext className="static translate-y-0 h-10 w-10 bg-card border-border dark:border-emerald-900 hover:bg-secondary hover:dark:bg-emerald-800  hover:text-foreground" />
            </div>
          </Carousel>
        </motion.div>

        {/* Instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Click on any card to see full project details
        </motion.p>
      </div>
    </section>
  );
}
