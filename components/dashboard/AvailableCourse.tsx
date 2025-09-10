import { BookOpen, PlusCircle, TrashIcon } from "lucide-react";
import { getAllAvailableCourses } from "@/db/queries/courses";
import DeleteIcon from "@/icons/delete";
import DeleteCourse from "./DeleteCourse";
import PickAndUnpick from "./PickAndUnpick";
import Link from "next/link";

export default async function AvailableCourse({ session }: { session: any }) {
  const availableCourse = await getAllAvailableCourses(session?.user);
  console.log(availableCourse);

  return (
    <div className="bg-white shadow rounded-lg p-6 ">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <BookOpen className="h-5 w-5 text-blue-600" />
        <span>Available Courses</span>
      </h2>
      <div className="space-y-4 h-[50vh] overflow-y-scroll">
        {availableCourse.map((course) => (

          <div
            key={course._id.toString()}
            className="flex items-center justify-between bg-white border rounded-lg shadow-sm p-4"
          >
            {/* Course details */}
            <div className="flex flex-col">
              <Link href={`/courses/${course._id}`} className="font-semibold text-lg">{course.name}</Link>
              <span className="text-sm text-gray-600">
                Semester: {course.semester}
              </span>
              <span className="text-sm text-gray-600">
                Credits: {course.credits}
              </span>
              <span className="text-sm text-gray-600">
                Managed by:{" "}
                <span className="font-medium">
                  {course?.picked?.name || "N/A"}
                </span>
              </span>
            </div>

            {/* Action button */}
            <div className="flex items-center gap-2">
              <PickAndUnpick
                courseId={course._id.toString()}
                picked={course.picked ? course.picked?._id.toString() : null}
                userId={session?.user?.id}
                role={session?.user?.role}
                enrolled={course?.enrolled?.some(
                  (id: { id: any }) => id.toString() === session?.user?.id
                )}
              />
              {session?.user?.role === "admin" && (
                <DeleteCourse id={course.id} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
