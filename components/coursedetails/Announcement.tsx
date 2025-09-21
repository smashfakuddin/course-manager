import CountdownTimer from "@/components/ui/CountdownTimmer";
import AddAssignment from "./AddAssignment";
import { Trash } from "lucide-react";
import DeleteAssignment from "./DeleteAssignment";

export default function Announcement({ assignments, role }: any) {
  return (
    <div className=" p-6 space-y-2">
      <h2 className="text-xl flex items-center justify-between font-semibold text-gray-800 mb-4">
        Upcoming Assignment
        {role !== "student" && <AddAssignment isEdit={false} />}
      </h2>
      <div className="space-y-4 min-h-[100px] min-w-[300px]">
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <div
              key={assignment._id}
              className="border-l-4 space-y-3 border-blue-500 bg-blue-50 p-4 rounded"
            >
              <div className="font-medium text-gray-700 flex gap-5 items-center">
                {assignment.title} Posted.{" "}
                {role !== "student" && (
                  <>
                    <AddAssignment isEdit={true} assignment={assignment} />
                    <DeleteAssignment id={assignment._id.toString()} />
                  </>
                )}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {assignment.description} by{" "}
                {new Date(assignment.submissionDate).toLocaleDateString(
                  undefined,
                  { day: "numeric", month: "short" }
                )}
              </p>

              <div className=" flex flex-col-reverse lg:flex-row justify-between items-center">
                <button className=" cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Submit
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
