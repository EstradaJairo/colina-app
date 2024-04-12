"use client";

import { onNavigate } from "@/actions/navigation";
import { LabResults, PatientAppointment } from "@/type";
import { useRouter } from "next/navigation";

interface TableDataProps {
  currentPageData: PatientAppointment[];
  columns: string;
}

export default function PatientAppointmentTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();
  return (
    <>
      {currentPageData.map((patientappointment, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div className={patientappointment.statusClassName}>
            {patientappointment.status}
          </div>
          <div>{patientappointment.date}</div>
          <div>{patientappointment.time}</div>
          <div>{patientappointment.endtime}</div>
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
