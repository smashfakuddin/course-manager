import { BookOpen, PlusCircle, TrashIcon } from "lucide-react";
import { getAllAvailableCourses } from "@/db/queries/courses";
import DeleteIcon from "@/icons/delete";
import DeleteCourse from "./DeleteCourse";
import PickAndUnpick from "./PickAndUnpick";
import Link from "next/link";

export default async function AvailableCourse({ session }: { session: any }) {
  const availableCourse = await getAllAvailableCourses(session?.user);


  return (
    <div className="main-shadow bg-[#003652] rounded-lg p-6 hover:scale-105 transition duration-300">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <BookOpen className="h-5 w-5 text-blue-600" />
        <span className=" text-[#b4cdfa]">Available Courses </span>
        <span className="badge-primary">{availableCourse.length}</span>
      </h2>
      <div className="space-y-4 h-[50vh] overflow-y-scroll no-scrollbar">
        {availableCourse.map((course) => (
          <div
            key={course._id.toString()}
            className="flex cursor-pointer items-center justify-between bg-[#00293d] hover:bg-[#003652] transition-all duration-300 text-[#93c5d1]  rounded-lg main-shadow p-4"
          >
            {/* Course details */}
            <div className="flex flex-col ">
              <Link href={`/courses/${course._id}`} className="font-semibold text-lg text-[#b4cdfa]">{course.name}</Link>
              <span className="text-sm ">
                Semester: {course.semester}
              </span>
              <span className="text-sm ">
                Credits: {course.credits}
              </span>
              <span className="text-sm ">
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
                <DeleteCourse id={course._id.toString()} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
