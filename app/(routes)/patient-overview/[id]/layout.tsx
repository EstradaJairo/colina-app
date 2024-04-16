"use client";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { Navbar } from "@/components/navbar";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { searchPatientList } from "@/app/api/patients-api/patientList.api";
import { Patients } from "@/type";

export default function PatientOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const patientId = params.id.toUpperCase();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabUrl, setTabUrl] = useState<string>("");
  const [detailsClicked, setDetailsClicked] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<Patients[]>([]);

  const tabs = [
    {
      label: "Medical History",
      url: `/patient-overview/${patientId}/medical-history/allergies`,
    },
    {
      label: "Medications",
      url: `/patient-overview/${patientId}/medication/scheduled`,
    },
    {
      label: "Prescription",
      url: `/patient-overview/${patientId}/prescription`,
    },
    {
      label: "Vital Signs",
      url: `/patient-overview/${patientId}/vital-signs`,
    },
    {
      label: "Laboratory Results",
      url: `/patient-overview/${patientId}/lab-results`,
    },
    {
      label: "Appointment",
      url: `/patient-overview/${patientId}/patient-appointment`,
    },
    {
      label: "Notes",
      url: `/patient-overview/${patientId}/notes`,
    },
    {
      label: "Forms",
      url: `/patient-overview/${patientId}/forms`,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchPatientList(router);
        if (response.data[0].uuid === patientId) {
          if (response.data.length === 0) {
            setCurrentData([]);
            // setIsLoading(false);
            return;
          }
          setCurrentData(response.data);
          console.log("Data:", response.data);
        }
      } catch (error: any) {
        // setError(error.message);
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full px-[150px] py-[90px]">
      <div className="flex flex-col ">
        <div className="p-title pb-10">
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
            <div className="justify-between ml-4 mt-1 flex flex-col w-full">
              <div>
                <div className="w-full justify-between p-title flex ml-2">
                  <h1>
                    {currentData[0]?.firstName} {currentData[0]?.lastName}
                  </h1>
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
                        <p className="flex items-center mr-11">
                          Age: {currentData[0]?.age}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center mr-11">
                          Gender:
                          {currentData[0]?.gender}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="flex items-center">
                          ID: {currentData[0]?.uuid}
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
                      <p className="text-[#DB3956]">
                        {currentData[0]?.codeStatus}
                      </p>
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
              <div className="flex gap-[50px] px-2 ">
                {tabs.map((tab, index) => (
                  <p
                    className={`cursor-pointer font-bold  ${
                      pathname === tab.url
                        ? "text-[#007C85] border-b-[3px] border-[#007C85] text-[15px]"
                        : "hover:text-[#007C85] hover:border-b-[3px] h-[27px] border-[#007C85] text-[15px]"
                    }`}
                    key={index}
                    onClick={() => {
                      handleTabClick(tab.url, index);
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
