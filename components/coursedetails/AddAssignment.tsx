"use client"
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal";
import AddAssignmentForm from "./forms/AddAssignmentForm";

export default function AddAssignment() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <>
      <h2 className="text-xl flex items-center justify-between font-semibold text-gray-800 mb-4">
        Upcoming Assignment{" "}
        <PlusIcon className="cursor-pointer" onClick={handleModalOpen} />
      </h2>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
          <AddAssignmentForm onClose={handleModalClose} onSubmit={()=>{}}/>
        </Modal>
      )}
    </>
  );
}
