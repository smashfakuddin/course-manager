"use client";

import { useState } from "react";
import { courseDetails } from "../../data/courseDetails";
import { Edit2Icon } from "lucide-react";
import { toast } from "react-toastify";

export default function Banner({ courseDetails }: { courseDetails: any }) {
  const [expanded, setExpanded] = useState(false);
  const role = "student";

  const handleEdit=()=>{
    if(role==="student"){
      toast.error("Only Admin Can edit the Course Content");
      return
    }else if(role==='teacher'){
      toast.success('you can edit')
    }
  }

  return (
    <div
      className="relative min-h-[500px] mt-5 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1570998103225-83a725716e28?w=1600&auto=format&fit=crop&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/90 to-transparent"></div>

      {/* Glass Card */}
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 space-y-4 text-black">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-md">
            {courseDetails?.name}
          </h1>

          {/* Scrollable Description */}
          <p
            className={`text-justify text-gray-300 leading-relaxed max-h-[150px] overflow-y-auto hide-scrollbar transition-all duration-300`}
            style={{ maxHeight: expanded ? "500px" : "150px" }}
          >
            {courseDetails?.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 mt-2">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1732304721505-7777969ce2da?w=200&auto=format&fit=crop&q=80"
              alt="Author"
            />
            <h3 className="text-xl font-semibold text-white drop-shadow-md">
              S.M. Ashfak Uddin
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill={index < 4 ? "yellow" : "none"}
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
            <span className="ml-4 text-white font-semibold drop-shadow-md">
              65 Reviews
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-3 mt-2">
            <button className="bg-black px-4 py-2 text-white font-semibold flex items-center gap-2 rounded-lg hover:bg-gray-900 transition">
              Enroll Course
            </button>
            <button
            onClick={handleEdit}
            className="border border-white px-4 py-2 text-white font-semibold flex items-center gap-2 rounded-lg hover:bg-white/20 transition">
            <Edit2Icon className="w-4 h-4"/> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
