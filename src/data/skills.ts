import type { SkillCategory } from '@/types/data';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive web applications',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive interfaces',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Accessibility', level: 80 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    description: 'Working with modern development tools',
    skills: [
      { name: 'Next.js', level: 88 },
      { name: 'Vite', level: 90 },
      { name: 'Git', level: 92 },
      { name: 'Astro', level: 85 },
    ],
  },
  {
    title: 'Mobile & Performance',
    description: 'Optimizing for all devices and speeds',
    skills: [
      { name: 'Progressive Web Apps', level: 85 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'SEO', level: 82 },
      { name: 'Testing', level: 80 },
    ],
  },
];
