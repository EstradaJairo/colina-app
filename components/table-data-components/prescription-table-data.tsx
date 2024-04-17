"use client";

import { onNavigate } from "@/actions/navigation";
import { prescription } from "@/type";
import { useRouter } from "next/navigation";
import Modal from "@/components/reusable/modal";
import { PrescriptionviewModalContent } from "../modal-content/prescriptionview-modal-content";
import { useState } from "react";
interface TableDataProps {
  currentPageData: prescription[];
  columns: string;
}

export default function PrescriptionTableData({
  currentPageData,
  columns,
}: TableDataProps) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      {currentPageData.map((prescription, index) => (
        <div
          key={index}
          className={`grid grid-cols-${columns} p-[10px] py-[12px] px-[24px] hover:bg-[#F4F4F4] border-b border-[#E7EAEE] gap-20 items-center group`}
        >
          <div>{prescription.prescriptionUID}</div>
          <div>{prescription.medicine}</div>
          <div>{prescription.frequency}</div>
          <div>{prescription.interval}</div>
          <div>{prescription.dosage}</div>
          <div>{prescription.status}</div>
          <div className="flex justify-center gap-[10px]">
            <button
              className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white"
              onClick={() => isModalOpen(true)}
            >
              View
            </button>
            <button className="bg-[#E7EAEE] hover:!bg-[#007C85] hover:!text-white rounded-[5px] px-[25px] py-[7px] group-hover:bg-white">
              Edit
            </button>
          </div>
          {isOpen && (
            <Modal
              content={
                <PrescriptionviewModalContent isModalOpen={isModalOpen} />
              }
              isModalOpen={isModalOpen}
            />
          )}
        </div>
      ))}
    </>
  );
}
