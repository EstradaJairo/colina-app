"use client";
import { selectPatient } from "@/app/api/patients-api/patientSelect.api";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import {
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandItem,
} from "cmdk";
import { Command, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const SelectPatient = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [patientId, setPatientId] = React.useState("");
  const [patientList, setPatientList] = useState([
    {
      uuid: "",
      lastName: "",
      firstName: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await selectPatient(router);
        setPatientList(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between mb-5 h-12 rounded-md shadow-sm"
          >
            {patientId
              ? patientList.find(
                  (patientList) => patientList.uuid === patientId
                )?.lastName
                ? `${
                    patientList.find(
                      (patientList) => patientList.uuid === patientId
                    )?.lastName
                  }, ${
                    patientList.find(
                      (patientList) => patientList.uuid === patientId
                    )?.firstName
                  }`
                : patientList.find(
                    (patientList) => patientList.uuid === patientId
                  )?.lastName
              : "Select patient..."}
            <Image
              src="/icons/arrow-down-gray.svg"
              width={15}
              height={15}
              alt="arrow-down"
              className={`${
                open ? "rotate-180" : ""
              } ml-2 h-4 w-4 shrink-0 opacity-50 transition duration-300`}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[458px] p-0 overflow-y-auto">
          <Command
            className="w-full"
            onClick={() => {
            //   setError("");
            }}
          >
            <CommandInput placeholder="Search patient..." />
            <CommandEmpty>No patient found.</CommandEmpty>
            <CommandGroup>
              <CommandList className=" z-[9999] ">
                {patientList.map((patient) => (
                  <CommandItem
                    key={patient.uuid}
                    onSelect={(currentUuid) => {
                      setPatientId(
                        patient.uuid === patientId ? "" : patient.uuid
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        patientId === patient.uuid ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {patient.lastName}, {patient.firstName}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SelectPatient;
