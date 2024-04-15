"use client";

import { onNavigate } from "@/actions/navigation";
import { forms } from "@/type";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TableDataProps {
  currentPageData: forms[
    
  ];
  columns: string;
}

export default function FormsTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((forms, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE]  gap-20 items-center group`}
        >
          <div>{forms.nameOfDocument}</div>
          <div>{forms.dateIssued}</div>
          <div>{forms.notes}</div>
          <div className="flex justify-center gap-[10px]">
          <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              View
            </button>
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              Edit
            </button>
            </div>
        </div>
      ))}
    </>
  );
}
