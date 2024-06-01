import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskServices } from "./task.service";

const createTask = catchAsync(async (req, res) => {
  const result = await TaskServices.createTaskIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task created successfully",
    data: result,
  });
});

const getTasks = catchAsync(async (req, res) => {
  const result = await TaskServices.getTasksFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tasks fetched successfully",
    data: result,
  });
});

const deleteTask = catchAsync(async (req, res) => {
  const result = await TaskServices.deleteTaskFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tasks deleted successfully",
    data: result,
  });
});

const updateTask = catchAsync(async (req, res) => {
  const result = await TaskServices.updateTaskIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task updated successfully",
    data: result,
  });
});

export const TaskControllers = {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
};
