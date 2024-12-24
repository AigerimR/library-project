# Use official Node.js image
FROM node:18
# Set working directory
WORKDIR /app

COPY package*.json ./

# Install dependencies
#COPY package.json package-lock.json ./
RUN npm install
RUN #npm install -g nuxt
#ENV PATH=/app/node_modules/.bin:$PATH

# Copy the rest of the application
COPY . .

# Expose the port that Nuxt will run on
EXPOSE 3000
#ENV PATH=/app/node_modules/.bin:$PATH

# Build the Nuxt app for production
RUN ["npm", "run", "build"]

# Command to start the Nuxt app
CMD ["npm", "run", "dev"]
