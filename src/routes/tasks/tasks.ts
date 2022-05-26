import express from "express";

const router = express.Router();

const tasks = [{ name: "Add backend", description: "" }];

router.get("/", (req, res) => {
  console.log(tasks);
  res.send(tasks);
});

router.post("/", (req, res) => {
  res.send("Task post route");
});

export default router;
