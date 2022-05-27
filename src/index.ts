import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "module-alias/register";

import { taskRouter } from "@routes/tasks/tasks";

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
const DB = process.env.DATABASE || "";

mongoose.connect(DB);

app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
