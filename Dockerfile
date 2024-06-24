
FROM node:18.17-alpine3.18 as dev
WORKDIR /app
COPY package.json ./
COPY typeorm.config.ts ./
RUN yarn install
CMD ["sh", "-c", "yarn run migration:run && yarn start:dev"]

FROM node:18.17-alpine3.18 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

FROM node:18.17-alpine3.18 as builder
WORKDIR /app
COPY --from=dev-deps app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

FROM node:18.17-alpine3.18 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --omit=dev --frozen-lockfile

FROM node:18.17-alpine3.18 as prod
EXPOSE 3000
WORKDIR /app
COPY --from=prod-deps app/node_modules ./node_modules
COPY --from=builder app/dist ./dist
CMD [ "node", "dist/index.js" ]