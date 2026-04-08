import type { Translations } from './types';

export const en: Translations = {
  nav: {
    about: 'About',
    work: 'Work',
    skills: 'Skills',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mobileContact: 'Get in touch',
  },
  language: {
    toggleLabel: 'Toggle language',
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Cambiar a español',
    shortEn: 'EN',
    shortEs: 'ES',
  },
  hero: {
    availability: 'Available for work',
    titleLine1: 'Frontend',
    titleLine2: 'Developer',
    description:
      'Crafting modern web experiences with React, Next.js, and TypeScript. Focused on performance, accessibility, and beautiful interfaces.',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    scrollDown: 'Scroll down',
  },
  about: {
    label: 'About',
    headingPrefix: "Hi, I'm Matias - a",
    headingHighlight: 'frontend developer',
    headingSuffix: 'with a background in graphic design.',
    paragraph1:
      "Over the past few years, I've been building web applications using React, Next.js, TypeScript, and Node.js, mainly in e-commerce and Web3 projects.",
    paragraph2:
      "I enjoy creating products that are simple, fast, and easy to use. Because I started in design, I naturally think about both how things work and how they feel for the user. I like being involved in the full process - from understanding the problem to building and improving features. I'm comfortable working remotely with international teams and enjoy clear communication, collaboration, and ownership.",
    basedIn: 'Based in',
    location: 'Argentina • GMT-3',
  },
  work: {
    label: 'Selected Work',
    title: 'Projects',
    description:
      'A selection of projects showcasing frontend development, UI/UX design, and application architecture.',
    instruction: 'Click on any card to see full project details',
    visitSite: 'Visit site',
  },
  skills: {
    label: 'Skills & Technologies',
    title: 'Tech Stack',
    description:
      'Tools and technologies I use to build modern, high-performance applications.',
    alsoExperienced: 'Also experienced in',
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Agile Methodologies',
      'Code Review',
      'Technical Writing',
    ],
    categoryTitles: {
      'Frontend Development': 'Frontend Development',
      'UI/UX Design': 'UI/UX Design',
      'Tools & Frameworks': 'Tools & Frameworks',
      'Mobile & Performance': 'Mobile & Performance',
    },
    categoryDescriptions: {
      'Frontend Development': 'Building modern, responsive web applications',
      'UI/UX Design': 'Creating beautiful and intuitive interfaces',
      'Tools & Frameworks': 'Working with modern development tools',
      'Mobile & Performance': 'Optimizing for all devices and speeds',
    },
  },
  contact: {
    label: 'Get in Touch',
    title: "Let's work together",
    description:
      "Have a project in mind? I'd love to hear about it. Send me a message and let's talk.",
    linkLabels: {
      Email: 'Email',
      GitHub: 'GitHub',
      Twitter: 'Twitter',
      LinkedIn: 'LinkedIn',
      Location: 'Location',
    },
    locationValue: 'Argentina • GMT-3',
  },
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Tell me about your project...',
    sending: 'Sending...',
    send: 'Send message',
    genericInvalid: 'Unable to send message right now.',
    cooldown: 'Please wait a few seconds before sending another message.',
    reviewFields: 'Please review the highlighted fields.',
    sendFailed: 'Could not send your message right now.',
    sendFailedTryAgain:
      'Could not send your message right now. Please try again.',
    sendSuccess: 'Message sent successfully.',
  },
  footer: {
    rightsReserved: 'All rights reserved.',
    builtWith: 'Built with',
  },
  project: {
    backToProjects: 'Back to projects',
    viewCode: 'View code',
    technologies: 'Technologies',
    aboutThisProject: 'About this project',
    keyFeatures: 'Key features',
    interestedCta: 'Interested in working together?',
  },
  validation: {
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name must be at most 80 characters',
    email: 'Please enter a valid email address',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message must be at most 1200 characters',
  },
};
