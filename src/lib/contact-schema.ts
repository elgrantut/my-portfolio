import { z } from 'zod';
import { en } from '@/i18n/en';
import type {
  ContactFormValues,
  ContactValidationMessages,
} from '@/types/forms';

export function createContactFormSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin).max(80, messages.nameMax),
    email: z.string().trim().email(messages.email),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(1200, messages.messageMax),
  });
}

export const contactFormSchema = createContactFormSchema(en.validation);
