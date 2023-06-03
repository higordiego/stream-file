FROM node:lts-alpine
WORKDIR /usr/stream
COPY . .
RUN npm install
RUN npm run build

# optional environment (if run in docker-compose)
ENV AWS_REGION="sa-east-1"
ENV AWS_ACCESS_KEY_ID=""
ENV AWS_SECRET_ACCESS_KEY=""
ENV AWS_BUCKET_S3=""

CMD ["node", "./dist/index.js"]