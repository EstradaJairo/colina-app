import React, { useEffect, useState } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const NotesModalContent = ({ isModalOpen }: Modalprops) => {
  const [selectedStatus, setSelectedStatus] = useState(""); // State to hold the selected status

  return (
    <div className="w-[676px] h-[465px] bg-[#FFFFFF] rounded-md">
      <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
        <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
          Add Note and Compose
        </h2>
        <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">
          Submit your log details.
        </p>
      </div>
      <div className=" mb-9 pt-4">
        <div className="h-[600px] max-h-[300px] md:px-10 mt-5">
          <form className="">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                >
                  SUBJECT
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input medication"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                >
                  NOTES
                </label>
                <div className="mt-2.5">
                  <textarea
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input notes"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <div className="justify-center flex border-t-2">
            <button
              onClick={() => isModalOpen(false)}
              type="button"
              className="w-[600px] h-[50px] px-3 py-2 bg-[#BCBCBC] hover:bg-[#D9D9D9] font-medium text-[#000] mt-2 mr-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-[600px] px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE]  text-[#ffff] font-medium mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
