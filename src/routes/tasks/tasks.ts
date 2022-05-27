import express from "express";

import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "@controllers/taskController";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export { router as taskRouter };
