import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";

export async function POST(request, { params }) {
  await dbConnect();
  const { courseId } = await params;
  const { userId } = await request.json();

  if (!userId) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
    });
  }
  if (!courseId) {
    return new Response(JSON.stringify({ error: "Course ID is required" }), {
      status: 400,
    });
  }

  const course = await Course.findById(courseId);
  if (!course) {
    return new Response(JSON.stringify({ error: "Course not found" }), {
      status: 404,
    });
  }

  if (course.enrolled.includes(userId)) {
    return new Response(
      JSON.stringify({ message: "User already enrolled in this course" }),
      { status: 200 }
    );
  }

  course.enrolled.push(userId);
  await course.save();

  return new Response(
    JSON.stringify({ message: "User enrolled successfully", course }),
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { courseId } = await params;
  const { userId } = await request.json();

  if (!userId) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
    });
  }
  if (!courseId) {
    return new Response(JSON.stringify({ error: "Course ID is required" }), {
      status: 400,
    });
  }

  const course = await Course.findById(courseId);
  if (!course) {
    return new Response(JSON.stringify({ error: "Course not found" }), {
      status: 404,
    });
  }

  if (!course.enrolled.includes(userId)) {
    return new Response(
      JSON.stringify({ message: "User is not enrolled in this course" }),
      { status: 200 }
    );
  }

  course.enrolled = course.enrolled.filter(
    (enrolledId) => enrolledId.toString() !== userId
  );
  await course.save();

  return new Response(
    JSON.stringify({ message: "User unenrolled successfully"  }),
    { status: 200 }
  );
}
