"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navlinks } from "../constants/index";
import { twMerge } from "tailwind-merge";

export default function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className="header">
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
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="sm:hidden">
          <Image src="/shared/nav/menu.svg" width={28} height={17} alt="" />
        </button>

        <Link href="/" className="link-btn hidden sm:block">
          Schedule a Demo
        </Link>
      </nav>
    </header>
  );
}
