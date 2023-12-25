import Link from "next/link";
import Image from "next/image";
import { Navlinks } from "../constants/index";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-shade-grey">
      <nav className="mx-auto flex max-w-[445px] flex-col items-center gap-8 px-4 py-8 sm:max-w-xxl sm:flex-row sm:justify-between lg:px-8">
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
            {Navlinks.map((link) => (
              <li key={link.label} className="font-bold text-white opacity-70">
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5 text-white">
          <FaFacebookSquare className="h-[24px] w-[24px]" />
          <FaSquareXTwitter className="h-[24px] w-[24px]" />
          <FaLinkedin className="h-[24px] w-[24px]" />
        </div>
      </nav>
    </footer>
  );
}
