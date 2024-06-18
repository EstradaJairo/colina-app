"use client";
import React, { useEffect, useState } from "react";
import DBPatientSelect from "./dbPatientSelect";
import DoughnutChart from "../DoughnutChart";
import { useRouter } from "next/navigation";
import { fetchPatientRecentInfo } from "@/app/api/patients-api/patientRecentInfo.api";
import ResuableTooltip from "../reusable/tooltip";
import { formatDate, formatTime } from "@/lib/utils";
interface DBPatientSummaryProps {
  totalDueMedication: number;
  totalDone: number;
}

const DBPatientSummary = ({
  totalDueMedication,
  totalDone,
}: DBPatientSummaryProps) => {
  const router = useRouter();
  const [patientId, setPatientId] = React.useState("");
  const [patientRecentInfo, setPatientRecentInfo] = useState<any>();
  const pri = patientRecentInfo!;
  const totalPatientDue =
    pri === undefined ? 0 : pri?.totalMedicationDue?.medicationCount;
  const totalPatientDone =
    pri === undefined ? 0 : pri?.totalMedicationDone?.medicationCount;

  const recentMedication =
    pri?.recentMedication?.medicationlogs_medicationLogsName;
  const recentMedicationDate =
    pri?.recentMedication?.medicationlogs_medicationLogsDate;
  const recentMedicationTime =
    pri?.recentMedication?.medicationlogs_medicationLogsTime;

  const allergens = pri?.patientAllergies[0]?.allergens
    ? pri.patientAllergies[0].allergens
        .split(",")
        .map((allergen: string) => allergen.trim())
    : ["No Allergens"];
  console.log("totalPatientDue", totalPatientDue);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPatientRecentInfo(patientId, router);
        setPatientRecentInfo(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, [patientId]);
  console.log("patientId", patientId);
  console.log(patientRecentInfo, "patientRecentInfo");
  console.log("recentMedication", recentMedication);
  return (
    <div className="flex h-full w-full flex-col justify-between gap-3">
      <div className="flex h-[50px] w-1/2 pr-[6px]">
        <DBPatientSelect patientId={patientId} setPatientId={setPatientId} />
      </div>
      <div className="flex h-full w-full flex-col gap-3">
        <div className="h-4/6 w-full gap-3">
          <div className="relative flex h-1/2 w-full gap-3">
            <div className="h-full w-1/2 bg-[#D9D9D91A]">
              <div className="h-[40px] w-full rounded-t-[5px] bg-[#F4E394]"></div>
              <div className="px-5 py-5">
                <h1 className="text-[15px] font-medium">Patient Details</h1>
                <div className="sub-title mt-2 flex h-full w-full items-center">
                  {pri == undefined ? (
                    <h1 className="w-full text-center">no data yet</h1>
                  ) : (
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex w-full">
                        Name:{" "}
                        <div className="flex w-full">
                          <p className="w-9/12 truncate">
                            <ResuableTooltip
                              text={`${pri?.data[0]?.patient_firstName}${" "}
                            ${pri?.data[0]?.patient_middleName}${" "}
                          ${pri?.data[0]?.patient_lastName} ${" "}`}
                            />
                          </p>
                          <span className="ml-1 w-3/12">
                            {" "}
                            - {pri?.data[0]?.patient_age}{" "}
                            {pri?.data[0]?.patient_gender}
                          </span>
                        </div>
                      </div>
                      <h1>
                        Date of Birth:{" "}
                        {formatDate(pri?.data[0]?.patient_dateOfBirth)}
                      </h1>
                      <div className="flex w-full">
                        Address:{" "}
                        <h1 className="w-[420px] truncate">
                          <ResuableTooltip
                            text={`${pri?.data[0]?.patient_address1}`}
                          />
                        </h1>
                      </div>
                      <h1>Phone Number: {pri?.data[0]?.patient_phoneNo}</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative h-full w-1/2 bg-[#D9D9D91A]">
              <div className="h-[40px] w-full rounded-t-[5px] bg-[#F3BB93]"></div>
              <div className="relative px-5 py-5">
                <h1 className="text-[15px] font-medium">Vital Signs</h1>
                <div className="sub-title mt-2 flex h-full w-full items-center">
                  {pri == undefined ? (
                    <h1 className="w-full text-center">no data yet</h1>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <h1>Blood Pressure: {pri?.data[0]?.bloodPressure}mmHg</h1>
                      <h1>Heart Rate: {pri?.data[0]?.heartRate}bpm</h1>
                      <h1>Temperature: {pri?.data[0]?.temperature}°F</h1>
                      <h1>Respiratory: {pri?.data[0]?.respiratoryRate} breaths per minute </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[200px] w-full flex-row gap-3">
            <div className="h-full w-1/2 bg-[#D9D9D91A]">
              <div className="h-[40px] w-full rounded-t-[5px] bg-[#93F3B9]"></div>
              <div className="px-5 pt-5">
                <h1 className="text-[15px] font-medium">Medication</h1>
                <div className="sub-title mt-2 flex h-full w-full items-center">
                  {pri == undefined ? (
                    <h1 className="w-full text-center">no data yet</h1>
                  ) : recentMedication === undefined ? (
                    <div>No Recent Medication</div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <p>{recentMedication}</p>
                      <p>Date Taken : {formatDate(recentMedicationDate)}</p>
                      <p>Time Taken : {formatTime(recentMedicationTime)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="h-full w-1/2 bg-[#D9D9D91A]">
              <div className="h-[40px] w-full rounded-t-[5px] bg-[#93F3DC]"></div>
              <div className="pl-5 pt-5">
                <h1 className="text-[15px] font-medium">Allergies</h1>
                <div className="sub-title flex h-full w-full items-center">
                  {pri == undefined ? (
                    <h1 className="w-full text-center">no data yet</h1>
                  ) : (
                    <div className="max-h-[100px] w-full overflow-auto">
                      <div className="mt-2 flex h-full flex-col gap-1">
                        {allergens.map(
                          (
                            allergen:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | React.PromiseLikeOfReactNode
                              | null
                              | undefined,
                            index: React.Key | null | undefined,
                          ) => (
                            <div key={index}>{allergen}</div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/4 bg-[#D9D9D91A]">
          <div className="h-[40px] w-full rounded-t-[5px] bg-[#93D0F3]"></div>
          <div className="px-5 pt-5">
            <div className="relative flex w-full gap-3">
              <div className="relative w-1/2">
                <h1 className="absolute w-full truncate text-[15px] font-medium">
                  {pri === undefined
                    ? "[Patient Name]"
                    : pri?.data[0]?.patient_firstName + "'s"}{" "}
                  Due Medication
                </h1>
                <div className="flex h-full w-full items-center justify-center">
                  <DoughnutChart
                    total={totalPatientDue}
                    totalDone={totalPatientDone}
                  />
                </div>
              </div>
              <div className="w-[1px] bg-[#DDDDDD]"></div>
              <div className="relative w-1/2">
                <h1 className="absolute text-[15px] font-medium">
                  Total Due Meds of All Patients
                </h1>
                <div className="flex h-full w-full items-center justify-center">
                  <DoughnutChart
                    total={totalDueMedication}
                    totalDone={totalDone}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBPatientSummary;
