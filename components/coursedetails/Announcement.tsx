import CountdownTimer from "@/components/ui/CountdownTimmer";
import AddAssignment from "./AddAssignment";
import { Trash } from "lucide-react";
import DeleteAssignment from "./DeleteAssignment";

export default function Announcement({ assignments }: any) {
  return (
    <div className=" p-6 space-y-2">
      <AddAssignment />
      <div className="space-y-4 min-h-[100px] ">
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <div
              key={assignment._id}
              className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded"
            >
              <p className="font-medium text-gray-700 flex gap-5 items-center">
                {assignment.title} Posted.{" "}
                <DeleteAssignment id={assignment._id.toString()} />
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {assignment.description} by{" "}
                {new Date(assignment.submissionDate).toLocaleDateString(
                  undefined,
                  { day: "numeric", month: "short" }
                )}
              </p>

              <div className=" flex justify-between items-center">
                <button className="mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                  Submit Assignment
                </button>
                <CountdownTimer targetDate={assignment.submissionDate} />
              </div>
            </div>
          ))
        ) : (
          <div className=" flex items-center justify-center min-h-[100px] ">
            <p className=" font-semibold">Nothing Posted Yet!!</p>
          </div>
        )}
      </div>
    </div>
  );
}
