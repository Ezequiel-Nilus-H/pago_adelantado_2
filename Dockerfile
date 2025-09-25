# ---- Build Stage ----
    FROM node:20-alpine AS builder

    WORKDIR /app

    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm ci

    # Build the Vite app
    COPY . .
    RUN npm run build

    # ---- Production Stage ----
    FROM node:20-alpine AS production

    WORKDIR /app

    # Install a lightweight static file server
    RUN npm install -g serve

    # Copy only the built output
    COPY --from=builder /app/dist ./dist

    # Expose the desired port
    EXPOSE 4173

    # Serve the built app
    CMD ["serve", "dist", "--single", "--listen", "4173"]