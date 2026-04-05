'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      <span className="relative block h-5 w-5">
        <Sun className="h-5 w-5 text-foreground transition-all duration-200 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-5 w-5 text-foreground rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
      </span>
    </button>
  );
}
