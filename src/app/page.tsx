import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Work from '@/components/sections/Work';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-green-accent">Next.js</span>,
              Tailwind CSS & Motion
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
