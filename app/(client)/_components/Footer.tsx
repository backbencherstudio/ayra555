import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BabyGrow from '@/public/images/baby-grow.png'
import { Separator } from '@/components/ui/separator';

interface QuickLink {
  label: string;
  href: string;
}

const QuickLinks: QuickLink[] = [
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

export default function Footer() {
  return (
    <footer className="bg-[#7CC466] mt-20 py-8 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[140px]">
          {/* Quote Section */}
          <div className="space-y-4 w-full md:w-[50%]">
            <h3 className="text-xl md:text-[32px] font-normal text-white leading-normal md:leading-11">
              A baby is the beginning of everything-hope, dreams and endless love.
            </h3>
          </div>

          {/* Quick Links */}
          <div className='w-full md:w-[30%]'>
            <h4 className="text-lg font-normal text-white mb-4 leading-[30px]">Quick Links</h4>
            <ul className="space-y-2">
              {QuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:underline text-sm leading-5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center md:justify-end w-full md:w-[20%]">
            <div className="w-[120px] h-[120px] md:w-[163px] md:h-[163px] relative">
              <Image
                src={BabyGrow}
                alt="Baby Grow Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20 h-[1px]" />

        {/* Copyright */}
        <div className="text-center text-white">
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
