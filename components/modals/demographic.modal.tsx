"use client";
import { fetchCountryList } from "@/app/api/country-api/countryList.api";
import { addPatient } from "@/app/api/patients-api/patientList.api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SuccessModal } from "../shared/success";
import { X } from "lucide-react";
import Image from "next/image";

interface Modalprops {
  label: string;
  isOpen: boolean;
isModalOpen: (isOpen: boolean) => void;
setErrorMessage: any;
onSuccess: () => void;
onFailed: () => void;
}

export const DemographicModal = ({
  label,
  isOpen,
  isModalOpen,
  setErrorMessage,
  onSuccess,
  onFailed,
}: Modalprops) => {
  const [countryList, setCountryList] = useState<any[]>([]);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    phoneNo: "",
    address1: "",
    city: "",
    address2: "",
    state: "",
    country: "",
    zip: "",
    allergies: "",
    admissionDate: "",
    codeStatus: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    // Call the addPatient API function here
    e.preventDefault();
    try {
      const patientList = await addPatient(formData, router);
      console.log("Patient added successfully:", patientList);
      // Optionally, you can reset the form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        middleName: "",
        gender: "",
        age: "",
        dateOfBirth: "",
        phoneNo: "",
        address1: "",
        city: "",
        address2: "",
        state: "",
        country: "",
        zip: "",
        allergies: "",
        admissionDate: "",
        codeStatus: "",
        email: "",
      });
      onSuccess();
      isModalOpen(false)
    } catch (error: any) {
      if (error.message === "Patient already exist") {
        setErrorMessage("Patient already exist");
        onFailed();
        isModalOpen(false);
        console.log("conflict error");
      }
      console.log(error.message);
      setError("Failed to add Patient");
    }
  };

  const handleCountryChange = (countryId: string) => {
    setFormData((prevData) => ({
      ...prevData,
      country: countryId,
    }));
  };
  console.log(error, "error");

  const handleCodeStatusChange = (codeStatus: string) => {
    setFormData((prevData) => ({
      ...prevData,
      codeStatus: codeStatus,
    }));
  };
  console.log(error, "error");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countries = await fetchCountryList(router);
        setCountryList(countries);
      } catch (error) {
        console.error("Error fetching country list:");
      }
    };

    fetchData();
  }, []);
  console.log(formData, "formData");

  return (
      <>
        <div className="w-[1200px] h-[645px]">
          <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-[15px]">
            <div className="items-center flex justify-between px-8">
              <h2 className="p-title text-left text-[#071437] mt-5 w-full pl-2">
                Patient Demographic
              </h2>
              <X
                onClick={() => isModalOpen(false)}
                className="w-7 h-7 text-black flex items-center mt-2"
              />
            </div>
            <p className="text-[15px] pl-10 text-gray-600 pb-10 pt-2">
              Add patient demographic and make sure to submit.
            </p>
            <div className="flex place-items-end mr-4"></div>
          </div>
          <div className=" mb-9 pt-4">
            <div className="h-[600px] max-h-[480px] md:px-10 mt-5">
              <form className=""onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id=""
                        name="firstName"
                        required
                        className="block w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input firstname"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Middle Name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="middleName"
                        required
                        className="block w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input middlename"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Last Name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="block w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input lastname"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-lg font-bold leading-6 text-gray-900 required-field"
                      >
                        Age
                      </label>
                      <div className="mt-1 relative mr-4">
                        <input
                         type="number"
                         name="age"
                          required
                          className="w-[172px] h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input age"
                          value={formData.age}
                        onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-lg font-bold leading-6  text-gray-900 required-field"
                        >
                          Gender
                        </label>
                        <div className="mt-1 relative">
                          <select 
                            name="gender"
                            className="w-[174px] h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 appearance-none"
                            value={formData.gender}
                            // onChange={handleChange}
                            style={{ cursor: "pointer" }}
                            required
                          >
                            <option value="">select gender</option>
                            <option value="active">Male</option>
                            <option value="inactive">Female</option>
                          </select>
                          <Image
                            className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                            width={20}
                            height={20}
                            src={"/svgs/chevron-up.svg"}
                            alt={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Date of Birth
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="date"
                        name="dateOfBirth"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 appearance-none"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        style={{ cursor: "pointer" }}
                      />
                      <Image
                        className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                        width={20}
                        height={20}
                        src={"/svgs/calendark.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Address 1
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address1"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input address 1"
                        value={formData.address1}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Address 2
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address2"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input address 2 (optional)"
                        value={formData.address2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-lg font-bold leading-6 text-gray-900 required-field"
                      >
                        City
                      </label>
                      <div className="mt-1 relative mr-4">
                        <input
                           type="text"
                           name="city"
                          required
                          className="w-[174px] h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input city"
                          value={formData.city}
                        onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-lg font-bold leading-6 text-gray-900 required-field"
                        >
                          State
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="state"
                            required
                            className="w-[174px] h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="input state"
                            value={formData.state}
                        onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Country
                    </label>
                    <div className="mt-1 relative">
                    <select
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 appearance-none"
                        name="country"
                        style={{ cursor: "pointer" }}
                        onChange={(event) =>
                          handleCountryChange(event.target.value)
                        }
                      >
                        <option value={""}>Select a country</option>
                        {countryList.map((country) => (
                          <option key={country.countryId} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <Image
                        className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                        width={20}
                        height={20}
                        src={"/svgs/chevron-up.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Zip
                    </label>
                    <div className="mt-1 relative">
                      <input
                         type="text"
                         id=""
                         name="zip"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input zip"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Allergies
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="allergies"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input Allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
  
                  <div className="">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Code Status
                    </label>
                    <div className="mt-1 relative">
                      <select
                        id="status"
                        name="codestatus"
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 appearance-none"
                        value={formData.codeStatus}
                        onChange={(event) =>
                          handleCodeStatusChange(event.target.value)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">select status</option>
                        <option value="active">DNR</option>
                        <option value="inactive">FULL CODE</option>
                      </select>
                      <Image
                        className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                        width={20}
                        height={20}
                        src={"/svgs/chevron-up.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Admission Date
                    </label>
                    <div className="mt-1 relative relative">
                      <input
                        type="date"
                        name="admissionDate"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 appearance-none"
                        placeholder="input addmission date"
                        value={formData.admissionDate}
                        onChange={handleChange}
                        style={{ cursor: "pointer" }}
                      />
                      <Image
                        className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                        width={20}
                        height={20}
                        src={"/svgs/calendark.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Email
                    </label>
                    <div className="mt-1 relative">
                      <input
                         type="text"
                         id=""
                         name="email"
                        required
                        className="w-full h-12 ring-1 ring-inset ring-gray-300 rounded-[9px] px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="input email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
  
                  <div className="">
                    <label
                      htmlFor="imageUpload"
                      className="relative h-[70px] w-full bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-[4px] cursor-pointer text-center text-[#101828] font-bold mt-1 relative.5"
                    >
                      <Image
                        className="w-10 h-10 mr-1"
                        width={50}
                        height={50}
                        src={"/svgs/gallery-export.svg"}
                        alt={""}
                      />
                      <div className="flex pb-5">
                        <p className="">Drag & Drop files or</p>
                        <p className="underline decoration-solid text-blue-500 ml-1">
                          Browse
                        </p>
                      </div>
                      <span className="text-sm font-normal absolute bottom-2 text-[#667085] ml-10 pb-1">
                        Support PNG & JPG
                      </span>
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      className="hidden"
                      // onChange={(e) => handleImageUpload(e)}
                    />
                  </div>
                </div>
                
              </form>
            </div>
            <div className="justify-center flex relative">
  <hr className="absolute border-t-[3px] border-gray-300 mb-2 -mt-3 w-full" />
  <button
    onClick={() => isModalOpen(false)}
    type="button"
    className="w-[600px] h-[51px] bg-[#BCBCBC] hover:bg-[#D9D9D9] text-white font-medium mt-2 mr-[3px] rounded-bl-[15px]"
  >
    Cancel
  </button>
  <button
    type="button"
    className="w-[600px] bg-[#1B84FF] hover:bg-[#2765AE] text-[#ffff] font-medium mt-2 rounded-br-[15px]"
  >
    Submit
  </button>
</div>

          </div>
        </div>
      </>
    );
  };
  