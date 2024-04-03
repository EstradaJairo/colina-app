"use client";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      label: "Medication Log",
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

  return (
    <div className="flex flex-col w-full px-4 lg:px-28 mt-[100px]">
      <div className="flex flex-col gap-[3px]">
        <div className="text-2xl font-bold pb-2">
          <h1>Patient Overview</h1>
        </div>
        <div className="form ring-1 w-full h-[220px] shadow-md ring-gray-300 px-5 pt-5 rounded-md">
          <div className="flex">
            <div className="flex flex-col">
              <Image
                src="/imgs/dennis.svg"
                alt="profile"
                width="200"
                height="200"
              />
            </div>
            <div className="justify-between ml-4 mt-1 flex flex-col w-full ">
              <div>
                <div className="w-full justify-between text-2xl font-bold flex ml-2">
                  <h1> Drake Ramos</h1>
                  <div className=" cursor-pointer items-center ml-10 flex ">
                    <p
                      className="underline text-sm font-semibold text-[#191D23] text-right mr-10"
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
                  <div className="flex flex-row w-full mt-2 font-medium">
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
                  <div className="flex flex-row w-full font-medium">
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
              <div className="flex gap-[50px] px-2">
                {tabs.map((tab, index) => (
                  <p
                    className={`cursor-pointer font-bold  ${
                      pathname === tab.url
                        ? "text-[#007C85] border-b-[3px] border-[#007C85]"
                        : "hover:text-[#007C85] hover:border-b-[3px] h-[27px] border-[#007C85]"
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
