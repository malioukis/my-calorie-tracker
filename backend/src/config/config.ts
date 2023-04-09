import dotenv from 'dotenv';

// Loads .env file contents into process.env.
dotenv.config();

// Server
//Get port as a number
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1312;

// Database
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-bwye07s-shard-00-00.zk8tlr2.mongodb.net:27017,ac-bwye07s-shard-00-01.zk8tlr2.mongodb.net:27017,ac-bwye07s-shard-00-02.zk8tlr2.mongodb.net:27017/?ssl=true&replicaSet=atlas-z5zkzp-shard-0`;
// TODO: ADD MONGO LOCALHOST

// JWT
const TOKEN_ISSUER = process.env.TOKEN_ISSUER || 'malioukis';
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'ThisIsASecret';
const TOKEN_EXPIRATION_SECONDS = process.env.TOKEN_EXPIRATION || 2 * (60 * 60); // 2 hours in seconds

// Exports
export const config = {
  server: {
    port: SERVER_PORT,
  },
  mongo: {
    url: MONGO_URL,
    database: MONGO_DATABASE,
  },
  token: {
    issuer: TOKEN_ISSUER,
    secret: TOKEN_SECRET,
    expirationInSeconds: TOKEN_EXPIRATION_SECONDS,
  },
};
