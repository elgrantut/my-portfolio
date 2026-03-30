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
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico con carrito, pagos y panel de administración.",
    longDescription:
      "Una plataforma completa de e-commerce construida con Next.js y TypeScript. Incluye gestión de productos, carrito de compras persistente, integración con Stripe para pagos, y un panel de administración para gestionar inventario y pedidos. Optimizada para SEO y rendimiento con Server-Side Rendering.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-1.jpg",
    features: [
      "Carrito de compras persistente",
      "Pagos con Stripe",
      "Panel de admin",
      "Optimización SEO",
      "Responsive design",
    ],
  },
  {
    slug: "task-management",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real.",
    longDescription:
      "Aplicación de gestión de proyectos estilo Kanban con funcionalidad drag & drop. Permite crear tableros, listas y tarjetas, asignar miembros del equipo, y realizar seguimiento del progreso. Incluye notificaciones en tiempo real y sincronización entre dispositivos.",
    technologies: ["React", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-2.jpg",
    features: [
      "Drag & drop intuitivo",
      "Tiempo real con Socket.io",
      "Colaboración en equipo",
      "Notificaciones push",
      "Responsive",
    ],
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Sistema de gestión de contenido para portfolios con editor visual.",
    longDescription:
      "Un CMS headless diseñado específicamente para portfolios creativos. Incluye un editor visual de arrastrar y soltar, optimización automática de imágenes, temas personalizables, y generación de sitios estáticos para máximo rendimiento.",
    technologies: ["Next.js", "Sanity", "Framer Motion", "Tailwind", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-3.jpg",
    features: [
      "Editor visual drag & drop",
      "Optimización de imágenes",
      "Temas personalizables",
      "SEO automático",
      "Generación estática",
    ],
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Dashboard de clima con pronósticos, mapas interactivos y alertas.",
    longDescription:
      "Dashboard meteorológico que muestra pronósticos detallados, mapas de precipitación en tiempo real, y alertas de condiciones severas. Construido con React y D3.js para visualizaciones de datos. Incluye geolocalización y búsqueda de ciudades.",
    technologies: ["React", "D3.js", "OpenWeather API", "Mapbox", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-4.jpg",
    features: [
      "Pronóstico 7 días",
      "Mapas interactivos",
      "Alertas de clima",
      "PWA offline",
      "Geolocalización",
    ],
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    description:
      "App de seguimiento de finanzas personales con presupuestos y reportes.",
    longDescription:
      "Aplicación de finanzas personales que permite registrar gastos e ingresos, establecer presupuestos mensuales, y visualizar tendencias con gráficos interactivos. Incluye categorización automática con IA y exportación de reportes.",
    technologies: ["React Native", "Firebase", "Chart.js", "Plaid API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-5.jpg",
    features: [
      "Seguimiento de gastos",
      "Presupuestos",
      "Gráficos interactivos",
      "Sincronización bancaria",
      "Exportación CSV/PDF",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
