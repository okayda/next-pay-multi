"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navlinks } from "../constants/index";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="absolute bottom-0 left-0 w-full bg-shade-grey">
      <div className="relative overflow-hidden">
        <Image
          src="/shared/circle.svg"
          width={100}
          height={100}
          className="absolute bottom-[-140px] left-1/2 w-full max-w-[645px] -translate-x-1/2 transform xs:bottom-[-240px] sm:bottom-[-380px] lg:right-0 lg:-translate-x-0"
          alt=""
        />

        <nav className="relative z-10 mx-auto flex max-w-[445px] flex-col items-center gap-8 px-4 py-8 sm:max-w-xxl sm:flex-row sm:justify-between lg:px-8">
          <div className="flex flex-col gap-7 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <Link href="/">
              <Image
                src="/logo.svg"
                className="brightness-[1000%] sm:h-[40px] sm:w-[140px]"
                width={165}
                height={46}
                alt="PayAPI"
              />
            </Link>

            <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              {Navlinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

                return (
                  <li
                    key={link.label}
                    className={twMerge(
                      `font-bold text-white/70 ${isActive && "text-white"}`,
                    )}
                  >
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-5 text-white">
            <FaFacebookSquare className="h-[24px] w-[24px]" />
            <FaSquareXTwitter className="h-[24px] w-[24px]" />
            <FaLinkedin className="h-[24px] w-[24px]" />
          </div>
        </nav>
      </div>
    </footer>
  );
}
