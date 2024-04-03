"use client";

import { onNavigate } from "@/actions/navigation";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/shared/demographicmodal";
import { useState } from "react";
import DropdownMenu from "@/components/dropdown-menu";

export default function PatientPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);

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

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="w-full mx-24 mt-24">
      <div className="flex justify-end w-full mx-3">
        <p
          onClick={() => onNavigate(router, "/dashboard")}
          className="text-[#64748B] underline cursor-pointer select-none"
        >
          Back to Dashboard
        </p>
      </div>
      <div className="flex justify-between items-center w-full mx-3">
        <div className="flex flex-col mb-5 ">
          <p className="p-title">Patients List Records</p>
          {/* number of patiens */}
          <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[14px] mt-2 ">
            Total of 20 Patients
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

      <div className="mx-3 w-full sm:rounded-lg items-center">
        <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[73px]">
          <form className=" mr-5">
            {/* search bar */}
            <label className=""></label>
            <div className="flex">
              <input
                className="outline-none py-3 px-5 m-5 w-[573px] h-[47px] pt-[14px]  ring-[1px] ring-[#E7EAEE]"
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
            <thead className="">
              <tr className="uppercase text-[#64748B] border-y ">
                <th scope="col" className="px-6 py-3 w-[350px] h-[70px]">
                  Patient ID
                </th>
                <th scope="col" className="px-6 py-3 w-[352px]">
                  Name
                </th>
                <th scope="col" className="px-5 py-3 w-[277px]">
                  Age
                </th>
                <th scope="col" className="px-5 py-3 w-[277px]">
                  Gender
                </th>

                <th scope="col" className="px-[70px] py-3 w-[210px] ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white  border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td className=" truncate max-w-[552px] px-6 py-4">
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td
                  className="px-[60px] py-4"
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                >
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white   border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white    border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white    border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white    border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white    border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
              <tr className="odd:bg-white    border-b hover:bg-[#F4F4F4] group">
                <th
                  scope="row"
                  className="truncate max-w-[286px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  SGY-5146846548465
                </th>
                <td
                  onClick={() =>
                    onNavigate(
                      router,
                      "/patient-overview/patiendId/medical-history/allergies"
                    )
                  }
                  className=" truncate max-w-[552px] px-6 py-4"
                >
                  Drake Ramos
                </td>
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4">Male</td>

                <td className="px-[60px] py-4">
                  <Edit></Edit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END OF TABLE */}
      </div>
      {/* pagination */}
      <div className="mt-5 w-full mx-3">
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
      </div>
      {isOpen && (
        <Modal isModalOpen={isModalOpen} isOpen={isOpen} label="sample label" />
      )}
    </div>
  );
}
