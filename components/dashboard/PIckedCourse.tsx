
import { getPickedCoursesByUserId } from "@/db/queries/picked";
import { CheckCircle } from "lucide-react";


export default async function PickedCourse({ session }: { session: any }) {
  const pickedCourses = await getPickedCoursesByUserId(session?.user?.id);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span>Picked Courses</span>
      </h2>
      {pickedCourses.length > 0 ? (
        <ul className="space-y-3">
          {pickedCourses.map((course, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
            >
              <span>{course.name}</span>
              <span className="text-sm text-green-600 font-medium">Picked</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No courses picked yet.</p>
      )}
    </div>
  );
}
