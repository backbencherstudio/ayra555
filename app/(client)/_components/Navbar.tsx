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
    <nav className="w-full py-4 px-2 md:px-0 font-['Quicksand','Comic Sans MS',cursive,sans-serif] ">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Logo and text */}
        <div className="flex flex-col items-center min-w-[120px] md:min-w-[200px] mr-2 md:mr-8">
          <Image
            src={logo}
            alt="Futures Nursery Logo"
            width={100}
            height={100}
            className="mb-2 md:w-[200px] md:h-[200px] w-[100px] h-[100px] navbar-xs-logo"
            priority
          />
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <div className="flex flex-col space-y-6 mt-4 md:mt-0">
            {navRows.map((row, i) => (
              <div key={i} className="flex flex-row space-x-8 justify-center">
                {row.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-8 py-2 md:px-10 md:py-3 rounded-full text-lg md:text-2xl font-medium shadow-sm transition-colors ${link.bg} navbar-xs-link`}
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
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-[90PX] right-4 z-50 w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4 md:hidden animate-fade-in navbar-xs-dropdown"
          >
            {navRows.flat().map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block w-full text-center px-6 py-3 rounded-full text-lg font-medium shadow-sm transition-colors ${link.bg} navbar-xs-link`}
                style={{
                  fontFamily: "'Quicksand','Comic Sans MS',cursive,sans-serif",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
