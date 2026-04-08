export type Language = 'en' | 'es';

export interface ContactValidationMessages {
  nameMin: string;
  nameMax: string;
  email: string;
  messageMin: string;
  messageMax: string;
}

export interface Translations {
  nav: {
    about: string;
    work: string;
    skills: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    mobileContact: string;
  };
  language: {
    toggleLabel: string;
    switchToEnglish: string;
    switchToSpanish: string;
    shortEn: string;
    shortEs: string;
  };
  hero: {
    availability: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewWork: string;
    getInTouch: string;
    scrollDown: string;
  };
  about: {
    label: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    paragraph1: string;
    paragraph2: string;
    basedIn: string;
    location: string;
  };
  work: {
    label: string;
    title: string;
    description: string;
    instruction: string;
    visitSite: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    alsoExperienced: string;
    softSkills: string[];
    categoryTitles: Record<string, string>;
    categoryDescriptions: Record<string, string>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    linkLabels: Record<string, string>;
    locationValue: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    genericInvalid: string;
    cooldown: string;
    reviewFields: string;
    sendFailed: string;
    sendFailedTryAgain: string;
    sendSuccess: string;
  };
  footer: {
    rightsReserved: string;
    builtWith: string;
  };
  project: {
    backToProjects: string;
    viewCode: string;
    technologies: string;
    aboutThisProject: string;
    keyFeatures: string;
    interestedCta: string;
  };
  validation: ContactValidationMessages;
}
