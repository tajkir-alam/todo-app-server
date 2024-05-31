import { RequestHandler } from "express";
import httpStatus from "http-status";

const notFound: RequestHandler = (req, res) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Not Found",
    error: "",
  });
};

export default notFound;
