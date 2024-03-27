"use client";

import React, { useState } from "react";

export default function PatientDetails() {
  const [patientEditMode, setPatientEditMode] = useState(false);
  const [emergencyEditMode, setEmergencyEditMode] = useState(false);

  const handlePatientEditClick = () => {
    setPatientEditMode(!patientEditMode);
  };

  const handleEmergencyEditClick = () => {
    setEmergencyEditMode(!emergencyEditMode);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="text-xl font-semibold px-16 w-full h-[50px] pt-3 ring-1 ring-gray-300 pl-[110px]">
        Patient Details
      </div>
      <div className=" w-full h-full ring-1 ring-gray-300 px-5 pt-5 pb-5 ">
        <div className="grid grid-cols-2 grid-rows-1 pl-[100px] mb-7">
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                First Name:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Drake </span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Last Name:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>Ramos</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Middle Name:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Batumbakal</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Gender:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>Male</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Age:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>34 years old</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Date of Birth:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>05/24/1990</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Contact Number:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>(555) 123456</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Address 1:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>123 Main Street, Anytown, USA 12345</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                City:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Anytown</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Address 2:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>123 Main Street, Anytown, USA 12346</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                State:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>United States</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Country:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>America</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Allergies:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Gold, Peanut, Soy</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Zip:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>1211</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Admission Date:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>03/24/28</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[580px] w-full">
            <div className="mt-8 flex justify-between items-center ">
              <label className="font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Code Status:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px] ">
                  <span>Full Code</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[580px] w-full h-full">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Email:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>drakeramos@gmail.com</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4 mr-10">
          <div className="justify-end flex pt-5">
            {patientEditMode && (
              <button
                type="button"
                className="bg-[#D9D9D9] hover:bg-[#D9D9D9] text-[#000] font-normal font-manrope py-1 px-4 rounded w-24 h-8 mr-3 "
                onClick={handlePatientEditClick}
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal font-manrope py-1 px-4 rounded w-24 h-8  "
              onClick={handlePatientEditClick}
            >
              {patientEditMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl  font-semibold px-16 w-full h-[50px] pt-3 ring-1 ring-gray-300 pl-[110px]">
        Emergency Contact
      </div>

      <div className=" w-full ring-1 ring-gray-300 px-5 pt-5 pb-10 h-full">
        <div className="pl-11">
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Emergency Contact Name:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Daniel Ramos</span>
                </p>
              )}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Relationship:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>Brother</span>
                </p>
              )}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Contact Number:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>(555) 12345</span>
                </p>
              )}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-[18px] text-nowrap">
                Contact Email:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-[18px] text-[#333333] rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" flex items-center w-[400px] h-[36px]  px-[13px] py-[9px] text-gray-400 text-[18px]">
                  <span>danielramos@gmail.com</span>
                </p>
              )}

              
            </div>
          </div>
          <div className="mr-10">
                <div className="flex justify-end">
                  {emergencyEditMode && (
                    <button
                      type="button"
                      className="bg-[#D9D9D9] hover:bg-[#D9D9D9] text-[#000] font-normal font-manrope py-1 px-4 rounded w-24 h-8 mr-3 "
                      onClick={handleEmergencyEditClick}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-normal font-manrope py-1 px-4 rounded w-24 h-8  "
                    onClick={handleEmergencyEditClick}
                  >
                    {emergencyEditMode ? "Save" : "Edit"}
                  </button>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
