"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import { revalidatePath } from "next/cache";
import Outline from "@/models/outline";
import Assignment from "@/models/assignment";
import Resource from "@/models/resource";
import Exam from "@/models/exams";

// here is current running semester constant

const currentSemester = [1, 3, 5, 7];
// end here

export async function getAllAvailableCourses(user) {
  await dbConnect();
  const { role, semester } = user;
  if (role === "teacher") {
    const courses = await Course.find({
      semester: { $in: currentSemester },
    }).populate({
      path: "picked",
      select: "name email",
    });
    return courses;
  } else if (role === "student") {
    const courses = await Course.find({ semester: semester })
      .populate({
        path: "picked",
        select: "name email",
      })
      .lean();
    return courses;
  } else if (role === "admin") {
    const courses = await Course.find({})
      .populate({
        path: "picked",
        select: "name email",
      })
      .lean();
    return courses;
  }

  return [];
}

export async function getCourseById(courseId) {
  await dbConnect();

  const courseDocs = await Course.findById(courseId)
    .populate({
      path: "picked",
      select: "name email",
    })
    .populate({ path: "enrolled", select: "name email" })
    .populate({
      path: "outline",
      populate: {
        path: "resource", // 👈 nested populate
      },
    })
    .populate({ path: "assignment" })
    .populate({ path: "event" })
    .lean();

  if (!courseDocs) {
    return { success: false, message: "Course Not Found" };
  }
  const courses = JSON.parse(JSON.stringify(courseDocs));
  return courses;
}

export async function createCourse(data) {
  await dbConnect();
  const { name } = data;
  const existing = await Course.findOne({ name });
  if (existing) {
    throw new Error("Course with this name already exists");
  }

  await Course.create(data);

  revalidatePath("/dashboard");

  return { message: "Course created successfully" };
}

export async function deleteCourse(courseId) {
  await dbConnect();

  const course = await Course.findById(courseId);

  if (!course) {
    return { success: false, message: "Course not found" };
  }

  const outlines = await Outline.find({ _id: { $in: course.outline } });
  for (const outline of outlines) {
    if (outline.resource && outline.resource.length > 0) {
      await Resource.deleteMany({ _id: { $in: outline.resource } });
    }
  }

  // Delete outlines
  await Outline.deleteMany({ _id: { $in: course.outline } });

  // Delete assignments
  await Assignment.deleteMany({ _id: { $in: course.assignment } });

  // Delete exams
  await Exam.deleteMany({ _id: { $in: course.event } });

  // Finally delete the course
  await Course.findByIdAndDelete(courseId);

  revalidatePath("/dashboard");
  return { success: true, message: "Course and all related data deleted" };
}
