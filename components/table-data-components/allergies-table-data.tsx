"use client";

import { onNavigate } from "@/actions/navigation";
import { Allergy, Patients } from "@/type";
import { useRouter } from "next/navigation";

interface AllergiesDataProps {
  currentPageData: Allergy[];
  columns: string;
}

export default function AllergiesTableData({
  currentPageData,
  columns,
}: AllergiesDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((allergy, index) => (
        <div
          key={index}
          className={`grid grid-cols-7 p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{allergy.allergyId}</div>
          <div>{allergy.date}</div>
          <div>{allergy.type}</div>
          <div>{allergy.allergen}</div>
          <div>{allergy.severity}</div>
          <div>{allergy.notes}</div>
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
