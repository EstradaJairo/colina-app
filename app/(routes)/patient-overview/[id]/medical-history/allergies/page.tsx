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
import { Allergy } from "@/type";
import AllergiesTableData from "@/components/table-data-components/allergies-table-data";

const Allergies = () => {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<Allergy[]>([]);
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
    "ALLERGY ID",
    "DATE",
    "TYPE",
    "ALLERGEN",
    "SEVERITY",
    "REACTION",
    "ACTIONS",
  ];
  const pageData = (data: Allergy[]) => {
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

  const allergy = [
    {
      allergyId: 1,
      date: "9/30/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 4 sample",
    },
    {
      allergyId: 2,
      date: "5/19/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 3,
      date: "7/31/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 4,
      date: "11/16/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      allergyId: 5,
      date: "10/4/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 1 sample",
    },
    {
      allergyId: 6,
      date: "12/31/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 7,
      date: "1/5/2024",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 2 sample",
    },
    {
      allergyId: 8,
      date: "9/23/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      allergyId: 9,
      date: "1/26/2024",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      allergyId: 10,
      date: "8/10/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 11,
      date: "7/5/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      allergyId: 12,
      date: "5/9/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 1 sample",
    },
    {
      allergyId: 13,
      date: "4/13/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 14,
      date: "10/12/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 3 sample",
    },
    {
      allergyId: 15,
      date: "8/17/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      allergyId: 16,
      date: "10/11/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 1 sample",
    },
    {
      allergyId: 17,
      date: "10/27/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 1 sample",
    },
    {
      allergyId: 18,
      date: "2/23/2024",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      allergyId: 19,
      date: "6/30/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      allergyId: 20,
      date: "5/7/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 4 sample",
    },
  ];

  return (
    <div className=" w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Medical History</h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1 className="font-medium text-[20px] text-[#007C85] cursor-pointer">
              Allergies
            </h1>
            <h1 className="slash mx-2">{"/"} </h1>
            <h1
              onClick={() =>
                onNavigate(
                  router,
                  "/patient-overview/patientId/medical-history/surgeries"
                )
              }
              className="font-medium text-[20px] cursor-pointer text-gray-600"
            >
              Surgeries
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

      <Table<Allergy>
        data={allergy}
        columnLabels={columnLabels}
        columns={"7"}
        rows={4}
        pageData={pageData}
        component={
          <AllergiesTableData currentPageData={currentData} columns={"7"} />
        }
      />
      {isOpen && (
        <Modal
          content={<AllergiesModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Allergies;
