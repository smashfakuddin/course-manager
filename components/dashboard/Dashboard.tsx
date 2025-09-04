"use client";
import { useState } from "react";
import { BookOpen, CheckCircle, PlusCircle, User } from "lucide-react";

export default function Dashboard() {
  const [availableCourses, setAvailableCourses] = useState([
    { id: 1, title: "Anthropology of Culture", picked: false },
    { id: 2, title: "Social Research Methods", picked: false },
    { id: 3, title: "Linguistic Anthropology", picked: false },
  ]);

  const [pickedCourses, setPickedCourses] = useState<string[]>([]);

  const handlePickCourse = (courseId: number, title: string) => {
    setAvailableCourses((prev) =>
      prev.map((c) =>
        c.id === courseId ? { ...c, picked: true } : c
      )
    );
    setPickedCourses((prev) => [...prev, title]);
  };

  const handleUnpickCourse = (title: string) => {
    setPickedCourses((prev) => prev.filter((c) => c !== title));
    setAvailableCourses((prev) =>
      prev.map((c) =>
        c.title === title ? { ...c, picked: false } : c
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <User className="text-blue-600 h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Professor Ashfak 👋</h1>
            <p className="text-gray-600">Here’s an overview of your courses</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Courses */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span>Available Courses</span>
          </h2>
          <ul className="space-y-3">
            {availableCourses.map((course) => (
              <li
                key={course.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
              >
                <span>{course.title}</span>
                {course.picked ? (
                  <button
                    onClick={() => handleUnpickCourse(course.title)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Unpick
                  </button>
                ) : (
                  <button
                    onClick={() => handlePickCourse(course.id, course.title)}
                    className="flex items-center px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
                  >
                    <PlusCircle className="h-4 w-4 mr-1" /> Pick
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Picked / Enrolled Courses */}
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
                  <span>{course}</span>
                  <span className="text-sm text-green-600 font-medium">
                    Picked
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No courses picked yet.</p>
          )}
        </div>
      </div>

      {/* Extra Dashboard Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Announcements</h3>
          <p className="text-gray-600 text-sm">
            Stay updated with the latest notices from the department.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Assignments</h3>
          <p className="text-gray-600 text-sm">
            Submit and manage assignments for your picked courses.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Discussions</h3>
          <p className="text-gray-600 text-sm">
            Join conversations and share resources with classmates.
          </p>
        </div>
      </div>
    </div>
  );
}
