import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import cors from 'cors';


// create express app
const app = express();

// app configuration
// enable cors 
app.use(cors({
  origin: "*"
}))
// parse body 
app.use(express.json());

// baseurl 
const baseUrl = "/api/v1"
//routes

// 404 Handler (Not Found)
app.all(/(.*)/, (req, res) => {
  res.status(404).json({ message: "Invalid Request URL!" });
});

// globalError Handler  middleware
app.use(globalErrorHandler);

// export app 
export default app;
