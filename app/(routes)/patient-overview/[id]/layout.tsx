"use client";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useRef } from "react";

export default function PatientOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabUrl, setTabUrl] = useState<string>("");
  const [detailsClicked, setDetailsClicked] = useState<boolean>(false);

  const tabs = [
    {
      label: "Medical History",
      url: "/patient-overview/patientId/medical-history/allergies",
    },
    {
      label: "Medications",
      url: "/patient-overview/patientId/medication/scheduled",
    },
    {
      label: "Prescription",
      url: "/patient-overview/patientId/prescription",
    },
    {
      label: "Vital Signs",
      url: "/patient-overview/patientId/vital-signs",
    },
    {
      label: "Laboratory Results",
      url: "/patient-overview/patientId/lab-results",
    },
    {
      label: "Appointment",
      url: "/patient-overview/patientId/patient-appointment",
    },
    {
      label: "Notes",
      url: "/patient-overview/patientId/notes",
    },
    {
      label: "Forms",
      url: "/patient-overview/patientId/forms",
    },
  ];

  const handleSeeMoreDetails = (url: string, tabIndex: number) => {
    onNavigate(router, url);
    setActiveTab(-1);
    setDetailsClicked(true);
  };

  const handleTabClick = (url: string, tabIndex: number) => {
    onNavigate(router, url);
    setActiveTab(tabIndex);
    setDetailsClicked(false);
  };

  const fileInputRef = useRef(null);

  const previewImage = (event) => {
    const input = event.target;
    const preview = document.getElementById("preview");

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.innerHTML =
          '<img src="' + e.target.result + '" alt="Uploaded Image" />';
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  const handlePreviewClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col w-full px-[150px] py-[90px]">
      <div className="flex flex-col ">
        <div className="p-title pb-10">
          <h1>Patient Overview</h1>
        </div>
        <div className="form ring-1 w-full h-[220px] shadow-md ring-gray-300 px-5 pt-5 rounded-md">
          <div className="flex">
            <div className="flex flex-col">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={previewImage}
                style={{ display: "none" }}
              />

              <div
                id="preview"
                style={{ width: "200px", height: "230px", cursor: "pointer" }}
                onClick={handlePreviewClick}
              >
                <img
                  src="icons/Bimage.png" // Replace default_image_url.jpg with your default image URL
                  alt="Default Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className=" ml-4 mt-1 w-full">
              <div>
                <div className="w-full justify-between p-title flex ml-2">
                  <h1> Drake Ramos</h1>
                  <div className=" cursor-pointer items-center ml-10 flex ">
                    <p
                      className="underline text-[15px] font-semibold text-[#191D23] text-right mr-10"
                      onClick={() =>
                        handleSeeMoreDetails(
                          "/patient-overview/patientId/patient-details",
                          -1
                        )
                      }
                    >
                      See more details
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row w-full mt-2 font-medium text-[15px]">
                    <Image
                      src="/imgs/profile-circle.svg"
                      className="px-1"
                      alt="profile"
                      width="26"
                      height="26"
                    />
                    <div>
                      <p className="flex items-center mr-11">Patient</p>
                    </div>
                    <div className="flex">
                      <div>
                        <p className="flex items-center mr-11">Age: 100</p>
                      </div>
                      <div>
                        <p className="flex items-center mr-11">Gender: Male</p>
                      </div>
                      <div className="flex">
                        <p className="flex items-center">
                          ID: SGY-5146846548465
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5"></div>
                  <div className="flex flex-row w-full font-medium text-[15px]">
                    <Image
                      src="/imgs/notification-status.svg"
                      className="px-1"
                      alt="codestatus"
                      width="26"
                      height="26"
                    />
                    <div className="flex items-center mr-11 gap-1">
                      <p>Code Status:</p>
                      <p className="text-[#DB3956]">DNR</p>
                    </div>
                    <div className="flex">
                      <div>
                        <p className="flex items-center ml-7">
                          Allergy: Skin Allergy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[50px] px-2 mt-8">
                {tabs.map((tab, index) => (
                  <p
                    className={`cursor-pointer font-bold  ${
                      pathname === tab.url
                        ? "text-[#007C85] border-b-[3px] border-[#007C85] text-[15px]"
                        : "hover:text-[#007C85] hover:border-b-[3px] h-[27px] border-[#007C85] text-[15px]"
                    }`}
                    key={index}
                    onClick={() => {
                      handleTabClick(tab.url, index); // Pass both URL and tabIndex
                    }}
                  >
                    {tab.label}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        {children}
      </div>
    </div>
  );
}
