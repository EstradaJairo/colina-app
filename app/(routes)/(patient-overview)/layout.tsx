"use client";

import { onNavigate } from "@/actions/navigation";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function PatientOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const tabs = [
    {
      label: "Medical History",
      url: "/medical-history",
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
  return (
    <div className="flex flex-col w-full gap-[150px] px-28 mt-24">
      <div className="flex flex-col gap-[20px]">
        <div className="text-2xl ">
          <h1>Patient Overview</h1>
        </div>
        <div className="ring-1 w-full h-full shadow-md ring-gray-300 px-5 pt-5 pb-[14px] rounded-md mt-2">
          <div className="flex">
            <div className="flex flex-col">
              <img
                src="/imgs/profile 3.svg"
                alt="profile"
                width="228px"
                height="232"
              />
            </div>
            {/* 1 */}
            <div className="justify-between ml-4 mt-1 flex flex-col w-full ">
              <div>
                <div className=" w-full justify-between text-2xl font-semibold flex mb-2">
                  <p className=" font-bold text-[35px]"> Drake Ramos</p>

                  <div className=" items-center ml-10 flex ">
                    <a
                      href=""
                      className="underline text-sm font-semibold text-[#07143799] text-right"
                    >
                      See more details
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row w-full">
                    <div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        Patient
                      </span>
                    </div>
                    {/*  */}
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
                  {/*  */}
                  <div className="mb-5"></div>
                  <div className="flex flex-row w-full">
                    <img
                      src="/imgs/notification-status.svg"
                      className="px-1"
                      alt="codestatus"
                      width="26" // Adjust these values to change the size
                      height="26" // Adjust these values to change the size
                    />
                    <div className="flex items-center">
                      <p className="flex items-center mr-2 ">Code Status:</p>
                      <p className="mr-11 text-red-600 font-semibold"> DNR</p>
                    </div>
                    {/*  */}
                    <div className="flex">
                      <div>
                        <div></div>
                        <p className="flex items-center mr-11">
                          Allergy: Skin Allergy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex gap-[20px]">
                  {tabs.map((tab, index) => (
                    <p
                      className="cursor-pointer hover:underline"
                      key={index}
                      onClick={() => onNavigate(router, tab.url)}
                    >
                      {tab.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
