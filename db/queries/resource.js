"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Outline from "@/models/outline";
import Resource from "@/models/resource";
import { revalidatePath } from "next/cache";

export async function addResourceByOutline(data) {
  await dbConnect();
  if (!data) {
    return { success: false, message: "Need To enter All Data" };
  }

  const { title, url, description, outlineId } = data;
  try {
    const resource = await Resource.create({ title, url, description });
    const outline = await Outline.findById(outlineId);
    outline.resource.push(resource._id);

    await outline.save();
    revalidatePath('/courses/[courseid]')
    return { success: true, message: "Resource Saved Successfully" };
  } catch (e) {
    return { success: false, message: "Resource Not Saved" }
  }
}


export async function deleteResourceById(resourceId, outlineId) {
  await dbConnect();

  if (!resourceId || !outlineId) {
    return { success: false, message: "Need to enter both IDs" };
  }

  try {
    // Remove the resource document itself
    await Resource.findByIdAndDelete(resourceId);

    // Pull the resource reference from the outline
    await Outline.findByIdAndUpdate(outlineId, {
      $pull: { resource: resourceId },
    });

    // If using Next.js App Router, revalidate the course page
    revalidatePath("/courses/[courseid]");

    return { success: true, message: "Resource Deleted Successfully" };
  } catch (e) {
    console.error("Delete resource error:", e);
    return { success: false, message: "Resource Not Deleted" };
  }
}




