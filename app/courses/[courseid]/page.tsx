
import Announcement from "@/components/coursedetails/Announcement";
import Banner from "@/components/coursedetails/Banner";
import Exams from "@/components/coursedetails/Exams";
import Outline from "@/components/coursedetails/Outline";
import Overview from "@/components/coursedetails/Overview";
import CountdownTimer from "@/components/ui/CountdownTimmer";
import { getCourseById } from "@/db/queries/courses";

export default async function CourseIdPage({
  params,
}: {
  params: Promise<{ courseid: string }>;
}) {
  const { courseid } = await params;

  const courseDetails = await getCourseById(courseid);
  // console.log(courseDetails)

  return (
    <div>
      <Banner courseDetails={courseDetails} />

      {/* whole body part goes here */}

      <div className="max-w-[90rem] mx-auto py-3 justify-between grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2 space-y-4">
          {/* overview of the course design */}
          <Overview
            overview={courseDetails?.overview}
            courseId={courseDetails?._id.toString()}
          />
          {/* Course outline with resourece */}
          <div className="">
            <Outline courseId = {courseid} outlines={courseDetails?.outline}/>
          </div>
          {/* Discussion */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Discussion
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <p className="font-medium text-gray-700">Student A:</p>
                <p className="text-gray-600 text-sm">
                  Can someone explain cultural relativism?
                </p>
              </div>
              <textarea
                placeholder="Write a comment..."
                className="w-full border rounded-lg p-2 text-sm focus:ring focus:ring-blue-200"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Post Comment
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl col-span-1 space-y-3">
          {/* Announcements */}
          <Announcement/>
          {/* Exams */}
          <Exams/>
        </div>
      </div>
    </div>
  );
}
