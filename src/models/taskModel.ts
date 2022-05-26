import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A task must have a name"],
  },
  description: {
    type: String,
    required: [true, "A task must have a name"],
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
  priority: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Task = mongoose.model("Task", TaskSchema);
