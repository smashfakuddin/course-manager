"use client";

import { useState } from "react";
import { courseDetails } from "../../data/courseDetails";
import { Edit2Icon } from "lucide-react";
import { toast } from "react-toastify";

export default function Banner({ courseDetails }: { courseDetails: any }) {
  const [expanded, setExpanded] = useState(false);
  const role = "student";

  const handleEdit = () => {
    if (role === "student") {
      toast.error("Only Admin Can edit the Course Content");
      return;
    } else if (role === "teacher") {
      toast.success("you can edit");
    }
  };

  return (
    <div className=" min-h-[350px] mt-5 overflow-hidden ">
      {/* Gradient Overlay */}
      <div className="bg-[#00293d] main-shadow">
        <div className="p-10">
          <div className="bg-white/8 backdrop-blur-lg border border-white/30 rounded-xl p-6 space-y-4 text-black shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <h1 className="text-4xl text-neutral-200 font-bold tracking-tight drop-shadow-md">
              {courseDetails?.name}
            </h1>

            {/* Scrollable Description */}
            <p
              className={`text-justify text-neutral-400 leading-relaxed max-h-[150px] overflow-y-auto hide-scrollbar transition-all duration-300`}
              style={{ maxHeight: expanded ? "500px" : "150px" }}
            >
              {courseDetails?.description}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 mt-2">
              <img
                className="w-10 h-10 rounded-full ring-2 ring-white"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="Author"
              />
              <h3 className="text-xl font-semibold text-neutral-300 drop-shadow-md">
                S.M. Ashfak Uddin
              </h3>
            </div>

            {/* Actions */}
            <div className="flex  gap-3 mt-2">
              <button className="bg-black px-4 py-2 text-neutral-300 font-semibold flex items-center gap-2 rounded-lg hover:bg-gray-900 transition">
                Enroll Course
              </button>
              <button
                onClick={handleEdit}
                className="border border-white px-4 py-2 text-neutral-300 font-semibold flex items-center gap-2 rounded-lg hover:bg-white/20 transition"
              >
                <Edit2Icon className="w-4 h-4" /> Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Card */}
    </div>
  );
}
