import { X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
  isModalOpen: (isOpen: boolean) => void;
}

export const FilesdropModalContent = ({ isModalOpen }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasFile, setHasFile] = useState(false);
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

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const selectAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = true;
    });
  };

  const FileUploadWithHover = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return (
      <div
        className="flex flex-row justify-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="border-2 rounded-l-md px-2 py-2 text-gray-400 text-[12px]">
          Upload or Attach Files or
        </p>
        {isHovering && (
          <div className="absolute bg-[#4E4E4E] p-2 text-white rounded-md shadow-md bottom-[-90px] left-18">
            <p>Minimum file size of 1 MB</p>
            <p>Maximum file size of 100 MB</p>
            <p>Supported formats: PNG, JPG, JPEG</p>
          </div>
        )}
        <label
          htmlFor="imageUpload"
          className="decoration-solid text-[12px] bg-[#007C85] px-2 py-2 text-white border-r-md cursor-pointer rounded-r-lg border-2 border-[#007C85]"
        >
          Browse
        </label>
      </div>
    );
  };

  function dropHandler(ev: any) {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    const syntheticEvent = {
      target: {
        files,
        value: "", // add this property to satisfy the type
      },
    };
    handleFile(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  }

  function dragOverHandler(ev: any) {
    ev.preventDefault();
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-[676px] h-[490px] p-[30px]">
      <div className="mb-9 h-full w-full">
        <div className="items-center flex justify-between">
          <p className="p-title text-left text-[#071437]">
            Prescription Files Attachment
          </p>
          <X
            onClick={() => isModalOpen(false)}
            className="w-7 h-7 text-black"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-start items-center">
          {hasFile === false ? (
            <label
              htmlFor="imageUpload"
              className="w-full h-[380px] bg-[#007C851A] border-[#007C85] border-dashed border-2 flex justify-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-2"
              onDrop={dropHandler}
              onDragOver={dragOverHandler}
            >
              <div className="text-[15px] p-[60px] w-full">
                <div className="flex gap-[9px] justify-center items-center">
                  <div className="flex items-start">
                    <Image
                      className="w-7 h-7 mb-5"
                      width={50}
                      height={50}
                      src={"/svgs/folder-add.svg"}
                      alt={""}
                    />
                  </div>
                  <div className="">
                    <p className="flex">
                      Upload or Attach Files or
                      <span className="underline decoration-solid text-blue-500 ml-1">
                        Browse
                      </span>
                    </p>
                    <p className="text-[14px] font-normal text-[#667085] ">
                      Minimum file size 100 MB.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/svgs/nofileviews.png"
                    alt="Document"
                    width={200}
                    height={200}
                    className="w-89 mt-8"
                  />
                </div>
                <div className="flex justify-center text-[15px] font-medium mb-4 mt-2">
                  No image/document found!
                </div>
              </div>
              <input
                id="imageUpload"
                type="file"
                className="hidden"
                onChange={(e) => handleFile(e)}
              />
            </label>
          ) : (
            <div className="grid-cols-1 grid">
              <label
                htmlFor="imageUpload"
                className="relative h-[70px] w-[615px] bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-1.5"
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

              <div className="items-center flex justify-between mt-4">
                <h2 className=" text-left text-[#071437]">Samplexxxx</h2>

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
              </div>
              <div className="items-center flex justify-between mt-4">
                <p className=" text-left text-[#071437]">Samplexxxx</p>
                <X
                  onClick={() => isModalOpen(false)}
                  className="w-4 h-4 text-black flex items-center"
                />
              </div>
              <div className="justify-end flex mr-10">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="
            w-[200px] h-[50px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-[170px] h-[50px] bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium rounded-sm"
                ></button>
              </div>
            </div>
          )}
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
      </div>
    </div>
  );
};
function handleFile(arg0: React.ChangeEvent<HTMLInputElement>) {
  throw new Error("Function not implemented.");
}
