import express from "express";
import cors from 'cors';
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

export default app;
