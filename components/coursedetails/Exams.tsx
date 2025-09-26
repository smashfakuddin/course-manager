import NotingPosted from "../common/NotingPosted";
import AddExams from "./AddExams";
import DeleteExam from "./DeleteExam";

export default function Exams({ exams, role }: { exams: any; role: string }) {
  return (
    <div className="bg-[#00293d] px-6  py-4 space-y-2 rounded-md main-shadow ">
      <h2 className="flex text-xl font-semibold items-center justify-between text-[#b4cdfa] mb-4">
        Upcoming Event
        {role !== "student" && <AddExams isEdit={false} />}
      </h2>
      <div className="space-y-4  rounded-md">
        {exams.length > 0 ? (
          exams.map((exam: any) => (
            <div
              key={exam._id.toString()}
              className="bg-[#1b1a29] text-[#b4cdfa] rounded-md  p-4"
            >
              <div className="font-medium  flex items-center gap-3">
                {exam.title}
                {role !== "student" && (
                  <>
                    <AddExams isEdit={true} exam={exam} />{" "}
                    <DeleteExam id={exam._id.toString()} />
                  </>
                )}
              </div>
              <p className="text-gray-300 text-sm mt-1">
                {new Date(exam.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                | {exam.description}
              </p>
            </div>
          ))
        ) : (
          <NotingPosted/>
        )}
      </div>
    </div>
  );
}
