"use client";
import { onNavigate } from "@/actions/navigation";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface NavDropdownMenuProps {
  open: boolean;
}

const NavDropdownMenu = ({ open }: NavDropdownMenuProps) => {
  return (
    <>
      {open && (
        <div className="flex flex-col dropdowncss shadow-lg select-none z-10 ">
          <ul className="flex flex-col">
            <li className="flex">
              <div className="flex flex-col">
                <h1 className="pl-3 font-bold ">ADMIN</h1>
                <div className="pl-3">alexdramos@gmail.com</div>
              </div>
            </li>
            <hr className="my-3" />
            <li className=" rounded-[5px] hover:text-[#83C5CA] cursor-pointer pl-2 mb-4">
              Language
            </li>
            <li className=" rounded-[5px] hover:text-[#83C5CA] cursor-pointer pl-2 mb-4">
              Acount Settings
            </li>
            <li className=" rounded-[5px] hover:text-[#83C5CA] cursor-pointer pl-2 mb-4">
              Sign Out
            </li>
          </ul>
        </div>
      )}{" "}
    </>
  );
};

export default NavDropdownMenu;
