FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 5050
CMD [ "npm", "start" ]