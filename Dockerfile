# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["node", "dist/server.js"]
