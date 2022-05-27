import mongoose, { Schema, Document } from "mongoose";

interface TaskProps extends Document {
  name: string;
  description: string;
  type: string;
  status: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new mongoose.Schema({
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

export const Task = mongoose.model<TaskProps>("Task", TaskSchema);
