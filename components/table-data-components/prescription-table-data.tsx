"use client";

import { onNavigate } from "@/actions/navigation";
import { prescription } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: prescription[];
  columns: string;
}

export default function PrescriptionTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((prescription, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{prescription.prescriptionUID}</div>
          <div>{prescription.medicine}</div>
          <div>{prescription.frequency}</div>
          <div>{prescription.interval}</div>
          <div>{prescription.dosage}</div>
          <div>{prescription.status}</div>
          <div className="flex justify-center gap-[10px]">
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
          </div>
        </div>
      ))}
    </>
  );
}