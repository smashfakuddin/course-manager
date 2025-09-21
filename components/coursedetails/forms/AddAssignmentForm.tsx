"use client";
import { createAssignment, editAssignment } from "@/db/queries/assignment";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

type Assignment = {
  _id: string;
  title: string;
  description: string;
  submissionDate: Date | string;
};
export default function AddAssignmentForm({
  onClose,
  assignment,
  isEdit,
}: {
  onClose: () => void;
  assignment?: Assignment;
  isEdit: boolean;
}) {
  const params = useParams();

  const handleSubmit = async (formData: FormData) => {
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    try {
      let response;
      if (!isEdit) {
        response = await createAssignment(params.courseid, data);
      } else if (isEdit) {
        response = await editAssignment(data, assignment?._id.toString());
      }

      if (response?.success) {
        toast.success(response.message);
      } else if (!response?.success) {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };
  return (
    <form className="space-y-4" action={handleSubmit}>
      <h2 className="text-center text-2xl font-semibold tracking-tighter">
        Add Assignment
      </h2>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Assignment Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={assignment?.title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Introduction To The Anp"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={assignment?.description}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g Awesome Course Detail"
          required
        />
      </div>
      <div>
        <label
          htmlFor="submissionDate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Submission Date
        </label>
        <input
          type="datetime-local"
          name="submissionDate"
          id="submissionDate"
          defaultValue={
            assignment?.submissionDate
              ? new Date(assignment?.submissionDate).toISOString().slice(0, 16) // "2025-12-20T14:30"
              : ""
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button className="btn-main w-full" type="submit">
        {isEdit ? "Save Edit" : "Save"}
      </button>
    </form>
  );
}
