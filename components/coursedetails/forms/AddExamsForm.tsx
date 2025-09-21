"use client";
import { createExam, editExam } from "@/db/queries/exam";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

type Exam = {
  _id: string;
  title: string;
  description: string;
  date: Date | string;
};

export default function AddExamsForm({
  onClose,
  exam,
  isEdit,
}: {
  onClose: () => void;
  exam?: Exam;
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
        response = await createExam(params.courseid, data);
      } else if (isEdit) {
        response = await editExam(data, exam?._id.toString());
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
        {isEdit ? "Edit" : "Add"} Events
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
          defaultValue={exam?.title}
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
          defaultValue={exam?.description}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g Awesome Course Detail"
          required
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Submission Date
        </label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          defaultValue={
            exam?.date
              ? new Date(exam.date).toISOString().slice(0, 16) // "2025-12-20T14:30"
              : ""
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button className="btn-main w-full" type="submit">
        Add
      </button>
    </form>
  );
}
