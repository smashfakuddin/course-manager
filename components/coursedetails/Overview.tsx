"use client";
import { Edit, PlusIcon, Save } from "lucide-react";
import { useState } from "react";
import { addOrUpdateOverview } from "@/db/queries/overview";
import { toast } from "react-toastify";

type props = {
  overview: string;
  courseId: string;
  role: string;
};

export default function Overview({ overview, courseId, role }: props) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(overview);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSave = async () => {
    const response = await addOrUpdateOverview(courseId, text);
    if (response.success) {
      toast.success(response.message);
    } else if (!response.success) {
      toast.error(response.message);
    }
    handleEdit();
  };
  return (
    <div className="px-6 py-4 space-y-2 main-shadow bg-[#00293d] rounded-md text-[#b4cdfa]">
      <div className=" flex justify-between items-center">
        <h2 className=" text-2xl tracking-tighter font-semibold ">Overview</h2>
        {role !== "student" ? (
          isEdit ? (
            <button
              onClick={handleSave}
              className="btn-alt-2 flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save{" "}
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="btn-alt-2 flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit{" "}
            </button>
          )
        ) : (
          ""
        )}
      </div>{" "}
      <div className="min-h-[120px] text-[#93c5d1]">
        {isEdit ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write an overview about this course..."
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition resize-none"
            rows={8}
          />
        ) : text ? (
          <p className="whitespace-pre-line leading-relaxed text-justify">
            {text}
          </p>
        ) : (
          <div className="flex items-center justify-center text-center h-[100px]  text-base italic">
            Nothing here yet — click Edit to add an Overview.
          </div>
        )}
      </div>
    </div>
  );
}
