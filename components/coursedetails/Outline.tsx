import OutlineCard from "./OutlineCard";
import AddOutline from "./AddOutline";

import type { Outline } from "./OutlineCard";
import NotingPosted from "../common/NotingPosted";

type OutlineProps = {
  courseId: string;
  outlines: Array<Outline>;
  role: string;
};

export default function Outline({ courseId, outlines, role }: OutlineProps) {
  return (
    <div className="px-6 space-y-2 bg-[#00293d] py-4 rounded-md ">
      <div className=" flex flex-col md:flex-row gap-4 justify-between">
        <h2 className=" text-xl font-semibold text-[#b4cdfa]">
          Outline Of The Course
        </h2>
        {role !== "student" && <AddOutline courseId={courseId} />}
      </div>
      <div className=" space-y-3 rounded-md">
        {outlines.length > 0 ? (
          outlines.map((outline, index) => (
            <OutlineCard
              key={index}
              outline={outline}
              courseId={courseId}
              role={role}
            />
          ))
        ) : (
          <NotingPosted/>
        )}
      </div>
    </div>
  );
}
