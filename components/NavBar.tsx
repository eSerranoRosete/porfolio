"use client";

import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

const NavBar = () => {
  return (
    <header className="absolute top-0 z-50 w-full">
      <nav className="container m-auto flex items-center justify-between p-10 text-white">
        <Link
          href="/"
          className="md:text-base flex w-fit items-center text-sm font-semibold xs:text-lg "
        >
          <img
            src="/inteminer-icon.svg"
            alt="Inteminer Icon"
            className="mr-2 w-4"
          />
          EDUARDO SERRANO
        </Link>
        <ul className="lg:flex hidden items-center space-x-6 text-sm">
          <li className="opacity-70 hover:opacity-100">
            <Link href="https://twitter.com/eserrano_r" target="_blank">
              Twitter
            </Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link
              href="https://www.linkedin.com/in/eduardo-serrano-46071a19b/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link href="https://github.com/eSerranoRosete" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://inteminer.vercel.app/633519f1042a8c450319d886"
              className="cursor-pointer rounded-md border border-white px-6 py-2 opacity-70 hover:opacity-100"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
