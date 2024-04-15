"use client";

import { onNavigate } from "@/actions/navigation";
import { Appointments, Note } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: Note[];
  columns: string;
}

export default function NotesTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((notes, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns}  p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{notes.date}</div>
          <div>{notes.time}</div>
          <div>{notes.subject}</div>
          <div className="flex">{notes.notes}</div>
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
