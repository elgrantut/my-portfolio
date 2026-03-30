"use client";

import { motion } from "motion/react";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1,
            delay: index * 0.05,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="h-full bg-green-accent rounded-full"
        />
      </div>
    </div>
  );
}
