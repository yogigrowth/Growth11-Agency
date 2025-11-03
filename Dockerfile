# ---- Stage 1: Builder ----
FROM node:18 AS builder
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Use npm install (not ci) since there's no lockfile
RUN npm install --omit=optional

# Copy all project files
COPY . .

# Build project
RUN npm run build

# ---- Stage 2: Runtime ----
FROM node:18-slim
WORKDIR /app

# Copy only what's needed at runtime
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production --omit=optional

# Environment and port
ENV NODE_ENV=production
EXPOSE 5000

# PM2 for process management
RUN npm install -g pm2@5.2.0 --no-progress --silent

# Copy PM2 ecosystem config
COPY --from=builder /app/ecosystem.config.cjs ./

# Start the app
CMD ["pm2-runtime", "ecosystem.config.cjs"]
