"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface CourseCardProps {
  course: {
    _id: string;
    name: string;
    description: string;
    role: string;
    picked: string | null;
  };
  session: Session | null;
  handlePickCourse: (courseId: string, teacherId: string, role: string) => void;
  handleUnpickCourse: (
    courseId: string,
    teacherId: string,
    role: string
  ) => void;
}

export default function CourseCard({
  course,
  session,
  handlePickCourse,
  handleUnpickCourse,
}: CourseCardProps) {
  const handleEnroll = () => {
    console.log(`Enrolling in course ${course.name}`);
    // call API to enroll student
  };

  return (
    <div
      key={course._id}
      className="border p-4 mb-2 rounded flex gap-4 justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-bold">{course.name}</h2>
        <p>{course.description}</p>
      </div>
      <div className="mt-2">
        {session?.user?.role === "student" && (
          <button
            onClick={handleEnroll}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Enroll
          </button>
        )}
        {session?.user?.role === "teacher" &&
        session?.user?.id === course?.picked ? (
          <button
            onClick={() =>
              handleUnpickCourse(
                course?._id.toString(),
                session?.user?.id,
                session?.user?.role
              )
            }
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Unpick
          </button>
        ) : (
          <button
            onClick={() =>
              handlePickCourse(
                course?._id.toString(),
                session?.user?.id,
                session?.user?.role
              )
            }
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Pick
          </button>
        )}
      </div>
    </div>
  );
}
