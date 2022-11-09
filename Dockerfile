FROM node:14
WORKDIR app
COPY dist/ dist/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY src/app.graphql dist/app.graphql
RUN yarn
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV PORT=8000
CMD [ "node", "dist/main.js" ]
