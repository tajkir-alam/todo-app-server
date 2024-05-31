import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { taskValidations } from "./task.validation";
import { TaskControllers } from "./task.controller";

const router = Router();

router.post(
  "/create-task",
  validateRequest(taskValidations.taskValidationSchema),
  TaskControllers.createTask
);

export const TaskRoutes = router;
