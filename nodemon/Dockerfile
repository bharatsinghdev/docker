FROM node:12-alpine
WORKDIR /usr/new

COPY package*.json ./


COPY . .

RUN npm install
EXPOSE 5000 
CMD ["npm","start"]