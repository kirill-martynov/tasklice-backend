import { Request, Response } from "express";

import { Task } from "@models/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
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

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: { tasks },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
