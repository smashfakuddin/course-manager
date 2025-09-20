"use client";

import { PlusIcon } from "lucide-react";
import Modal from "../common/Modal";
import { useState } from "react";

export default function AddExams() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalOpen=()=>{
    setModalOpen(true)
  }
  return (
    <>
      <h2 className="text-xl flex items-center justify-between font-semibold text-gray-800 mb-4">
        Upcoming Exams <PlusIcon className="cursor-pointer" onClick={handleModalOpen}/>
      </h2>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
            <input type="text" />
          {/* <AddOutlineForm
            outlineObject={undefined}
            onClose={handleModalClose}
            onSubmit={handleSubmit}
          /> */}
        </Modal>
      )}
    </>
  );
}
