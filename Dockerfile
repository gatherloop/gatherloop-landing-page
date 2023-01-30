FROM node:16

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "start", "--", "-p", "5001"]