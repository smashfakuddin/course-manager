import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const commentSchema = new Schema(
  {
    title: { type: String, required: true },
    commentBy: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = models.Comment ?? model("Comment", commentSchema);

export default Comment;
