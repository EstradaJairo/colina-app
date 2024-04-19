import { X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
  isModalOpen: (isOpen: boolean) => void;
}

export const NofileviewModalContent = ({ isModalOpen }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const toggleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const EditModeComponent = () => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
      setEditMode(!editMode);
      setShowCheckboxes(false);
    };
    const toggleCheckboxes = () => {
      setShowCheckboxes(!showCheckboxes);
    };

    const selectAll = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = true;
      });
    };

    return (
      <div className="w-[676px] h-[540px]">
        <div className="mb-9 ">
          <div className="h-[400px] md:px-10 mt-5 flex justify-center items-center">
            <div className="even:bg-gray-50 cursor-pointer">
              <div
                style={{ overflow: "hidden", width: "400px", height: "400px" }}
              >
                <Image
                  src="/imgs/nodocs.png"
                  alt="Document"
                  width={500}
                  height={200}
                  className="w-89 mt-8"
                />
              </div>
              <div className="flex justify-center font-bold mb-4 mt-2">
                No image/document found!
              </div>
              <div className="flex flex-row justify-center">
                <p className="border-2 rounded-l-lg px-2 py-2 text-gray-400 text-[15px]">
                  Upload or Attach Files or
                </p>
                <label
                  htmlFor="imageUpload"
                  className="decoration-solid text-[15px] bg-[#007C85] px-2 py-2 text-white border-r-lg cursor-pointer rounded-r-lg"
                >
                  Browse
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="justify-center flex ">
            <button
              onClick={() => isModalOpen(false)}
              type="button"
              className="w-[600px] h-[50px] px-3 py-2 bg-[#BCBCBC] hover:bg-[#D9D9D9] font-medium text-white mt-4 mr-[3px] rounded-bl-md"
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-[600px] px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE]  text-[#ffff] font-medium mt-4 rounded-br-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <EditModeComponent />;
};
