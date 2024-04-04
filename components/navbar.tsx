 "use client"
import { onNavigate } from "@/actions/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBarBropdown from "./shared/navbardropdown";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? JSON.parse(savedTab) : 0;
  });

  const handleTabClick = (url: string, tabIndex: number) => {
    setActiveTab(tabIndex);
    localStorage.setItem("activeTab", JSON.stringify(tabIndex));
    router.push(url);
  };

  const routes = [
    {
      label: "Due Medications",
      url: "/patient-list",
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
      url: "/patient-list",
    },
  ];

  const [OpenProfile, setOpenProfile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(JSON.parse(savedTab));
    }
  }, [activeTab]);

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
    <div className="fixed bg-[#007C85] w-full h-[70px] flex items-center justify-between px-[150px] z-10">
      <Image src={"/imgs/colina-logo.png"} alt={""} width={200} height={37} />
      <div className="flex gap-[30px] items-center">
        <div className="flex gap-[40px]">
          {routes.map((route, index) => (
           <p
           className={`cursor-pointer text-white h-[27px] relative`}
           onClick={() => handleTabClick(route.url, index)}
           key={index}
         >
           <span className="relative">
             {route.label}
             <span
               className={`absolute top-10 left-0 w-full ${
                 activeTab === index ? 'border-b-[3px] border-[#ffffff] '  : ''
               }`}
               style={{ content: "''" }}
             ></span>
           </span>
         </p>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src={"/imgs/admin 1.png"}
            alt={""}
            width={30}
            height={30}
          />
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
