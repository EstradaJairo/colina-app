"use client";

import { onNavigate } from "@/actions/navigation";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useRouter } from "next/navigation";
// import { Modal } from "@/components/shared/demographicmodal";
import Modal from "@/components/reusable/modal";
import { useState } from "react";
import DropdownMenu from "@/components/dropdown-menu";
import { DemographicModalContent } from "@/components/modal-content/demographic-modal-content";
import Table from "@/components/reusable/table";
import { DueMedications } from "@/type";
import DueMedicationsTableData from "@/components/table-data-components/due-medications-table-data";

export default function DueMedication() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [currentData, setCurrentData] = useState<DueMedications[]>([]);
  const [sordOrder, setSortOrder] = useState("ASC");
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);

  const [sortBy, setSortBy] = useState("firstName");

  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    if (option == "Age") {
      setSortBy("age");
    } else if (option == "Name") {
      setSortBy("firstName");
    } else if (option == "Gender") {
      setSortBy("gender");
    }
    console.log(sortBy, "ooption");
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Patient ID", onClick: handleSortOptionClick },
    { label: "Name", onClick: handleSortOptionClick },
    { label: "Age", onClick: handleSortOptionClick },
    { label: "Gender", onClick: handleSortOptionClick },
  ];

  const columnLabels = ["NAME", "DATE", "TIME", "MEDICATIONS"];

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  const pageData = (data: DueMedications[]) => {
    setCurrentData(data);
  };

  const duemedications = [
    {
      image: "/imgs/boy1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Isavuconazonium Sulfate",
      gender: "Male",
    },
    {
      image: "/imgs/boy2.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Umeclidinium Bromide",
      gender: "Male",
    },
    {
      image: "/imgs/girl1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Levetiracetam",
      gender: "Male",
    },
    {
      image: "/imgs/boy3.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Idarucizumab",
      gender: "Male",
    },
    {
      image: "/imgs/boy1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Isavuconazonium Sulfate",
      gender: "Male",
    },
    {
      image: "/imgs/boy1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Umeclidinium Bromide",
      gender: "Male",
    },
    {
      image: "/imgs/boy1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Idarucizumab",
      gender: "Male",
    },
    {
      image: "/imgs/boy1.png",
      name: "Pamela Lamela",
      date: "1-02-1999",
      time: "11:00 AM",
      medication: "Levetiracetam",
      gender: "Male",
    },
  ];

  return (
    <div className="w-full px-[150px] py-[90px]">
      <div className="flex justify-end w-full">
        <p
          onClick={() => onNavigate(router, "/dashboard")}
          className="text-[#64748B] underline cursor-pointer select-none"
        >
          Back to Dashboard
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col mb-5 ">
          <p className="p-title">List of Due Medications</p>
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[14px] mt-2 ">
            Total of {duemedications.length} medication
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button onClick={() => isModalOpen(true)}>
            <Add></Add>
          </button>

          <button>
            <DownloadPDF></DownloadPDF>
          </button>
        </div>
      </div>

      <Table<DueMedications>
        data={duemedications}
        columnLabels={columnLabels}
        columns={"4"}
        rows={8}
        pageData={pageData}
        component={
          <DueMedicationsTableData
            currentPageData={currentData}
            columns={"4"}
          />
        }
      />

      {isOpen && (
        <Modal
          content={<DemographicModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
}
