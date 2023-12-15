import Link from "next/link";
import Image from "next/image";
import { Navlinks } from "../constants/index";

export default function Nav() {
  return (
    <header className="header">
      <nav className="flex-between">
        <div className="sm:flex-between sm:items-center sm:gap-6 md:gap-12">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="sm:h-[40px] sm:w-[140px]"
              width={165}
              height={46}
              alt="PayAPI"
            />
          </Link>

          <ul className="sm:flex-between hidden gap-6">
            {Navlinks.map((link) => (
              <li key={link.label} className="font-bold text-dark-grey">
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
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
