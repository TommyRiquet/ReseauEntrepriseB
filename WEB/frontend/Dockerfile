FROM node:16.17 as build-stage

WORKDIR /app

# installer les dependences
COPY package*.json ./
RUN npm ci 


# Bundle app source
COPY . .

RUN npm run build


FROM nginx as production-stage
RUN apt update && apt install -y nano
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]