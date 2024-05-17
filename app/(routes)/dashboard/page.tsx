import React, { Suspense, useEffect, useState } from "react";
import NurseDrawer from "@/components/nurse-drawer";
import { SuccessModal } from "@/components/shared/success";
import DBDueMedication from "@/components/dbDueMedications";
import DBUpcomingAppointments from "@/components/dbUpcomingAppointments";
import DBDueMedicationLoader from "@/components/loaders/DBDueMedicationLoader";
import DBUpcomingLoader from "@/components/loaders/DBUpcomingLoader";
import UserDetail from "@/components/userDetails";
import DBUserDetailLoader from "@/components/loaders/DBUserDetailLoader";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="justify-center h-full items-center mx-[154px] mt-[90px] overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <div className="w-full">
            <p className="p-title select-none mb-1">WELCOME TO DASHBOARD!</p>
            <div className="font-bold text-[15px] flex mb-4 select-none">
              Hey,{" "}
              <Suspense fallback={<DBUserDetailLoader />}>
                <UserDetail />{" "}
              </Suspense>
              -
              <p className="font-normal text-[15px] pl-1 text-[#71717A] select-none">
                here's what's happening with your clinic today!
              </p>
            </div>
          </div>
          <NurseDrawer />
        </div>
        <div className="w-full h-full flex gap-5">
          <div className="w-4/6 flex flex-col justify-between gap-3">
            <div className="h-[50px] bg-red-200 w-full flex gap-3"></div>
            <div className="w-full h-full gap-3 flex flex-col">
              <div className="h-4/6 w-full flex gap-3">
                <div className="w-1/2 flex flex-col  gap-3">
                  <div className="h-2/4 bg-[#D9D9D91A] ">
                    <h1 className="font-bold text-xl bg-red-500 w-full p-5">
                      Patient Details
                    </h1>
                  </div>
                  <div className="h-2/4 bg-[#D9D9D91A] p-5">
                    <h1 className="font-bold text-xl">Medication</h1>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                  <div className="h-2/4 bg-[#D9D9D91A] p-5">
                    <h1 className="font-bold text-xl">Allergies</h1>
                  </div>
                  <div className="h-2/4 bg-[#D9D9D91A] p-5">
                    <h1 className="font-bold text-xl">Vital Signs</h1>
                  </div>
                </div>
              </div>
              <div className="h-2/6  w-full flex flex-col gap-3">
                <h1 className="font-bold text-xl">Due Medication Graph</h1>
                <div className="w-full flex gap-3 h-full">
                  <div className="w-1/2 bg-blue-500"></div>
                  <div className="w-1/2 bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/6 h-full flex flex-col gap-3">
            <div className="w-full h-1/2">
              <Suspense fallback={<DBDueMedicationLoader />}>
                <DBDueMedication />
              </Suspense>
            </div>

            <Suspense fallback={<DBUpcomingLoader />}>
              <div className="w-full h-1/2">
                <DBUpcomingAppointments />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
