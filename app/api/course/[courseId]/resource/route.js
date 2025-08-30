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

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { title, url, description, resourceId } = await request.json();

    if (!resourceId) {
      return Response.json(
        { message: "Resource ID is required" },
        { status: 400 }
      );
    }

    // Find and update resource
    const updatedResource = await Resource.findByIdAndUpdate(
      resourceId,
      { title, url, description },
      { new: true }
    );

    if (!updatedResource) {
      return Response.json({ message: "Resource not found" }, { status: 404 });
    }

    return Response.json(
      { message: "Resource updated successfully", updatedResource },
      { status: 200 }
    );
  } catch (error) {}
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    // Parse request body
    const { resourceId } = await request.json();
    const { courseId } = await params;

    if (!resourceId || !courseId) {
      return new Response.json(
        { message: "Resource ID and Course ID are required" },
        { status: 400 }
      );
    }

    // Delete resource by ID
    const deletedResource = await Resource.findByIdAndDelete(resourceId);

    if (!deletedResource) {
      return Response.json(
        { message: "Resource not found" },
        {
          status: 404,
        }
      );
    }

    // Remove resource from course
    await Course.findByIdAndUpdate(courseId, {
      $pull: { resource: resourceId },
    });

    return Response.json(
      {
        message: "Resource deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
