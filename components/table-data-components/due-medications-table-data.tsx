"use client";

import { onNavigate } from "@/actions/navigation";
import { DueMedications } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: DueMedications[];
  columns: string;
}

export default function DueMedicationsTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((duemedications, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-4 items-center group`}
        >
          <div>{duemedications.name}</div>
          <div>{duemedications.date}</div>
          <div>{duemedications.time}</div>
          <div>{duemedications.medication}</div>
          <div className="flex gap-[10px]">
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
            <button
              onClick={() =>
                onNavigate(
                  router,
                  "/patient-overview/patiendId/medical-history/allergies"
                )
              }
              className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
