import { dbConnect } from "@/db/dbconnect";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  await dbConnect();
  try {
    const { name, description, event, picked, resource, credits, semester } =
      await request.json();

    if (!name || !description) {
      return Response.json({
        message: "Name and description are required",
      });
    }

    const existingCourse = await Course.findOne({ name });
    if (existingCourse) {
      return Response.json(
        { message: "Course with this name already exists" },
        { status: 409 }
      );
    }
    const course = await Course.create({
      name,
      description,
      event: event || [],
      picked: picked || null,
      resource: resource || [],
      credits,
      semester,
    });

    revalidatePath("/dashboard");

    return Response.json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function GET() {
  await dbConnect();
  try {
    const courses = await Course.find({});
    return Response.json({
      message: "Courses fetched successfully",
      courses,
    });
  } catch (error) {
    return Response.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}
