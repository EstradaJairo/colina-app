"use client";

import { onNavigate } from "@/actions/navigation";
import { LabResults } from "@/type";
import { useRouter } from "next/navigation";
import Modal from "@/components/reusable/modal";
import { useState } from "react";
import { LabresultsviewModalContent } from "../modal-content/labresultsview-modal-content";

interface TableDataProps {
  currentPageData: LabResults[];
  columns: string;
}

export default function LabResultsTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      {currentPageData.map((labresults, index) => (
        <div
          key={index}
          className={`grid grid-cols-8 p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{labresults.labId}</div>
          <div>{labresults.date}</div>
          <div>{labresults.fbg}</div>
          <div>{labresults.totalcholesterol}</div>
          <div>{labresults.ldl}</div>
          <div>{labresults.hdl}</div>
          <div>{labresults.triglycerides}</div>
          <div className="flex justify-center gap-[10px]">
            <button
              className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white"
              onClick={() => isModalOpen(true)}
            >
              View
            </button>
          </div>
          {isOpen && (
            <Modal
              content={<LabresultsviewModalContent isModalOpen={isModalOpen} />}
              isModalOpen={isModalOpen}
            />
          )}
        </div>
      ))}
    </>
  );
}
