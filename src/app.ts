import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(
    `
    <h1 style="text-align: center;">API Documentation</h1>
    <ul style="list-style: decimal; text-align: center;">
      <li>
        <a target="_blank" href="https://titans-todo-app-backend.vercel.app/api/v1/tasks">Get / Post Tasks</a>
      </li>
      <br />
      <li>
        <a target="_blank" href="https://titans-todo-app-backend.vercel.app/api/v1/tasks/:id">Update / Delete Task</a>
      </li>
    </ul>
    `
  );
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
