import Banner from "@/components/coursedetails/Banner";
import { courseDetails } from "@/data/courseDetails";

export default function CourseIdPage() {
  const details = courseDetails;
  return (
    <div>
      <Banner />

   
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-10">
      {/* Thumbnail + Course Info */}
      <div className="flex flex-col md:flex-row items-start gap-6 bg-white shadow rounded-2xl p-6">
        <img
          src="https://placehold.co/300x200"
          alt="Course Thumbnail"
          className="w-full md:w-1/3 h-48 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">
            Introduction to Anthropology
          </h1>
          <p className="mt-2 text-gray-600">
            This course explores the basics of anthropology, human societies,
            and cultural diversity. Students will learn about ethnographic
            methods, human evolution, and cross-cultural perspectives.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-medium">Credits:</span> 3 |{" "}
            <span className="font-medium">Semester:</span> 1
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructor</h2>
        <div className="flex items-center gap-4">
          <img
            src="https://placehold.co/100"
            alt="Instructor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-700">Dr. S. M. Ashfak Uddin</p>
            <p className="text-gray-500 text-sm">Professor of Anthropology</p>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Announcements
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <p className="font-medium text-gray-700">Assignment 1 Posted</p>
            <p className="text-gray-600 text-sm mt-1">
              Submit your essay on cultural relativism by Sept 20.
            </p>
            <button className="mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
              Submit Assignment
            </button>
          </div>
        </div>
      </div>

      {/* Assignments Overview */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Assignments</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between">
            <span>Essay on Cultural Relativism</span>
            <span className="text-sm text-gray-500">Due Sept 20</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Fieldwork Observation Report</span>
            <span className="text-sm text-gray-500">Due Oct 10</span>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Lecture Slides - Week 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Reading Material - Anthropology Basics
            </a>
          </li>
        </ul>
      </div>

      {/* Exams */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Exams</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-medium text-gray-700">Midterm Exam</p>
            <p className="text-gray-600 text-sm mt-1">
              October 15, 2025 | Covers Week 1 - Week 6
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-medium text-gray-700">Final Exam</p>
            <p className="text-gray-600 text-sm mt-1">
              December 20, 2025 | Covers Entire Course
            </p>
          </div>
        </div>
      </div>

      {/* Student Progress */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: "65%" }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">65% completed</p>
      </div>

      {/* Discussion */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Discussion</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-3">
            <p className="font-medium text-gray-700">Student A:</p>
            <p className="text-gray-600 text-sm">
              Can someone explain cultural relativism?
            </p>
          </div>
          <textarea
            placeholder="Write a comment..."
            className="w-full border rounded-lg p-2 text-sm focus:ring focus:ring-blue-200"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post Comment
          </button>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Courses</h2>
        <ul className="space-y-2">
          <li className="text-blue-600 hover:underline">Cultural Anthropology</li>
          <li className="text-blue-600 hover:underline">Linguistic Anthropology</li>
          <li className="text-blue-600 hover:underline">Biological Anthropology</li>
        </ul>
      </div>
    </div>


    </div>
  );
}
