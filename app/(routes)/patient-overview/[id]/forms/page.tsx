"use client";

import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/view";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useParams, useRouter } from "next/navigation";
import { FormsModalContent } from "@/components/modals/forms.modal";
import { FormsviewModalContent } from "@/components/modal-content/formsview-modal-content";
import Modal from "@/components/reusable/modal";
import { fetchFormsByPatient } from "@/app/api/forms-api/forms.api";
import { SuccessModal } from "@/components/shared/success";
export default function FormsTab() {
  const router = useRouter();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const patientId = params.id.toUpperCase();
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientForms, setPatientForms] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("dateIssued");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalForms, setTotalForms] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [term, setTerm] = useState<string>("");
  const [isEdit, setIsEdit] = useState(false);
  const [formsToEdit, setFormsToEdit] = useState<any[]>([]);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
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
    console.log(sortBy, "option");
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Vital Sign ID", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Blood Pressure", onClick: handleSortOptionClick },
    { label: "Heart Rate", onClick: handleSortOptionClick },
    { label: "Temperature", onClick: handleSortOptionClick },
    { label: "Respiratory", onClick: handleSortOptionClick },
  ];
  // end of orderby & sortby function

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle going to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPage = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pageNumberInt = parseInt(pageNumber, 10);

    // Check if pageNumber is a valid number and greater than 0
    if (
      !isNaN(pageNumberInt) &&
      pageNumberInt <= totalPages &&
      pageNumberInt > 0
    ) {
      setCurrentPage(pageNumberInt);

      console.log("Navigate to page:", pageNumberInt);
    } else {
      setGotoError(true);
      setTimeout(() => {
        setGotoError(false);
      }, 3000);
      console.error("Invalid page number:", pageNumber);
    }
  };

  const handlePageNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(e.target.value);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex border border-px items-center justify-center  w-[49px]  ${
            currentPage === i ? "btn-pagination" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFormsByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          router
        );
        setPatientForms(response.data);
        setTotalPages(response.totalPages);
        setTotalForms(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <img src="/imgs/colina-logo-animation.gif" alt="logo" width={100} />
      </div>
    );
  }
  console.log(patientForms, "patientForms");
  return (
    <div className="  w-full">
      <div className="w-full justify-between flex mb-2">
        <div className="flex-row">
          <div className="flex gap-2">
            <p className="p-title">Form</p>
            <span className="slash">{">"}</span>
            <span
              onClick={() => {
                setIsLoading(true);
                onNavigate(
                  router,
                  `/patient-overview/${patientId.toLowerCase()}/forms/archived`
                );
                setIsLoading(true);
              }}
              className="bread"
            >
              Archived
            </span>
          </div>
          <div>
            <p>Total of 6 logs</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => isModalOpen(true)} className="btn-add gap-2">
            <img src="/imgs/add.svg" alt="" />
            <p className="text-[18px]">Add</p>
          </button>
          <button className="btn-pdfs gap-2">
            <img src="/imgs/downloadpdf.svg" alt="" />
            <p className="text-[18px]">Download PDF</p>
          </button>
        </div>
      </div>

      <div className="w-full sm:rounded-lg items-center pt-2">
        <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
          <form className="mr-5 relative">
            {/* search bar */}
            <label className=""></label>
            <div className="flex">
              <input
                className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[14px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat bg-[573px] bg-[center] bg-[calc(100%-20px)]"
                type="text"
                placeholder="Search by reference no. or name..."
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <img
                src="/svgs/search.svg"
                alt="Search"
                width="20"
                height="20"
                className="absolute left-8 top-9 pointer-events-none"
              />
            </div>
          </form>

          <div className="flex w-full justify-end items-center gap-[12px] mr-3">
            <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
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
            <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
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
                <th scope="col" className="px-7 py-3 h-[60px] w-[250px]">
                  NAME OF DOCUMENT
                </th>
                <th scope="col" className="px-7 py-3 h-[60px] w-[200px]">
                  DATE ISSUED
                </th>
                <th scope="col" className="px-7 py-3 h-[60px] w-[900px]">
                  NOTES
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white  even:bg-gray-50  border-b hover:bg-[#f4f4f4] group">
                <th className="px-7 py-3 h-[60px] ">Patient Details</th>
                <td className="px-7 py-3 h-[60px]">10/12/2024</td>
                <td className="px-7 py-3 h-[60px]">
                  Patient reports occasional headaches. Advised to monitor and
                  follow up.
                </td>

                <td className="px-7 py-3 h-[60px]">
                  <Edit></Edit>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END OF TABLE */}
      </div>
      {/* pagination */}
      {totalPages <= 1 ? (
        <div></div>
      ) : (
        <div className="mt-5 pb-5">
          <div className="flex justify-between">
            <p className="font-medium size-[18px] w-[138px] items-center">
              Page {currentPage} of {totalPages}
            </p>
            <div>
              <nav>
                <div className="flex -space-x-px text-sm">
                  <div>
                    <button
                      onClick={goToPreviousPage}
                      className="flex border border-px items-center justify-center  w-[77px] h-full"
                    >
                      Prev
                    </button>
                  </div>
                  {renderPageNumbers()}

                  <div className="ml-5">
                    <button
                      onClick={goToNextPage}
                      className="flex border border-px items-center justify-center  w-[77px] h-full"
                    >
                      Next
                    </button>
                  </div>
                  <form onSubmit={handleGoToPage}>
                    <div className="flex px-5 ">
                      <input
                        className={`ipt-pagination appearance-none  text-center border ring-1 ${
                          gotoError ? "ring-red-500" : "ring-gray-300"
                        } border-gray-100`}
                        type="text"
                        placeholder="-"
                        pattern="\d*"
                        value={pageNumber}
                        onChange={handlePageNumberChange}
                        onKeyPress={(e) => {
                          // Allow only numeric characters (0-9), backspace, and arrow keys
                          if (
                            !/[0-9\b]/.test(e.key) &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight"
                          ) {
                            e.preventDefault();
                          }
                        }}
                      />
                      <div className="px-5">
                        <button type="submit" className="btn-pagination ">
                          Go{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <Modal
          content={
            <FormsviewModalContent
              isModalOpen={isModalOpen}
              onSuccess={onSuccess}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}
      {isSuccessOpen && (
        <SuccessModal
          label={isEdit ? "Edit Note" : "Add Note"}
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
        />
      )}
    </div>
  );
}
