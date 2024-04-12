"use client";

import React from "react";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useRouter } from "next/navigation";
import Modal from "@/components/reusable/modal";
import Table from "@/components/reusable/table";
import { Prorenata } from "@/type";
import ProrenataTableData from "@/components/table-data-components/prorenata-table-data";
import { PrnModalContent } from "@/components/modal-content/prn-modal-content";

const Prorenata = () => {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<Prorenata[]>([]);
  const [sordOrder, setSortOrder] = useState("ASC");
  const [sortBy, setSortBy] = useState("firstName");
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    if (option == "Date") {
      setSortBy("Date");
    } else if (option == "Allergen") {
      setSortBy("firstName");
    } else if (option == "Type") {
      setSortBy("Type");
    }
    console.log(sortBy, "ooption");
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Medication UID", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Medication", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
    { label: "Status", onClick: handleSortOptionClick },
  ];

  const columnLabels = [
    "MEDICATION UID",
    "DATE",
    "TIME",
    "MEDICATION",
    "NOTES",
    "STATUS",
    "ACTIONS",
  ];
  const pageData = (data: Prorenata[]) => {
    setCurrentData(data);
  };
  // end of orderby & sortby function
  // nav
  const [isOpenNav, setIsNav] = useState(false);
  const optionsNav = ["Language", "Account Settings", "Sign Out"];
  //

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  const prorenata = [
    {
      medicationUID: 1,
      date: "9/30/2023",
      time: "9:00 pm",
      medication: "Anesthesia",
      notes: "Servere",
      status: "Itching",
    },
    {
      medicationUID: 1,
      date: "9/30/2023",
      time: "9:00 pm",
      medication: "Anesthesia",
      notes: "Servere",
      status: "goods",
    },
  ];

  return (
    <div className="  w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Medication Logs</h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1
              className="font-medium text-[20px] cursor-pointer text-gray-600"
              onClick={() =>
                onNavigate(
                  router,
                  "/patient-overview/patientId/medication/scheduled"
                )
              }
            >
              Scheduled
            </h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1 className="font-medium text-[20px] cursor-pointer text-[#007C85]">
              PRN
            </h1>
          </div>
          {/* number of patiens */}
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px] mb-4 ">
            Total of 6 Patients
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

      <Table<Prorenata>
        data={prorenata}
        columnLabels={columnLabels}
        columns={"7"}
        rows={4}
        pageData={pageData}
        component={
          <ProrenataTableData currentPageData={currentData} columns={"7"} />
        }
      />
      {isOpen && (
        <Modal
          content={<PrnModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Prorenata;
