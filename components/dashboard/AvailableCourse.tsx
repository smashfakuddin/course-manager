import { BookOpen, PlusCircle } from "lucide-react";
import { getAllAvailableCourses } from "@/db/queries/courses";

export default async function AvailableCourse({ session }: { session: any }) {

  const availableCourse = await getAllAvailableCourses(session?.user);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <BookOpen className="h-5 w-5 text-blue-600" />
        <span>Available Courses</span>
      </h2>
      <ul className="space-y-3">
        {availableCourse.map((course) => (
          <li
            key={course.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
          >
            <span>{course.name}</span>
            {course.picked ? (
              <button
                // onClick={() => handleUnpickCourse(course.title)}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                Unpick
              </button>
            ) : (
              <button
                // onClick={() => handlePickCourse(course.id, course.title)}
                className="flex items-center px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
              >
                <PlusCircle className="h-4 w-4 mr-1" /> Pick
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
