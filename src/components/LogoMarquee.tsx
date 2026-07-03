'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

const logos = [
  { name: 'Illustrator', src: '/images/ai.svg' },
  { name: 'Photoshop', src: '/images/ps.svg' },
  { name: 'InDesign', src: '/images/id.svg' },
  { name: 'Next.js', src: '/images/nextjs.svg' },
  { name: 'React', src: '/images/react.svg' },
  { name: 'TanStack', src: '/images/tanstack.png' },
  {
    name: 'Astro',
    src: '/images/astro.svg',
    srcLight: '/images/astro-light.svg',
  },
  { name: 'Cinema 4D', src: '/images/cinema_4d.svg' },
];

// Offset second row so the two rows feel visually distinct
const row2 = [...logos.slice(4), ...logos.slice(0, 4)];

interface Logo {
  name: string;
  src: string;
  srcLight?: string;
}

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-card hover:border-emerald-500/40 transition-colors duration-300 shrink-0 select-none hover:scale-105">
      <div className="relative size-5 shrink-0">
        {/* Light-mode variant — hidden in dark mode */}
        {logo.srcLight && (
          <Image
            src={logo.srcLight}
            alt={logo.name}
            fill
            sizes="20px"
            className="object-contain dark:hidden"
          />
        )}
        {/* Default variant — hidden in light mode when a light variant exists */}
        <Image
          src={logo.src}
          alt={logo.name}
          fill
          sizes="20px"
          className={`object-contain${logo.srcLight ? ' hidden dark:block' : ''}`}
        />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden py-10 bg-emerald-800 dark:bg-emerald-50  group">
      <h2 className="dark:text-black/80 text-white text-center text-lg font-semibold mb-8">
        Everyday's Toolbox.{' '}
        <span className="font-normal">Mastered for every project.</span>
      </h2>
      {/* Left edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-linear-to-r from-emerald-800 dark:from-emerald-50 to-transparent" />
      {/* Right edge fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-linear-to-l from-emerald-800 dark:from-emerald-50 to-transparent" />

      <Marquee pauseOnHover className="[--duration:90s]">
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:90s]">
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </Marquee>
    </section>
  );
}
