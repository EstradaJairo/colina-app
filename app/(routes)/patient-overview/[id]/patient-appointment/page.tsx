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
      <div className="w-full m:rounded-lg items-center">
        <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px] px-5">
          <form className="">
            {/* search bar */}
            <label className=""></label>
            <div className="flex">
              <input
                className=" py-3 px-5  w-[573px] h-[47px] pt-[14px]  ring-[1px] ring-[#E7EAEE]"
                type="text"
                placeholder="Search by reference no. or name..."
              />
            </div>
          </form>
          <div className="flex w-full justify-end items-center gap-[12px]">
            <p className="text-[#191D23] opacity-[60%] font-semibold">
              Order by
            </p>
            <DropdownMenu
              options={optionsOrderedBy.map(({ label, onClick }) => ({
                label,
                onClick: () => {
                  onClick(label);
                },
              }))}
              open={isOpenOrderedBy}
              width={"165px"}
              label={"Select"}
            />

            <p className="text-[#191D23] opacity-[60%] font-semibold">
              Sort by
            </p>
            <DropdownMenu
              options={optionsSortBy.map(({ label, onClick }) => ({
                label,
                onClick: () => {
                  onClick(label);
                  console.log("label", label);
                },
              }))}
              open={isOpenSortedBy}
              width={"165px"}
              label={"Select"}
            />
          </div>
        </div>

        {/* START OF TABLE */}
        <div>
          <table className="w-full text-left rtl:text-right">
            <thead>
              <tr className="uppercase text-[#64748B] border-y  ">
                <th scope="col" className="px-6 py-3 w-[500px] h-[70px]">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3 w-[400px]">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3 w-[400px]">
                  TIME
                </th>
                <th scope="col" className="px-6 py-3 w-[300px]">
                  END TIME
                </th>
                <th scope="col" className=" px-[80px] py-3 w-10">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white  even:bg-gray-50  border-b hover:bg-[#f4f4f4] group">
                <th
                  scope="row"
                  className=" text-[#2A7D15] font-large text-[16px] me-1 px-6 py-5 rounded-full flex justify-start "
                >
                  <span className="pr-1 text-[#2A7D15]">●</span>
                  Upcoming Schedule
                </th>
                <td className="truncate max-w-[552px] px-6 py-3">
                  March 22, 2024
                </td>
                <td className="px-6 py-3">8:00 am </td>
                <td className="px-6 py-3">2:00 pm </td>
                <td className="px-[70px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white  border-b hover:bg-[#f4f4f4] group">
                <th
                  scope="row"
                  className=" text-[#B81C1C] font-large text-[16px] me-1 px-6 py-5 rounded-full flex justify-start "
                >
                  <span className="pr-1 text-[#B81C1C]">●</span>
                  Cancelled Appointment
                </th>
                <td className="truncate max-w-[552px] px-6 py-3">
                  March 22, 2024
                </td>
                <td className="px-6 py-3">8:00 am </td>
                <td className="px-6 py-3">3:00 pm </td>
                <td className="px-[70px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b hover:bg-[#f4f4f4] group">
                <th
                  scope="row"
                  className=" text-[#3C3C3C] font-large text-[16px] me-1 px-6 py-5 rounded-full flex justify-start "
                >
                  <span className="pr-1 text-[#3C3C3C]">●</span>
                  Done Appointment
                </th>
                <td className="truncate max-w-[552px] px-6 py-3">
                  March 22, 2024
                </td>
                <td className="px-6 py-3">8:00 am </td>
                <td className="px-6 py-3">4:00pm </td>
                <td className="px-[70px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white  border-b hover:bg-[#f4f4f4] group">
                <th
                  scope="row"
                  className=" text-[#3C3C3C] font-large text-[16px] me-1 px-6 py-5 rounded-full flex justify-start "
                >
                  <span className="pr-1 text-[#3C3C3C]">●</span>
                  Done Appointment
                </th>
                <td className="truncate max-w-[552px] px-6 py-3">
                  March 22, 2024
                </td>
                <td className="px-6 py-3">8:00 am </td>
                <td className="px-6 py-3">10:00 am </td>
                <td className="px-[70px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END OF TABLE */}
      </div>
      {/* pagination */}
      <div className="mt-5 pb-5">
        <div className="flex justify-between">
          <p className="font-medium text-[14px] w-[138px] items-center">
            Page 1 of 10
          </p>
          <div>
            <nav>
              <div className="flex -space-x-px text-sm">
                <div>
                  <a
                    href="#"
                    className="flex border border-px items-center justify-center  w-[77px] h-full"
                  >
                    Prev
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex border border-px items-center justify-center  w-[49px] h-full"
                  >
                    1
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex border border-px items-center justify-center  w-[49px] h-full"
                  >
                    2
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex border border-px items-center justify-center  w-[49px] h-full"
                  >
                    3
                  </a>
                </div>

                <div className="">
                  <a
                    href="#"
                    className="flex border border-px items-center justify-center  w-[77px] h-full mr-5"
                  >
                    Next
                  </a>
                </div>
                <div className="flex">
                  <input
                    className="ipt-pagination border text-center"
                    type="text"
                    placeholder="-"
                  />
                  <div className="">
                    <button className="btn-pagination ">Go </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {isOpen && (
          <Modal
            content={<AppointmentModalContent isModalOpen={isModalOpen} />}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default PatientAppointments;
