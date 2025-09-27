"use server"

import { dbConnect } from "@/db/dbconnect.js";
import Comment from "../../models/comment";
import  Course  from "@/models/course";
import { revalidatePath } from "next/cache";

export async function createComment(title, commentBy, courseId) {
  await dbConnect();

  try {
    const comment =await Comment.create({ title, commentBy });
    const course = await Course.findById(courseId);
    if (!course) {
      return { success: false, message: "Course Not found" };
    }
    course.comment.push(comment._id);

    await course.save();

    revalidatePath(`/courses/[courseid]`);
    return { success: true, message: "Comment Added Successfully" };
  } catch (error) {
    console.log(error)
      return { success: false, message: error?.message };

  }
}
