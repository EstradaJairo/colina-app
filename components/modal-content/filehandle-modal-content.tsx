"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";
import Image from "next/image";
interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const FilehandleModalContent = ({ isModalOpen }: Modalprops) => {
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-[676px] h-[492px]">
      <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
        <div className="items-center mt-5 flex justify-between px-[40px]">
          <p className="p-title">Form Files Attachment</p>
          <X />
        </div>
      </div>
      <div className="">
        <div className="h-[350px] md:px-10">
          <form className="">
            <label
              htmlFor="imageUpload"
              className="relative h-[70px] w-[595px] bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold"
            >
              <div className="flex flex-row">
                <div>
                  <Image
                    className="w-10 h-10 mr-1"
                    width={50}
                    height={50}
                    src={"/svgs/folder-add.svg"}
                    alt={""}
                  />
                </div>
                <div className="">
                  <p>
                    Upload or Attach Files or{" "}
                    <span className="underline decoration-solid text-blue-500">
                      Browse
                    </span>
                  </p>
                  <p className="text-[14px] font-normal text-[#667085]">
                    Minimum file size 100 MB.
                  </p>
                </div>
              </div>
              {/* <div>
                <Image
                  className="w-10 h-10 mr-1"
                  width={50}
                  height={50}
                  src={"/svgs/folder-add.svg"}
                  alt={""}
                />
              </div>
              <div className="flex pb-5 text-nowrap text-[15px] gap-1">
                <p className="">Upload or Attach Files or</p>
                <span className="underline decoration-solid text-blue-500">
                  Browse
                </span>
              </div>
              <p className="text-[14px] font-normal absolute bottom-2 text-[#667085] items-center flex">
                Minimum file size 100 MB.
              </p> */}
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e)}
            />
            <div className="mt-4 grid grid-rows-2 gap gap-y-4">
              <div className="flex  justify-between">
                <div className="items-center">
                  <p>Sample.png</p>
                  <p>500kb</p>
                </div>
                <X className="w-4 h-4 text-black" />
              </div>
              <div className="flex  justify-between">
                <div className="items-center">
                  <p>Sample.png</p>
                  <p>500kb</p>
                </div>
                <X className="w-4 h-4 text-black" />
              </div>
              <div className="flex  justify-between">
                <div className="items-center">
                  <p>Sample.png</p>
                  <p>500kb</p>
                </div>
                <X className="w-4 h-4 text-black" />
              </div>
            </div>

            {/* 
            <div className="items-center flex justify-between mt-4">
              <div>
                <h2 className=" text-left text-[#071437] text-[20px]">
                  Samplexxxx
                </h2>
                <p className="text-[#4A4A4A] text-[15px]">550kb</p>
              </div>
              <X className="w-4 h-4 text-black flex items-center" />
            </div>
            <div className="items-center flex justify-between mt-4">
              <p className=" text-left text-[#071437]">Samplexxxx</p>
              <X
                onClick={() => isModalOpen(false)}
                className="w-4 h-4 text-black flex items-center"
              />
            </div>
            <div className="items-center flex justify-between mt-4">
              <p className=" text-left text-[#071437]">Samplexxxx</p>
              <X
                onClick={() => isModalOpen(false)}
                className="w-4 h-4 text-black flex items-center"
              />
            </div> */}
          </form>
        </div>
      </div>
      <div className="justify-end flex mr-10">
        <button
          onClick={() => isModalOpen(false)}
          type="button"
          className="w-[170px] h-[50px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black mr-4 rounded-sm"
        >
          Cancel
        </button>
        <button
          type="button"
          className="w-[170px] h-[50px] bg-[#007C85] hover:bg-[#03595B]  text-[#ffff]  font-medium rounded-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
