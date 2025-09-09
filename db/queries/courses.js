"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";

export async function getAllAvailableCourses(user) {
  await dbConnect();
  const { role, semester } = user;
  if (role === "teacher") {
    const courses = await Course.find({});
    return courses;
  } else if (role === "student") {
    const courses = await Course.find({ semester: semester });
    return courses;
  }

  return [];
}

// app/db/queries/courses.ts

export async function createCourse(data) {
  await dbConnect();
  const { name } = data;
  const existing = await Course.findOne({ name });
  if (existing) {
    throw new Error("Course with this name already exists");
  }

  await Course.create(data);

  revalidatePath("/dashboard");

  return { message: "Course created successfully" };
}

export async function deleteCourse(courseId) {
  await dbConnect();
  await Course.findByIdAndDelete(courseId);

  revalidatePath("/dashboard");

  return { message: "Course deleted successfully" };
}
