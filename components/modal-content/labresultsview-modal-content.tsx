import { X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
interface ModalProps {
  isModalOpen: (isOpen: boolean) => void;
}

export const LabResultsviewModalContent = ({ isModalOpen }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[676px] h-[690px]">
      <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
        <div className="items-center flex justify-between">
          <h2 className="p-title text-left text-[#071437] pl-10 mt-7">
            View Laboratory Result
          </h2>
          <X
            onClick={() => isModalOpen(false)}
            className="w-7 h-7 text-black flex items-center mt-2 mr-4"
          />
        </div>
        <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
          Submit your log details.
        </p>
      </div>
      <div className=" mb-9 pt-4">
        <div className="h-[600px] max-h-[480px] md:px-10 mt-5">
          <div className="even:bg-gray-50 cursor-pointer">
            <div className="w-full max-w-xl flex justify-between gap-2">
              <div
                style={{ overflow: "scroll", width: "400px", height: "350px" }}
              >
                <Image
                  src="/imgs/docs.png"
                  alt="Document"
                  width={400}
                  height={800}
                  className=""
                  onClick={toggleModal}
                />
              </div>
              <div className="w-[150px]">
                <div className="flex justify-end text-[12px] font-bold">
                  Select All
                </div>
                <div className="mt-2 h-[30px] bg-gray-100 shadow-sm">
                  <input type="checkbox" id="labCheckbox"></input>
                  <label className="ml-2">labresult.jpg</label>
                </div>
                <div className="mt-2 h-[30px] bg-gray-100 shadow-sm">
                  <input type="checkbox" id="labCheckbox"></input>
                  <label className="ml-2">pamela.jpg</label>
                </div>
                <div className="mt-2 h-[30px] bg-gray-100 shadow-sm">
                  <input type="checkbox" id="labCheckbox"></input>
                  <label className="ml-2">jas.jpg</label>
                </div>
                <div className="mt-4 ml-[70px]">
                  <button className=" w-[80px] h-[30px] text-white bg-blue-500 hover:bg-blue-700 ">
                    <label className="">delete</label>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black ">
              <div className="bg-white p-6 max-w-lg rounded-lg">
                <button
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <Image
                  src="/imgs/docs.png"
                  alt="Document"
                  width={700}
                  height={500}
                  className=""
                  onClick={closeModal}
                />
              </div>
            </div>
          )}

          <div className="flex space-x-4 mt-4 ml-[115px] text-[15px]">
            <button className=" w-[80px] h-[30px] text-blue-500 bg-white-500 border-2 border-blue-500 ">
              Previous
            </button>

            <button className=" w-[80px] h-[30px] text-white bg-blue-500 hover:bg-blue-700 ">
              Next
            </button>
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
