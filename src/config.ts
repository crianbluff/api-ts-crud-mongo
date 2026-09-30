import 'dotenv/config';

export const config = {
  PORT: process.env.PORT,
  HOST_DB: process.env.HOST_DB,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
}