FROM node:20

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src/ src/

RUN npm install --production

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]