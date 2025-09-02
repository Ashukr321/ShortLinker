import envConfig from "./envConfig.js";
import mongoose from "mongoose";



const connectDb = async () => {
  try {
    const db = await mongoose.connect(envConfig.mong_uri, {
      dbName: envConfig.db_name,
      maxPoolSize: 10
    })
    console.log(`✅ Database connected successfully ${db.connection.host}`)
  } catch (error) {
    console.log(`❌ Failed to connect Database`)
  }
}

// export connectDb 
export default connectDb;