"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";
import Image from "next/image";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const LabresultsModalContent = ({ isModalOpen }: Modalprops) => {
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-[676px] h-[565px]">
      <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
        <div className="items-center flex justify-between">
          <h2 className="p-title text-left text-[#071437] pl-10 mt-7">
            Add Laboratory Result
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
        <div className="h-[600px] max-h-[390px] md:px-10 mt-5">
          <form className="">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  HEMOGLOBIN A1c
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input hemoglobin a1c"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  FASTING BLOOD GLUCOSE
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input fasting blood glucose"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  TOTAL CHOLESTEROL
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input total cholesterol"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  LDL CHOLESTEROL
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                    placeholder="input ldl cholesterol"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  HDL CHOLESTEROL
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input hdl cholesterol"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-md font-bold leading-6 text-gray-900 required-field"
                >
                  TRIGLYCERIDES
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                    placeholder="input triglycerides"
                  />
                </div>
              </div>
              <div className="grid-cols-1 grid">
                <label
                  htmlFor="formControlsFile"
                  className="relative h-[70px] w-[596px] bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-1.5"
                >
                  <Image
                    className="w-10 h-10 mr-1"
                    width={50}
                    height={50}
                    src={"/svgs/folder-add.svg"}
                    alt={""}
                  />
                  <div className="flex pb-5 text-nowrap text-[15px] ">
                    <p className="">Upload or Attach Files or</p>
                    <p className="underline decoration-solid text-blue-500 ml-1">
                      Browse
                    </p>
                  </div>
                  <span className="text-[14px] font-normal absolute bottom-2 text-[#667085] ml-10 pb-1">
                    Minimum file size 100 MB.
                  </span>
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="pt-26">
          <div className="justify-center flex border-t-4 pt-26">
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
