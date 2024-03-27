"use client";

import React, { useEffect } from "react";

interface Modalprops {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ label, isOpen, isModalOpen }: Modalprops) => {

  return (
    <>
      <div
        className={`absolute inset-[-100px] bg-[#76898A99] flex items-center justify-center pb-40`}
      >
        <div className="w-[600px] h-[650px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
            <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
              Patient Demographic 
            </h2>
            <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">Add patient demographic and make sure to submit.</p>
          </div>
          <div className="pr-9 mb-9 pt-4">
          <div className="h-[600px] overflow-auto max-h-[500px] md:px-10 mt-5" >
            <form className="">
                <div className="flex flex-row gap-x-[70px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    First Name
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] rounded border border-gray-200"
                    placeholder="input fullname"
                  />
                </div>

                <div className="flex flex-row gap-x-[71px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 text-nowrap required-field">
                    Last Name
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input gender"
                  />
                </div>
              
                <div className="flex flex-row gap-x-[53px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Middle Name
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  rounded border border-gray-200"
                    placeholder="input fullname"
                  />
                </div>
                <div className="flex flex-row gap-x-[94px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Gender
                  </label>
                  <input
                    type="text"  id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input gender"
                  />
                </div>
                <div className="flex flex-row gap-x-[120px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Age
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input age"
                  />
                </div>
                <div className="flex flex-row gap-x-[56px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Date of Birth
                  </label>
                  <input
                    type="text"  id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input date of birth"
                  />
                </div>
                <div className="flex flex-row gap-x-[25px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Contact Number
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input contact phone"
                  />
                </div>
                <div className="flex flex-row gap-x-[81px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Address1
                  </label>
                  <input
                    type="text"  id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input Address"
                  />
                </div>
                <div className="flex flex-row gap-x-[119px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    City
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input city"
                  />
                </div>
                <div className="flex flex-row gap-x-[79px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Address2
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input Addres2"
                  />
                </div>
                <div className="flex flex-row gap-x-[108px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    State
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input state"
                  />
                </div>
                <div className="flex flex-row gap-x-[88px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Country
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input country"
                  />
                </div>
              <div className="flex flex-row gap-x-[33px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Admission Date
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input admission date"
                  />
                </div>
                <div className="flex flex-row gap-x-[126px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Zip
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input zip"
                  />
                </div>
                <div className="flex flex-row gap-x-[56px] mb-4">
                  <label className="mb-1 font-medium font-manrope text-nowrap mt-2 required-field">
                    Code Status
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333] text-normal rounded border border-gray-200"
                    placeholder="input code status"
                  />
                </div>
                <div className="flex flex-row gap-x-[110px] mb-4">
                  <label className="mb-1 font-medium font-manrope mt-2 required-field">
                    Email
                  </label>
                  <input
                    type="text" id="" name="" required
                    className="h-10 w-80 bg-[#FCFCFC]  px-3 py-2 text-sm text-[#333333]  text-normal rounded border border-gray-200"
                    placeholder="input email"
                  />
                </div>
                <div className="mt-5 justify-center flex pb-2">
                  <button
                    onClick={() => isModalOpen(false)}
                    type="button"
                    className="w-[340px] px-3 py-2 hover:bg-[#D9D9D9] font-medium rounded-[7px] text-[#000] mt-2 mr-3 ring-1 ring-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="w-[340px] px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE] rounded-[7px] text-[#ffff] font-medium mt-2"
                  >
                    Submit
                  </button>
                </div>
            </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
