import AddExams from "./AddExams";
import DeleteExam from "./DeleteExam";

export default function Exams({ exams }: { exams: any }) {
  return (
    <div className="rounded-2xl space-y-2 p-6">
      <h2 className="flex text-xl font-semibold items-center justify-between">
        Upcoming Event
        <AddExams isEdit={false} />
      </h2>
      <div className="space-y-4">
        {exams.length > 0 ? (
          exams.map((exam: any) => (
            <div
              key={exam._id.toString()}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="font-medium text-gray-700 flex items-center gap-3">
                {exam.title} <AddExams isEdit={true} exam={exam}/>{" "}
                <DeleteExam id={exam._id.toString()} />
              </div>
              <p className="text-gray-600 text-sm mt-1">
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
          <div className=" min-h-[150px] flex items-center justify-center">
            <p className=" font-semibold">Nothing Posted Yet !!!</p>
          </div>
        )}
      </div>
    </div>
  );
}
