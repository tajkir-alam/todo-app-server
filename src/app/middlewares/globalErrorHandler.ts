import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = 500;
  const message = "something went wrong";

  return res.status(status).json({
    success: false,
    message: error.message || message,
    error,
  });
};

export default globalErrorHandler;
