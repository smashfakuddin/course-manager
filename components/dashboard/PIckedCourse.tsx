import { getEnrolledCourseByUser } from "@/db/queries/enroll";
import { getPickedCoursesByUserId } from "@/db/queries/picked";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default async function PickedCourse({ session }: { session: any }) {
  let pickedCourses = [];
  if (session?.user?.role === "teacher") {
    pickedCourses = await getPickedCoursesByUserId(session?.user?.id);
  } else if (session?.user?.role === "student") {
    const response = await getEnrolledCourseByUser(session?.user?.id);
    pickedCourses = response.courses;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span>
          {session?.user?.role === "teacher" ? "Picked" : "Enrolled"} Courses
        </span>
      </h2>
      {pickedCourses.length > 0 ? (
        <ul className="space-y-3">
          {pickedCourses.map((course: any, index: number) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
            >
              <Link href={`/courses/${course._id.toString()}`}>{course.name}</Link>
              <Link href={`/courses/${course._id.toString()}`} className="text-sm text-green-600 font-medium btn-alt flex items-center gap-2">Explore Now <ArrowUpRight/></Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No courses {session?.user?.role === "teacher" ? "Picked" : "Enrolled"}{" "}
          yet.
        </p>
      )}
    </div>
  );
}
