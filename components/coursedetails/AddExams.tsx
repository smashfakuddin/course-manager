"use client";

import { Edit, PlusIcon } from "lucide-react";
import Modal from "../common/Modal";
import { useState } from "react";
import AddExamsForm from "./forms/AddExamsForm";

type Exam = {
  _id: string;          // use lowercase `string` instead of `String`
  title: string;
  description: string;
  date: Date | string;  // sometimes comes from Mongo as string
};

type Props = {
  isEdit: boolean;
  exam?: Exam;          // no need for `<Exam | undefined>`
};

export default function AddExams({ isEdit, exam }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  console.log('logging exam',exam)
  const handleModalClose = () => {
    setModalOpen((prev) => !prev);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <>
      {/* Upcoming Exams{" "} */}
      {isEdit ? (
        <Edit className="cursor-pointer h-4 w-4" onClick={handleModalOpen}/>
      ) : (
        <PlusIcon
          // className="cursor-pointer h-4 w-4"
          onClick={handleModalOpen}
        />
      )}

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleModalClose}>
          <AddExamsForm onClose={handleModalClose} exam={exam} isEdit={isEdit}/>
        </Modal>
      )}
    </>
  );
}
