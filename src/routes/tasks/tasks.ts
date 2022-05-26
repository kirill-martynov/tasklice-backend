import express from "express";

import { createTask } from "../../controllers/taskController";

const router = express.Router();

router.route("/").post(createTask);

export { router as taskRouter };
