import { useState } from "react";

interface AlertProps {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ label, isOpen, isModalOpen }: AlertProps) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed z-50 bg-white rounded-[10px] shadow-xl w-[670px] h-[326px] mx-auto top-[80px]">
            <div className="text-center pt-[30px]">
              <div className="mx-auto mb-5 text-gray-400 w-[110px] h-[110px] ">
                <img src="/svgs/successful.svg" alt="" />
              </div>
              <h1 className="text-[25px] font-bold text-md text-[#101828] mb-2">
                Submitted Successfully!
              </h1>
              <p className="text-[22px] text-sm text-[#667085] mb-[40px] ">
                Your data has been successfully added.
              </p>
            </div>
            <div>
              <button
                className="text-white bg-[#1B84FF] hover:bg-blue-800 font-medium 
                 rounded-b-md text-[21px] w-[670px] py-[15px] dark:bg-blue-600 dark:hover:bg-blue-700
                "
                onClick={() => isModalOpen(false)} // Close modal
              >
                Okay, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
