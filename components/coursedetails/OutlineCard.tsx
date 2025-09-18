"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, Edit2, DeleteIcon, Trash } from "lucide-react";
import Video from "@/icons/Video";
import Resource from "./Resource";
import Delete from "@/icons/delete";
import { deleteOutline } from "@/db/queries/outline";
import { toast } from "react-toastify";

export type Outline = {
  title: string;
  description: string;
  _id: string;
};

export default function OutlineCard({
  outline,
  courseId,
}: {
  outline: Outline;
  courseId: string;
}) {
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    console.log("i am clicked");
  };

  const handleDelete = async () => {
    try {
      const response = await deleteOutline(outline._id.toString(),courseId);
      if(response.success){
        toast.success(response.message)
      }
    } catch (error) {}
  };
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h2>
        <div
          className={`flex cursor-pointer items-center justify-between w-full p-4 font-medium text-gray-700 border-b border-gray-200 hover:bg-gray-100 gap-3 ${
            open ? "bg-gray-50" : ""
          }`}
        >
          {/* Left side (toggles accordion) */}
          <div
            className="flex items-center gap-3 flex-1"
            onClick={() => setOpen(!open)}
          >
            <Video />
            <span>{outline.title}</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              3
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // don’t toggle
                handleEdit();
              }}
              className="text-gray-500 hover:text-blue-600 cursor-pointer"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // don’t toggle
                handleDelete();
              }}
              className="text-gray-500 hover:text-blue-600 cursor-pointer"
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>

          {/* Right side (edit + chevron) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-gray-600"
            >
              {open ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </h2>

      {/* Dropdown content */}
      {open && (
        <div className="p-4 text-gray-600 text-sm leading-relaxed border-b border-gray-200">
          <Resource />
        </div>
      )}
    </div>
  );
}
