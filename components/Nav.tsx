"use client";

import { twMerge } from "tailwind-merge";
import { Navlinks } from "../constants/index";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="header relative">
      <Image
        src="/shared/circle.svg"
        width={100}
        height={100}
        className="absolute left-1/2 top-[-180px] -z-10 w-full max-w-[715px] -translate-x-1/2 transform xs:top-[-240px] sm:top-[-380px] md:max-w-[780px] lg:left-auto lg:right-0 lg:-translate-x-0"
        alt=""
      />

      <nav className="flex justify-between">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-6 md:gap-12">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="sm:h-[40px] sm:w-[140px]"
              width={165}
              height={46}
              alt="PayAPI"
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden gap-6 sm:flex sm:justify-between">
            {Navlinks.map((link) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={twMerge(
                    `font-bold text-dark-grey/70 ${
                      isActive && "text-dark-grey"
                    }`,
                  )}
                >
                  <Link className="text-[15px] lg:text-base" href={link.route}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side navigation only for mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="none" size="none" className="sm:hidden">
              <Image src="/shared/nav/menu.svg" width={28} height={17} alt="" />
            </Button>
          </SheetTrigger>

          <SheetContent className="border-none bg-[#1c2731]">
            <SheetHeader className="flex flex-col gap-16">
              <SheetTitle className="self-end">
                <SheetClose asChild>
                  <FaTimes className="h-[30px] w-[20px] text-white" />
                </SheetClose>
              </SheetTitle>

              <ul className="flex flex-col gap-6 text-center">
                {Navlinks.map((link) => {
                  const isActive =
                    (pathname.includes(link.route) && link.route.length > 1) ||
                    pathname === link.route;

                  return (
                    <li
                      key={link.label}
                      className={`font-bold ${twMerge(
                        ` text-light-grey/70 ${isActive && "text-white"}`,
                      )}`}
                    >
                      <SheetClose asChild>
                        <Link className="text-[20px]" href={link.route}>
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}

                <li className="self-center">
                  <SheetClose asChild>
                    <Link href="/" className="link-btn mt-4">
                      Schedule a Demo
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Link href="/" className="link-btn hidden sm:block">
          Schedule a Demo
        </Link>
      </nav>
    </header>
  );
}
