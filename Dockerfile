FROM node:18

LABEL author=Ezmar

WORKDIR /WB


COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli
RUN npm install --save-dev cross-env

#USER node

#COPY . .

#RUN npm run build

#COPY ./dist ./dist
EXPOSE 7000

CMD ["npm", "run", "start:prod"]



