FROM node:latest
WORKDIR /front
COPY package*.json /front/
RUN npm install

COPY ./ /front/
CMD ["npm", "start"]