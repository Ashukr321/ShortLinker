import createError from 'http-errors';

const globalErrorHandler = (err, req, res, next) => {
  if (!err.status) {
    const err = createError(500, "Invalid Server Error!");
    return next(err);
  }
  // send response 
  return res.status(err.status).json({
    success: false,
    message: err.message || "Something Went Wrong!"
  })
}

export default globalErrorHandler;