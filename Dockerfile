FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
# Bundle app source
ARG HOST
ENV HOST $HOST

ARG REACT_APP_HOST
ENV REACT_APP_HOST $REACT_APP_HOST

RUN npm ci

COPY . .
RUN npm install -g serve

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "prod"]
