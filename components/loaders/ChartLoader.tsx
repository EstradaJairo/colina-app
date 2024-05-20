import React from "react";

const ChartLoader = () => {
  return (
    <div className=" py-3 gap-5  px-[150px] w-full ">
      <div className="flex flex-col  items-start animate-pulse border-[1px] bg-[#F4F4F4] border-[#E4E4E7]">
        <div className="h-[30px] w-[180px] bg-gray-300 rounded-full mr-2 mt-[90px]"></div>
        <div className="h-[22px] w-[200px] bg-gray-400 rounded-full mr-2 "></div>
        <div className="flex items-center w-full">
          <div className="h-[50px] w-[50px] bg-gray-300 rounded-full"></div>
          <div className="flex flex-row gap-2 justify-between w-full">
            <div className="flex flex-col w-full gap-2">
              <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            </div>
            <div className="gap-2 flex flex-col justify-end items-end">
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-[50px] w-[50px] bg-gray-300 rounded-full "></div>
          <div className="flex flex-row gap-2 justify-between w-full ">
            <div className="flex flex-col w-full gap-2">
              <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            </div>
            <div className="gap-2 flex flex-col justify-end items-end">
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-[50px] w-[50px] bg-gray-300 rounded-full "></div>
          <div className="flex flex-row gap-2 justify-between w-full">
            <div className="flex flex-col w-full gap-2">
              <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            </div>
            <div className="gap-2 flex flex-col justify-end items-end">
              <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
        <div className="h-[20px] w-[200px] bg-gray-400 rounded-full mr-2 "></div>
      </div>
    </div>
  );
};

export default ChartLoader;
