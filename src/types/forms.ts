export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState extends ContactFormValues {
  website: string;
}

export type ContactValidationMessages =
  (typeof import('@/i18n/en').en)['validation'];
