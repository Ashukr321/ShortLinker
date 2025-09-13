
import { nanoid } from 'nanoid';
import Url from './url.model.js';
import createError from 'http-errors';
const shortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      const err = createError(404, "originalUrl is Required")
      return next(err);
    }
    // create  shortid 
    const shortId = nanoid(8);
    const short_url = `http://localhost:8080/api/v1/${shortId}`
    // create newUrl 
    const newUrl = await Url.create({
      originalUrl: originalUrl,
      shortCode: shortId,
      shortUrl: short_url
    })
    return res.status(201).json({
      message: "Short URL created successfully",
      data: short_url,
    });
  } catch (error) {
    const err = createError(500, error.message || "Internal Server Error");
    next(err);
  }
}

// Redirect to Original Url 
const redirectToOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    if (!shortCode) {
      const err = createError(404, "shortCode is Required");
      return next(err);
    }

    const urlDoc = await Url.findOne({ shortCode });
    if (!urlDoc) {
      return next(createError(404, "Short URL not found"));
    }
    return res.redirect(urlDoc.originalUrl);
  } catch (error) {
    return next(createError(500, error.message || "Internal Server Error"));
  }
}

export { shortUrl, redirectToOriginalUrl };