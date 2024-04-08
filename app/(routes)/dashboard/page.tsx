"use client";

import { Edit, View } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="justify-center items-center mx-[154px] mt-[90px]">
        <div className="w-full">
          <p className="font-bold text-[25px] select-none">
            WELCOME TO DASHBOARD!
          </p>
          <div className="font-bold text-[20px] flex mb-4 select-none">
            Hey Alexa Dramos -
            <p className="font-normal text-[20px] pl-1 text-[#71717A] select-none">
              here's what's happening with your clinic today!
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-[28px] select-none">
          <div className="w-[930px] min-w-max-[930px] max-h-[670px] h-[670px] min-h-max-[670px]">
            <div className="border-[1px] h-[95px] px-18 pt-3">
              <p className="font-bold text-[25px] mx-[30px]">
                Upcoming Appointments
              </p>
              <p className="font-normal text-[15px] text-[#71717A] mx-[30px]">
                Total of 3 Appointment
              </p>
            </div>

            <div className="border-t-0 border-[1px]">
              <div className="divide-y">
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Kent
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Dennis Albite
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Dennis Albite
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Dennis Albite
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Dennis Albite
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
                <div className="h-[95px] flex justify-evenly items-center hover:bg-slate-50 px-4 min-w-max">
                  <div className="flex bg-[#FEF9C3] px-2 me-2 py-0.5 items-center">
                    <p className="text-[#FACC15] text-[15px] mr-2">●</p>
                    <span className="pr-1 text-[#713F12] font-medium text-[15px]">
                      Pending
                    </span>
                  </div>
                  <p className="font-bold w-1/4 truncate hover:ho hover:text-wrap text-[20px]">
                    Dennis Albite
                  </p>
                  <div className=" items-center flex flex-col w-1/4">
                    <p className="font-bold text-[15px]">September 26, 2024</p>
                    <p className="font-medium text-[15px] text-[#71717A]">
                      08:00
                    </p>
                  </div>
                  <p className="text-[#71717A] font-medium text-[15px] w-1/4 text-center">
                    New Patient
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {/ End of Upcoming Appointments /}
      {/ Start of Due Medications /} */}
          <div className="w-[621px] min-h-max-[669px] h-[669px] border-[1px] border-[#E4E4E7] py-3 select-none px-[40px] max-h-[669px]">
            <div className="">
              <p className="font-bold text-[25px]">Due Medications</p>
              <p className="font-normal text-[15px] text-[#71717A] mb-3">
                Total of 3 Due Medication
              </p>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">January 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent Liloc
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">May 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent Liloc
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">May 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent Liloc
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">May 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent Liloc
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">May 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100">
              <div className="flex w-1/6 items-center ">
                <img src="/imgs/tao1.svg" alt="" width={58} height={58} />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-[20px] truncate hover:text-wrap">
                    Kent Liloc
                  </p>
                  <p className="text-[#71717A] font-normal text-[16px]">
                    Bisphosphonates
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start ">
                <p className="font-bold text-[16px] flex">May 21</p>
                <p className="text-[#71717A] font-medium text-[16px]">24:00</p>
              </div>
            </div>
            <div className="group flex w-fit cursor-pointer items-center hover:text-[#007C85] font-semibold text-[17px] text-[#71717A] py-[20px]">
              SEE ALL DUE
              <svg
                className="text-[#71717A] ml-2 group-hover:text-[#007C85]"
                width="17"
                height="14"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14795 2.15826L8.7739 8.78421L2.14795 15.4102"
                  stroke="currentColor"
                  stroke-width="2.43402"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
