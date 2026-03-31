import { Mail, Github, Twitter, Linkedin, MapPin } from 'lucide-react';

export const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/username',
    href: 'https://github.com',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    value: '@username',
    href: 'https://twitter.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/username',
    href: 'https://linkedin.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Argentina • GMT-3',
    href: null,
  },
];
