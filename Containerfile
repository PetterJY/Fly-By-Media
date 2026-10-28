# ---- Stage 1: build the React app (react-scripts runs Tailwind via PostCSS) ----
FROM docker.io/library/node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Stage 2: serve the static build ----
FROM docker.io/library/node:22-alpine
WORKDIR /app

RUN npm install -g serve@14

COPY --from=build /app/build ./build

USER node
EXPOSE 3000

# -s = single-page app mode, so React Router paths fall back to index.html
CMD ["serve", "-s", "build", "-l", "3000"]
