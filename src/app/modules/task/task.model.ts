import { Schema, model } from "mongoose";
import { TTask } from "./task.interface";

const taskSchema = new Schema<TTask>(
  {
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
      enum: {
        values: ["completed", "in-completed"],
        message: "You have to select completed or in-completed",
      },
      required: true,
    },
    deadLines: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: {
        values: ["low", "medium", "high"],
        message: "You have select low or medium or either high",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<TTask>("task", taskSchema);
