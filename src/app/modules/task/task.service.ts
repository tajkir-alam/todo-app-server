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

const deleteTaskFromDB = async (id: string) => {
  const deleteTask = await TaskModel.findByIdAndDelete({ _id: id });
  return deleteTask;
};

const updateTaskIntoDB = async (id: string, payload: Partial<TTask>) => {
  const updateTask = TaskModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return updateTask;
};

export const TaskServices = {
  createTaskIntoDB,
  getTasksFromDB,
  deleteTaskFromDB,
  updateTaskIntoDB,
};
