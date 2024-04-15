"use client";

import React from "react";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useRouter } from "next/navigation";
import { AllergiesModalContent } from "@/components/modal-content/allergies-modal-content";
import Modal from "@/components/reusable/modal";
import Table from "@/components/reusable/table";
import { IncidentReport, Note } from "@/type";
import NotesTableData from "@/components/table-data-components/notes-table-data";
import { NotesModalContent } from "@/components/modal-content/notes-modal-content";
import IncidentReportTableData from "@/components/table-data-components/incident-report-table-data";

const IncidentReports = () => {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<IncidentReport[]>([]);
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
    { label: "Allergen ID", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Type", onClick: handleSortOptionClick },
    { label: "Allergen", onClick: handleSortOptionClick },
    { label: "Gender", onClick: handleSortOptionClick },
    { label: "Reaction", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
  ];

  const columnLabels = ["DATE", "TIME", "SUBJECT", "DETAILS OF INCIDENT", "REPORTED BY", "ACTIONS"];
  const pageData = (data: IncidentReport[]) => {
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

  const reports = [
    {
      date: "9/30/2023",
      time:"10:00",
      subject: "Falls Report",
      detailsOfincident:"Falls",
      reportedBy:
        "Ahmad M. Ahmad, MD",
    },
  ];

  return (
    <div className="  w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Notes</h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1 className="font-medium text-[20px] text-gray-600 cursor-pointer" onClick={() =>
                onNavigate(
                  router,
                  "/patient-overview/patientId/notes/nurses-notes"
                )
              }>
              Nurses Notes
            </h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1
              className="font-medium text-[20px] cursor-pointer text-[#007C85]"
            >
              Incident Report
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

      <Table<IncidentReport>
        data={reports}
        columnLabels={columnLabels}
        columns={"6"}
        rows={4}
        pageData={pageData}
        component={
          <IncidentReportTableData currentPageData={currentData} columns={"5"} />
        }
      />
      {isOpen && (
        <Modal
          content={<NotesModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default IncidentReports;
