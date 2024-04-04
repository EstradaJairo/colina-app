import React, { useEffect, useState } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const ErrorModalContent = ({ isModalOpen }: Modalprops) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <div className="w-[480px] h-[280px]">
      <div className=" mb-9 pt-4">
        <div className=" h-[230px] md:px-10 mt-5">
          <div className="text-center">
            <div className="mx-auto mb-5 text-gray-400 w-[110px] h-[110px]">
              <img src="/svgs/error-icon.svg" alt="" />
            </div>
            <h1 className="text-[34px] font-bold text-lg text-gray-500 mb-4">
              Uh oh! Something went wrong!
            </h1>
            <p className="text-[24px] text-sm text-gray-400 mb-10">
              There was a problem with your request.
            </p>
          </div>
        </div>
        <div className="">
          <div className="justify-center flex  ">
            <button
              onClick={() => isModalOpen(false)}
              type="button"
              className="w-[700px] px-3 py-2 bg-[#BCBCBC] hover:bg-[#8d8e8f]  text-[#ffff] font-medium mt-2 rounded-b-md"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
