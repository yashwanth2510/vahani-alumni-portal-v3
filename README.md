# Vahani Alumni Portal v3

A frontend redesign of the Vahani Alumni Portal, re-themed to match the official
[Vahani Scholarship Trust](https://www.vahanischolarship.com/) brand.

This is a **frontend-only** application. It reuses the existing backend `/api`
endpoints; no server changes are required.

## Tech stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- React Router v7
- Axios

## Theme

- **Primary:** coral `#ff6f52`
- **Accent:** earthy green `#6f9c76`
- **Neutrals:** clay brown + charcoal ink on a warm cream surface
- **Fonts:** Cormorant Garamond (display) + Open Sans (body)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://127.0.0.1:5173` and proxies `/api` requests to
`http://localhost:8000`.

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                    |
| `npm run build`     | Type-check and build for production (`dist`) |
| `npm run preview`   | Preview the production build                 |
| `npm run typecheck` | Run TypeScript type-checking only            |

## Project structure

```
src/
  api/            API client + shared types
  components/      Layout, navigation, and UI primitives
  context/        Auth and site-settings providers
  data/           Static content (gallery, itinerary, team)
  pages/          Public pages
  pages/portal/   Authenticated alumni/admin pages
```

## Routing

Public: `/`, `/vision-mission`, `/events`, `/gallery`, `/impact360`,
`/birthday-wall`, `/vijayibhawa`, `/login`.
Authenticated (under `/portal`): `/portal/alumni`, `/portal/jobs`,
`/portal/alumni-meet`, `/portal/support-fund`, `/portal/mentorship`,
`/portal/settings`.
