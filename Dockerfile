FROM node:16

WORKDIR /app

COPY . .
RUN yarn
RUN yarn build

CMD ["npm", "start"]