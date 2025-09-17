
import OutlineCard from "./OutlineCard";
import AddOutline from "./AddOutline";

type OutlineProps={
    courseId:string
}

export default function Outline({courseId}:OutlineProps) {
  return (
    <div className="px-6 space-y-2 ">
      <div className=" flex justify-between">
        <h2 className=" text-xl font-semibold ">Outline Of The Course</h2>
        <AddOutline courseId={courseId}/>
      </div>
      <div className=" space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <OutlineCard index={index} key={index}/>
        ))}
      </div>
    </div>
  );
}
