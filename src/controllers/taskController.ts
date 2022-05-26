import { Request, Response } from "express";

import { Task } from "@models/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const task = Task.create(req.body);

    res.status(201).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
