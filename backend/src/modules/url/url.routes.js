import express from 'express'
const router = express.Router();
import { shortUrl, redirectToOriginalUrl } from './url.controllers.js';

// routes 
router.get("/:shortCode", redirectToOriginalUrl);
router.post("/shorten", shortUrl);


export default router;