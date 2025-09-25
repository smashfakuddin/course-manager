"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { pickCourse, unpickCourse } from "@/db/queries/picked";
import { enrollCourse, unenrollCourse } from "@/db/queries/enroll";
import { toast } from "react-toastify";

type Props = {
  courseId: string;
  picked: string | null;
  userId: string;
  role: string;
  enrolled: boolean;
};
export default function PickAndUnpick({
  courseId,
  picked,
  userId,
  role,
  enrolled,
}: Props) {
  const handlePickCourse = async (courseId: string, userId: string) => {
    try {
      const response = await pickCourse(courseId, userId);

      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error((error as Error).message || "An error occurred");
    }
  };

  const handleUnpick = async (courseId: string, userId: string) => {
    try {
      const response = await unpickCourse(courseId, userId);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (error) {}
  };

  const handleEnroll = async (courseId: string, userId: string) => {
    try {
      const response = await enrollCourse(courseId, userId);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const handleEnrollRemove = async (courseId: string, userId: string) => {
     try {
      const response = await unenrollCourse(courseId, userId);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div>
      {role !== "student" ? (
        // 🔹 Non-student (e.g., teacher)
        <div>
          {picked === userId ? (
            <button
              onClick={() => handleUnpick(courseId, userId)}
              className="btn-alt-2 flex items-center"
            >
              <MinusCircle className="h-4 w-4 mr-1" /> Unpick
            </button>
          ) : (
            <button
              onClick={() => handlePickCourse(courseId, userId)}
              className="btn-alt-2 flex items-center"
            >
              <PlusCircle className="h-4 w-4 mr-1" /> Pick
            </button>
          )}
        </div>
      ) : (
        // 🔹 Student
        <div>
          {enrolled ? (
            <button
              onClick={() => handleEnrollRemove(courseId, userId)}
              className="btn-alt-2 flex items-center"
            >
              <MinusCircle className="h-4 w-4 mr-1" /> Unenroll
            </button>
          ) : (
            <button
              onClick={() => handleEnroll(courseId, userId)}
              className="btn-alt-2 flex items-center"
            >
              <PlusCircle className="h-4 w-4 mr-1" /> Enroll
            </button>
          )}
        </div>
      )}
    </div>
  );
}
