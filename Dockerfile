# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app uses (adjust if necessary)
EXPOSE 3000

# Use the dev command if that is how you run your app locally
CMD ["npm", "run", "dev"]
