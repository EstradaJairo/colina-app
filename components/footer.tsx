import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between h-[40px] bg-[#FAFAFA] lg:px-[150px] md:px-0 text-[12px] font-semibold min-h-[40px]">
      <div className=" cursor-pointer text-[#191D2399]">
        Powered by Jairosoft Inc.
      </div>
      <div className="">© All Copyright 2024 ColinaHealth </div>
      <div className="flex gap-2 text-[#191D2399]">
        <p className="cursor-pointer">Terms of Use</p>
        <span>|</span>
        <span className="cursor-pointer">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
