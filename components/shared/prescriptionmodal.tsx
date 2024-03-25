"use client";

import React, { useEffect, useState } from "react";

interface Modalprops {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ label, isOpen, isModalOpen }: Modalprops) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  return (
    

    <div className={`absolute inset-[-100px] bg-[#76898A99] flex items-center justify-center pb-[260px]`}>
    <div className="max-w-[550px] bg-[#FFFFFF] rounded-md">
      <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
        <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
        Add Prescription Schedule
        </h2>
        <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">Submit your log details.</p>
      </div>
      <div className=" mb-9 pt-4">
      <div className="h-[600px] max-h-[300px] md:px-10 mt-5" >
        <form className="">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            MEDICINE NAME
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="input medicine name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            FREQUENCY
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="input frequency"
              />
            </div>
          </div>
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            INTERVAL
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="input interval"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            DOSAGE
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                placeholder="input dosage"
              />
            </div>
          </div>
          <div>
                  <label htmlFor="status" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
                    STATUS
                  </label>
                  <div className="mt-2.5">
                    
                    <select
                      id="status"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
 
                    >
                      <option value="">select status</option>
                      <option value="sa">ACTIVE</option>
                      <option value="da">INACTIVE</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6 pb-3 flex flex-row">
                <button
                  onClick={() => isModalOpen(false)}
                  type="button"
                  className="w-48 px-3 py-2 hover:bg-[#D9D9D9] font-medium rounded-[7px] text-[#000] ring-1 ring-gray-200 mr-8"
                >
                  Cancel
                </button>     
                <button
                  type="button"
                  className="w-48 px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE] rounded-[7px] text-[#ffff] font-medium"
                >
                  Submit
                </button>
              </div> 
          </form>
          </div>
        </div>
        </div>
      </div>
    

  );
};