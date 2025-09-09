"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";

export async function getPickedCoursesByUserId(userId) {
  await dbConnect();

  const pickedCourses = await Course.find({ picked: userId });

  return pickedCourses ? pickedCourses : [];
}

export async function pickCourse(courseId, userId) {
  await dbConnect();

  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  if (course.picked) {
    return { success: false, message: "This course has already been picked" };
  }


  course.picked = userId;
  await course.save();
  revalidatePath("/dashboard");
  return { success: true, message: "Course picked successfully" };
}

export async function unpickCourse(courseId, userId) {
  await dbConnect();

  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  if (course.picked?.toString() !== userId) {
    return { success: false, message: "You haven't picked this course" };
  }

  course.picked = null;
  await course.save();

  revalidatePath('/dashboard')
  return { success: true, message: "Course unpicked successfully" };
}
