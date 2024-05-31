import { TTask } from "./task.interface";
import { TaskModel } from "./task.model";

const createTasksIntoDB = async (payload: TTask) => {
  const createTask = await TaskModel.create(payload);
  return createTask;
};

export const TaskServices = {
  createTasksIntoDB,
};
