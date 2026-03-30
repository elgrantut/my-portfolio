"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
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
        style={{ y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-accent/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-medium tracking-widest uppercase text-green-accent mb-6"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8"
            >
              Building digital
              <br />
              <span className="text-muted-foreground">experiences</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                Frontend developer with 5+ years of experience creating modern,
                scalable web applications. I specialize in the React ecosystem
                and enjoy solving complex problems with elegant solutions.
              </p>

              <p className="text-lg leading-relaxed">
                My approach combines solid technical skills with an eye for
                design and user experience. Clean code and intuitive interfaces
                make the difference between a good product and an exceptional one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-12 mt-12"
            >
              {[
                { value: "5+", label: "Years experience" },
                { value: "50+", label: "Projects delivered" },
                { value: "20+", label: "Happy clients" },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-4xl font-bold text-foreground"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Main card */}
              <div className="absolute inset-4 sm:inset-8 bg-card rounded-2xl border border-border p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-green-accent/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-green-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Clean Code
                  </h3>
                  <p className="text-muted-foreground">
                    Writing readable, maintainable, and scalable code that stands
                    the test of time.
                  </p>
                </div>

                <div className="flex gap-3 mt-8">
                  {["React", "TypeScript", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
                  <div className="w-10 h-10 rounded-full bg-green-accent/10 flex items-center justify-center">
                    <span className="text-green-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Based in</p>
                    <p className="text-xs text-muted-foreground">Argentina • GMT-3</p>
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
