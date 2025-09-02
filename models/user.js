import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["teacher", "student", "admin"],
      default: "user",
    },
    semester: { type: Number, required: true },
    courses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Course", default: [] },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User ?? mongoose.model("User", userSchema);
