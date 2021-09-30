# Install dependencies
FROM node:lts as dependencies
WORKDIR /Interware_landing
COPY package*.json ./
RUN npm install

# Build production app
FROM node:lts as builder
WORKDIR /Interware_landing
COPY . .
COPY --from=dependencies /Interware_landing/node_modules ./node_modules
RUN npm run build

#Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Config prod App for run
FROM node:lts as runner
WORKDIR /Interware_landing
# If you are using a custom next.config.js file, uncomment the follow line.
COPY --from=builder /Interware_landing/server.js ./
COPY --from=builder /Interware_landing/next.config.js ./
COPY --from=builder /Interware_landing/public ./public
COPY --from=builder /Interware_landing/.next ./.next
COPY --from=builder /Interware_landing/node_modules ./node_modules
COPY --from=builder /Interware_landing/package.json ./package.json

#Last Step
EXPOSE 3000
CMD [ "node",  "server" ]

# Build
# docker build --network host -t iw_front_image .
# docker run --network host --name iw-front-container -d iw_front_image

# Delte
# docker container rm iw-front-container -f
# docker image rm -f iw_front_image 000000 000000