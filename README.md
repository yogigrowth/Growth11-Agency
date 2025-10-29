# Growth11-Agency — Docker & Production Guide

This repo contains a Vite React client and an Express TypeScript server. Below are recommended commands to build and run the app in production using Docker and Docker Compose.

## Prepare production env
Create a `.env.production` (or use the provided `.env.production` template) and fill in the values. For Docker runs you can either copy it to `.env` or pass it explicitly with `--env-file`.

## Build and run with Docker
```powershell
# From repo root
npm run build
docker build -t growth11-agency:latest .
# Run the container with production env
docker run --rm --name growth11-app --env-file .env.production -p 5000:5000 growth11-agency:latest
```

## Using docker-compose
```powershell
# Build and run with compose (uses Dockerfile and .env.production)
cp .env.production .env
docker-compose up --build -d
# Tail logs
docker-compose logs -f app
```

## Manage with PM2 (inside container)
The image runs `pm2-runtime ecosystem.config.js` as PID 1. For local PM2 usage (not in Docker):
```powershell
npm run build
npm install -g pm2
pm2 start ecosystem.config.js
pm2 logs growth11-app
```

## Notes
- Keep separate env files for dev and production to avoid accidentally running the container in development mode.
- If you want the container to run a local MongoDB, uncomment the `mongo` service in `docker-compose.yml` and update `MONGODB_URI` to point to `mongodb://mongo:27017/<db>`.
- The server includes a `/health` endpoint used by Docker healthchecks. Consider adding a readiness probe that checks DB connectivity if you want the container considered healthy only after DB is reachable.

If you want, I can add a separate `docker-compose.dev.yml` for development with volumes and Vite HMR enabled.
