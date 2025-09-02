import envConfig from "./src/config/envConfig.js";
import app from "./src/index.js";
import connectDb from "./src/config/connectDb.js";

const startServer = () => {
  // connect Db 
  connectDb();
  const port = envConfig.port;
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
  })
}
startServer();