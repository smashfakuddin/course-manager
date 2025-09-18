// models/Course.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const courseSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    overview: { type: String, default: "" },
    event: { type: [String], default: [] }, // array of event names or IDs
    enrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    picked: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // picked by teacher
    outline: [{ type: mongoose.Schema.Types.ObjectId, ref: "Outline" }],
    semester: { type: Number, required: true },
    credits: { type: Number, required: true },
    assignment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
  },
  { timestamps: true }
);

const Course = models.Course || model("Course", courseSchema);

export default Course;
