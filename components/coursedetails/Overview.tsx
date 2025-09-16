"use client";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

type props = {
  overview: string;
};

export default function Overview({ overview }: props) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSave = async () => {
    setIsEdit(false);
  };
  return (
    <div className="px-6 space-y-2">
      <div className=" flex justify-between items-center">
        <h2 className=" text-2xl tracking-tighter font-semibold">Overview</h2>
        {isEdit ? (
          <Save onClick={handleSave} className="h-6 w-6" />
        ) : (
          <Edit onClick={handleEdit} className="h-6 w-6" />
        )}
      </div>{" "}
      {isEdit ? (
        <textarea
          defaultValue={overview}
          className="border border-neutral-300 rounded-md p-3 w-full"
          rows={10}
        />
      ) : (
        <p className=" text-justify">{overview}</p>
      )}
    </div>
  );
}
