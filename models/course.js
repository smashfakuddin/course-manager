// models/Course.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const courseSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    event: { type: [String], default: [] }, // array of event names or IDs
    enrolled: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    picked: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // picked by teacher
    resource: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Resource",
      default: [],
    }, // array of resource links or IDs
  },
  { timestamps: true }
);

const Course = models.Course || model("Course", courseSchema);

export default Course;
