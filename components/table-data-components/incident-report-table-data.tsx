"use client";

import { onNavigate } from "@/actions/navigation";
import { Appointments, IncidentReport, Note } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: IncidentReport[];
  columns: string;
}

export default function IncidentReportTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((reports, index) => (
        <div
          key={index}
          className={`grid grid-cols-6  p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{reports.date}</div>
          <div>{reports.time}</div>
          <div>{reports.subject}</div>
          <div>{reports.detailsOfincident}</div>
          <div className="flex">{reports.reportedBy}</div>
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
