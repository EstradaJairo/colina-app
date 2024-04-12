"use client";

import { onNavigate } from "@/actions/navigation";
import { Schedule } from "@/type";
import { useRouter } from "next/navigation";

interface ScheduledDataProps {
  currentPageData: Schedule[];
  columns: string;
}

export default function ScheduledTableData({
  currentPageData,
  columns,
}: ScheduledDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((scheduled, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{scheduled.medicationUID}</div>
          <div>{scheduled.date}</div>
          <div>{scheduled.time}</div>
          <div>{scheduled.medication}</div>
          <div>{scheduled.notes}</div>
          <div>{scheduled.status}</div>
          <div className="flex justify-center gap-[10px]">
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
