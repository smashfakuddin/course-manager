import Banner from "@/components/coursedetails/Banner";
import Outline from "@/components/coursedetails/Outline";
import CountdownTimer from "@/components/ui/CountdownTimmer";
import { getCourseById } from "@/db/queries/courses";

export default async function CourseIdPage({
  params,
}: {
  params: Promise<{ courseid: string }>;
}) {
  const { courseid } = await params;

  const courseDetails = await getCourseById(courseid);

  return (
    <div>
      <Banner courseDetails={courseDetails} />

      {/* whole body part goes here */}

      <div className="max-w-[90rem] mx-auto py-3 justify-between grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2 space-y-4">
          {/* overview of the course design */}
          <div className="px-6 space-y-2">
            <h2 className=" text-2xl tracking-tighter font-semibold">
              Overview
            </h2>
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              accusantium eum corporis laboriosam non enim! Voluptates
              cupiditate maxime, nam nemo labore magnam ducimus, odio, saepe
              expedita enim aliquid reprehenderit! Cum, architecto voluptatibus.
              Suscipit repellat neque dolor repellendus saepe earum debitis,
              ducimus ratione quas? Reiciendis aut ut numquam iure hic aliquam?
              Natus blanditiis eum, at fugit delectus veritatis sapiente impedit
              incidunt. Quo, quaerat natus doloremque non delectus ducimus
              suscipit culpa nemo sit laboriosam, optio ex dignissimos
              necessitatibus, impedit animi. Et nam pariatur est eius hic?
              Eligendi error officiis excepturi minima ut eius? Non illum quis
              laudantium itaque! Repudiandae laborum nemo harum? Nemo provident
              enim nobis illum rerum cupiditate at corporis fuga quo, iusto
              fugit quos porro sunt quae harum, accusamus deserunt, possimus
              optio dolorum nulla placeat numquam corrupti dolor delectus. Odio
              consectetur nobis asperiores animi unde laudantium nulla, nostrum,
              delectus optio beatae corrupti aspernatur deleniti autem doloribus
              at quibusdam dolor officiis!
            </p>
          </div>
          {/* Course outline with resourece */}
          <div className="px-6 space-y-2 ">
            <h2 className=" text-xl font-semibold ">Outline Of The Course</h2>
            <Outline />
          </div>
        </div>
        <div className=" col-span-1 space-y-3">
          {/* Announcements */}
          <div className="bg-white shadow rounded-2xl p-6 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Announcements
            </h2>
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
          {/* Exams */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Exams
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-700">Midterm Exam</p>
                <p className="text-gray-600 text-sm mt-1">
                  <CountdownTimer targetDate={new Date(Date.now() + (24 + 2) * 60 * 60 * 1000)} />

                  October 15, 2025 | Covers Week 1 - Week 6
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-700">Final Exam</p>
                <p className="text-gray-600 text-sm mt-1">
                  December 20, 2025 | Covers Entire Course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-10">
        {/* Assignments Overview*/}
        {/* <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Assignments
          </h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between">
              <span>Essay on Cultural Relativism</span>
              <span className="text-sm text-gray-500">Due Sept 20</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Fieldwork Observation Report</span>
              <span className="text-sm text-gray-500">Due Oct 10</span>
            </li>
          </ul>
        </div> */}

        {/* Discussion */}
        {/* <div className="bg-white shadow rounded-2xl p-6">
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
        </div> */}

        {/* Related Courses */}
        {/* <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Related Courses
          </h2>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline">
              Cultural Anthropology
            </li>
            <li className="text-blue-600 hover:underline">
              Linguistic Anthropology
            </li>
            <li className="text-blue-600 hover:underline">
              Biological Anthropology
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
