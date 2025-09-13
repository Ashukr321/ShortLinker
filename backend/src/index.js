import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import cors from 'cors';
import urlRoutes from './modules/url/url.routes.js'

// create express app
const app = express();

// app configuration
// enable cors 
app.use(cors({
  origin: "*"
}))
// parse body data 
app.use(express.json());

// baseurl 
const baseUrl = "/api/v1"
//routes
app.use(baseUrl, urlRoutes)


// default route 
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the URL Shortener API 🚀",
    endpoints: {
      "POST /api/v1/shorten": "Create a shortened URL",
      "GET /:shortCode": "Redirect to original URL using shortCode",
    },
  });
});

app.all(/(.*)/, (req, res) => {
  res.status(404).json({ message: "Invalid Request URL!" });
});

// globalError Handler  middleware
app.use(globalErrorHandler);

// export app 
export default app;
