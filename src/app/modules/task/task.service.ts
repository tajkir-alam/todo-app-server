import { TTask } from "./task.interface";
import { TaskModel } from "./task.model";

const createTaskIntoDB = async (payload: TTask) => {
  const createTask = await TaskModel.create(payload);
  return createTask;
};

const getTasksFromDB = async () => {
  const getTask = await TaskModel.find();
  return getTask;
};

export const TaskServices = {
  createTaskIntoDB,
  getTasksFromDB,
};
