"use client";
import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Edit2,
  DeleteIcon,
  Trash,
  PlusIcon,
} from "lucide-react";
import Video from "@/icons/Video";
import Resource from "./Resource";
import { addOutlineByCourse, deleteOutline } from "@/db/queries/outline";
import { addResourceByOutline } from "@/db/queries/resource";
import { toast } from "react-toastify";
import Modal from "../common/Modal";
import AddResourceForm from "./forms/AddResourceForm";

export type Outline = {
  title: string;
  description: string;
  _id: string;
  resource: Array<object>;
};

export default function OutlineCard({
  outline,
  courseId,
  role,
}: {
  outline: Outline;
  courseId: string;
  role: string;
}) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleEdit = () => {};

  const handleDelete = async () => {
    try {
      const response = await deleteOutline(outline._id.toString(), courseId);
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {}
  };

  const handleResourceSubmit = async (payload: any) => {
    try {
      const data = {
        ...payload,
        outlineId: outline._id.toString(),
      };

      const response = await addResourceByOutline(data);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (error) {}
  };

  return (
    <div className=" border border-[#44425b] rounded-md text-[#93c5d1]">
      <h2>
        <div
          className={`flex rounded-md cursor-pointer items-center justify-between w-full p-4 bg-[#1b1a29] font-medium  gap-3 ${
            open ? "" : ""
          }`}
        >
          {/* Left side (toggles accordion) */}
          <div
            className="flex items-center gap-3 flex-1"
            onClick={() => setOpen(!open)}
          >
            <Video />
            <span>{outline.title}</span>
            <span className="bg-blue-100 text-black text-nowrap  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              {outline.resource.length > 0
                ? `${outline.resource.length} Resources`
                : "N/A"}
            </span>
            <div className="relative group">
              {role !== "student" && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // don’t toggle
                    handleModalOpen();
                  }}
                  className=" cursor-pointer"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              )}

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-transform
                   rounded-md bg-gray-800  text-xs px-2 py-1 text-nowrap"
              >
                Add Resource for this outline
              </span>
            </div>

            <div className="relative group">
              {role !== "student" && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // don’t toggle
                    handleDelete();
                  }}
                  className=" hover:text-red-600 cursor-pointer"
                >
                  <Trash className="w-4 h-4" />
                </button>
              )}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
                   scale-0 group-hover:scale-100 transition-transform
                   rounded-md bg-gray-800 text-xs px-2 py-1 text-nowrap"
              >
                Delete This Outline
              </span>
            </div>
          </div>

          {/* Right side (edit + chevron) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className=""
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
        <div className="p-4  text-sm leading-relaxed ">
          <Resource
            resources={outline?.resource}
            outlineId={outline._id.toString()}
            role={role}
          />
        </div>
      )}
      {/* resource adding modal */}
      <Modal isOpen={modalOpen} onClose={handleModalClose}>
        <AddResourceForm
          onClose={handleModalClose}
          onSubmit={handleResourceSubmit}
        />
      </Modal>
    </div>
  );
}
