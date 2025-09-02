import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";

export async function POST(request, { params }) {
  await dbConnect();
  const { courseId } = params;
  const { userId, role } = await request.json();

  if (role !== "teacher") {
    return new Response(
      JSON.stringify({ error: "Only teachers can pick a course" }),
      { status: 403 }
    );
  }
  try {
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

    // Add logic to pick the course for the user
    const course = await Course.findById(courseId);
    if (!course) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
      });
    }

    if (course.picked) {
      return Response.json({
        success: false,
        message: "This course has already been picked",
      });
    }
    course.picked = userId;
    await course.save();

    return new Response(
      JSON.stringify({ message: "Course picked successfully", course }),
      { status: 200 }
    );
  } catch (error) {}
}


export async function DELETE(request, { params }) {
  await dbConnect();
  const { courseId } = params;
  const { userId, role } = await request.json();

  if (role !== "teacher") {
    return new Response(
      JSON.stringify({ error: "Only teachers can unpick a course" }),
      { status: 403 }
    );
  }

  try {
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

    // Add logic to unpick the course for the user
    const course = await Course.findById(courseId);
    if (!course) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
      });
    }

    if (course.picked?.toString() !== userId) {
      return Response.json({
        success: false,
        message: "You have not picked this course",
      });
    }

    course.picked = null;
    await course.save();

    return new Response(
      JSON.stringify({ message: "Course unpicked successfully", course }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error.message }),
      { status: 500 }
    );
  }
}
