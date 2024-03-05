"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-page flex-column flex-column-fluid bg-[#007C85]">
      <div id="kt_app_header" className="app-header">
        <div className="bg-[#007C85] flex justify-between items-center w-full ml-5">
          <div className="flex align-items-stretch" id="kt_app_header_primary_container">
            <div className="flex flex-stack align-items-stretch flex-grow-1 flex-lg-grow-0 ml-6">
              <div className="flex align-items-center me-7">
                <a href="/patient-list" className="d-flex align-items-center">
                  <img alt="Logo" src="/img/chs.png" className="h-25px h-25" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex align-items-center">
            <div className="flex align-items-center px-5">
              <img src="/img/gen021.svg" className="fs-3 position-absolute ms-5" width={20} />
              <input
                type="text"
                data-kt-customer-table-filter="search"
                className="form-control form-control-solid w-550px ps-15"
                placeholder="Search"
              />
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className="mr-[50px] relative">
              <div className="symbol symbol-40px symbol-md-40px btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-1 ps-1 pe-1 mr-3">
                <img src="/img/notification.svg" alt="image" />
              </div>

              <div className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-1 ps-1 pe-0 gap-3">
                <div className="symbol symbol-30px symbol-md-40px">
                  <img src="/img/prof.png" alt="image" />
                </div>
                <div className="flex ml-">
                  <span className="text-[#ffff] text-[16px] font-light">Drake Ramos</span>
                </div>
                <div className="symbol symbol-30px">
                  <img src="/img/arr072.svg" alt="image" />
                </div>
              </div>

              {isOpen && (
                <div className="bg-body shadow-sm rounded-md text-black w-[190px] h-[170px] absolute bottom-[-183px] right-0 z-50 flex flex-col py-4">
                  <div className="flex px-3 items-center">
                    <div className="symbol symbol-35px me-5">
                      <img src="/img/prof.png" alt="image" />
                    </div>
                    <div className="flex flex-col">
                      <div className="fw-bold text-md">Drake Ramos</div>
                      <p className="fw-semibold text-muted text-hover-primary text-sm">
                        drake@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="separator my-1"></div>
                  <div className="font-normal text-[16px]">
                    <div className="px-3 py-1 hover:bg-[#007C85] hover:opacity-60 hover:rounded-md hover:text-white text-black">
                      Language
                    </div>
                    <div className="px-3 py-1 hover:bg-[#007C85] hover:opacity-60 hover:rounded-md hover:text-white">
                      Settings
                    </div>
                    <Link href="/">
                    <div className="px-3 py-1 hover:bg-[#007C85] hover:opacity-60 hover:rounded-md hover:text-white  text-[#071437]">
                      Sign Out
                    </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;