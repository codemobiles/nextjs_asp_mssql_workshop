# NextJS Deployment

### Normal

- yarn build
- yarn start

### Standalone

- update nextjs.config.ts - output: "standalone",
- yarn build
- copy .next/standalone to server
- node standalone/server.js
