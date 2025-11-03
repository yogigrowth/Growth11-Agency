# ---- Stage 1: Builder ----
FROM node:18 AS builder
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install only what's needed for building
RUN npm ci --omit=optional

# Copy source files
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
RUN npm ci --only=production --omit=optional

# Set environment
ENV NODE_ENV=production
EXPOSE 5000

# Install PM2 for process management
RUN npm install -g pm2@5.2.0 --no-progress --silent

# Copy PM2 ecosystem file
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js

# Start the server with pm2-runtime (keeps PID 1 in the container and forwards logs)
CMD ["pm2-runtime", "ecosystem.config.js"]
