import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskServices } from "./task.service";

const createTask = catchAsync(async (req, res) => {
  const result = await TaskServices.createTasksIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task created successfully",
    data: result,
  });
});

export const TaskControllers = {
  createTask,
};
