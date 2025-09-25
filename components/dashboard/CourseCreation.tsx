"use client";
import { useState } from "react";
import CreateCourseModal from "./CreateCourseModal";
import { toast } from "react-toastify";
import { createCourse } from "@/db/queries/courses";

export default function CourseCreation() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: {
    name: string;
    description: string;
    semester: number;
    credits: number;
  }) => {
    try {
      const response = await createCourse(data);
      if (response.message) {
        toast.success(response.message || "Course created successfully");
      }
      setOpen(false);
    } catch (error) {
      toast.error((error as Error).message || "An error occurred");
    }
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <button
          className="flex items-center gap-2 btn-alt-2 transition-all duration-300"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Create Course
        </button>

        <CreateCourseModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
