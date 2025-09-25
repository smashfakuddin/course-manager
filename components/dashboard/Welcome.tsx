"use client";
import { User } from "lucide-react";
import CourseCreation from "@/components/dashboard/CourseCreation";
import { useSession } from "next-auth/react";

export default function Welcome({ session }: { session: any }) {


  return (
    <div className="bg-[#003652] text-[#b4cdfa] gap-4 flex-col md:flex-row main-shadow rounded-lg p-6 mb-6 flex items-center justify-between">
      <div className="flex flex-col  md:flex-row items-center space-x-4 space-y-2">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="text-blue-600 h-8 w-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {session?.user?.role === "teacher" && "Professor"}{" "}
            {session?.user?.name} 👋
          </h1>

          <p className="text-[#93c5d1]">Here’s an overview of your courses</p>
        </div>
      </div>
      <CourseCreation />
    </div>
  );
}
