"use client";

import { onNavigate } from "@/actions/navigation";
import { DueMedications } from "@/type";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE]  gap-60 items-center group`}
        >
          <div className="flex items-center gap-5">
            {duemedications.image && (
              <Image
                src={duemedications.image}
                alt={duemedications.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div className="text-nowrap w-[300px]">{duemedications.name}</div>
          </div>
          <div>{duemedications.date}</div>
          <div>{duemedications.time}</div>
          <div>{duemedications.medication}</div>
        </div>
      ))}
    </>
  );
}
