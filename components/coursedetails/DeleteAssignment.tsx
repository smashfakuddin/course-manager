"use client";
import { deleteAssignmentById } from "@/db/queries/assignment";
import { Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function DeleteAssignment({ id }: { id: string }) {
  const params = useParams();
  const handleDeleteAssignment = async () => {
    const response = await deleteAssignmentById(id, params.courseid);
    if (response.success) {
      toast.success(response.message);
    } else if (!response.success) {
      toast.error(response.message);
    }
  };
  return <Trash className=" h-4 w-4 cursor-pointer" onClick={handleDeleteAssignment} />;
}
