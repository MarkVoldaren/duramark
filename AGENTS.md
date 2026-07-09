# AGENTS.md

## Project Purpose

This repository contains the Duramark Apps landing page for `duramark.jays-apps.com`. It is an internal selector for Duramark Technologies apps and currently includes cards for Daily Production Report and Scheduler.

## Tech Stack

- React
- Vite
- Plain CSS
- Docker Compose serving the built app on host port 3010

## Future Codex Guidance

- Keep the page simple, clean, and internal-tool focused.
- Do not add sidebars, search, user menus, or footer copyright unless the user explicitly asks.
- Keep the header logo implementation easy to replace with a real image asset.
- App cards should remain centered and readable on desktop and mobile.
- Prefer small, direct React components and plain CSS over heavy UI frameworks.
- Keep app cards linking to their deployed paths unless the user changes those paths.
- Daily Production Report currently links to `/daily-production/`.
- Scheduler currently links to `/scheduler/`.
- Verify changes with `npm run build` before handing work back.

## Deployment

The intended deployment target is a DigitalOcean Droplet with Caddy reverse proxying `duramark.jays-apps.com` to `localhost:3010`.
