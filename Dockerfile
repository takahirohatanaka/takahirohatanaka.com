FROM node:22-slim

WORKDIR /app

RUN corepack enable && corepack prepare yarn@1 --activate

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
