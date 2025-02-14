FROM node:22.11.0
WORKDIR /app
COPY package*.json ./
COPY . .
#COPY .env .env
RUN npm install
#RUN np, install --only-production
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]
#CMD ["node", "src/app.js"]