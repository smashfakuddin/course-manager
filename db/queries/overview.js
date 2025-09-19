"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";

export async function addOrUpdateOverview(courseId, overview) {
  await dbConnect();
  try {
    if (!courseId) {
      return { success: false, message: "Course ID and overview are required" };
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return { success: false, message: "Course not found" };
    }

    course.overview = overview; // 👈 update or add overview
    await course.save();

    return { success: true, message: "Course overview updated successfully" };
  } catch (error) {
    console.error("Error updating course overview:", error);
    return { success: false, message: "Something went wrong" };
  }
}
