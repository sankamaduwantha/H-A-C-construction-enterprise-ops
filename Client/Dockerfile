# provide operating system and node.js runtime environment application execute
FROM node:22-alpine

# define working directory for the application
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# package*.json - source files , ./ - destination directory
# *- wildcard character to match both package.json and package-lock.json files
COPY package*.json ./

# install dependencies defined in package.json
RUN npm install

# copy all files from the current directory to the working directory in the container
COPY . .

# expose port 4000 for the application to listen on
EXPOSE 4000

# define the command to run the application when the container starts
CMD ["npm", "run", "dev"]