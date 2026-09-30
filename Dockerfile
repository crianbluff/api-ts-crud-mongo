FROM node:18.20.8-alpine AS builder

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . . 
RUN npm run build

# stage 2
FROM node:18.20.8-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

USER node

EXPOSE 3007

CMD ["npm", "start"]

