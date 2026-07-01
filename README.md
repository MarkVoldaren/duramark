# Duramark Apps

Simple internal app selector page for Duramark Technologies, currently linking to the Daily Production Report app.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server on port 3010:

```bash
npm run dev
```

Open `http://localhost:3010`.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Docker

Build and run with Docker Compose:

```bash
docker compose up -d --build
```

The container serves the app internally on `http://localhost:3010`.

Stop the container:

```bash
docker compose down
```

## DigitalOcean Droplet Deployment Notes

1. SSH into the Droplet.
2. Clone this repository or pull the latest `main`.
3. From the project directory, run:

   ```bash
   docker compose up -d --build
   ```

4. Ensure DNS for `duramark.jays-apps.com` points to the Droplet.
5. Add the included `Caddyfile` site block to the Droplet Caddy configuration:

   ```caddyfile
   duramark.jays-apps.com {
     reverse_proxy localhost:3010
   }
   ```

6. Reload Caddy:

   ```bash
   sudo systemctl reload caddy
   ```

After deployment, visit `https://duramark.jays-apps.com`.

## Routes

- `/` - Duramark Apps selector
- `/daily-production/` - Daily Production Report app path

## Logo Replacement

The current header uses a CSS/text placeholder for the Duramark Technologies logo. When the real logo file is available, add it under `src/assets/` and replace the `LogoMark` markup in `src/App.jsx` with an image while keeping the existing header layout styles.
