"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import Assignment from "@/models/assignment";
import { revalidatePath } from "next/cache";

export async function createAssignment(courseId, data) {
  await dbConnect();
  try {
    const { title, description, submissionDate } = data;
    if (!title || !description || !submissionDate) {
      return { success: false, message: "need All Data" };
    }
    const course = await Course.findById(courseId);

    if (!course) {
      return { success: false, message: "course Not found" };
    }

    const assignment = await Assignment.create(data);

    course.assignment.push(assignment._id);

    await course.save();
    revalidatePath("/courses/[courseid]");
    return { success: true, message: "Assignment Created Successfully" };
  } catch (error) {
    console.log(error);
  }
}

export async function editAssignment(data, assignmentId) {
  await dbConnect();

  try {
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return { success: false, message: "Assignment not found" };
    }

    // Update only provided fields
    if (data.title) assignment.title = data.title;
    if (data.description) assignment.description = data.description;
    if (data.submissionDate)
      assignment.submissionDate = new Date(data.submissionDate);

    await assignment.save();

    // Revalidate any cache if using Next.js caching
    revalidatePath("/courses/[courseid]");

    return { success: true, message: "Assignment updated successfully" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong while updating the assignment",
    };
  }
}
export async function deleteAssignmentById(assignmentId, courseId) {
  await dbConnect();
  try {
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return { success: false, message: "Assignment not found" };
    }

    // Delete the assignment
    await Assignment.findByIdAndDelete(assignmentId);

    // Remove assignment reference from the course
    await Course.findByIdAndUpdate(courseId, {
      $pull: { assignment: assignmentId },
    });

    // Optional: Revalidate the course page to reflect changes
    revalidatePath(`/courses/[courseid]`);

    return { success: true, message: "Assignment deleted successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error deleting assignment" };
  }
}
