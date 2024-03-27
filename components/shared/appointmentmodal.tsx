import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Datepicker } from "flowbite-react"; 

interface ModalProps {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ label, isOpen, isModalOpen }) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null); // State to hold the selected date and time

  return (
    <div className={`absolute inset-[-100px] bg-[#76898A99] flex items-center justify-center pb-40`}>
      <div className="w-[676px] h-[600px] bg-[#FFFFFF] rounded-md">
        <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
          <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
            Add an Appointment
          </h2>
          <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">Submit your appointment schedule.</p>
        </div>
        <div className=" mb-9 pt-4">
          <div className="h-[600px] max-h-[300px] md:px-10 mt-5">
            <form className="">
              <div className="flex flex-col items-center mt-6 pb-3 ">
                <div className="flex flex-col w-[200px]" >
                <Datepicker />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            Time From:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 required-field">
            Time to:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
