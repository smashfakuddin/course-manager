"use client";
import { createAssignment } from "@/db/queries/assignment";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function AddAssignmentForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: any) => void; // 👈 parent handles add/edit
}) {
  const params = useParams();

  const handleSubmit = async (formData: FormData) => {
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    try {
      const response = await createAssignment(params.courseid, data);
      console.log(response)
      if (response?.success) {
        toast.success(response.message);
      } else if (!response?.success) {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log(error);
    }finally{
      onClose()
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button className="btn-main w-full" type="submit">
        Add
      </button>
    </form>
  );
}
