import React, { useEffect, useState } from "react";

interface Modalprops {
  isModalOpen: (isOpen: boolean) => void;
}

export const SuccessModaContent = ({ isModalOpen }: Modalprops) => {
  const [selectedStatus, setSelectedStatus] = useState(""); // State to hold the selected status

  return (
    <div className="w-[480px] h-[280px]">
      <div className=" mb-9 pt-4">
        <div className=" h-[230px] md:px-10 mt-5">
          <div className="text-center">
            <div className="mx-auto mb-5 text-gray-400 w-[110px] h-[110px]">
              <img src="/svgs/successful.svg" alt="" />
            </div>
            <h1 className="text-[34px] font-bold text-lg text-gray-500 mb-4">
              Submitted Successfully!
            </h1>
            <p className="text-[24px] text-sm text-gray-400 mb-10">
              Your data has been successfully added.
            </p>
          </div>
        </div>
        <div className="">
          <div className="justify-center flex  ">
            <button
              onClick={() => isModalOpen(false)}
              type="button"
              className="w-[700px] px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE]  text-[#ffff] font-medium mt-2 rounded-b-md"
            >
              Okay, Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
