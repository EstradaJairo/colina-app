"use client";

import { onNavigate } from "@/actions/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBarBropdown from "./shared/navbardropdown";
import { useEffect, useRef, useState } from "react";
import NavDropdownMenu from "./shared/navbardropdown";

export const Navbar = () => {
  const router = useRouter();

  const routes = [
    {
      label: "Patients List",
      url: "/patient-list",
    },
    {
      label: "Appointments",
      url: "/appointments",
    },
  ];

  const [OpenProfile, setOpenProfile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed bg-[#007C85] w-full h-[70px] flex items-center justify-between px-[105px] z-5">
      <Image
        className="select-none"
        src={"/imgs/colina-logo.png"}
        alt={""}
        width={200}
        height={37}
      />
      <div className="flex gap-[20px] items-center">
        <div className="flex gap-[20px]">
          {routes.map((route, index) => (
            <p
              className="cursor-pointer text-white"
              onClick={() => onNavigate(router, route.url)}
              key={index}
            >
              {route.label}
            </p>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <div
            ref={menuRef}
            className="flex gap-3 items-center"
            onClick={() => setOpenProfile(!OpenProfile)}
          >
            <Image
              className="select-none"
              src={"/imgs/admin 1.png"}
              alt={""}
              width={30}
              height={30}
            />
            <img className="select-none" src="/svgs/arrow-down.svg" alt="" />
          </div>
          <NavDropdownMenu open={OpenProfile} />
        </div>
      </div>
    </div>
  );
};
