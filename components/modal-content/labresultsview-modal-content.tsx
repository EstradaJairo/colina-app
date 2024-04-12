"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const LabresultsviewModalContent = ({ isModalOpen }: Modalprops) => {
  return (
    <div className="w-[676px] h-[655px]">
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
            <div className="w-full max-w-xl">
              <iframe
                src={"/imgs/docs.png"}
                width="400px"
                height="400px"
                className=""
              ></iframe>
            </div>

            <div className="flex space-x-4 mt-4 ml-[80px] text-[15px]">
              <button className=" w-[100px] h-[35px] px-2 py-2 text-blue-500 bg-white-500 border-2 border-blue-500 ">
                Previous
              </button>

              <button className=" w-[100px] h-[35px] px-2 py-2 text-white bg-blue-500 hover:bg-blue-700 ">
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
    </div>
  );
};
