"use client";
import React, { Suspense, useState } from "react";
import DBDueMedicationLoader from "../loaders/DBDueMedicationLoader";
import DBUpcomingLoader from "../loaders/DBUpcomingLoader";
import DBDueMedication from "./dbDueMedications";
import DBPatientSummary from "./dbPatientSummary";
import DBUpcomingAppointments from "./dbUpcomingAppointments";

const DBBody = () => {
  const [totalDueMedication, setTotalDueMedication] = useState(0);
  const [totalDone, setTotalDone] = useState(0);
  return (
    <div className="flex h-full w-full gap-5">
      <div className="w-4/6">
        <DBPatientSummary
          totalDueMedication={totalDueMedication}
          totalDone={totalDone}
        />
      </div>
      <div className="flex h-full w-2/6 flex-col gap-3">
        <div className="h-1/2 w-full">
          <Suspense fallback={<DBDueMedicationLoader />}>
            <DBDueMedication
              totalDueMedication={totalDueMedication}
              setTotalDueMedication={setTotalDueMedication}
              totalDone={totalDone}
              setTotalDone={setTotalDone}
            />
          </Suspense>
        </div>

        <Suspense fallback={<DBUpcomingLoader />}>
          <div className="h-1/2 w-full">
            <DBUpcomingAppointments />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default DBBody;
