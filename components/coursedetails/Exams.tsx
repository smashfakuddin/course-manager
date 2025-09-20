import AddExams from "./AddExams"

export default function Exams() {
  return (
    <div className="rounded-2xl p-6">
      <AddExams/>
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
  );
}
