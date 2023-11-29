# NextJS Deployment

### Normal

- yarn build
- yarn start

### Standalone

- update nextjs.config.ts - output: "standalone",

- (mac) yarn build && cp -R public .next/standalone/ && cp -R .next/static .next/standalone/.next/
- (win-1) yarn build
- (win-2) xcopy "./public" "./.next/standalone/public/" /e /i /y
- (win-3) xcopy "./.next/static" "./.next/standalone/.next/" /e /i /y
- node .next/standalone/server.js
- you can copy .next/standalone folder to server for deployement
