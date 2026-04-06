import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { Mail, MapPin } from 'lucide-react';
import { IconComponent } from '@/types/components';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { XIcon } from '@/components/icons/XIcon';

export interface ContactLink {
  icon: IconComponent;
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
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/elgrantut',
    href: 'https://github.com/elgrantut/my-portfolio',
  },
  {
    icon: XIcon,
    label: 'Twitter',
    value: '@tute_sanchez',
    href: 'https://x.com/tute_sanchez',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanchez-matias-j',
    href: 'https://www.linkedin.com/in/sanchez-matias-j',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Argentina • GMT-3',
    href: null,
  },
];
