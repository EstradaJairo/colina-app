"use client";
import React from "react";

const Toasterror = () => {
  return (
    <div className="flex ">
      <div className="flex items-center w-full p-1 gap-5 pl-8 bg-[#F0F0F0]">
        <div className=" flex w-[32px] h-[32px] ">
          <img src="/imgs/error-icon.svg" alt="" />
        </div>
        <div className="text-[20px] font-medium pr-20 ">
          Something Went Wrong!
        </div>
      </div>
      <div className="bg-[#DB3956] w-[17px] h-[79px]"></div>
    </div>
  );
};

export default Toasterror;
