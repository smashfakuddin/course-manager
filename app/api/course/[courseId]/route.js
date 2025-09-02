import { dbConnect } from "@/db/dbconnect";
import Course from "@/models/course";
import User from "@/models/user";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    // Parse request body
    const { courseId: id } = await params;

    if (!id) {
      return new Response.json(
        { message: "Course ID is required" },
        { status: 400 }
      );
    }

    // Delete course by ID
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return Response.json(
        { message: "Course not found" },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        message: "Course deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const { courseId: id } = await params;

    if (!id) {
      return new Response.json(
        { message: "Course ID is required" },
        { status: 400 }
      );
    }

    const course = await Course.findById(id)
      .populate({ path: "enrolled", model: User, select: "name email" })
      .populate({ path: "picked", model: User, select: "name email" });

    if (!course) {
      return Response.json({ message: "Course not found" }, { status: 404 });
    }

    return Response.json({
      message: "Course fetched successfully",
      course,
    });
  } catch (error) {
    return Response.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}
