'use client'
import Cookies from "js-cookie";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  useEffect(() => {
    const checkAuth = () => {
      const accessToken = Cookies.get("accessToken");
      const publicPaths = ["/"];
      console.log(accessToken);
      if (accessToken) {
        router.push("/patient-list");
      }
    };

    checkAuth();
    return () => {};
  }, [router]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setLoginFailed(true);
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log(data.accessToken);
      document.cookie = `accessToken=${data.accessToken};path=/;`;
      // Redirect to patient-list page upon successful login
      router.push("/patient-list");
    } catch (error) {
      setError("Invalid email or password");
      setLoginFailed(true);
    }
    setTimeout(() => {
      setLoginFailed(false);
      setError("");
    }, 2000);
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen relative">
      <div className=" w-[963.34px] h-full relative">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <img src="/img/Bimage.png" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div className="flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-lg-500px p-10">
            <form
              className="w-100"
              id="kt_sign_in_form"
              data-kt-redirect-url="index.html"

            >
              <div className="mb-10 flex">
                <div className=" fw-medium text-[20px] text-[#007C85]">
                  Sign in to your account
                </div>
              </div>

              <div className="fv-row mb-8">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control bg-body-secondary rounded-0"
                  value={email}
                  onChange={(e) => setEmail(e?.target.value)}

                />
              </div>

              <div className="fv-row mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control bg-body-secondary rounded-0"
                  value={password}
                  onChange={(e) => setPassword(e?.target.value)}
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

                <button
                  onClick={handleSubmit}
                  id="kt_sign_in_submit"
                  className=" p-5 text-teal-50 hover:bg-[#78e0e7] w-full h-full flex flex-col justify-center items-center bg-[#007C85]"
                >
                  <span className=" flex-col indicator-label ho">Sign In</span>

                  <span className="indicator-progress">
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
