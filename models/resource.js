import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const resourceSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Resource = models.Resource || model("Resource", resourceSchema);

export default Resource;