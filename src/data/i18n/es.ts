import type { Translations } from './types';

export const es: Translations = {
  nav: {
    about: 'Sobre mi',
    work: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    menuOpen: 'Abrir menu',
    menuClose: 'Cerrar menu',
    mobileContact: 'Hablemos',
  },
  language: {
    toggleLabel: 'Cambiar idioma',
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Cambiar a español',
    shortEn: 'EN',
    shortEs: 'ES',
  },
  hero: {
    availability: 'Disponible para trabajar',
    titleLine1: 'Desarrollador',
    titleLine2: 'Frontend',
    description:
      'Construyendo experiencias web modernas con React, Next.js y TypeScript. Enfocado en rendimiento, accesibilidad e interfaces cuidadas.',
    viewWork: 'Ver proyectos',
    getInTouch: 'Contactame',
    scrollDown: 'Desplazarse hacia abajo',
  },
  about: {
    label: 'Sobre mi',
    headingPrefix: 'Hola, soy Matias -',
    headingHighlight: 'desarrollador frontend',
    headingSuffix: 'con base en diseño gráfico.',
    paragraph1:
      'Durante los últimos años estuve desarrollando aplicaciones web con React, Next.js, TypeScript y Node.js, principalmente en proyectos de e-commerce y Web3.',
    paragraph2:
      'Disfruto creando productos simples, rápidos y fáciles de usar. Como vengo del mundo del diseño, pienso tanto en cómo funcionan las cosas como en cómo se ven y se sienten para las personas. Me gusta participar en todo el proceso: entender el problema, construir y mejorar funcionalidades. Me siento cómodo trabajando remoto con equipos internacionales y valoro la comunicación clara, la colaboración y la responsabilidad.',
    basedIn: 'Radicado en',
    location: 'Argentina • GMT-3',
  },
  work: {
    label: 'Trabajo destacado',
    title: 'Proyectos',
    description:
      'Una selección de proyectos que muestran desarrollo frontend, diseño UI/UX y arquitectura de aplicaciones.',
    instruction: 'Haz click en una tarjeta para ver el detalle completo',
    visitSite: 'Ver sitio',
  },
  skills: {
    label: 'Habilidades y tecnologías',
    title: 'Stack técnico',
    description:
      'Herramientas y tecnologías que uso para construir aplicaciones modernas y de alto rendimiento.',
    alsoExperienced: 'También con experiencia en',
    softSkills: [
      'Resolución de problemas',
      'Colaboración en equipo',
      'Metodologías ágiles',
      'Revisión de código',
      'Documentación técnica',
    ],
    categoryTitles: {
      'Frontend Development': 'Desarrollo Frontend',
      'UI/UX Design': 'Diseño UI/UX',
      'Tools & Frameworks': 'Herramientas y Frameworks',
      'Mobile & Performance': 'Mobile y Performance',
    },
    categoryDescriptions: {
      'Frontend Development':
        'Construcción de aplicaciones web modernas y responsivas',
      'UI/UX Design': 'Creación de interfaces claras, intuitivas y atractivas',
      'Tools & Frameworks': 'Trabajo con herramientas modernas de desarrollo',
      'Mobile & Performance': 'Optimización para dispositivos y velocidad',
    },
  },
  contact: {
    label: 'Contacto',
    title: 'Trabajemos juntos',
    description:
      'Tenés un proyecto en mente? Me encantaría conocerlo. Enviame un mensaje y conversemos.',
    linkLabels: {
      Email: 'Email',
      GitHub: 'GitHub',
      Twitter: 'Twitter',
      LinkedIn: 'LinkedIn',
      Location: 'Ubicación',
    },
    locationValue: 'Argentina • GMT-3',
  },
  form: {
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@email.com',
    messagePlaceholder: 'Contame sobre tu proyecto...',
    sending: 'Enviando...',
    send: 'Enviar mensaje',
    genericInvalid: 'No se pudo enviar el mensaje en este momento.',
    cooldown: 'Espera unos segundos antes de enviar otro mensaje.',
    reviewFields: 'Revisa los campos marcados.',
    sendFailed: 'No se pudo enviar tu mensaje en este momento.',
    sendFailedTryAgain:
      'No se pudo enviar tu mensaje en este momento. Intentalo de nuevo.',
    sendSuccess: 'Mensaje enviado con éxito.',
  },
  footer: {
    rightsReserved: 'Todos los derechos reservados.',
    builtWith: 'Desarrollado con',
  },
  project: {
    backToProjects: 'Volver a proyectos',
    viewCode: 'Ver código',
    technologies: 'Tecnologías',
    aboutThisProject: 'Sobre este proyecto',
    keyFeatures: 'Funciones clave',
    interestedCta: 'Te interesa que trabajemos juntos?',
  },
  validation: {
    nameMin: 'El nombre debe tener al menos 2 caracteres',
    nameMax: 'El nombre debe tener como máximo 80 caracteres',
    email: 'Ingresa un correo electrónico válido',
    messageMin: 'El mensaje debe tener al menos 10 caracteres',
    messageMax: 'El mensaje debe tener como máximo 1200 caracteres',
  },
};
