'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { skillCategories } from '@/data/skills';
import SkillBar from '@/components/SkillBar';
import { useTranslations } from '@/hooks/useTranslations';

export default function Skills() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-16 sm:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        style={{ y }}
        className="absolute bottom-0 right-0 w-125 h-125 bg-emerald-500/5 rounded-full blur-3xl"
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
            {t.skills.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6"
          >
            {t.skills.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {t.skills.description}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="group bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-emerald-500/30 transition-colors duration-300"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.skills.categoryTitles[category.title] ?? category.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground pl-5">
                  {t.skills.categoryDescriptions[category.title] ??
                    category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex + categoryIndex * 4}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            {t.skills.alsoExperienced}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {t.skills.softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-full border border-border hover:border-emerald-500/30 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
