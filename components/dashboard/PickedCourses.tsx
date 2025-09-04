import { getPickedCoursesByUserId } from "@/db/queries/picked";

export default async function PickedCourses({
  userId,
}: {
  userId: string | undefined;
}) {
  const pickedCourses = await getPickedCoursesByUserId(userId);
  console.log("Picked Courses:", pickedCourses);

  return <div>

    {pickedCourses.length === 0 ? (
      <p>No picked courses found.</p>
    ) : (
      <div>
        <h2 className="text-xl font-bold mb-4">Picked Courses</h2>
        <ul className=" list-inside">
          {pickedCourses.map((course) => (
            <li key={course._id} className="mb-2">
              <span className="font-semibold">{course.name}</span> -{" " }
              {course.description}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>;
}
