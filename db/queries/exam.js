"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Course from "@/models/course";
import Assignment from "@/models/assignment";
import { revalidatePath } from "next/cache";
import Exam from "@/models/exams";

export async function createExam(courseId, data) {
  await dbConnect();
  try {
    const { title, description, date } = data;
    if (!title || !description || !date) {
      return { success: false, message: "need All Data" };
    }
    const course = await Course.findById(courseId);

    if (!course) {
      return { success: false, message: "course Not found" };
    }

    const exam = await Exam.create(data);

    course.event.push(exam._id);

    await course.save();
    revalidatePath("/courses/[courseid]");
    return { success: true, message: "Assignment Created Successfully" };
  } catch (error) {
    console.log(error);
  }
}

export async function editExam(data, examId) {
  await dbConnect();

  try {
    const exam = await Exam.findById(examId);
    if (!exam) {
      return { success: false, message: "Exam not found" };
    }

    // 3. Update fields
    exam.title = data.title ?? exam.title;
    exam.description = data.description ?? exam.description;
    exam.date = data.date ? new Date(data.date) : exam.date;

    await exam.save();

    // 4. Revalidate cache
    revalidatePath("/courses/[courseid]");

    return { success: true, message: "Exam updated successfully" };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}
export async function deleteExamById(examId, courseId) {
  await dbConnect();
  try {
    const exam = await Exam.findById(examId);
    if (!exam) {
      return { success: false, message: "Exam not found" };
    }

    // Delete the assignment
    await Exam.findByIdAndDelete(examId);

    // Remove assignment reference from the course
    await Course.findByIdAndUpdate(courseId, {
      $pull: { event: examId },
    });

    // Optional: Revalidate the course page to reflect changes
    revalidatePath("/courses/[courseid]");

    return { success: true, message: "Exam deleted successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error deleting Exam" };
  }
}
