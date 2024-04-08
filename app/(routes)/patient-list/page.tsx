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
import { Patients } from "@/type";
import PatientListTableData from "@/components/table-data-components/patient-list-table-data";

export default function PatientPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [currentData, setCurrentData] = useState<Patients[]>([]);
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

  const columnLabels = ["UID", "NAME", "AGE", "GENDER", "ACTIONS"];

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  const pageData = (data: Patients[]) => {
    setCurrentData(data);
  };

  const patients = [
    {
      uid: 1,
      name: "Toddy Pechan",
      age: 65,
      gender: "Male",
      action: "View",
    },
    {
      uid: 2,
      name: "Tove Beceril",
      age: 85,
      gender: "Female",
      action: "View",
    },
    {
      uid: 3,
      name: "Alisa Olenchikov",
      age: 14,
      gender: "Female",
      action: "View",
    },
    {
      uid: 4,
      name: "Roxane Tollow",
      age: 4,
      gender: "Agender",
      action: "View",
    },
    {
      uid: 5,
      name: "Blakeley Stollwerk",
      age: 57,
      gender: "Female",
      action: "View",
    },
    {
      uid: 6,
      name: "Philippine Wiggall",
      age: 66,
      gender: "Female",
      action: "View",
    },
    {
      uid: 7,
      name: "Gilberte Bithell",
      age: 73,
      gender: "Female",
      action: "View",
    },
    {
      uid: 8,
      name: "Britteny Dibdale",
      age: 5,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 9,
      name: "Laney Lias",
      age: 54,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 10,
      name: "Powell Brimacombe",
      age: 39,
      gender: "Male",
      action: "View",
    },
    {
      uid: 11,
      name: "Bunny McCheyne",
      age: 72,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 12,
      name: "Vanda Beauchamp",
      age: 98,
      gender: "Female",
      action: "View",
    },
    {
      uid: 13,
      name: "Modestia Kinsman",
      age: 66,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 14,
      name: "Phyllida Corkell",
      age: 95,
      gender: "Female",
      action: "View",
    },
    {
      uid: 15,
      name: "Truman Pantling",
      age: 42,
      gender: "Male",
      action: "View",
    },
    {
      uid: 16,
      name: "Bendicty Bernadot",
      age: 39,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 17,
      name: "Rutger Rowlin",
      age: 97,
      gender: "Male",
      action: "View",
    },
    {
      uid: 18,
      name: "Lemuel Hannah",
      age: 98,
      gender: "Male",
      action: "View",
    },
    {
      uid: 19,
      name: "Etti Domerc",
      age: 66,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 20,
      name: "Kerk Goodridge",
      age: 8,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 21,
      name: "Jenelle Nower",
      age: 76,
      gender: "Female",
      action: "View",
    },
    {
      uid: 22,
      name: "Bernadette Winder",
      age: 33,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 23,
      name: "Shayne Cripps",
      age: 26,
      gender: "Agender",
      action: "Edit",
    },
    {
      uid: 24,
      name: "Ethan Twell",
      age: 45,
      gender: "Genderqueer",
      action: "View",
    },
    {
      uid: 25,
      name: "Garwin Jozwiak",
      age: 1,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 26,
      name: "Pate Rake",
      age: 25,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 27,
      name: "Tatiania Esley",
      age: 47,
      gender: "Female",
      action: "View",
    },
    {
      uid: 28,
      name: "Normie Frazer",
      age: 70,
      gender: "Male",
      action: "View",
    },
    {
      uid: 29,
      name: "Melba Tante",
      age: 89,
      gender: "Female",
      action: "View",
    },
    {
      uid: 30,
      name: "Ara Woodroffe",
      age: 41,
      gender: "Female",
      action: "View",
    },
    {
      uid: 31,
      name: "Chic Richin",
      age: 40,
      gender: "Male",
      action: "View",
    },
    {
      uid: 32,
      name: "Cari Massingberd",
      age: 38,
      gender: "Female",
      action: "View",
    },
    {
      uid: 33,
      name: "Diane Dahmke",
      age: 8,
      gender: "Female",
      action: "View",
    },
    {
      uid: 34,
      name: "Modesta Pashler",
      age: 82,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 35,
      name: "Bernardine Spinke",
      age: 89,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 36,
      name: "Hubert Denzey",
      age: 70,
      gender: "Male",
      action: "View",
    },
    {
      uid: 37,
      name: "Audy Casaro",
      age: 12,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 38,
      name: "Clive Outlaw",
      age: 81,
      gender: "Male",
      action: "View",
    },
    {
      uid: 39,
      name: "Jacquette Korneev",
      age: 11,
      gender: "Female",
      action: "View",
    },
    {
      uid: 40,
      name: "Natasha Petrazzi",
      age: 55,
      gender: "Non-binary",
      action: "View",
    },
    {
      uid: 41,
      name: "Orlan Desouza",
      age: 68,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 42,
      name: "Garik Bust",
      age: 21,
      gender: "Male",
      action: "View",
    },
    {
      uid: 43,
      name: "Klement Geekie",
      age: 39,
      gender: "Male",
      action: "View",
    },
    {
      uid: 44,
      name: "Frannie Bridden",
      age: 94,
      gender: "Male",
      action: "View",
    },
    {
      uid: 45,
      name: "Cairistiona Ziebart",
      age: 68,
      gender: "Female",
      action: "View",
    },
    {
      uid: 46,
      name: "Kally Flag",
      age: 16,
      gender: "Female",
      action: "Edit",
    },
    {
      uid: 47,
      name: "Geordie Fydo",
      age: 25,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 48,
      name: "Belicia Peal",
      age: 72,
      gender: "Female",
      action: "View",
    },
    {
      uid: 49,
      name: "Nev Benois",
      age: 80,
      gender: "Male",
      action: "Edit",
    },
    {
      uid: 50,
      name: "Dallon Chace",
      age: 53,
      gender: "Male",
      action: "View",
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
          <p className="p-title">Patients List Records</p>
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[14px] mt-2 ">
            Total of {patients.length} Patients
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

      <Table<Patients>
        data={patients}
        columnLabels={columnLabels}
        columns={"5"}
        rows={8}
        pageData={pageData}
        component={
          <PatientListTableData currentPageData={currentData} columns={"5"} />
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
