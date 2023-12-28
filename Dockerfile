FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
# Bundle app source
RUN npm ci

COPY . .
RUN npm install -g serve

RUN npm run build

EXPOSE 3000