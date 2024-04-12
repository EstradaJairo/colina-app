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
import { Appointments } from "@/type";
import AppointmentTableData from "@/components/table-data-components/appointments-table-data";

export default function Appointment() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [currentData, setCurrentData] = useState<Appointments[]>([]);
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

  const columnLabels = ["STATUS", "DATE", "TIME", "END TIME", "ACTIONS"];

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  const pageData = (data: Appointments[]) => {
    setCurrentData(data);
  };

  const appointments = [
    {
      status: "Upcoming Schedule",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName:
        "pr-1 text-[#2A7D15] font-semibold status-icon-scheduled",
    },
    {
      status: "Done Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#3C3C3C] font-semibold status-icon-done",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Done Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#3C3C3C] font-semibold status-icon-done",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
    },
    {
      status: "Missed Appointment",
      date: "10-02-199",
      time: "11:00AM",
      endtime: "3:00PM",
      action: "View",
      statusClassName: "pr-1 text-[#B81C1C] font-semibold status-icon-missed",
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
      <div className="flex justify-between items-center w-full select-none">
        <div className="flex flex-col mb-5 ">
          <p className="font-bold text-[25px]">List of Appointments</p>
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px] mt-2 ">
            Total of {appointments.length} appointments
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

      <Table<Appointments>
        data={appointments}
        columnLabels={columnLabels}
        columns={"5"}
        rows={8}
        pageData={pageData}
        component={
          <AppointmentTableData currentPageData={currentData} columns={"5"} />
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
