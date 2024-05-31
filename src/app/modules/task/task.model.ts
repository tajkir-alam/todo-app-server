import { Schema, model } from "mongoose";
import { TTask } from "./task.interface";

const taskSchema = new Schema<TTask>({
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  deadLines: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
});

export const Task = model<TTask>("task", taskSchema);
