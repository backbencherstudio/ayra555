'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const NavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Nursery Vision", href: "/nursery-vision" },
  { label: "Life at Nursery", href: "/life-at-nursery" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const getNavbarBackground = () => {
    switch (pathname) {
      case "/nursery-vision":
        return "bg-[rgba(218,250,220,0.20)]";
      case "/life-at-nursery":
        return "bg-[rgba(255,216,169,0.20)]";
      default:
        return "bg-[rgba(255,255,255,0.20)]";
    }
  };

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
    <nav className="pt-6 px-1.5 md:px-0">
      <div
        ref={menuRef}
        className={`container border border-[#FFF] rounded-2xl ${getNavbarBackground()}`}
      >
        <div className="flex justify-between items-center h-16 px-4">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${pathname === link.href
                    ? "text-pink-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Registration Button */}
          <div>
            <Link
              href="/contact-us"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Registration
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 border-t border-gray-200">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // 👈 close menu on click
                className={`block py-2 ${pathname === link.href
                    ? "text-pink-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
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
