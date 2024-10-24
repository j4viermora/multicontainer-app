# backend/Dockerfile
FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ejecuta el build antes de iniciar la aplicación
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]
