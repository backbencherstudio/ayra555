"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import logo from "@/public/images/baby-grow.png";
import Image from "next/image";

const navRows = [
  [
    { label: "Home", href: "/", bg: "bg-[#A6F8EC]" },
    { label: "Nursery Vision", href: "/nursery-vision", bg: "bg-[#FCAACB]" },
    { label: "Life at Nursery", href: "/life-at-nursery", bg: "bg-[#B6F9B2]" },
  ],
  [
    { label: "Curriculum", href: "/curriculum", bg: "bg-[#E3B6F9]" },
    { label: "Contact Us", href: "/contact-us", bg: "bg-[#A6F8EC]" },
  ],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 👇 Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="w-full py-6 px-2 md:px-0 font-['Quicksand','Comic Sans MS',cursive,sans-serif] ">
      <div className="flex items-start md:items-center justify-start md:justify-center w-full">
        {/* Logo and text */}
        <div className="flex flex-col items-center min-w-[260px] md:min-w-[320px] mr-8">
          <Image
            src={logo}
            alt="Futures Nursery Logo"
            width={200}
            height={200}
            className="mb-2"
            priority
          />
          {/* <div className="text-center mt-2">
            <div
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ letterSpacing: "1px" }}
            >
              FUTURES
              <br />
              NURSERY
            </div>
            <div className="text-xs md:text-sm mt-2 italic tracking-wide">
              THINK BIG FOR YOUR LITTLE ONE.
            </div>
          </div> */}
        </div>
        {/* Navigation links */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-6 mt-4 md:mt-0">
            {navRows.map((row, i) => (
              <div key={i} className="flex flex-row space-x-8 justify-center">
                {row.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-8 py-2 md:px-10 md:py-3 rounded-full text-lg md:text-2xl font-medium shadow-sm transition-colors ${link.bg}`}
                    style={{
                      fontFamily:
                        "'Quicksand','Comic Sans MS',cursive,sans-serif",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
