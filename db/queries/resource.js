"use server";

import { dbConnect } from "@/db/dbconnect.js";
import Outline from "@/models/outline";
import Resource from "@/models/resource";

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
    return { success: true, message: "Resource Saved Successfully" };
  } catch (e) {}
}
