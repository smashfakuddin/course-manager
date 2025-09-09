import Welcome from "./Welcome";
import AvailableCourse from "./AvailableCourse";
import PickedCourse from "./PIckedCourse";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <Welcome session={session} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AvailableCourse session={session}/>
        <PickedCourse session={session}/>
      </div>

      {/* Extra Dashboard Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Announcements</h3>
          <p className="text-gray-600 text-sm">
            Stay updated with the latest notices from the department.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Assignments</h3>
          <p className="text-gray-600 text-sm">
            Submit and manage assignments for your picked courses.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Discussions</h3>
          <p className="text-gray-600 text-sm">
            Join conversations and share resources with classmates.
          </p>
        </div>
      </div>
    </div>
  );
}
