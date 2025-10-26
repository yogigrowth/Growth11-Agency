# ---- Stage 1: Builder ----
FROM node:18 AS builder
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install ALL dependencies for build
RUN npm install

# Copy all project files
COPY . .

# Build frontend + backend
RUN npm run build

# ---- Stage 2: Runtime ----
FROM node:18
WORKDIR /app

# Copy build output from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Copy installed node_modules from the builder so any packages that ended up
# in the server bundle (including dev deps like vite if accidentally
# referenced) are present at runtime. This keeps the runtime image working
# when the server bundle contains imports that require devDependencies.
COPY --from=builder /app/node_modules ./node_modules

# Set NODE_ENV
ENV NODE_ENV=production

# Expose port
EXPOSE 5000
# Install pm2 (process manager) globally and use pm2-runtime as the container entry
RUN npm install -g pm2@5.2.0 --no-progress --silent

# Copy PM2 ecosystem file
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js

# Start the server with pm2-runtime (keeps PID 1 in the container and forwards logs)
CMD ["pm2-runtime", "ecosystem.config.js"]
