"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../common/Modal";
import AddOutlineForm from "./AddOutlineForm";

export default function AddOutline() {
  const [modalOpen, setModalOpen] = useState(false);
  const outlineObject = {
    id: crypto.randomUUID(),
    title: "This is an awesome title",
    description: "this is an awesome description",
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
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
          <AddOutlineForm outlineObject={outlineObject}/>
        </Modal>
      )}
    </>
  );
}
