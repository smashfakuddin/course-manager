"use client";
import { Button } from "@/components/ui/button";

export default function Design() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Outer Card */}
      <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl shadow-sm p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">
          Course Overview
        </h2>
        <p className="text-[#9CA3AF] mb-6">
          Manage and track your courses with an elegant, modern dashboard.
        </p>

        {/* Inner Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#FDF2F8] rounded-xl p-4">
            <h3 className="text-lg font-medium text-[#1F2937] mb-2">
              Current Semester
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              6 active courses this semester.
            </p>
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
              View Courses
            </Button>
          </div>

          <div className="bg-[#ECFDF5] rounded-xl p-4">
            <h3 className="text-lg font-medium text-[#1F2937] mb-2">
              Assignments
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              12 assignments pending review.
            </p>
            <Button className="bg-[#10B981] hover:bg-[#059669] text-white">
              Manage Assignments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
