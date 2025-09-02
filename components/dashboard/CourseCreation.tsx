"use client";
import { useState } from "react";
import CreateCourseModal from "./CreateCourseModal";
import { toast } from "react-toastify";

export default function CourseCreation() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: {
    name: string;
    description: string;
    semester: number;
    credits: number;
  }) => {
    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data && JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create course");
      }
      const result = await response.json();
      toast.success(result.message || "Course created successfully");
      setOpen(false);
    } catch (error) {
      toast.error((error as Error).message || "An error occurred");
    }
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
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
