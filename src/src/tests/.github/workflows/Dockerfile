# Stage 1: Dependencias
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Producción (Ligera)
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "src/server.js"]
