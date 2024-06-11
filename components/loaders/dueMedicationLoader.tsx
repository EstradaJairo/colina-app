import React from "react";
import Image from "next/image";
import DropdownMenu from "../dropdown-menu";
import DownloadPDF from "../shared/buttons/downloadpdf";
import Pagination from "../shared/pagination";
import PaginationLoader from "./PaginationLoader";
const DueMedicationLoader = () => {
  return (
    <div className="w-full  pt-[90px] px-[150px] h-full flex flex-col justify-between">
      <div className="w-full">
        <div className="flex w-full justify-between items-center ">
          <div className="flex flex-col">
            <div className="w-full p-title rounded-full mr-2">
              Due Medication
            </div>
            <div className="sub-title">Total of 0 Due Medication</div>
          </div>
          <div className="flex flex-row justify-end h-full ">
            <DownloadPDF></DownloadPDF>
          </div>
        </div>
        <div className="w-full sm:rounded-lg items-center">
          <div className="w-full mt-3 justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
              <label className=""></label>
              <div className="flex">
                <input
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[14px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded-[4.69px] pl-10 relative bg-[#fff] bg-no-repeat "
                  type="text"
                  placeholder="Search by reference no. or name..."
                />
                <Image
                  src="/svgs/search.svg"
                  alt="Search"
                  width="20"
                  height="20"
                  className="absolute left-8 top-9 pointer-events-none"
                />
              </div>
            </form>
            <div className="flex w-full justify-end items-center gap-[12px] mr-3">
              <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
                Order by
              </p>
              <DropdownMenu
                options={[]}
                open={false}
                width={"165px"}
                label={"Select"}
              />
              <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
                Sort by
              </p>
              <DropdownMenu
                options={[]}
                open={false}
                width={"165px"}
                label={"Choose"}
              />
            </div>
          </div>
        </div>
        <table className="w-full h-full justify-center items-start text-[15px]">
          <thead className=" text-left rtl:text-right">
            <tr className="uppercase !font-semibold sub-title border-b border-[#E7EAEE] h-[70px]">
              <td className="px-6 py-5 ">Name</td>
              <td className="px-6 py-5 w-[300px]">DUE MED UID</td>
              <td className="px-6 py-5">Medication</td>
              <td className="px-6 py-5 w-[200px]">Date</td>
              <td className="px-6 py-5 w-[200px]">Time</td>
            </tr>
          </thead>
          <tbody className="animate-pulse">
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[300px]">
                <div className="h-[22px] w-[180px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[300px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[130px] bg-gray-400 rounded-full  "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[230px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[300px]">
                <div className="h-[22px] w-[230px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[90px] bg-gray-400 rounded-full  "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[270px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[300px]">
                <div className="h-[22px] w-[200px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[110px] bg-gray-400 rounded-full "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full  "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[215px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[300px]">
                <div className="h-[22px] w-[220px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[90px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[80px] bg-gray-400 rounded-full "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[80px] bg-gray-400 rounded-full  "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[300px]">
                <div className="h-[22px] w-[180px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[300px] bg-gray-400 rounded-full  "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full "></div>
              </td>
              <td className="px-6 py-5 w-[200px]">
                <div className="h-[22px] w-[130px] bg-gray-400 rounded-full  "></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <PaginationLoader />
      </div>
    </div>
  );
};

export default DueMedicationLoader;
