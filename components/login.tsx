import Image from "next/image";
import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen relative">
      <div className=" w-[963.34px] h-full relative">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <img src="Bimage.png" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div className="flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-lg-500px p-10">
            <form
              className="w-100"
              id="kt_sign_in_form"
              data-kt-redirect-url="index.html"
              action="#"
            >
              <div className="mb-10 flex justify-center items-center">
                <div className="text-[#007C85] fw-thin text-[30px]">
                  Sign in
                </div>
              </div>

              <div className="fv-row mb-8">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control bg-body-secondary rounded-0"
                />
              </div>

              <div className="fv-row mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control bg-body-secondary rounded-0"
                />
              </div>

              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-md">Remember me</span>
                </div>
                <Link href="/forgot-password" className="text-[#071437] text-md no-underline hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Link href="/patient-list">
                <button
                  type="submit"
                  id="kt_sign_in_submit"
                  className=" p-5 text-teal-50 hover:bg-[#78e0e7] w-full h-full flex flex-col justify-center items-center bg-[#007C85]"
                >
                  <span className=" flex-col indicator-label ho">Sign In</span>

                  <span className="indicator-progress">
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login; 