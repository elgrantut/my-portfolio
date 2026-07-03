import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import LogoMarquee from '@/components/LogoMarquee';
import Work from '@/components/sections/Work';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Work />
      <Skills />
      <LogoMarquee />
      <Contact />
      <SiteFooter />
    </main>
  );
}
