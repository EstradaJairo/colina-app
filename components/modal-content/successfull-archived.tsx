"use client";
import React from "react";

const Toastsuccess = () => {
  return (
    <div className="flex ">
      <div className="flex items-center w-full p-1 gap-5 pl-8 bg-[#F0F0F0]">
        <div className=" flex w-[32px] h-[32px] ">
          <img src="/imgs/successful-icon.svg" alt="" />
        </div>
        <div className="text-[20px] font-medium pr-20 ">
          Successfully Added to Archived!
        </div>
      </div>
      <div className="bg-[#63b84d] w-[17px] h-[79px]"></div>
    </div>
  );
};

export default Toastsuccess;
