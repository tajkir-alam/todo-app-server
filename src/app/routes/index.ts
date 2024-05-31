import { Router } from "express";
import { TaskRoutes } from "../modules/task/task.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/tasks",
    route: TaskRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
