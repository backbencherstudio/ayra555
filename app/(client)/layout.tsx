'use client'

import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
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
        return "bg-gradient-to-b from-[#FFD8A9] to-[#FFFFFF]";
      default:
        return "bg-gradient-to-b from-[#FBC4D0] to-[#FEE8ED]";
    }
  };

  return (
    <div className={getBackgroundColor()}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}