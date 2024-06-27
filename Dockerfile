FROM node:18-alpine3.18

FROM node:18-alpine3.18

# Entry point
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Create app directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Install PM2 globally
RUN npm install pm2 -g

# Install app dependencies
COPY package.json ./

RUN pnpm install

# Bundle app source
COPY . .

# Build the app
RUN pnpm run build

# Expose the port the app runs Strapi on 1337
EXPOSE 1337

# Run the app
# Run the app using the entrypoint script
CMD ["docker-entrypoint.sh"]
