'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '@/hooks';
import { useTranslations } from '@/hooks/useTranslations';

export default function Hero() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const orb_left = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const orb_right = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs */}
      <motion.div
        style={{ y: orb_left }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: orb_right }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-500 border border-emerald-500/30 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.availability}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6"
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-muted-foreground">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#work');
            }}
            className="group relative px-8 py-3.5 bg-foreground text-background font-medium rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">{t.hero.viewWork}</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="px-8 py-3.5 border border-emerald-400 dark:border-emerald-300 font-medium rounded-full bg-emerald-300 dark:bg-emerald-600 text-white hover:bg-emerald-400 transition-all hover:scale-105"
          >
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label={t.hero.scrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 border border-emerald-700 dark:border-emerald-400 rounded-full"
        >
          <ArrowDown className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
        </motion.div>
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
