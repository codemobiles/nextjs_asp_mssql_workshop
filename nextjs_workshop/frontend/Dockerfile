
# Standalone
FROM node:18.17.0-alpine as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN cp -R public .next/standalone/
RUN cp -R .next/static .next/standalone/.next/

FROM node:18.17.0-alpine as deployer
WORKDIR /app

COPY --from=builder /app/.next/standalone/ .
CMD ["node", "server.js"]


# Normal
# FROM node:18.17.0-alpine as builder

# WORKDIR /app
# COPY . .

# RUN npm install
# RUN npm run build
# CMD ["npm", "run", "start"]