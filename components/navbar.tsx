"use client";
import { onNavigate } from "@/actions/navigation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import NavBarBropdown from "./shared/navbardropdown";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  // const [activeTab, setActiveTab] = useState(() => {
  //   const savedTab = localStorage.getItem("activeTab");
  //   return savedTab ? JSON.parse(savedTab) : 0;
  // });

  const handleTabClick = (url: string, isActive: boolean) => {
    setIsActive(isActive);
    onNavigate(router, url);
  };

  const routes = [
    {
      label: "Due Medications",
      url: "/due-medications",
    },
    {
      label: "Patients List",
      url: "/patient-list",
    },
    {
      label: "Appointments",
      url: "/appointments",
    },
    {
      label: "Chart",
      url: "/chart",
    },
  ];

  const [OpenProfile, setOpenProfile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const savedTab = localStorage.getItem("activeTab");
  //   if (savedTab) {
  //     setActiveTab(JSON.parse(savedTab));
  //   }
  // }, [activeTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bg-[#007C85] w-full h-[70px] flex items-center justify-between px-[145px] z-10">
      <Image src={"/imgs/colina-logo.png"} alt={""} width={200} height={37} />
      <div className="flex gap-[30px] items-center">
        <div className="flex gap-[40px] items-end">
          {routes.map((route, index) => (
            <div
              className={`cursor-pointer text-white relative`}
              onClick={() => handleTabClick(route.url, !isActive)}
              key={index}
            >
              <p className="">{route.label}</p>
              {pathname === route.url && (
                <p
                  className={`${"border-b-[3px] border-[#ffffff] w-full absolute bottom-[-20px]"}`}
                ></p>
              )}

              {/* <span
                className={`${
                  pathname === route.url
                    ? "border-b-[3px] border-[#ffffff] "
                    : ""
                }`}
              ></span> */}
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <Image src={"/imgs/admin 1.png"} alt={""} width={30} height={30} />
          <Image
            className="cursor-pointer select-none"
            onClick={() => setOpenProfile((prev) => !prev)}
            src={"/svgs/arrow-down.svg"}
            alt={""}
            width={15}
            height={15}
          />
          {OpenProfile && <NavBarBropdown ref={menuRef} />}
        </div>
      </div>
    </div>
  );
};
