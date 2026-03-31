import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  LucideIcon,
} from 'lucide-react';

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

export const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanchez-matias-j@proton.me',
    href: 'mailto:sanchez-matias-j@proton.me',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/elgrantut',
    href: 'https://github.com/elgrantut/my-portfolio',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    value: '@tute_sanchez',
    href: 'https://x.com/tute_sanchez',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tute_sanchez',
    href: 'https://linkedin.com/in/tute_sanchez',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Argentina • GMT-3',
    href: null,
  },
];
