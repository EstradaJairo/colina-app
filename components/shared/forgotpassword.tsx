"use client";

import { onNavigate } from "@/actions/navigation";
import { useRouter } from "next/navigation";

export const ForgotPassword = () => {
  const router = useRouter();
  return (
    <div>
      <section>
        <div className="grid gap-0 md:h-screen md:grid-cols-2">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/imgs/Bimage.png"
              alt="Your Image"
              className="w-full md:h-screen object-cover"
            />
          </div>
          {/* Header text*/}
          <div className="flex mt-40 justify-center md:px-5 md:py-10 lg:py-32 ">
            <div className="w-[542.27px] text-left">
              <h1 className="mb-4 text-1xl font-medium flex justify-center md:mb-10 text-[25px] lg:mb-4 text-[#071437]">
                Forgot you Password?
              </h1>
              {/* subtext*/}
              <h2 className="mb-4 text-[17px] font-medium flex justify-center text-[#071437]">
                Enter your new password below, we're just being extra safe.
              </h2>
              {/* Inputs*/}
              <div className="mx-auto mb-4 max-w-[800px] pb-4">
                <div className="relative">
                  <input
                    type="password"
                    className="mb-6 h-10 w-full bg-opacity-30 bg-[#D9D9D9] px-3 py-6 pl-5 text-sm text-[#333333]"
                    placeholder=" input new password"
                  />
                  <input
                    type="password"
                    className="mb-4 h-10 w-full bg-opacity-30 bg-[#D9D9D9] px-3 py-6 pl-5 text-sm text-[#333333]"
                    placeholder="input confirm new password"
                  />
                </div>
              </div>
              {/* button*/}
              <div
                className="inline-block w-full cursor-pointer items-center bg-[#007C85] 
                      px-6 py-3 text-center font-normal text-[23px] text-white hover:bg-[#0E646A] transition duration-300 ease-in-out"
              >
                Reset Password
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
