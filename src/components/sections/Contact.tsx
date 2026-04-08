'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import ContactLinkCard from '@/components/ContactLinkCard';
import { contactLinks } from '@/data/contact';
import { useTranslations } from '@/hooks/useTranslations';

export default function Contact() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 sm:py-40 bg-secondary/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-500/5 rounded-full blur-3xl"
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
            {t.contact.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 lg:p-8 border border-border"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {contactLinks.map((link, index) => {
                const translatedLink = {
                  ...link,
                  label: t.contact.linkLabels[link.label] ?? link.label,
                  value:
                    link.label === 'Location'
                      ? t.contact.locationValue
                      : link.value,
                };
                const isLast = index === contactLinks.length - 1;
                return (
                  <motion.div
                    key={translatedLink.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className={isLast ? 'md:col-span-2' : ''}
                  >
                    <ContactLinkCard link={translatedLink} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
