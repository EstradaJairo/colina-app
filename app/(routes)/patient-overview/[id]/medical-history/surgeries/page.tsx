"use client";

import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useRouter } from "next/navigation";
import { SurgeriesModalContent } from "@/components/modal-content/surgeries-modal-content";
import Modal from "@/components/reusable/modal";
import { Surgeries } from "@/type";
import Table from "@/components/reusable/table";
import SurgeriesTableData from "@/components/table-data-components/surgeries-table-data";

export default function Surgeries() {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<Surgeries[]>([]);
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
    { label: "Surgery ID", onClick: handleSortOptionClick },
    { label: "Age", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Surgery", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
  ];
  // end of orderby & sortby function
  // nav
  const [isOpenNav, setIsNav] = useState(false);
  const optionsNav = ["Language", "Account Settings", "Sign Out"];
  //
  // end of orderby & sortby function
  const [isOpen, setIsOpen] = useState(false);
  const surgeries = [
    {
      surgeryId: 1,
      date: "9/30/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 4 sample",
    },
    {
      surgeryId: 2,
      date: "5/19/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 3,
      date: "7/31/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 4,
      date: "11/16/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      surgeryId: 5,
      date: "10/4/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 1 sample",
    },
    {
      surgeryId: 6,
      date: "12/31/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 7,
      date: "1/5/2024",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 2 sample",
    },
    {
      surgeryId: 8,
      date: "9/23/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      surgeryId: 9,
      date: "1/26/2024",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      surgeryId: 10,
      date: "8/10/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 11,
      date: "7/5/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 2 sample",
    },
    {
      surgeryId: 12,
      date: "5/9/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 1 sample",
    },
    {
      surgeryId: 13,
      date: "4/13/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 14,
      date: "10/12/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 3 sample",
    },
    {
      surgeryId: 15,
      date: "8/17/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      surgeryId: 16,
      date: "10/11/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 1 sample",
    },
    {
      surgeryId: 17,
      date: "10/27/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 1 sample",
    },
    {
      surgeryId: 18,
      date: "2/23/2024",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Redness and Itching",
      notes: "note 4 sample",
    },
    {
      surgeryId: 19,
      date: "6/30/2023",
      type: "skin allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Itching",
      notes: "note 3 sample",
    },
    {
      surgeryId: 20,
      date: "5/7/2023",
      type: "peanut allergy",
      allergen: "Anesthesia",
      severity: "Servere",
      reaction: "Cough",
      notes: "note 4 sample",
    },
  ];
  const columnLabels = [
    "ALLERGY ID",
    "DATE",
    "TYPE",
    "ALLERGEN",
    "SEVERITY",
    "REACTION",
    "NOTES",
  ];
  const pageData = (data: Surgeries[]) => {
    setCurrentData(data);
  };
  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="  w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Medical History</h1>
            <h1 className="p-title mx-2">{">"} </h1>
            <h1
              onClick={() =>
                onNavigate(
                  router,
                  "/patient-overview/patiendId/medical-history/surgeries"
                )
              }
              className=" p-title  cursor-pointer text-gray-600"
            >
              Allergies
            </h1>
            <h1 className="p-title mx-2">{">"} </h1>
            <h1 className="p-title cursor-pointer text-[#007C85]">Surgeries</h1>
          </div>
          {/* number of patiens */}
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[14px] mb-4 ">
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

      <Table<Surgeries>
        data={surgeries}
        columnLabels={columnLabels}
        columns={"7"}
        rows={4}
        pageData={pageData}
        component={
          <SurgeriesTableData currentPageData={currentData} columns={"7"} />
        }
      />

      {isOpen && (
        <Modal
          content={<SurgeriesModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
}
