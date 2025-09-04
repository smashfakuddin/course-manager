import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course"

export async function getPickedCoursesByUserId(userId) {
  await dbConnect();

  const pickedCourses = await Course.find({ picked: userId });

  return pickedCourses ? pickedCourses : [];
}
