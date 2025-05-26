'use client'

import React from "react";
import Navbar from "./_components/Navbar";
// import Footer from "./_components/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "bg-gradient-to-b from-[#FBC4D0] to-[#FEE8ED]";
      case "/nursery-vision":
        return "bg-gradient-to-b from-[#DAFADC] to-[#FFFFFF]";
      case "/life-at-nursery":
        return "bg-gradient-to-b from-[#FFFBC4] to-[#FFFFFF]";
      case "/contact-us":
        return "bg-gradient-to-b from-[#FffFB5] to-[#FEE8ED]";
      default:
        return "bg-gradient-to-b from-[#FFECD3] to-[#FFFFFF]";
    }
  };

  return (
    <div className={getBackgroundColor()}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}