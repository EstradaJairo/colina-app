"use client";

import { onNavigate } from "@/actions/navigation";
import { Appointments } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: Appointments[];
  columns: string;
}

export default function AppointmentTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((appointments, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div
            className={`w-[300px] text-nowrap ${appointments.statusClassName}`}
          >
            {appointments.status}
          </div>
          <div>{appointments.date}</div>
          <div>{appointments.time}</div>
          <div>{appointments.endtime}</div>
          <div className="flex justify-center gap-[10px]">
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
