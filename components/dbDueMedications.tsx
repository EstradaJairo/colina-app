'use client';
import { onNavigate } from "@/actions/navigation";
import { fetchDueMedication } from "@/app/api/medication-logs-api/due-medication-api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useToast } from "./ui/use-toast";
import Image from "next/image";

const DBDueMedication = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dueMedSortBy, setDueMedSortBy] = useState(
    "medicationlogs.medicationLogsTime"
  );
  const [sortOrder, setSortOrder] = useState("ASC");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoading2, setIsLoading2] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [dueMedicationList, setDueMedicationList] = useState<
    {
      patient_uuid: string;
      medicationlogs_medicationLogsName: string;
      patient_firstName: string;
      patient_lastName: string;
      patient_middleName: string;
      medicationlogs_medicationLogsDate: string;
      medicationlogs_medicationLogsTime: string;
    }[]
  >([]);
  const [dueMedTotalPages, setDueMedTotalPages] = useState(0);
  const [totalDueMedication, setTotalDueMedication] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dueMedicationList = await fetchDueMedication(
          term,
          currentPage,
          dueMedSortBy,
          sortOrder as "ASC" | "DESC",
          router
        );

        // Filter data by distinct medicationLogsName for each patient
        const filteredData = dueMedicationList.data.reduce(
          (
            acc: { [key: string]: any },
            currentItem: {
              patient_uuid: string;
              medicationlogs_medicationLogsName: string;
            }
          ) => {
            const key = `${currentItem.patient_uuid}-${currentItem.medicationlogs_medicationLogsName}`;
            if (!acc[key]) {
              acc[key] = currentItem;
            }
            return acc;
          },
          {}
        );

        const filteredArray: {
          patient_uuid: string;
          medicationlogs_medicationLogsName: string;
          patient_firstName: string;
          patient_lastName: string;
          patient_middleName: string;
          medicationlogs_medicationLogsDate: string;
          medicationlogs_medicationLogsTime: string;
        }[] = Object.values(filteredData);
        const limitedArray = filteredArray.slice(0, 5);

        setDueMedicationList(limitedArray);
        setDueMedTotalPages(dueMedicationList.totalPages);
        setTotalDueMedication(dueMedicationList.totalCount);
        setIsLoading(false);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, [currentPage]);

  const formatTime = (timeString: string) => {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(":").map(Number);

    // Format the hours part into 12-hour format
    let formattedHours = hours % 12 || 12; // Convert 0 to 12
    const ampm = hours < 12 ? "am" : "pm"; // Determine if it's AM or PM

    // If minutes is undefined or null, set it to 0
    const formattedMinutes =
      minutes !== undefined ? minutes.toString().padStart(2, "0") : "00";

    // Return the formatted time string
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };
  const formatDate = (dateOfSurgery: string | number | Date) => {
    // Create a new Date object from the provided createdAt date string
    const date = new Date(dateOfSurgery);

    // Get the month, day, and year
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };

  return (
    <div className="w-[621px]  border-[1px] border-[#E4E4E7] py-3 select-none px-[40px]">
      <div className="">
        <p className="p-title pt-2">
          Due Medication
          <span>{dueMedicationList.length > 1 ? "s" : ""}</span>
        </p>
        <p className="font-normal text-[15px] text-[#71717A] pt-3 mb-3">
          Total of {totalDueMedication} due medication
          <span>{dueMedicationList.length > 1 ? "s" : ""}</span>
        </p>
      </div>
      {dueMedicationList.length > 0 ? (
        <div>
          {dueMedicationList.map((dueMedication, index) => (
            <div
              key={index}
              className="w-full flex flex-row h-[75px] mb-1 hover:bg-slate-100 cursor-pointer"
            >
              <div className="flex w-1/6 items-center ">
                <Image
                  className="rounded-full"
                  src="/imgs/drake.png"
                  width={58}
                  height={58}
                  alt="picture"
                />
              </div>
              <div className="flex w-4/6">
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-bold text-[15px] truncate hover:text-wrap">
                    {dueMedication.patient_firstName}{" "}
                    {dueMedication.patient_middleName}{" "}
                    {dueMedication.patient_lastName}
                  </p>
                  <p className="text-[#71717A] font-normal text-[15px]">
                    {dueMedication.medicationlogs_medicationLogsName}
                  </p>
                </div>
              </div>
              <div className="w-1/6  flex flex-col justify-center items-start gap-1">
                <p className="font-semibold text-[15px] flex">
                  {dueMedication.medicationlogs_medicationLogsDate}
                </p>
                <p className="text-[#71717A] font-medium text-[15px] ml-4">
                  {formatTime(dueMedication.medicationlogs_medicationLogsTime)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center text-center justify-center font-normal text-[15px] w-full h-full -mt-10">
          No Due Medication/s
          <br />
        </div>
      )}

      <div
        onClick={() => {
          setIsLoading(true);
          onNavigate(router, "/due-medications");
        }}
        className="group flex w-fit cursor-pointer items-center hover:text-[#007C85] font-semibold text-[15px] text-[#71717A] py-[40px]"
      >
        SEE ALL DUE
        <svg
          className="text-[#71717A] ml-2 group-hover:text-[#007C85]"
          width="17"
          height="14"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.14795 2.15826L8.7739 8.78421L2.14795 15.4102"
            stroke="currentColor"
            strokeWidth="2.43402"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default DBDueMedication;
