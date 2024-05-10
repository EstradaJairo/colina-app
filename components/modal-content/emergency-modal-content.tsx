"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const EmergencyModalContent = ({ isModalOpen }: Modalprops) => {
  const [nextPage, setNextPage] = useState(false);
  const [nextPages, setNextPages] = useState(false);

  const handleContinue = () => {
    setNextPage(true);
  };
  const handleContinues = () => {
    setNextPages(true);
  };

  return (
    <div className="w-[1200px] h-[645px] p-7 relative">
      {nextPage === false ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 mb-5">
              <X
                onClick={() => isModalOpen(false)}
                className="w-7 h-7 text-black absolute top-6 right-6"
              />
              <p className="p-title">Incase of Emergency Contact</p>
              <p className="text-[#7E7E7E] font-medium pb-">
                Add emergency contact and make sure to submit.
              </p>
            </div>
            <div className="text-[#007C85]">
              <div className="flex mt-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15px] text[#007C85]">
                    Contact Details Info
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/svgs/circle2.svg"
                    className=""
                    alt="codestatus"
                    width="25"
                    height="25"
                  />
                  <p>Option 1</p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/svgs/circle2.svg"
                    className=""
                    alt="codestatus"
                    width="25"
                    height="25"
                  />
                  <p>Option 2</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Relationship
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input relationship"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact email"
                  />
                </div>
              </div>
              <div className="justify-end flex ">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  type="submit"
                  className="
            w-[150px] h-[45px] bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium rounded-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : nextPages === false ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 mb-5">
              <X
                onClick={() => isModalOpen(false)}
                className="w-7 h-7 text-black absolute top-6 right-6"
              />
              <p className="p-title">Incase of Emergency Contact</p>
              <p className="text-[#7E7E7E] font-medium pb-">
                Add emergency contact and make sure to submit.
              </p>
            </div>
            <div className="text-[#007C85]">
              <div className="flex mt-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15px] text-[#007C85]">
                    Contact Details Info
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15] text-[#007C85]">Option 1</p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/svgs/circle2.svg"
                    className=""
                    alt="codestatus"
                    width="25"
                    height="25"
                  />
                  <p>Option 2</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Relationship
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input relationship"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact email"
                  />
                </div>
              </div>
              <div className="justify-end flex ">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleContinues}
                  type="submit"
                  className="w-[150px] h-[45px] bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium rounded-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 mb-5">
              <X
                onClick={() => isModalOpen(false)}
                className="w-7 h-7 text-black absolute top-6 right-6"
              />
              <p className="p-title">Incase of Emergency Contact</p>
              <p className="text-[#7E7E7E] font-medium pb-">
                Add emergency contact and make sure to submit.
              </p>
            </div>
            <div className="text-[#007C85]">
              <div className="flex mt-4 gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15px] text-[#007C85]">
                    Contact Details Info
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15] text-[#007C85]">Option 1</p>
                </div>
                <div className="flex items-center">
                  <svg
                    width="33"
                    height="2"
                    viewBox="0 0 33 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.25" y1="1" x2="32.25" y2="1" stroke="#A8A8A8" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/svgs/circle.svg"
                    className=""
                    alt="codestatus"
                    width="26"
                    height="26"
                  />
                  <p className="text-[15] text-[#007C85]">Option 2</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Relationship
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input relationship"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg font-bold leading-6 text-gray-900 required-field"
                >
                  Contact Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    required
                    className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="input contact email"
                  />
                </div>
              </div>
              <div className="justify-end flex ">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleContinues}
                  type="submit"
                  className="w-[150px] h-[45px] bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium rounded-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
