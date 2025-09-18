"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import Outline from "@/models/outline";
import { revalidatePath } from "next/cache";

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

    revalidatePath(`/courses/[courseid]`);

    return { success: true, message: "Outline Saved Successfully" };
  } catch (error) {
    return { success: true, message: error?.message };
  }
}

export async function deleteOutline(outlineId, courseId) {
  await dbConnect();
  try {
    // 1. Delete the outline document
    await Outline.findByIdAndDelete(outlineId);

    // 2. Remove its reference from the course
    const course = await Course.findById(courseId);
    if (!course) {
      return { success: false, message: "Course not found" };
    }

    course.outline = course.outline.filter(
      (id) => id.toString() !== outlineId.toString()
    );

    // 3. Save updated course
    await course.save();

    // 4. Revalidate the page
    revalidatePath(`/courses/[courseid]`);

    return { success: true, message: "Outline deleted successfully" };
  } catch (error) {
    return {
      success: false,
      message: error?.message || "Something went wrong",
    };
  }
}
