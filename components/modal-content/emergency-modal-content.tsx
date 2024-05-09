"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const EmergencyModalContent = ({ isModalOpen }: Modalprops) => {
  const [selectedCodeStatus, setSelectedCodeStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="w-[1200px] h-[645px] p-10">
        <div className="bg-[#ffffff] w-full h-[70px]">
          <div className="items-center flex justify-center">
            <h2 className="p-title text-left text-[#071437]">
              Incase of Emergency
            </h2>
            {/* <X
              onClick={() => isModalOpen(false)}
              className="w-7 h-7 text-black flex items-center mt-2"
            /> */}
          </div>
          <div className="items-center flex justify-center">
            <p className="text-sm text-gray-600">
              Add emergency contact and make sure to submit.
            </p>
          </div>

          <div className="flex place-items-end mr-4"></div>
        </div>

        <form className="">
          <div className="">
            <div className=" flex justify-center gap-2 ">
              <div className="flex justify-center items-center">
                <Image
                  src="/svgs/circle.svg"
                  className="px-1"
                  alt="codestatus"
                  width="26"
                  height="26"
                />
                <p className="">Contact details info</p>
              </div>
              {/* <div>
                  <Image
                    src="/svgs/line.svg"
                    className="px-1"
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                </div> */}
              <div className="flex justify-center items-center">
                <Image
                  src="/svgs/circle.svg"
                  className="px-1"
                  alt="codestatus"
                  width="26"
                  height="26"
                />
                <p className="">Option 1</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/svgs/circle.svg"
                  className="px-1"
                  alt="codestatus"
                  width="26"
                  height="26"
                />
                <p className="">Option 1</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-6 gap-4">
              <div className="">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-[358px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input firstname"
                  />
                </div>
              </div>
              <div className="w-">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-[358px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input address"
                  />
                </div>
              </div>
              <div className="w-">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Zip
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-[358px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input zip"
                  />
                </div>
              </div>
              <div className="w-">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-[358px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input email"
                  />
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </form>

        <X
          onClick={() => isModalOpen(false)}
          className="w-7 h-7 text-black flex items-center mt-2"
        />
      </div>
    </>
  );
};
