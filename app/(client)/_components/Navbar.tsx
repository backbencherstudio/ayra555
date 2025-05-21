import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  label: string;
  href: string;
}

const NavLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Nursery Vision",
    href: "/nursery-vision",
  },
  {
    label: "Life at Nursery",
    href: "/life-at-nursery",
  },
  {
    label: "Curriculum",
    href: "/curriculum",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="pt-6">
      <div className="container border border-[#FFF] rounded-2xl bg-[rgba(255,255,255,0.20)]">
        <div className="flex justify-between items-center h-16 px-2">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
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
              href="/registration"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

