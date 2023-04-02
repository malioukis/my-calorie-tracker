import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-bwye07s-shard-00-00.zk8tlr2.mongodb.net:27017,ac-bwye07s-shard-00-01.zk8tlr2.mongodb.net:27017,ac-bwye07s-shard-00-02.zk8tlr2.mongodb.net:27017/?ssl=true&replicaSet=atlas-z5zkzp-shard-0`;
// TODO: ADD MONGO LOCALHOST
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1312;

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
