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
        {/* {/ {/ Start of content /} /} */}
        <div className=" flex flex-row gap-5 h-[162px]">
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
        {/* {/ {/ end of content /} /} */}
        <div className="flex w-full justify-between gap-3 my-3">
          <div className="flex flex-col w-[1000px] gap-3">
            {/* {/ {/ Start of Appointments /} /} */}
            <div className="rounded-t-lg border-[1px] border-gray-200 my-2 w-[1060px] h-[265px]">
              <div className="mt-2">
                <div className="font-bold text-[20px] px-5 mt-5 mb-2">
                  Upcoming Appointments
                </div>
                <div className="px-5">Total of 3 Appointments</div>
                <div className="flex flex-col h-[190px] border-b-1 border-b-gray-950">
                  <th className="flex justify-between items-center h-[60px] border-b-[1px]">
                    <td className="px-6 py-4">
                      <div className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <img
                          className="mr-1"
                          src="/imgs/Ellipse.svg"
                          alt=""
                          width={10}
                          height={10}
                        />
                        Pending
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Drake Ramos
                    </td>
                    <td className="px-6 py-4 ">
                      <div>March 26, 2024</div>
                      <div className="text-gray-400">8:00 - 9:00 PM</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[#71717A]">
                      New Patient
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                      <img
                        className="select-none"
                        src="/icons/dotshorizontal.svg"
                        alt=""
                      />
                    </td>
                  </th>
                  <th className="flex justify-between items-center h-[60px] border-b-[1px]">
                    <td className="px-6 py-4">
                      <div className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <img
                          className="mr-1"
                          src="/imgs/Ellipse.svg"
                          alt=""
                          width={10}
                          height={10}
                        />
                        Pending
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Jenny Wilson
                    </td>
                    <td className="px-6 py-4 ">
                      <div>March 26, 2024</div>
                      <div className="text-gray-400">8:00 - 9:00 PM</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[#71717A]">
                      New Patient
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                      <img
                        className="select-none"
                        src="/icons/dotshorizontal.svg"
                        alt=""
                      />
                    </td>
                  </th>
                  <th className="flex justify-between items-center h-[60px]">
                    <td className="px-6">
                      <div className="bg-[#FEF9C3] text-[#713F12] font-medium text-[14px] me-2 px-2.5 py-0.5 rounded-full flex items-center">
                        <img
                          className="mr-1"
                          src="/imgs/Ellipse.svg"
                          alt=""
                          width={10}
                          height={10}
                        />
                        Pending
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-[18px] items-center justify-center">
                      Guy Hawkins
                    </td>
                    <td className="px-6 py-4 ">
                      <div>March 26, 2024</div>
                      <div className="text-gray-400">8:00 - 9:00 PM</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[#71717A]">
                      New Patient
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                      <img
                        className="select-none"
                        src="/icons/dotshorizontal.svg"
                        alt=""
                      />
                    </td>
                  </th>
                </div>
              </div>
            </div>
            {/* {/ {/ End of Appointments /} /}
            {/ {/ Start of Average Patient List /} /} */}
            <div className=" border-[1px] border-[#E4E4E7] rounded-xl flex w-[1060px] h-[285px]">
              <div className="font-bold text-[20px] px-5 h-[277px] mt-5 mb-2">
                Monthly Patient List
              </div>
            </div>
            {/* {/ {/ End of Average Patient List /} /} */}
          </div>
          {/* {/ {/ Start of Due Medicaitons /} /} */}
          <div className="w-[600px] rounded-xl border-[1px] border-[#E4E4E7] h-[570px] my-2 select-none parent">
            <div className="font-bold text-[20px] px-5 mt-5 mb-2">
              Due Medications
            </div>
            <div className="px-5 mb-10 text-[#71717A]">Total of 10 due</div>
            <div className="w-full items-center">
              <div className=" w-full  flex flex-row my-7">
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
              <div className=" w-full  flex flex-row my-7">
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
              <div className=" w-full  flex flex-row my-7">
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
              <div className=" w-full  flex flex-row mb-5">
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
              <div className=" w-full  flex flex-row mb-[60px]">
                <div className="mx-5 pt-1">
                  <img src="/imgs/tao1.svg" alt="" width={48} height={48} />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <h1 className="font-bold">Painitan ni Owa</h1>
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
                <p className="cursor-pointer select-none ">SEE ALL DUE</p>
                <span className="mx-3 items-center pt-[3px]">
                  <img
                    className="cursor-pointer select-none"
                    src="/imgs/cheveron-right.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* {/ {/ End of Due Medicaitons /} /} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
