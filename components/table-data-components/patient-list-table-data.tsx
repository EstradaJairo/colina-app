"use client";

import { onNavigate } from "@/actions/navigation";
import { Patients } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: Patients[];
  columns: string;
}

export default function PatientListTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((patient, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-60 items-center group`}
        >
          <div>{patient.uid}</div>
          <div>{patient.name}</div>
          <div>{patient.age}</div>
          <div>{patient.gender}</div>
          <div className="flex gap-[10px]">
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
