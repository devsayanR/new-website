# Stage 1: Install dependencies and build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy application source code
COPY . ./

# Build Prisma client and Next.js app
RUN npm run build

# Stage 2: Create a minimal production image
FROM node:18-alpine AS runner

# Install runtime dependencies only
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]
