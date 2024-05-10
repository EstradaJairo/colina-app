"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { DemographicModalContent } from "./demographic-modal-content";
import Modal from "../reusable/modal";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const ContactModalContent = ({ isModalOpen }: Modalprops) => {
  const [selectedCodeStatus, setSelectedCodeStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  const isModalsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <div className="w-[1200px] h-[645px]">
        <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
          <div className="items-center flex justify-between px-8">
            <h2 className="p-title text-left text-[#071437] mt-5 w-full pl-2">
              Incase of Emergency Contact
            </h2>
            <X
              onClick={() => isModalOpen(false)}
              className="w-7 h-7 text-black flex items-center mt-2"
            />
          </div>
          <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
            Add emergency contact and make sure to submit.
          </p>
          <div className="flex place-items-end mr-4"></div>
        </div>
        <div className=" mb-9 pt-4">
          <div className="h-[600px] max-h-[470px] md:px-10 mt-5">
            <form className="">
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 border-b-2 pb-6">
                <div>
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input firstname"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Middle Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input middlename"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input lastname"
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input relationship"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Contact Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input middlename"
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input lastname"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className=" text-[#007C85] font-semibold">Contact Person1</p>
                <p className="text-gray-300">(Optional)</p>
              </div>
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 border-b-2 pb-6 pt-2">
                <div>
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input firstname"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Middle Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input middlename"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input lastname"
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input relationship"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Contact Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input middlename"
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
                      className="block w-full h-12 rounded-md  px-3.5 py-2 text-gray-900 bg-[#F6F6F6]  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input lastname"
                    />
                  </div>
                </div>
              </div>
              <div className="justify-between flex mt-4 ">
                <div>
                  <button
                    onClick={() => isModalsOpen(true)}
                    type="button"
                    className="
                w-[150px] h-[45px]  font-medium text-black  mr-4 rounded-sm flex justify-center items-center"
                  >
                    <Image
                      className="w-6 h-6 mr-1"
                      width={50}
                      height={50}
                      src={"/svgs/arrowl.svg"}
                      alt={""}
                    />
                    <p>Back</p>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => isModalOpen(false)}
                    type="button"
                    className="
                w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="
                 w-[150px] h-[45px] px-3 py-2 bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium  rounded-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {isOpen && (
          <Modal
            content={<DemographicModalContent isModalOpen={isModalOpen} />}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
    </>
  );
};
