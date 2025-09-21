"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal";
import { addOutlineByCourse } from "@/db/queries/outline";
import AddOutlineForm from "./forms/AddOutlineForm";
import { toast } from "react-toastify";

type AddOutlineProps = {
  courseId: string;
};

type Payload = {
  title: string;
  description: string;
};
export default function AddOutline({ courseId }: AddOutlineProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (payload: Payload, isEdit: boolean) => {
    try {
      const data = {
        ...payload,
        courseId,
      };
      const response = await addOutlineByCourse(data);
      if (response.success) {
        toast.success(response.message);
      } else if (!response.success) {
        toast.error(response.message);
      }
    } catch (error) {}
  };
  return (
    <>
      <button
        className=" btn-main flex items-center gap-2"
        onClick={handleModalOpen}
      >
        <PlusIcon className="h-4 w-4" /> Add Outline
      </button>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
          <AddOutlineForm
            outlineObject={undefined}
            onClose={handleModalClose}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
}
