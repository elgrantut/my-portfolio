import { en } from './en';

export const es = {
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
    shortEn: 'EN',
    shortEs: 'ES',
  },
  hero: {
    titleHighlight: 'Desarrollador Frontend > <span>& Diseñador Web</span>.',
    description:
      'Creando experiencias web modernas con <span>React framework</span> y <span>TypeScript</span>. Enfocado en rendimiento, accesibilidad e interfaces cuidadas.',
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
    built: 'Hecho en {{year}} con ❤️ por Matias usando ',
  },
  project: {
    backToProjects: 'Volver a proyectos',
    viewCode: 'Ver código',
    technologies: 'Tecnologías',
    aboutThisProject: 'Sobre este proyecto',
    keyFeatures: 'Funciones clave',
    interestedCta: 'Te interesa que trabajemos juntos?',
  },
  projects: {
    'ecommerce-platform': {
      title: 'Mawoopets',
      description:
        'Una plataforma e-commerce full-stack que conecta criadores caninos certificados con clientes en Estados Unidos y Canada.',
      longDescription:
        'Una plataforma de comercio electronico integral construida con Next.js y TypeScript. Incluye gestion de productos, carrito persistente, integracion de Stripe para pagos y un panel de administracion para inventario y ordenes. Esta optimizada para SEO y rendimiento con renderizado del lado del servidor.',
    },
    'influencer-market-cap': {
      title: 'XCAD Network - Influencer Market Cap',
      description:
        'Una plataforma para seguir y analizar el valor de mercado de influencers tokenizados dentro del ecosistema XCAD.',
      longDescription:
        'Influencer Market Cap es una plataforma orientada a datos que brinda informacion sobre el valor y rendimiento de creadores tokenizados en el ecosistema XCAD. Como Frontend Developer, trabaje en interfaces de visualizacion y dashboards con React y herramientas modernas. Mi aporte se enfoco en presentar datos financieros y blockchain complejos de forma clara y accesible. Desarrolle componentes para mostrar metricas, rankings y tendencias de tokens, ayudando a entender mejor la dinamica del mercado de creator tokens.',
    },
    'xcad-site': {
      title: 'XCAD Network - Sitio',
      description:
        'Sitio oficial de XCAD Network, una plataforma Web3 que permite a creadores tokenizar sus audiencias y recompensar la participacion.',
      longDescription:
        'XCAD Network es una plataforma basada en blockchain que permite a creadores de contenido tokenizar sus audiencias y construir nuevos modelos de monetizacion con sus comunidades. Como Frontend Developer, trabaje en el sitio principal con React y Next.js, contribuyendo al desarrollo de interfaces responsivas y de alto rendimiento. Mi trabajo se enfoco en construir paginas clave, mejorar la consistencia visual y garantizar una experiencia fluida en distintos dispositivos. Colabore con diseno y producto para traducir conceptos Web3 complejos en interfaces intuitivas.',
    },
    'xcad-browser-extension': {
      title: 'XCAD Network - Extension de Navegador',
      description:
        'XCAD impulsa la revolucion #Watch2Earn permitiendo que fans ganen creator tokens al ver contenido en YouTube.',
      longDescription:
        'XCAD Network impulsa la revolucion #Watch2Earn permitiendo que fans ganen creator tokens al ver a sus creadores favoritos directamente en YouTube. La extension de navegador permite ganar, visualizar y operar esos tokens desde el plugin, que funciona en segundo plano mientras se reproducen videos. Los usuarios reciben recompensas al ver al menos el 80% de un video y pueden usar tokens para votar en encuestas de creadores, donde mayor cantidad de tokens implica mayor peso de voto. Tambien pueden hacer staking para obtener multiplicadores de recompensa. Como Frontend Developer, participe en el desarrollo y mantenimiento de la interfaz con React y herramientas modernas, construyendo flujos de usuario, integraciones de wallet y funcionalidades de earning, tracking y staking.',
    },
    'xcad-social': {
      title: 'XCAD Network - Social',
      description:
        'Un AI Influencer es una persona virtual impulsada por IA. En XCAD Social podes lanzar tu propio AI Creator para crear y operar contenido en comunidad.',
      longDescription:
        'XCAD Social es una plataforma innovadora que permite crear e interactuar con influencers impulsados por IA. Estos creadores virtuales habilitan a las comunidades a generar contenido, producir imagenes y participar en una economia creativa compartida. Como Frontend Developer, contribui al desarrollo de interfaces interactivas con React y Next.js, enfocandome en usabilidad y rendimiento. Trabaje en funcionalidades dinamicas para creacion de contenido, interaccion de usuarios y feedback en tiempo real. El objetivo fue hacer que flujos complejos basados en IA se sintieran intuitivos y atractivos.',
    },
  },
  validation: {
    nameMin: 'El nombre debe tener al menos 2 caracteres',
    nameMax: 'El nombre debe tener como máximo 80 caracteres',
    email: 'Ingresa un correo electrónico válido',
    messageMin: 'El mensaje debe tener al menos 10 caracteres',
    messageMax: 'El mensaje debe tener como máximo 1200 caracteres',
  },
} satisfies typeof en;
