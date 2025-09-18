"use client";
import { Edit, Save } from "lucide-react";
import { useState } from "react";
import { addOrUpdateOverview } from "@/db/queries/overview";
import { toast } from "react-toastify";

type props = {
  overview: string;
  courseId: string;
};

export default function Overview({ overview, courseId }: props) {
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
    console.log(response);
    handleEdit();
  };
  return (
    <div className="px-6 space-y-2">
      <div className=" flex justify-between items-center">
        <h2 className=" text-2xl tracking-tighter font-semibold">Overview</h2>
        {isEdit ? (
          <button
            onClick={handleSave}
            className="btn-main flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Save{" "}
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="btn-main flex items-center gap-2"
          >
            <Edit className="h-4 w-4" />
            Edit{" "}
          </button>
        )}
      </div>{" "}
      {isEdit ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-neutral-300 rounded-md p-3 w-full"
          rows={10}
        />
      ) : (
        <p className="whitespace-pre-line text-justify">{text}</p>
      )}
    </div>
  );
}
