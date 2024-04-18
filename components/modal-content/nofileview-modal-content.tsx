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
      <div className="w-[676px] h-[590px]">
        <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
          <div className="items-center flex justify-between">
            <h2 className="p-title text-left text-[#071437] pl-10 mt-7">
              View Document Form
            </h2>
            <X
              onClick={() => isModalOpen(false)}
              className="w-7 h-7 text-black flex items-center mt-2 mr-4"
            />
          </div>
          <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
            No Attached Files
          </p>
        </div>
        <div className=" mb-9 pt-4">
          <div className="h-[380px] md:px-10 mt-5">
            <div className="even:bg-gray-50 cursor-pointer">
              <div className="w-full max-w-xl flex justify-between">
                <div
                  style={{
                    overflow: "block",
                    width: "350px",
                    height: "350px",
                  }}
                >
                  <Image
                    src="/imgs/nofile.png"
                    alt="Document"
                    width={500}
                    height={350}
                    className="w-89"
                  />
                </div>
                <div className="w-[200px]"></div>
                <p className="text-sm pl-10 text-gray-600 pb-10 pt-2 text-nowrap">
                  No Documents Found
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="justify-center flex border-t-4 ">
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
