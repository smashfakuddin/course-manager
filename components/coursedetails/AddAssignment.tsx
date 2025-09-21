"use client";
import { Edit, PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal";
import AddAssignmentForm from "./forms/AddAssignmentForm";

type Assignment = {
  _id: string;
  title: string;
  description: string;
  submissionDate: Date | string;
};

export default function AddAssignment({
  isEdit,
  assignment,
}: {
  isEdit: boolean;
  assignment?: Assignment;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <>
      {isEdit ? (
        <Edit className="cursor-pointer h-4 w-4" onClick={handleModalOpen} />
      ) : (
        <PlusIcon onClick={handleModalOpen} />
      )}

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
          <AddAssignmentForm onClose={handleModalClose} assignment={assignment} isEdit={isEdit}/>
        </Modal>
      )}
    </>
  );
}
