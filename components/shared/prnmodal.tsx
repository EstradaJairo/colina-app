import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ label, isOpen, isModalOpen }: ModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <div className={`absolute inset-[-100px] bg-[#76898A99] flex items-center justify-center pb-[20px]`}>
      <div className="w-[676px] h-[660px] bg-[#FFFFFF] rounded-md">
        <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
          <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
            Add PRN Medication Log
          </h2>
          <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">Submit your log details.</p>
        </div>
        <div className=" mb-9 pt-4">
          <div className="w-full max-h-[300px] md:px-10 mt-5">
            <form>
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    MEDICATION
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Input medication"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    NOTES
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Input notes"
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
                <div className="flex-grow md:mr-8 mb-4 md:mb-0">
                <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    DATE 
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="date"
                      className="block w-[290px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Input medication"
                    />
                  </div>
                </div>
                <div className="flex-grow md:mr-8 mb-4 md:mb-0">
                <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    TIME
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="time"
                      className="block w-[290px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Input medication"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    STATUS
                  </label>
                  <div className="relative">
                    <select
                      id="status"
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Select status</option>
                      <option value="active">HELD</option>
                      <option value="inactive">GIVEN</option>
                    </select>
                    {/* <img
                    className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none"
                    src="svgs/chevron.svg"
                    alt="Dropdown Arrow"
                    style={{ width: '1rem', height: '1rem' }}
                      /> */}

                      <Image className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none" width={20} height={20} src={"/svgs/chevron-up.svg"} alt={""} />
                  </div>
                </div>
              </div>
              <div className="mt-8 pb-3 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="w-[290px] h-12  hover:bg-[#D9D9D9] font-medium rounded-[7px] text-[#000] ring-1 ring-gray-200 mr-8"
                >
                  Cancel
                </button>     
                <button
                  type="button"
                  className="w-[290px] h-12 bg-[#1B84FF] hover:bg-[#2765AE] rounded-[7px] text-[#ffff] font-medium"
                >
                  Submit
                </button>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
