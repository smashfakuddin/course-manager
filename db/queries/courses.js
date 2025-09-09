"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";
import User from "@/models/user";

export async function getAllAvailableCourses(user) {
  await dbConnect();
  const { role, semester } = user;
  if (role === "teacher") {
    const courses = await Course.find({}).populate({
      path: "picked",
      select: "name email",
    });
    return courses;
  } else if (role === "student") {
    const courses = await Course.find({ semester: semester }).populate({
      path: "picked",
      select: "name email",
    }).lean();
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
