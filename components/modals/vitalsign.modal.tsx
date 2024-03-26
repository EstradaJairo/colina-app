"use client";

import {
  createVitalSignsOfPatient,
  updateVitalSignsOfPatient,
} from "@/app/api/vital-sign-api/vital-sign-api";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Modalprops {
  isEdit: boolean;
  vitalSignData: any;
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

export const VitalSignModal = ({
  isEdit,
  vitalSignData,
  label,
  isOpen,
  isModalOpen,
}: Modalprops) => {
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  const patientId = params.id.toUpperCase();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    bloodPressure: "",
    hearRate: "",
    temperature: "",
    respiratory: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateVitalSignsOfPatient(
          vitalSignData.vitalsign_uuid,
          formData,
          router
        );
        isModalOpen(false);
        return;
      } else {
        const vitalSign = await createVitalSignsOfPatient(
          patientId,
          formData,
          router
        );
        console.log("Prescription added successfully:", vitalSign);

        // Reset the form data after successful submission
        setFormData({
          bloodPressure: "",
          hearRate: "",
          temperature: "",
          respiratory: "",
        });
      }
    } catch (error) {
      console.error("Error adding Prescription:", error);
      setError("Failed to add Prescription");
    }
  };
  console.log(vitalSignData, "prescriptionData");
  console.log(formData, "formData");

  return (
    <div
      className={`absolute inset-[-200px] bg-[#76898A99] flex items-center justify-center pb-[310px]`}
    >
      <div className="max-w-[550px] bg-[#FFFFFF] rounded-md">
        <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
          <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
            Add Add Vital Sign
          </h2>
          <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">
            Submit your log details.
          </p>
        </div>
        <div className=" mb-9 pt-4">
          <div className="h-[600px] max-h-[250px] md:px-10 mt-5">
            <form className="">
              <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                  >
                    BLOOD PRESSURE
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input blood pressure"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                  >
                    HEART RATE
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input heart rate"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                  >
                    TEMPERATURE
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input temperature"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900 required-field"
                  >
                    RESPIRATORY
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                      placeholder="input respiratory"
                    />
                  </div>
                </div>
                <div className="mt-5 pb-3 ">
                  <button
                    onClick={() => isModalOpen(false)}
                    type="button"
                    className="w-48 px-3 py-2 hover:bg-[#D9D9D9] font-medium rounded-[7px] text-[#000] ring-1 ring-gray-200"
                  >
                    Cancel
                  </button>
                </div>
                <div className="mt-5 pb-3  ">
                  <button
                    type="button"
                    className="w-48 px-3 py-2 bg-[#1B84FF] hover:bg-[#2765AE] rounded-[7px] text-[#ffff] font-medium"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
