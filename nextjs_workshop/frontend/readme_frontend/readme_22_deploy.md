# NextJS Deployment

### Normal

- yarn build
- yarn start

### Standalone

- update nextjs.config.ts - output: "standalone",
- yarn build && cp -R public .next/standalone/ && cp -R .next/static .next/standalone/.next/
- node .next/standalone/server.js
- you can copy .next/standalone folder to server for deployement
