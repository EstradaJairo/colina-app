"use client";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function PatientOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [detailsClicked, setDetailsClicked] = useState<boolean>(false); // State to track if "See more details" is clicked

  const tabs = [
    {
      label: "Medical History",
      url: "/medical-history/allergies",
    },
    {
      label: "Medication",
      url: "/medication",
    },
    {
      label: "Prescription",
      url: "/prescription",
    },
    {
      label: "Vital Signs",
      url: "/vital-signs",
    },
    {
      label: "Laboratory Results",
      url: "/lab-results",
    },
    {
      label: "Appointment",
      url: "/patient-appointment",
    },
    {
      label: "Notes",
      url: "/notes",
    },
  ];

  const handleSeeMoreDetails = (url: string, tabIndex: number) => {
    onNavigate(router, url);
    setActiveTab(-1); // Reset activeTab to -1 when "See more details" is clicked
    setDetailsClicked(true); // Set detailsClicked to true when "See more details" is clicked
  };

  const handleTabClick = (index: number, url: string) => {
    setActiveTab(index);
    onNavigate(router, url);
    setDetailsClicked(false); // Reset detailsClicked to false when a tab is clicked
  };

  return (
    <div className="flex flex-col w-full px-4 lg:px-28 mt-[100px]">
      <div className="flex flex-col gap-[3px]">
        <div className="text-2xl font-bold">
          <h1>Patient Overview</h1>
          <p className="text-[16px] font-medium text-[#64748B] mt-[-5px]">
            {detailsClicked
              ? "View - Details"
              : activeTab !== -1
              ? tabs[activeTab]?.label
              : ""}
          </p>
        </div>
        <div className="form ring-1 w-full h-[220px] shadow-md ring-gray-300 px-5 pt-5 rounded-md">
          <div className="flex">
            <div className="flex flex-col">
              <img
                src="/imgs/dennis.svg"
                alt="profile"
                width="200"
                height="200"
              />
            </div>
            <div className="justify-between ml-4 mt-1 flex flex-col w-full ">
              <div>
                <div className=" w-full justify-between text-2xl font-semibold flex">
                  <h1> Drake Ramos</h1>
                  <div className=" cursor-pointer items-center ml-10 flex ">
                    <p
                      className="underline text-sm font-semibold text-[#07143799] text-right"
                      onClick={() =>
                        handleSeeMoreDetails("/patient-details", -1)
                      }
                    >
                      See more details
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row w-full mt-2">
                    <img
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
                        <img src="/imgs/id.svg" alt="copy" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5"></div>
                  <div className="flex flex-row w-full">
                    <img
                      src="/imgs/codestatus.svg"
                      className="px-1"
                      alt="codestatus"
                      width="26"
                      height="26"
                    />
                    <div>
                      <p className="flex items-center mr-11">
                        Code Status: DNR
                      </p>
                    </div>
                    <div className="flex">
                      <div>
                        <p className="flex items-center mr-11">
                          Allergy: Skin Allergy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[50px] px-2">
                {tabs.map((tab, index) => (
                  <p
                    className={`cursor-pointer font-semibold ${
                      activeTab === index
                        ? "text-[#007C85] border-b-[3px] border-[#007C85]"
                        : "hover:text-[#007C85] hover:border-b-[3px] h-[27px] border-[#007C85]"
                    }`}
                    key={index}
                    onClick={() => handleTabClick(index, tab.url)}
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
