import { getEnrolledCourseByUser } from "@/db/queries/enroll";
import { getPickedCoursesByUserId } from "@/db/queries/picked";
import { ArrowUpRight, CheckCircle, Frown, SearchIcon } from "lucide-react";
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
    <div className="bg-[#003652] main-shadow rounded-lg p-6 hover:scale-105 duration-300 transition">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-3">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span className="text-[#b4cdfa]">
          {session?.user?.role === "teacher" ? "Picked" : "Enrolled"} Courses
        </span>
        <span className="badge-primary">{pickedCourses?.length}</span>
      </h2>

      {pickedCourses.length > 0 ? (
        <div className="space-y-4">
          {pickedCourses.map((course: any, index: number) => (
            <div
              key={course._id.toString()}
              className="flex items-center justify-between bg-[#00293d] hover:bg-[#003652] transition-all duration-300 cursor-pointer text-[#93c5d1] rounded-lg main-shadow p-4"
            >
              {/* Course details */}
              <div className="flex flex-col">
                <Link
                  href={`/courses/${course._id}`}
                  className="font-semibold text-lg text-[#b4cdfa]"
                >
                  {course.name}
                </Link>
                <span className="text-sm">Semester: {course.semester}</span>
                <span className="text-sm">Credits: {course.credits}</span>
                <span className="text-sm">
                  Managed by:{" "}
                  <span className="font-medium">
                    {course?.picked?.name || "N/A"}
                  </span>
                </span>
              </div>

              {/* Action button */}
              <div className="flex items-center gap-2">
                <Link
                  href={`/courses/${course._id.toString()}`}
                  className="text-sm text-green-600 font-medium btn-alt-2 flex items-center gap-2"
                >
                  Explore Now <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full flex md:items-center justify-center text-gray-500 text-xl gap-3">
          <Frown className="h-8 w-8" />
          <p>
            No courses{" "}
            {session?.user?.role === "teacher" ? "Picked" : "Enrolled"} yet.
          </p>
        </div>
      )}
    </div>
  );
}
