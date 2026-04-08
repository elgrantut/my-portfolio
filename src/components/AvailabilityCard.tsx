'use client';

import { motion } from 'motion/react';
import type { AvailabilityCardProps } from '@/types/props';

export default function AvailabilityCard({
  delay = 0.8,
}: AvailabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="font-medium text-foreground">
          Available for freelance
        </span>
      </div>
      <p className="text-sm text-muted-foreground pl-5.5">
        Currently accepting new projects and collaborations.
      </p>
    </motion.div>
  );
}
