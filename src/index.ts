import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import tasksRoutes from "./routes/tasks/tasks";

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
const DB = process.env.DATABASE || "";

mongoose.connect(DB);

app.use("/tasks", tasksRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
