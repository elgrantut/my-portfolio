'use client';

import { useRef } from 'react';
import { useForm } from '@tanstack/react-form';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2 } from 'lucide-react';
import {
  createContactFormSchema,
  type ContactFormValues,
} from '@/lib/contact-schema';
import { useTranslations } from '@/hooks/useTranslations';

const SUBMIT_COOL_DOWN_MS = 30_000;

type ContactFormState = ContactFormValues & {
  website: string;
};

function getErrorMessage(error: unknown): string | undefined {
  if (!error) return undefined;
  if (typeof error === 'string') return error;

  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  }

  return 'Invalid value';
}

export default function ContactForm() {
  const t = useTranslations();
  const contactFormSchema = createContactFormSchema(t.validation);
  const lastSubmitRef = useRef(0);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      website: '',
    } as ContactFormState,
    onSubmit: async ({ value, formApi }) => {
      if (value.website.trim()) {
        toast.error(t.form.genericInvalid);
        return;
      }

      const now = Date.now();
      if (now - lastSubmitRef.current < SUBMIT_COOL_DOWN_MS) {
        toast.error(t.form.cooldown);
        return;
      }

      const parsed = contactFormSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(t.form.reviewFields);
        return;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(value),
        });

        const data: { message?: string } = await response
          .json()
          .catch(() => ({}));

        if (!response.ok) {
          toast.error(data.message ?? t.form.sendFailed);
          return;
        }

        lastSubmitRef.current = now;
        toast.success(data.message ?? t.form.sendSuccess);
        formApi.reset();
      } catch {
        toast.error(t.form.sendFailedTryAgain);
      }
    },
  });

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
      }}
      className="space-y-6"
    >
      <form.Field name="website">
        {(field) => (
          <input
            aria-hidden="true"
            autoComplete="off"
            tabIndex={-1}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            className="hidden"
          />
        )}
      </form.Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <form.Field
          name="name"
          validators={{
            onBlur: contactFormSchema.shape.name,
            onChange: contactFormSchema.shape.name,
          }}
        >
          {(field) => {
            const errorMessage = getErrorMessage(field.state.meta.errors[0]);

            return (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.form.name}
                </label>
                <Input
                  id="name"
                  name={field.name}
                  type="text"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={t.form.namePlaceholder}
                  className="w-full bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className="mt-2 text-sm text-destructive">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            );
          }}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onBlur: contactFormSchema.shape.email,
            onChange: contactFormSchema.shape.email,
          }}
        >
          {(field) => {
            const errorMessage = getErrorMessage(field.state.meta.errors[0]);

            return (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.form.email}
                </label>
                <Input
                  id="email"
                  name={field.name}
                  type="email"
                  required
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={t.form.emailPlaceholder}
                  className="w-full bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
                />
                {field.state.meta.isTouched && errorMessage ? (
                  <p className="mt-2 text-sm text-destructive">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            );
          }}
        </form.Field>
      </div>

      <form.Field
        name="message"
        validators={{
          onBlur: contactFormSchema.shape.message,
          onChange: contactFormSchema.shape.message,
        }}
      >
        {(field) => {
          const errorMessage = getErrorMessage(field.state.meta.errors[0]);

          return (
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t.form.message}
              </label>
              <Textarea
                id="message"
                name={field.name}
                required
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={t.form.messagePlaceholder}
                rows={5}
                className="w-full resize-none bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
              />
              {field.state.meta.isTouched && errorMessage ? (
                <p className="mt-2 text-sm text-destructive">{errorMessage}</p>
              ) : null}
            </div>
          );
        }}
      </form.Field>

      <form.Subscribe selector={(state) => [state.isSubmitting]}>
        {([isSubmitting]) => (
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t.form.sending}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t.form.send}
              </>
            )}
          </button>
        )}
      </form.Subscribe>
    </motion.form>
  );
}
