"use client";

import { onNavigate } from "@/actions/navigation";
import Vitalsign from "@/app/(routes)/patient-overview/[id]/vital-signs/page";
import { vitalsign } from "@/type";
import { useRouter } from "next/navigation";
Vitalsign;
interface TableDataProps {
  currentPageData: vitalsign[];
  columns: string;
}

export default function VitalsignTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((vitalsign, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{vitalsign.vitalsignUID}</div>
          <div>{vitalsign.date}</div>
          <div>{vitalsign.time}</div>
          <div>{vitalsign.bloodpressure}</div>
          <div>{vitalsign.heartrate}</div>
          <div>{vitalsign.temperature}</div>
          <div>{vitalsign.respiratory}</div>
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
