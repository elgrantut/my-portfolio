'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Trans } from 'react-i18next';
import {
  Shader,
  Dither,
  Plasma,
  VideoTexture,
  CursorTrail,
} from 'shaders/react';

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

  return (
    <section
      ref={ref}
      className="relative min-h-170 md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background - scaled and shifted right so center element doesn't overlap text */}
      <Shader
        className="absolute inset-0 w-full h-full object-cover scale-[1.3] translate-x-[15%] origin-center"
        disableTelemetry={true}
      >
        <Dither
          colorA="#022c22"
          colorB="#10b981"
          pixelSize={3.5}
          threshold={0.5}
        >
          <Plasma
            colorA="#ffffff"
            contrast={0.9}
            density={0.3}
            intensity={1.3}
            speed={1}
          />
          <VideoTexture url="/videos/coder-hero.webm" />

          <CursorTrail radius={0.25} />
        </Dither>
      </Shader>

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
            <p className="text-white uppercase font-black text-3xl md:text-6xl md:max-w-lg text-shadow-lg/50">
              <span>{'<'} </span>
              <Trans
                i18nKey="hero.titleHighlight"
                components={{
                  span: <span className="font-normal" />,
                }}
              />
            </p>

            <br />

            <p className="md:max-w-3/4 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-white leading-tight tracking-tight text-shadow-lg/50">
              <Trans
                i18nKey="hero.description"
                components={{
                  span: <span className="font-black" />,
                }}
              />
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
            <button
              onClick={() => scrollTo('#work')}
              className="group relative px-8 py-3.5 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl/80"
            >
              <span className="relative z-10">{t.hero.viewWork}</span>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-3.5 border border-emerald-400 font-medium rounded-full bg-emerald-500 text-white hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl/80"
            >
              {t.hero.getInTouch}
            </button>
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
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}
