'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 sm:py-40 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        style={{ opacity, y }}
        className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 ">
          {/* Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-medium tracking-widest uppercase text-emerald-500 mb-6"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8"
            >
              Hi, I’m Matías — a{' '}
              <span className="text-muted-foreground">frontend developer</span>{' '}
              with a background in graphic design.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                Over the past few years, I’ve been building web applications
                using React, Next.js, TypeScript, and Node.js, mainly in
                e-commerce and Web3 projects.
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy creating products that are simple, fast, and easy to
                use. Because I started in design, I naturally think about both
                how things work and how they feel for the user. I like being
                involved in the full process — from understanding the problem to
                building and improving features. I’m comfortable working
                remotely with international teams and enjoy clear communication,
                collaboration, and ownership.
              </p>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Main card */}
              <div className="absolute inset-4 sm:inset-8 bg-card rounded-2xl border border-border overflow-hidden">
                <Image
                  src="/images/me_mono.webp"
                  alt="Matias Sanchez portrait"
                  fill
                  sizes="(min-width: 1024px) 32rem, 80vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-border rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-border rounded-bl-2xl" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-500 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Based in
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Argentina • GMT-3
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
