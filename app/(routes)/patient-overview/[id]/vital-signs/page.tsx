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
import { VitalSign } from "@/type";
import VitalSignTableData from "@/components/table-data-components/vital-sign-table-data";
import { VitalModalContent } from "@/components/modal-content/vital-modal-content";

const vitalsign = () => {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<VitalSign[]>([]);
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

  const columnLabels = [
    "VITAL SIGN UID",
    "DATE",
    "TIME",
    "BLOOD PRESSURE",
    "HEART RATE",
    "TEMPERATURE",
    "RESPIRATORY",
    "ACTIONS",
  ];
  const pageData = (data: VitalSign[]) => {
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
  };

  const vitalsign = [
    {
      vitalsignUID: 1,
      date: "9/30/2023",
      time: "skin prescription",
      bloodpressure: "Anesthesia",
      heartrate: "Servere",
      temperature: "Itching",
      respiratory: "Itching",
    },
    {
      vitalsignUID: 2,
      date: "9/30/2023",
      time: "skin prescription",
      bloodpressure: "Anesthesia",
      heartrate: "Servere",
      temperature: "Itching",
      respiratory: "Itching",
    },
  ];

  return (
    <div className="  w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Vital Signs</h1>
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

      <Table<VitalSign>
        data={vitalsign}
        columnLabels={columnLabels}
        columns={"8"}
        rows={4}
        pageData={pageData}
        component={
          <VitalSignTableData currentPageData={currentData} columns={"8"} />
        }
      />
      {isOpen && (
        <Modal
          content={<VitalModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default vitalsign;
