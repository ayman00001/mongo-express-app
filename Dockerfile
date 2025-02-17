# Use the latest node version as our base image
FROM node:22

# Goes to the app directory(like cd terminal command)
RUN mkdir /app

#set the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Install node dependencies
RUN npm install

#Copy the rest of our app into the container
COPY . .

#Expose the port so our computer can access it
EXPOSE 3000

#Run the app
CMD ["npm", "start"]