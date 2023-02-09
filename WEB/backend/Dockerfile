FROM node:16.17 as build-stage

WORKDIR /app

# installer les dependences
COPY package*.json ./
RUN npm ci 


# Bundle app source
COPY . .


RUN apt update && apt install -y nano
EXPOSE 3001
CMD ["npm", "run", "start"]