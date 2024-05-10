FROM node:18

WORKDIR /WB

COPY package*.json ./

RUN npm install

#COPY . .

#COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]