"use client";

import { onNavigate } from "@/actions/navigation";
import { prorenata } from "@/type";
import { useRouter } from "next/navigation";

interface ProrenataDataProps {
  currentPageData: prorenata[];
  columns: string;
}

export default function ProrenataTableData({
  currentPageData,
  columns,
}: ProrenataDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((prorenata, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{prorenata.medicationUID}</div>
          <div>{prorenata.date}</div>
          <div>{prorenata.time}</div>
          <div>{prorenata.medication}</div>
          <div>{prorenata.notes}</div>
          <div>{prorenata.status}</div>
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
