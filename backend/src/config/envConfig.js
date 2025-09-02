import { config } from "dotenv";
config();


const envConfig = {
  port: process.env.PORT,
  mong_uri: process.env.MONGO_URI,
  db_name: process.env.DB_NAME
}

export default Object.freeze(envConfig);