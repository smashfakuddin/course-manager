import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";

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
