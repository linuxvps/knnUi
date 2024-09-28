FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Expose the port that Angular serves on (default is 4200)
EXPOSE 4200

# Use the locally installed ng from node_modules
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
