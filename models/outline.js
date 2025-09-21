import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const outlineSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    resource: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Resource",
      default: [],
    },
  },
  { timestamps: true }
);

const Outline = models.Outline ?? model("Outline", outlineSchema);

export default Outline;
