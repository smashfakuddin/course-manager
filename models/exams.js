import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const examSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    date: { type: Date, require: true },
    submission: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Exam = models.Exam ?? model("Exam", examSchema);

export default Exam;
