"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "./loading";

const PatientList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [token, setToken] = useState<string>(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRqb2hubGlsb2NAZ21haWwuY29tIiwic3ViIjoiVWlkLWE0YWVjNzk3IiwiaWF0IjoxNzA5Njg1MzEwLCJleHAiOjE3MDk3MjEzMTB9.BufXvytuT3-DyHklbrmh43daGZzjoQKAZrnXPZyTTXg"
  ); // State to hold the token
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

    console.log("CLEEEEKK");
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`btn btn-icon btn-sm btn-light mr-2 my-1 ${
            currentPage === i ? "btn-primary" : ""
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
    // Function to fetch data with authorization header
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/patient-information/list?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the bearer token in the header
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        setTotalPages(jsonData.totalPages);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, token]); // Make sure to include token in the dependency array

  // if (loading) {
  //   return <Loading />; // Render the Loading component while data is being fetched
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>; // Render error message if data fetching fails
  // }

  return (
    <div className="flex flex-col h-screen w-full relative items-center mt-20">
      <div className="card">
        <div className="card-header border-0 pt-6 flex">
          <div className="card-title">
            <div className="flex align-items-center position-relative px-2 py-2 mb-3">
              <div className="ki-duotone ki-magnifier search-icon fs-2 text-gray-500 top-50 translate-middle-y ms-5">
                <div className="path1"></div>
                <div className="path2"></div>
              </div>
              <div>
                <div className="font-bold text-[24px]"> Patient List</div>
                <p className="flex justify-start flex-row text-m text-[12px]">
                  Total {data.length} of patients
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
            <Link href="patient-demographic">
              <button
                type="button"
                className="px-[20px] py-[11px] bg-[#1B84FF] rounded-[7px] text-[#ffff]  hover:bg-blue-700"
              >
                + Add Patient
              </button>
            </Link>
            <button
              type="button"
              className="px-[20px] py-[11px] bg-[#F8285A] rounded-[7px] text-[#ffff]  hover:bg-red-700"
            >
              Export to PDF
            </button>
          </div>
        </div>

        <table className="table align-middle text-xl ml-5">
          <thead className="font-bold">
            <tr className="text-start text-[30px]">
              <th className="w-[30px] p-5"></th>
              <th className="min-w-125px">PATIENT ID</th>
              <th className="min-w-125px">NAME</th>
              <th className="min-w-125px">AGE</th>
              <th className="min-w-125px">GENDER</th>
              <th className="">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="fw-semibold ">
            {data.map((item, index) => (
              <tr key={index}>
                <td></td>
                <td>
                  <a
                    href={`apps/customers/view.html?id=${item.id}`}
                    className=" mb-1 text-[#071437]"
                  >
                    {item.id}
                  </a>
                </td>
                <td>
                  <a href="#" className=" mb-1 text-[#071437]">
                    {`${item.firstName} ${item.lastName}`}
                  </a>
                </td>
                <td>{item.age} years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  {item.gender}
                </td>
                <td className="">
                  <a
                    href={`patient-overview?id=${item.id}`}
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    View
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>

                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href={`apps/customers/view.html?id=${item.id}`}
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>

                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap ">
        <div className="d-flex flex-wrap py-2 mr-3">
          <button
            onClick={goToPreviousPage}
            className="btn btn-icon btn-sm btn-light mr-2 my-1"
          >
            <i className="ki ki-bold-arrow-back icon-xs"></i>
            PREV
          </button>
          {renderPageNumbers()}
          <button
            onClick={goToNextPage}
            className="btn btn-icon btn-sm btn-light mr-2 my-1"
          >
            <i className="ki ki-bold-arrow-next icon-xs"></i>
            NEXT
          </button>
        </div>
        <div className="d-flex align-items-center py-3">
          <div className="d-flex align-items-center">
            <div className="mr-2 text-muted">Loading...</div>
            <div className="spinner mr-10"></div>
          </div>

          <select
            className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light"
            style={{ width: "75px" }}
          >
            <option value="10">1</option>
            <option value="20">5</option>
            <option value="30">10</option>
            <option value="50">15</option>
            <option value="100">20</option>
          </select>
          <span className="text-muted">
            Displaying {data.length} of {totalPages} records
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
