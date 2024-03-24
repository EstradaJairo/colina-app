"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchPatientDetails } from "@/app/api/patients-api/patientDetails.api";

export default function PatientDetails() {
  const [patientDetails, setPatientDetails] = useState<any>([])
  const [patientEditMode, setPatientEditMode] = useState(false);
  const [emergencyEditMode, setEmergencyEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("")
  const router = useRouter();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  const patientId = params.id.toUpperCase();

  const handlePatientEditClick = () => {
    setPatientEditMode(!patientEditMode);
  };

  const handleEmergencyEditClick = () => {
    setEmergencyEditMode(!emergencyEditMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPatientDetails(
          patientId,
          router
        );
        setPatientDetails(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
console.log(patientDetails,"patientDetails")
  return (
    <div className="flex flex-col w-full">
      <div className="text-xl font-semibold px-16 w-full h-[50px] pt-3 ring-1 ring-gray-300 pl-[110px]">
        Patient Details
      </div>
      <div className=" w-full h-full ring-1 ring-gray-300 px-5 pt-5 pb-5 ">
        <div className="grid grid-cols-2 grid-rows-1 pl-[90px] mb-7">
        <div className="grid  max-w-[736px] w-full h-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[99px] text-nowrap">
                First Name
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="Drake"
                />
              ) : (
                <p className=" font-regular text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.firstName}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[736px] w-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[99px] text-nowrap">
                Last Name
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="Ramos"
                />
              ) : (
                <p className=" font-normal text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.lastName}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  max-w-[736px] w-full h-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[80px] text-nowrap">
                Middle Name
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="K"
                />
              ) : (
                <p className=" font-regular text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.middleName ? patientDetails[0]?.middleName : "N/A"}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid max-w-[736px] w-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[119px] text-nowrap">
                Gender:
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="Male"
                />
              ) : (
                <p className=" font-normal text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.gender}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[144px] text-nowrap">
                Age:
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="34"
                />
              ) : (
                <p className=" font-normal text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.age}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[80px] text-nowrap">
                Date of Birth:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="05/24/1990"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.dateOfBirth}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[60px] text-nowrap">
                Contact Phone:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="(555)123456"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.phoneNo}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[106px] text-nowrap">
                Address1:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="123123"
                />
              ) : (
                <p className=" font-normal text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.address1 ? patientDetails[0]?.address1 : "N/A"}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[144px] text-nowrap">
                City:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="California"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.city}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[105px] text-nowrap">
                Address2:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9  w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="3124234"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.address2 ? patientDetails[0]?.address2 : "N/A"}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[134px] text-nowrap">
                State:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="Sanford"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.state}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[116px] text-nowrap">
                Country:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="Los Angeles"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.country}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[156px] text-nowrap">
                Zip:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="9005"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.zip}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[55px] text-nowrap">
                Admission Date:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9  w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="02/26/2024"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.admissionDate}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[87px] text-nowrap">
                Code Status:
              </label>
              {patientEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="DNR"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.codeStatus}</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid  grid-rows-1 max-w-[736px] w-full">
            <div className="mt-8 flex items-center ">
              <label className=" font-manrope font-medium text-[#191D23] text-md mr-[132px] text-nowrap">
                Email:
              </label>
              {patientEditMode? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC] px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                  placeholder="drake@gmail.com"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>{patientDetails[0]?.email}</span>
                </p>
              )}
            </div>
          </div>
          <div></div>
          <div className="mb-4 w-full ">
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
                {patientEditMode? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl  font-semibold px-16 w-full h-[50px] pt-3 ring-1 ring-gray-300 pl-[110px]">
        Emergency Contact
      </div>

      <div className=" w-full h-full ring-1 ring-gray-300 px-5 pt-5 pb-5 ">
        <div className="pl-11">
        <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[147px] text-nowrap">
                First Name:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="Scarlette"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3 text-nowrap">
                  <span>Scarlette </span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[147px] text-nowrap">
                Last Name:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder=" Johnson"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3 text-nowrap">
                  <span> Johnson</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[130px] text-nowrap">
                Middle Name:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="S"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3 text-nowrap">
                  <span>S</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[133px] text-nowrap">
                Relationship:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="Siblings"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>Siblings</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[102px] text-nowrap">
                Contact Number:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="(555) 789078"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3 text-nowrap">
                  <span>(555) 789078</span>
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-[736px] w-full pl-[50px]">
            <div className="mt-12 flex items-center">
              <label className=" font-medium text-md mr-[122px] text-nowrap">
                Contact Email:
              </label>
              {emergencyEditMode ? (
                <input
                  type="text"
                  className="h-9 w-[400px] bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                  placeholder="scarlette@gmail.com"
                />
              ) : (
                <p className=" font-normal  text-gray-400 text-md h-[36px] flex items-center ml-3">
                  <span>scarlette@gmail.com</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4 ">
          <div className="justify-end flex pt-5">
          {emergencyEditMode && (
              <button
                type="button"
                className="bg-[#D9D9D9] hover:bg-[#D9D9D9] text-[#000] font-normal font-manrope py-1 px-4 rounded w-24 h-8 mr-3"
                onClick={handleEmergencyEditClick}
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal font-manrope py-1 px-4 rounded w-24 h-8 "
              onClick={handleEmergencyEditClick}
            >
              {emergencyEditMode ? "Save" : "Edit"}
            </button>
          </div>  
          </div>
      </div>
    </div>
  );
}