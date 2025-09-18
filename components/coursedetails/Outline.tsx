import OutlineCard from "./OutlineCard";
import AddOutline from "./AddOutline";

import type { Outline } from "./OutlineCard";

type OutlineProps = {
  courseId: string;
  outlines: Array<Outline>;
};

export default function Outline({ courseId, outlines }: OutlineProps) {

  return (
    <div className="px-6 space-y-2 ">
      <div className=" flex justify-between">
        <h2 className=" text-xl font-semibold ">Outline Of The Course</h2>
        <AddOutline courseId={courseId} />
      </div>
      <div className=" space-y-3">
        {outlines.map((outline, index) => (
          <OutlineCard key={index} outline={outline} courseId={courseId} />
        ))}
      </div>
    </div>
  );
}
