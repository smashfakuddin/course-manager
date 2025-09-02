import { auth } from "@/auth";
import CourseCard from "./CourseCard";

export default async function CourseList() {
  const session = await auth();
  let courses = [];
  try {
    const response = await fetch(`${process.env.BASE_URL}/course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (response.ok) {
      const result = await response.json();
      courses = result.courses;
    } else {
      console.error("Failed to fetch courses");
    }
  } catch (error) {}

  const handlePickCourse = async (
    courseId: string,
    teacherId: string,
    role: string
  ) => {
    "use server";

    console.log("ids", courseId, teacherId, role);
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/course/${courseId}/picked`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: teacherId, role }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to pick course");
      }

      const result = await response.json();
      console.log(result.message || "Course picked successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Available Courses will be listed here.
      <div className="my-5">
        {courses &&
          courses.map((course: any) => (
            <CourseCard
              key={course._id}
              course={course}
              session={session}
              handlePickCourse={handlePickCourse}
            />
          ))}
      </div>
    </div>
  );
}
