// app/api/resource/route.js (POST)
import { dbConnect } from "@/db/dbconnect";
import Resource from "@/models/resource";
import Course from "@/models/course";

export async function POST(request, { params }) {
  await dbConnect();

  try {
    const { title, url, description } = await request.json();
    const { courseId } = await params;

    if (!title || !url || !courseId) {
      return Response.json(
        { message: "Title, URL, and Course ID are required" },
        { status: 400 }
      );
    }

    // Ensure course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return Response.json({ message: "Course not found" }, { status: 404 });
    }

    // Create resource
    const resource = await Resource.create({
      title,
      url,
      description,
      course: courseId,
    });

    // Add resource to course
    course.resource.push(resource._id);
    await course.save();

    return Response.json(
      { message: "Resource created successfully", resource },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
