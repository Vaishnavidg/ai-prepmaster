# AI PrepMaster

AI-powered interview preparation workspace for turning study material into progressive practice and interview readiness.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ai-prepmaster/src/App.tsx` — product routes, local mock data, and interaction flow
- `artifacts/ai-prepmaster/src/index.css` — PrepMaster visual system and responsive styles
- `artifacts/ai-prepmaster/public/manifest.webmanifest` — PWA metadata
- `artifacts/ai-prepmaster/public/sw.js` — service-worker-ready cache shell

## Architecture decisions

- The first MVP is intentionally frontend-only, with local mock services and state so the backend can be introduced later without changing the user journey.
- The training progression is modeled as one coherent path from topic selection through assessments, interview feedback, mastery, and progress analytics.
- The interface uses a responsive desktop sidebar plus mobile drawer and bottom navigation rather than shrinking the desktop layout.

## Product

Candidates can select technical subjects and topics, add study resources, move through basic/intermediate/advanced assessments, practice an AI interview, and review readiness analytics.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The web artifact is served at the root preview path and owns the `artifacts/ai-prepmaster: web` workflow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
