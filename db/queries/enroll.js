"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export async function getEnrolledCourseByUser(userId) {
  await dbConnect();
  const user = await User.findById(userId)
    .select("-password") // exclude password
    .populate({
      path: "courses", // populate courses array
      select: "name description semester", // include only relevant course fields
    });

  if (!user) {
    return { success: false, message: "User not found", courses: [] };
  }

  return { success: true, courses: user.courses };
}

export async function enrollCourse(courseId, userId) {
  await dbConnect();

  const course = await Course.findById(courseId);
  const user = await User.findById(userId);

  if (!course) {
    return { success: false, message: "Course not found" };
  }

  if (!user) {
    return { success: false, message: "User not found" };
  }

  // Prevent duplicate enrollment (handle ObjectId vs string properly)
  if (course.enrolled.some((id) => id.toString() === userId.toString())) {
    return { success: false, message: "Already enrolled" };
  }

  // Limit: 3 courses per semester
  if (user.courses.length >= 3) {
    return {
      success: false,
      message: "Can't enroll in more than 3 courses this semester",
    };
  }

  // Update both sides
  course.enrolled.push(userId);
  user.courses.push(courseId);

  try {
    await Promise.all([course.save(), user.save()]);
    revalidatePath("/dashboard");
    return { success: true, message: "Enrolled to the course successfully" };
  } catch (error) {
    console.error("Enrollment error:", error);
    return { success: false, message: "Something went wrong while enrolling" };
  }
}

export async function unenrollCourse(courseId, userId) {
  await dbConnect();

  const course = await Course.findById(courseId);
  const user = await User.findById(userId);

  if (!course) {
    return { success: false, message: "Course not found" };
  }

  if (!user) {
    return { success: false, message: "User not found" };
  }

  // Check if user is actually enrolled
  if (!course.enrolled.some((id) => id.toString() === userId.toString())) {
    return { success: false, message: "User is not enrolled in this course" };
  }

  // Remove user from course.enrolled
  course.enrolled = course.enrolled.filter(
    (id) => id.toString() !== userId.toString()
  );

  // Remove course from user.courses
  user.courses = user.courses.filter(
    (id) => id.toString() !== courseId.toString()
  );

  try {
    await Promise.all([course.save(), user.save()]);
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Unenrolled from the course successfully",
    };
  } catch (error) {
    console.error("Unenrollment error:", error);
    return {
      success: false,
      message: "Something went wrong while unenrolling",
    };
  }
}
