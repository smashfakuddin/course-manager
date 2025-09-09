'use client'

import { deleteCourse } from "@/db/queries/courses";
import DeleteIcon from "@/icons/delete";
import { toast } from "react-toastify";
export default function DeleteCourse({ id }: { id: string }) {
  const handleDelete = async () => {
    // Implement delete functionality here
    const response = await deleteCourse(id)
    if(response.message){
      toast.success(response.message || "Course deleted successfully");
    }
  };
  return (
    <button className=" btn-alt" onClick={handleDelete} title="Delete Course">
      <DeleteIcon />
    </button>
  );
}
