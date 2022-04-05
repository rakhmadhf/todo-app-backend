FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY src ./src
CMD ["node", "src/index.js"]
EXPOSE 3000
