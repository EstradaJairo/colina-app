"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="mt-20 w-full justify-center items-center  mx-28">
      <div>
        <p className="font-bold text-[24px] select-none">Dashboard</p>
        <div className="font-bold text-[17px] flex mb-4 select-none">
          Hey Alexa Dramos -{" "}
          <p className="font-normal text-[17px] pl-1 text-[#71717A] select-none">
            here's what's happening with your clinic today!
          </p>
        </div>
        <div className=" flex flex-row gap-6 h-[162px] mb-6">
          <div className=" w-full rounded-xl border-[1px] border-[#E4E4E7] hover:border-[#007C85]">
            <div className="px-5">
              <div className="text-[#71717A] font-medium text-[20px] mt-5 mb-10 select-none">
                Total Patients
              </div>
            </div>
            <div className="flex justify-between mx-5 items-center ">
              <div className="font-bold text-[37px] select-none">12,426</div>
              <div className="text-[#22C55E] font-medium text-[23px] select-none">
                +36%
              </div>
            </div>
          </div>
          <div className=" w-full rounded-xl border-[1px] border-[#E4E4E7] hover:border-[#007C85]">
            <div className="px-5">
              <div className="text-[#71717A] font-medium text-[20px] mt-5 mb-10 select-none">
                Old Patients
              </div>
            </div>
            <div className="flex justify-between mx-5 items-center ">
              <div className="font-bold text-[37px] select-none">2,380,485</div>
              <div className="text-[#EF4444] font-medium text-[23px] select-none">
                +14%
              </div>
            </div>
          </div>
          <div className=" w-full rounded-xl border-[1px] border-[#E4E4E7] hover:border-[#007C85]">
            <div className="px-5">
              <div className="text-[#71717A] font-medium text-[20px] mt-5 mb-10 select-none">
                New Patients
              </div>
            </div>
            <div className="flex justify-between mx-5">
              <div className="font-bold text-[37px] select-none">84,382</div>
              <div className="text-[#22C55E] font-medium text-[23px] select-none">
                +36%
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex w-full justify-between gap-3 my-3">
          <div className="flex flex-col w-[1040px] gap-3">
            
            <div className="  rounded-xl border-[1px] border-[#E4E4E7] mb-4">
              <div className="mt-2">
                <div className="font-bold text-[20px] px-5 select-none">
                  Upcoming Appointments
                </div>
                <div className="px-5 select-none">Total of 3 Appointments</div>
                <div className="flex flex-col h-auto pb-2 border-b-1 border-b-gray-950">
                  <div className="flex justify-evenly items-center h-[60px]">
                    <div className="px-6 py-4">
                      <p className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <span className="pr-1 text-[#FACC15]">●</span>
                        Pending
                      </p>
                    </div>
                    <div className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Drake Ramos
                    </div>
                    <div className="px-6 py-4 ">
                      <p>March 26, 2024</p>
                      <p className="text-gray-400">8:00 - 9:00 PM</p>
                    </div>
                    <div className="px-6 py-4">New Patient</div>
                    <div className="px-6 py-4 cursor-pointer">●●●</div>
                  </div>
                  <div className="flex justify-evenly items-center h-[60px]">
                    <div className="px-6 py-4">
                      <p className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <span className="pr-1 text-[#FACC15]">●</span>
                        Pending
                      </p>
                    </div>
                    <div className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Jenny Wilson
                    </div>
                    <div className="px-6 py-4 ">
                      <p>March 26, 2024</p>
                      <p className="text-gray-400">8:00 - 9:00 PM</p>
                    </div>
                    <div className="px-6 py-4">New Patient</div>
                    <div className="px-6 py-4 cursor-pointer">●●●</div>
                  </div>
                  <div className="flex justify-evenly items-center h-[60px]">
                    <div className="px-6 py-4">
                      <p className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <span className="pr-1 text-[#FACC15]">●</span>
                        Pending
                      </p>
                    </div>
                    <div className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Guy Hawkins
                    </div>
                    <div className="px-6 py-4 ">
                      <p>March 26, 2024</p>
                      <p className="text-gray-400">8:00 - 9:00 PM</p>
                    </div>
                    <div className="px-6 py-4">New Patient</div>
                    <div className="px-6 py-4 cursor-pointer">●●●</div>
                  </div>
                </div>
              </div>
            </div>
            {/* {/ {/ End of Appointments /} /}
           
            {/ {/ Start of Average Patient List /} /} */}
            <div className=" border-[1px] border-[#E4E4E7] rounded-xl w-[1040px] h-[305px] select-none">
              <div className="font-bold text-[20px] px-5 h-[277px] mt-5 mb-2">
                Monthly Patient List
              </div>
            </div>
            
          </div>
       
          <div className="w-[630px] bg-white rounded-xl py-5 px-2 border-[1px] border-[#E4E4E7] select-none">
            <div className="font-bold text-[20px] px-5 mb-3">
              Due Medications
            </div>
            <div className="px-5 mb-10">Total of 10 Due</div>
            <div className="w-full items-center">
              <div className=" w-full  flex flex-row mb-8">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao1.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Jenny Wilson</h1>
                    <p className="font-normal text-[#71717A]">
                      Bisphosphonates
                    </p>
                  </div>
                  <div className="mx-5">
                    <h1 className="font-medium">March 21</h1>
                    <p className="font-normal text-[#71717A]">7:00am</p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex flex-row mb-8">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao2.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Devone Lane</h1>
                    <p className="font-normal text-[#71717A]">
                      Bisphosphonates
                    </p>
                  </div>
                  <div className="mx-5">
                    <h1 className="font-medium">March 21</h1>
                    <p className="font-normal text-[#71717A]">7:00am</p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex flex-row mb-8">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao3.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Jane Cooper</h1>
                    <p className="font-normal text-[#71717A]">
                      Bisphosphonates
                    </p>
                  </div>
                  <div className="mx-5">
                    <h1 className="font-medium">March 21</h1>
                    <p className="font-normal text-[#71717A]">7:00am</p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex flex-row mb-8">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao4.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Dianne Russel</h1>
                    <p className="font-normal text-[#71717A]">
                      Bisphosphonates
                    </p>
                  </div>
                  <div className="mx-5">
                    <h1 className="font-medium">March 21</h1>
                    <p className="font-normal text-[#71717A]">7:00am</p>
                  </div>
                </div>
              </div>
              <div className=" w-full  flex flex-row mb-10">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao4.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Dennis Albite</h1>
                    <p className="font-normal text-[#71717A]">
                      Bisphosphonates
                    </p>
                  </div>
                  <div className="mx-5">
                    <h1 className="font-medium">March 21</h1>
                    <p className="font-normal text-[#71717A]">7:00am</p>
                  </div>
                </div>
              </div>
              <div className="flex text-[#71717A] font-bold mx-5">
                <p className="cursor-pointer ">SEE ALL DUE</p>
                <span className="mx-3 items-center pt-[3px]">
                  <img
                    className="cursor-pointer"
                    src="/imgs/cheveron-right.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;