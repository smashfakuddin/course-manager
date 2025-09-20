import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const assignmentSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    submissionDate: { type: Date, require: true },
    submission: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Assignment = models.Assignment || model("Assignment", assignmentSchema);

export default Assignment;
