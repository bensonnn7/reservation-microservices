FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN which yarn || npm install -g yarn

RUN yarn install

COPY . .

RUN yarn build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /user/src/app

COPY package.json ./

COPY yarn.lock ./

RUN which yarn || npm install -g yarn --force

RUN yarn install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/reservations/main"]