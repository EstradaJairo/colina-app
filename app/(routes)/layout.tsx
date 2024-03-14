"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = Cookies.get("accessToken");
      const publicPaths = ["/"];
      console.log(accessToken);
      if (!accessToken) {
        router.push("/");
      }
    };

    checkAuth();
    return () => {};
  }, [router]);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}