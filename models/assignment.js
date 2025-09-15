import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const assignmentSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    submissionDate: { type: Date, require: true },
  },
  { timestamps: true }
);

const Assignment = models.Assignment || model("Assignment", assignmentSchema);

export default Assignment;
