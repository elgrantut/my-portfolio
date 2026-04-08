<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Guidelines

## Build and Validation

- Use Bun for local commands in this repo: `bun dev`, `bun run lint`, `bun run build`.
- There is no test suite yet. For behavior changes, validate with lint, build when relevant, and targeted manual checks.
- If a task touches routing, metadata, route handlers, or other framework APIs, check the relevant Next 16 docs in `node_modules/next/dist/docs/` before editing.

## Architecture

- This is a Next.js App Router portfolio. The homepage in `src/app/page.tsx` composes section components from `src/components/sections/`.
- Project detail pages are generated from static content in `src/data/projects.ts` and rendered by `src/app/project/[slug]/page.tsx`.
- Shared UI primitives live in `src/components/ui/`. Feature components and section assemblies live in `src/components/`.
- Theme state is client-side in `src/context/ThemeContext.tsx` and is provided from `src/app/layout.tsx` along with Sonner toasts.
- The contact flow uses Zod schemas in `src/lib/`, TanStack Form in `src/components/ContactForm.tsx`, and a server route in `src/app/api/contact/route.ts`.

## Conventions

- Prefer updating existing data modules in `src/data/` for portfolio content instead of hardcoding repeated content in page components.
- Match the current styling approach: Tailwind CSS v4 utilities plus custom theme tokens and helpers in `src/app/globals.css`.
- Reuse the existing visual helpers when editing related UI. Classes such as `grain-overlay`, `grid-pattern`, and `glass` are part of the current design language.
- Use `motion/react` for animation work already present in the UI rather than adding a second animation library.
- Follow the existing form pattern: Zod validation schema in `src/lib/`, TanStack Form state in the component, and Sonner for user feedback.
- Keep Next.js 16 route code aligned with current signatures in the repo. Dynamic route `params` are promise-based here and should be awaited.
- `next/image` is configured with `images.unoptimized = true`; do not change that unless the asset strategy is intentionally being revisited.

## Contact Route Pitfalls

- Keep `new Resend(process.env.RESEND_API_KEY)` inside the request handler after environment checks. Do not move it to module scope.
- Preserve the current anti-abuse behavior in the contact flow: origin validation, the hidden `website` honeypot field, IP rate limiting, and duplicate submission cooldown.
- The rate limit and dedupe stores are in-memory `Map`s. They are acceptable for local or single-instance usage, but any scaling-related change should call out the need for shared storage.

## References

- See `README.md` for local setup and contact form environment variables.
- Use `src/components/ui/button.tsx`, `src/components/ContactForm.tsx`, `src/context/ThemeContext.tsx`, and `src/app/api/contact/route.ts` as pattern references before introducing new abstractions.
