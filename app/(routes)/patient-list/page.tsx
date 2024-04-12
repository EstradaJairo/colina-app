"use client";

import { onNavigate } from "@/actions/navigation";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useRouter } from "next/navigation";
// import { Modal } from "@/components/shared/demographicmodal";
import Modal from "@/components/reusable/modal";
import { useEffect, useState } from "react";
import DropdownMenu from "@/components/dropdown-menu";
import { DemographicModalContent } from "@/components/modal-content/demographic-modal-content";
import Table from "@/components/reusable/table";
import { Patients } from "@/type";
import PatientListTableData from "@/components/table-data-components/patient-list-table-data";
import { searchPatientList } from "@/app/api/patients-api/patientList.api";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchPatientList(router);
        if (response.data.length === 0) {
          setCurrentData([]);
          // setIsLoading(false);
          return;
        }
        setCurrentData(response.data);
        console.log("Data:", response.data);
      } catch (error: any) {
        // setError(error.message);
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // const patients = [
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Toddy Pechan",
  //     age: 65,
  //     gender: "Male",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Tove Beceril",
  //     age: 85,
  //     gender: "Female",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Alisa Olenchikov",
  //     age: 14,
  //     gender: "Female",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  //   {
  //     uid: "A12233583839291128HDHD",
  //     name: "Roxane Tollow",
  //     age: 4,
  //     gender: "Agender",
  //     action: "View",
  //   },
  // ];

  return (
    <div className="w-full px-[150px] py-[90px]">
      <div className="flex justify-end w-full">
        <p
          onClick={() => onNavigate(router, "/dashboard")}
          className="text-[#64748B] underline cursor-pointer select-none text-[15px]"
        >
          Back to Dashboard
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col mb-5">
          <p className="p-title">Patients List Records</p>
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px] ">
            Total of {currentData.length} Patients
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
        data={currentData}
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
