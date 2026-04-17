'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '@/hooks';
import { useTranslations } from '@/hooks/useTranslations';

export default function Hero() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background - scaled and shifted right so center element doesn't overlap text */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.3] translate-x-[15%] origin-center"
      >
        <source src="/videos/coder-hero.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/50" />

      {/* Spotlight effect following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="text-center md:text-left col-span-2"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.8rem] font-extrabold text-white leading-tight">
              <span className="text-emerald-500">{t.hero.titleHighlight}</span>{' '}
              {t.hero.description}
            </p>
          </motion.div>

          {/* Buttons column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="flex flex-col sm:flex-row h-full items-center lg:items-end justify-center md:justify-start gap-4 col-span-2 xl:col-span-1"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#work');
              }}
              className="group relative px-8 py-3.5 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">{t.hero.viewWork}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="px-8 py-3.5 border border-emerald-400 font-medium rounded-full bg-emerald-500 text-white hover:bg-emerald-400 transition-all hover:scale-105"
            >
              {t.hero.getInTouch}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label={t.hero.scrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 border border-white/50 rounded-full"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
