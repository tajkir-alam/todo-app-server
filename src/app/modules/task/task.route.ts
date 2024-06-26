import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { taskValidations } from "./task.validation";
import { TaskControllers } from "./task.controller";

const router = Router();

router.post(
  "/",
  validateRequest(taskValidations.taskValidationSchema),
  TaskControllers.createTask
);

router.get("/", TaskControllers.getTasks);

router.delete("/:id", TaskControllers.deleteTask);

router.patch("/:id", TaskControllers.updateTask);

export const TaskRoutes = router;
