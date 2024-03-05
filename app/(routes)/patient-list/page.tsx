import React from "react";
import Link from "next/link";

const PatientList = () => {
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
                  Total 6 of patient
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
          <Link href="patient-demographic">
            <button

              type="button"
              className="px-[20px] py-[11px] bg-[#1B84FF] rounded-[7px] text-[#ffff]"
            >
              + Add Patient
            </button>
            </Link>
            <button
              type="button"
              className="px-[20px] py-[11px] bg-[#F8285A] rounded-[7px] text-[#ffff]"
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
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className="mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />
                Male
              </td>
              <td className="">
                <a
                  href="patient-overview"
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
                      href="apps/customers/view.html"
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
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className=" mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />
                Male
              </td>
              <td className="">
                <a
                  href="#"
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
                      href="apps/customers/view.html"
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
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className=" mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />  
                Male
              </td>
              <td className="">
                <a
                  href="#"
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
                      href="apps/customers/view.html"
                      className="menu-link px-3"
                    >
                      View
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="/"
                      className="menu-link px-3"
                      data-kt-customer-table-filter="delete_row"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className=" mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />
                Male
              </td>
              <td className="">
                <a
                  href="#"
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
                      href="apps/customers/view.html"
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
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className=" mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />
                Male
              </td>
              <td className="">
                <a
                  href="#"
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
                      href="apps/customers/view.html"
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
            <tr>
              <td></td>
              <td>
                <a href="apps/customers/view.html" className=" mb-1 text-[#071437]">
                  8127423928
                </a>
              </td>
              <td>
                <a href="#" className=" mb-1 text-[#071437]">
                  Drake Ramos
                </a>
              </td>
              <td>20 years old</td>
              <td data-filter="mastercard">
                <img
                  src="assets/media/svg/card-logos/mastercard.svg"
                  className="w-35px me-3"
                  alt=""
                />
                Male
              </td>
              <td className="">
                <a
                  href="#"
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
                      href="apps/customers/view.html"
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;