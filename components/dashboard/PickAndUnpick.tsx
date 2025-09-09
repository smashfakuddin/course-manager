"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { pickCourse, unpickCourse } from "@/db/queries/picked";
import { toast } from "react-toastify";

type Props = {
  courseId: string;
  picked: string | null;
  userId: string;
};
export default function PickAndUnpick({ courseId, picked, userId }: Props) {
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
  return (
    <>
      {picked === userId ? (
        <button
          onClick={() => handleUnpick(courseId, userId)}
          className="btn-main flex items-center"
        >
          <MinusCircle className="h-4 w-4 mr-1" /> Unpick
        </button>
      ) : (
        <button
          onClick={() => handlePickCourse(courseId, userId)}
          className="btn-main flex items-center"
        >
          <PlusCircle className="h-4 w-4 mr-1" /> Pick
        </button>
      )}
    </>
  );
}
