import { z } from "zod";

const taskValidationSchema = z.object({
  body: z.object({
    taskTitle: z.string({
      invalid_type_error: "Title must be string",
    }),
    taskDescription: z.string({
      invalid_type_error: "Description must be string",
    }),
    status: z.enum(["completed", "in-completed"]),
    deadLines: z.date(),
    priority: z.enum(["low", "medium", "high"]),
  }),
});

export const taskValidations = {
  taskValidationSchema,
};
