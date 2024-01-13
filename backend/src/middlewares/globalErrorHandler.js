const { ConflictError, BadRequestError } = require("../errors/errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof ConflictError || err instanceof BadRequestError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else if (err.name === "ValidationError") {
    // Mongoose-specific validation errors
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.errors[0].message });
  } else {
    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

module.exports = errorHandlerMiddleware;
