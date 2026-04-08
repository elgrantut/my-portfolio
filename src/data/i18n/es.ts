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
    switchToSpanish: 'Cambiar a espanol',
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
    getInTouch: 'Contactarme',
    scrollDown: 'Desplazarse hacia abajo',
  },
  about: {
    label: 'Sobre mi',
    headingPrefix: 'Hola, soy Matias -',
    headingHighlight: 'desarrollador frontend',
    headingSuffix: 'con base en diseno grafico.',
    paragraph1:
      'Durante los ultimos anos estuve desarrollando aplicaciones web con React, Next.js, TypeScript y Node.js, principalmente en proyectos de e-commerce y Web3.',
    paragraph2:
      'Disfruto crear productos simples, rapidos y faciles de usar. Como empece en diseno, pienso tanto en como funcionan las cosas como en como se sienten para las personas. Me gusta participar en todo el proceso: entender el problema, construir y mejorar funcionalidades. Me siento comodo trabajando remoto con equipos internacionales y valoro la comunicacion clara, la colaboracion y la responsabilidad.',
    basedIn: 'Basado en',
    location: 'Argentina • GMT-3',
  },
  work: {
    label: 'Trabajo destacado',
    title: 'Proyectos',
    description:
      'Una seleccion de proyectos que muestran desarrollo frontend, diseno UI/UX y arquitectura de aplicaciones.',
    instruction: 'Haz click en una tarjeta para ver el detalle completo',
    visitSite: 'Ver sitio',
  },
  skills: {
    label: 'Habilidades y tecnologias',
    title: 'Stack tecnico',
    description:
      'Herramientas y tecnologias que uso para construir aplicaciones modernas y de alto rendimiento.',
    alsoExperienced: 'Tambien con experiencia en',
    softSkills: [
      'Resolucion de problemas',
      'Colaboracion en equipo',
      'Metodologias agiles',
      'Code review',
      'Documentacion tecnica',
    ],
    categoryTitles: {
      'Frontend Development': 'Desarrollo Frontend',
      'UI/UX Design': 'Diseno UI/UX',
      'Tools & Frameworks': 'Herramientas y Frameworks',
      'Mobile & Performance': 'Mobile y Performance',
    },
    categoryDescriptions: {
      'Frontend Development':
        'Construccion de aplicaciones web modernas y responsivas',
      'UI/UX Design': 'Creacion de interfaces claras, intuitivas y atractivas',
      'Tools & Frameworks': 'Trabajo con herramientas modernas de desarrollo',
      'Mobile & Performance': 'Optimizacion para dispositivos y velocidad',
    },
  },
  contact: {
    label: 'Contacto',
    title: 'Trabajemos juntos',
    description:
      'Tenes un proyecto en mente? Me encantaria conocerlo. Enviame un mensaje y conversemos.',
    linkLabels: {
      Email: 'Email',
      GitHub: 'GitHub',
      Twitter: 'Twitter',
      LinkedIn: 'LinkedIn',
      Location: 'Ubicacion',
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
    sendSuccess: 'Mensaje enviado con exito.',
  },
  footer: {
    rightsReserved: 'Todos los derechos reservados.',
    builtWith: 'Desarrollado con',
  },
  project: {
    backToProjects: 'Volver a proyectos',
    viewCode: 'Ver codigo',
    technologies: 'Tecnologias',
    aboutThisProject: 'Sobre este proyecto',
    keyFeatures: 'Funciones clave',
    interestedCta: 'Te interesa que trabajemos juntos?',
  },
  validation: {
    nameMin: 'El nombre debe tener al menos 2 caracteres',
    nameMax: 'El nombre debe tener como maximo 80 caracteres',
    email: 'Ingresa un correo electronico valido',
    messageMin: 'El mensaje debe tener al menos 10 caracteres',
    messageMax: 'El mensaje debe tener como maximo 1200 caracteres',
  },
};
