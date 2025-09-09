import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course"

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

  return { success: true, message: "Course picked successfully", course };
}
