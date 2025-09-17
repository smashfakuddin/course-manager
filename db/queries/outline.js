"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import Outline from "@/models/outline";

export async function addOutlineByCourse(data) {
  await dbConnect();
  if (!data) {
    return { success: false, message: "No Data Given" };
  }
  const { title, description, courseId } = data;

  try {
    const outline = await Outline.create({ title, description });
    console.log("outline", outline);
    const course = await Course.findById(courseId);
    course.outline.push(outline._id);

    await course.save();

    return { success: true, message: "Outline Saved Successfully" };
  } catch (error) {
    return { success: true, message: error?.message };
  }
}
