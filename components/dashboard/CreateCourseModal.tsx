"use client";

import { set } from "mongoose";
import { useState, FC } from "react";

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    description: string;
    semester: number;
    credits: number;
  }) => void;
}

const CreateCourseModal: FC<CreateCourseModalProps> = ({
  isOpen = false,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [semester, setSemester] = useState<number>(1);
  const [credits, setCredits] = useState<number>(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, semester, credits });
    setName("");
    setDescription("");
    setSemester(1);
    setCredits(3);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#003652] dark:bg-gray-900 rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Course Title</label>
            <input
              type="text"
              placeholder="Write course title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={description}
              placeholder="Write course description"
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5}
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Semester */}
          <div>
            <label className="block mb-1 font-medium">Semester</label>
            <input
              type="number"
              value={semester}
              onChange={(e) => setSemester(Number(e.target.value))}
              required
              min={1}
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Credits */}
          <div>
            <label className="block mb-1 font-medium">Credits</label>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(Number(e.target.value))}
              required
              min={1}
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="btn-alt-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;
