import CountdownTimer from "@/components/ui/CountdownTimmer";
import AddAssignment from "./AddAssignment";
import { Send, SendHorizonal, Trash } from "lucide-react";
import DeleteAssignment from "./DeleteAssignment";
import NotingPosted from "../common/NotingPosted";

export default function Announcement({ assignments, role }: any) {
  return (
    <div className="bg-[#00293d] px-6 py-4 space-y-2 rounded-md main-shadow">
      <h2 className="text-xl flex items-center justify-between font-semibold text-[#b4cdfa] mb-4">
        Upcoming Assignment
        {role !== "student" && <AddAssignment isEdit={false} />}
      </h2>
      <div className="space-y-4 min-h-[100px] min-w-[300px]">
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <div
              key={assignment._id}
              className=" space-y-3 bg-[#1b1a29] text-[#93c5d1] p-4 rounded-md"
            >
              <div className="font-medium  flex gap-5 items-center">
                {assignment.title} Posted.{" "}
                {role !== "student" && (
                  <>
                    <AddAssignment isEdit={true} assignment={assignment} />
                    <DeleteAssignment id={assignment._id.toString()} />
                  </>
                )}
              </div>
              <p className="text-sm mt-1">
                {assignment.description} by{" "}
                {new Date(assignment.submissionDate).toLocaleDateString(
                  undefined,
                  { day: "numeric", month: "short" }
                )}
              </p>

              <div className=" flex flex-col-reverse lg:flex-row justify-between items-center">
                <button className=" btn-alt-2 flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Submit <SendHorizonal className="h-3 w-3"/>
                </button>
                <CountdownTimer targetDate={assignment.submissionDate} />
              </div>
            </div>
          ))
        ) : (
          <NotingPosted/>
        )}
      </div>
    </div>
  );
}
