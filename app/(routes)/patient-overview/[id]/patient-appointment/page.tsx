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
import { PatientAppointment } from "@/type";
import PatientAppointmentTableData from "@/components/table-data-components/patient-appointment-table-data";
import { AppointmentModalContent } from "@/components/modal-content/appointment-modal-content";

const PatientAppointments = () => {
  const router = useRouter();
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [currentData, setCurrentData] = useState<PatientAppointment[]>([]);
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

  const columnLabels = ["STATUS", "DATE", "TIME", "END TIME", "ACTIONS"];
  const pageData = (data: PatientAppointment[]) => {
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

  const patientappointment = [
    {
      status: "Upcoming Schedule",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName:
        "pr-1 text-[#2A7D15] font-semibold status-icon-scheduled",
    },
    {
      status: "Done Appointment",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName: "pr-1 text-[#3C3C3C] font-semibold status-icon-done",
    },
    {
      status: "Missed Appointment",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Upcoming Schedule",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName:
        "pr-1 text-[#2A7D15] font-semibold status-icon-scheduled",
    },
    {
      status: "Upcoming Schedule",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName:
        "pr-1 text-[#2A7D15] font-semibold status-icon-scheduled",
    },
    {
      status: "Upcoming Schedule",
      date: "9/30/2023",
      time: "10:00AM",
      endtime: "11:00AM",
      statusClassName:
        "pr-1 text-[#2A7D15] font-semibold status-icon-scheduled",
    },
  ];

  return (
    <div className="  w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="p-title">Appointment</h1>
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

      <Table<PatientAppointment>
        data={patientappointment}
        columnLabels={columnLabels}
        columns={"5"}
        rows={4}
        pageData={pageData}
        component={
          <PatientAppointmentTableData
            currentPageData={currentData}
            columns={"5"}
          />
        }
      />
      {isOpen && (
        <Modal
          content={<AppointmentModalContent isModalOpen={isModalOpen} />}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default PatientAppointments;
