FROM node:20 AS build

# install simple http server for serving static content
RUN npm install -g http-server

WORKDIR /app

COPY package*.json .

RUN npm run build

COPY . .
# RUN npm run build --prod
EXPOSE 4200
CMD [ "http-server", "dist" ]
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# CMD ["nginx", "-g", "daemon off;"]
