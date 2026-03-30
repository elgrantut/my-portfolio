export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Mawoopets',
    description:
      'A full-stack e-commerce platform connecting certified dog breeders with customers across the US and Canada.',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and TypeScript. It includes product management, a persistent shopping cart, Stripe integration for payments, and an admin panel for managing inventory and orders. Optimized for SEO and performance with Server-Side Rendering.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'Sass',
      'Node.js',
      'Express',
      'GraphQL',
      'AWS',
      'MySQL',
      'Sequelize',
    ],
    liveUrl: 'https://www.mawoopets.com/',
    githubUrl: 'https://github.com',
    image: '/images/mawoopets_small.webp',
    features: [
      'Persistent shopping cart',
      'Stripe payments',
      'Admin panel',
      'SEO optimization',
      'Responsive design',
    ],
  },
  {
    slug: 'task-management',
    title: 'Task Management App',
    description:
      'Task management application with drag & drop and real-time collaboration.',
    longDescription:
      'Kanban-style project management application with drag & drop functionality. Allows creating boards, lists, and cards, assigning team members, and tracking progress. Includes real-time notifications and cross-device synchronization.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: '/images/project-2.jpg',
    features: [
      'Intuitive drag & drop',
      'Real-time with Socket.io',
      'Team collaboration',
      'Push notifications',
      'Responsive',
    ],
  },
  {
    slug: 'portfolio-cms',
    title: 'Portfolio CMS',
    description:
      'Content management system for portfolios with a visual editor.',
    longDescription:
      'A headless CMS designed specifically for creative portfolios. Includes a drag-and-drop visual editor, automatic image optimization, customizable themes, and static site generation for maximum performance.',
    technologies: ['Next.js', 'Sanity', 'Framer Motion', 'Tailwind', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: '/images/project-3.jpg',
    features: [
      'Drag & drop visual editor',
      'Image optimization',
      'Customizable themes',
      'Automatic SEO',
      'Static generation',
    ],
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Weather dashboard with forecasts, interactive maps, and alerts.',
    longDescription:
      'Meteorological dashboard displaying detailed forecasts, real-time precipitation maps, and severe weather alerts. Built with React and D3.js for data visualizations. Includes geolocation and city search.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Mapbox', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: '/images/project-4.jpg',
    features: [
      '7-day forecast',
      'Interactive maps',
      'Weather alerts',
      'PWA offline',
      'Geolocation',
    ],
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    description: 'Personal finance tracking app with budgets and reports.',
    longDescription:
      'Personal finance application that allows recording expenses and income, setting monthly budgets, and visualizing trends with interactive charts. Includes AI-powered automatic categorization and report exporting.',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Plaid API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: '/images/project-5.jpg',
    features: [
      'Expense tracking',
      'Budgets',
      'Interactive charts',
      'Bank synchronization',
      'CSV/PDF export',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
