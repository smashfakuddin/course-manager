import { PlusIcon } from "lucide-react";

import OutlineCard from "./OutlineCard";

export default function Outline() {
  return (
    <div className="px-6 space-y-2 ">
      <div className=" flex justify-between">
        <h2 className=" text-xl font-semibold ">Outline Of The Course</h2>
        <button className=" btn-main flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Outline
        </button>
      </div>
      <div className=" space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <OutlineCard index={index} />
        ))}
      </div>
    </div>
  );
}
