import express from "express";

import { createTask, getTask, getTasks } from "@controllers/taskController";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask);

export { router as taskRouter };
