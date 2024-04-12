"use client";

import { onNavigate } from "@/actions/navigation";
import { Surgeries, Patients } from "@/type";
import { useRouter } from "next/navigation";

interface SurgeriesDataProps {
  currentPageData: Surgeries[];
  columns: string;
}

export default function SurgeriesTableData({
  currentPageData,
  columns,
}: SurgeriesDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((surgery, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{surgery.surgeryId}</div>
          <div>{surgery.date}</div>
          <div>{surgery.type}</div>
          <div>{surgery.allergen}</div>
          <div>{surgery.severity}</div>
          <div>{surgery.notes}</div>
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
