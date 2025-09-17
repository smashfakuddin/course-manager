import CountdownTimer from "@/components/ui/CountdownTimmer";

export default function Announcement() {
  return (
    <div className=" p-6 space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Announcements
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="font-medium text-gray-700">Assignment 1 Posted</p>
          <p className="text-gray-600 text-sm mt-1">
            Submit your essay on cultural relativism by Sept 20.
          </p>
          <div className=" flex justify-between items-center">
            <button className="mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
              Submit Assignment
            </button>
            <CountdownTimer
              targetDate={new Date(Date.now() + (24 + 2) * 60 * 60 * 1000)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="font-medium text-gray-700">Assignment 1 Posted</p>
          <p className="text-gray-600 text-sm mt-1">
            Submit your essay on cultural relativism by Sept 20.
          </p>
          <button className="mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
            Submit Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
